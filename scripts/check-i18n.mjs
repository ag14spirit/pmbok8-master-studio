// Verifies the Spanish and English content stays in sync.
// Usage: node scripts/check-i18n.mjs   (exit code 1 on any problem)
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DATA_FILES = ['curriculum', 'processes', 'principles', 'focusAreas', 'domains', 'tools', 'appendices', 'glossary', 'questions', 'presentations'];
const ID_LIKE_KEYS = new Set(['id', 'number', 'unitId', 'lessonId', 'deckId', 'slideNumber', 'type', 'answerIndex', 'color', 'icon', 'timeMin', 'key']);
const SPANISH_MARKERS = /[¿¡ñáéíóú]|\b(el|la|los|las|de|del|que|y|para|con|por|una|un|en)\b/i;
// Strings that legitimately match Spanish markers or stay identical (proper nouns, acronyms, titles)
const ALLOWLIST = new Set(['PMBOK® 8', 'PMI', 'PMP®', 'CAPM®', 'ANSI/PMI 99-001-2025', 'EVM', 'EDT/WBS', 'WBS', 'ITTO']);

const problems = [];
const fail = (msg) => problems.push(msg);

const loadModule = async (dir, name, exportName) => {
  const file = path.join(ROOT, dir, `${name}.js`);
  if (!fs.existsSync(file)) return undefined;
  const mod = await import(pathToFileURL(file).href);
  return mod[exportName] ?? Object.values(mod)[0];
};

const EXPORTS = {
  curriculum: 'curriculum', processes: 'processes', principles: 'principles', focusAreas: 'focusAreas',
  domains: 'performanceDomains', tools: 'toolsAndTechniques', appendices: 'appendices', glossary: 'glossary',
  questions: 'questions', presentations: 'presentationDecks',
};

// Walk two values in parallel, collecting structural and translation problems
const compare = (es, en, where) => {
  if (Array.isArray(es)) {
    if (!Array.isArray(en)) return fail(`${where}: expected array in EN`);
    if (es.length !== en.length) return fail(`${where}: length ES ${es.length} vs EN ${en.length}`);
    es.forEach((item, i) => compare(item, en[i], `${where}[${i}]`));
    return;
  }
  if (es && typeof es === 'object') {
    if (!en || typeof en !== 'object') return fail(`${where}: expected object in EN`);
    const esKeys = Object.keys(es).sort().join(',');
    const enKeys = Object.keys(en).sort().join(',');
    if (esKeys !== enKeys) return fail(`${where}: key mismatch. ES-only: [${Object.keys(es).filter(k => !(k in en))}] EN-only: [${Object.keys(en).filter(k => !(k in es))}]`);
    for (const k of Object.keys(es)) compare(es[k], en[k], `${where}.${k}`);
    return;
  }
  const leaf = where.split(/[.[\]]+/).filter(Boolean).pop();
  if (ID_LIKE_KEYS.has(leaf)) {
    if (es !== en) fail(`${where}: non-text field differs (ES ${JSON.stringify(es)} vs EN ${JSON.stringify(en)})`);
    if (typeof en === 'string' && SPANISH_MARKERS.test(en)) fail(`${where}: EN looks Spanish: ${JSON.stringify(en)}`);
    return;
  }
  if (typeof es !== typeof en) return fail(`${where}: type ES ${typeof es} vs EN ${typeof en}`);
  if (typeof en === 'string') {
    if (en.trim() === '') return fail(`${where}: empty EN string`);
    if (SPANISH_MARKERS.test(en) && !ALLOWLIST.has(en)) fail(`${where}: EN looks Spanish: ${JSON.stringify(en.slice(0, 90))}`);
    if (en === es && !leaf.endsWith('En') && en.length > 25 && /\s/.test(en) && !ALLOWLIST.has(en)) fail(`${where}: EN identical to ES (untranslated?): ${JSON.stringify(en.slice(0, 90))}`);
  }
};

const checkData = async () => {
  for (const name of DATA_FILES) {
    const es = await loadModule('js/data', name, EXPORTS[name]);
    const en = await loadModule('js/data/en', name, EXPORTS[name]);
    if (!en) { fail(`js/data/en/${name}.js is missing`); continue; }
    compare(es, en, name);
  }
};

const flatten = (obj, prefix = '') => Object.entries(obj).flatMap(([k, v]) =>
  v && typeof v === 'object' ? flatten(v, `${prefix}${k}.`) : [`${prefix}${k}`]);

const checkKeys = async () => {
  const esStrings = (await loadModule('js/i18n', 'es', 'strings'));
  const enStrings = (await loadModule('js/i18n', 'en', 'strings'));
  if (!esStrings || !enStrings) return fail('js/i18n/{es,en}.js must both export `strings`');
  const esKeys = new Set(flatten(esStrings));
  const enKeys = new Set(flatten(enStrings));
  for (const k of esKeys) if (!enKeys.has(k)) fail(`i18n key missing in EN: ${k}`);
  for (const k of enKeys) if (!esKeys.has(k)) fail(`i18n key missing in ES: ${k}`);

  // Every t("...") call in source must exist in both dictionaries
  const sources = ['js/app-senior.js', ...fs.readdirSync(path.join(ROOT, 'js/components')).map(f => `js/components/${f}`), 'js/i18n/index.js'];
  for (const rel of sources) {
    const text = fs.readFileSync(path.join(ROOT, rel), 'utf-8');
    for (const [, key] of text.matchAll(/\bt\(\s*["']([\w.]+)["']/g)) {
      if (!esKeys.has(key)) fail(`${rel}: t("${key}") not found in dictionaries`);
    }
  }
  // Same placeholders in both languages
  for (const k of esKeys) {
    const get = (o) => k.split('.').reduce((n, p) => n?.[p], o);
    const esVars = [...String(get(esStrings) ?? '').matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join();
    const enVars = [...String(get(enStrings) ?? '').matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join();
    if (esVars !== enVars) fail(`i18n placeholders differ for ${k}: ES {${esVars}} EN {${enVars}}`);
  }
};

await checkData();
await checkKeys();

if (problems.length) {
  console.error(`check-i18n: ${problems.length} problem(s)`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('check-i18n: ok');
