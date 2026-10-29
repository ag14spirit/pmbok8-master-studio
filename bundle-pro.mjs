import fs from 'fs';

// Usage: node bundle-pro.mjs [--locale es|en]
// es (default) -> js/bundle-pro.js, en -> js/bundle-pro.en.js
const localeFlag = process.argv.indexOf('--locale');
const LOCALE = localeFlag > -1 ? process.argv[localeFlag + 1] : 'es';
if (!['es', 'en'].includes(LOCALE)) throw new Error(`Unsupported locale: ${LOCALE}`);
const DATA_DIR = LOCALE === 'es' ? './js/data' : './js/data/en';
const OUT_FILE = LOCALE === 'es' ? './js/bundle-pro.js' : './js/bundle-pro.en.js';

// Read all data modules
const curriculum = fs.readFileSync(`${DATA_DIR}/curriculum.js`, 'utf-8').replace('export const curriculum =', 'const curriculum =');
const processes = fs.readFileSync(`${DATA_DIR}/processes.js`, 'utf-8').replace('export const processes =', 'const processes =');
const principles = fs.readFileSync(`${DATA_DIR}/principles.js`, 'utf-8').replace('export const principles =', 'const principles =');
const focusAreas = fs.readFileSync(`${DATA_DIR}/focusAreas.js`, 'utf-8').replace('export const focusAreas =', 'const focusAreas =');
const domains = fs.readFileSync(`${DATA_DIR}/domains.js`, 'utf-8').replace('export const performanceDomains =', 'const performanceDomains =');
const tools = fs.readFileSync(`${DATA_DIR}/tools.js`, 'utf-8').replace('export const toolsAndTechniques =', 'const toolsAndTechniques =');
const appendices = fs.readFileSync(`${DATA_DIR}/appendices.js`, 'utf-8').replace('export const appendices =', 'const appendices =');
const glossary = fs.readFileSync(`${DATA_DIR}/glossary.js`, 'utf-8').replace('export const glossary =', 'const glossary =');
const questions = fs.readFileSync(`${DATA_DIR}/questions.js`, 'utf-8').replace('export const questions =', 'const questions =');
const presentations = fs.readFileSync(`${DATA_DIR}/presentations.js`, 'utf-8').replace('export const presentationDecks =', 'const presentationDecks =');

// UI strings for the selected locale (always js/i18n/<locale>.js)
const i18nStrings = fs.readFileSync(`./js/i18n/${LOCALE}.js`, 'utf-8').replace('export const strings =', 'const strings =');
const i18nHelpers = fs.readFileSync('./js/i18n/index.js', 'utf-8').replace(/^export /gm, '');

// Audio & Icons
const audio = fs.readFileSync('./js/audio.js', 'utf-8')
  .replace('export const audio = new AudioManager();', 'const audio = new AudioManager();');

const icons = fs.readFileSync('./js/icons.js', 'utf-8')
  .replace('export const icons =', 'const icons =');

// Components
const learningHub = fs.readFileSync('./js/components/learningHub.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export class LearningHub', 'class LearningHub');

const matrixPro = fs.readFileSync('./js/components/processMatrixPro.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderProcessMatrixPro', 'function renderProcessMatrixPro');

const presentationsPro = fs.readFileSync('./js/components/presentationsPro.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderPresentationsPro', 'function renderPresentationsPro');

const evmPro = fs.readFileSync('./js/components/evmLabPro.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderEVMLabPro', 'function renderEVMLabPro');

const examPro = fs.readFileSync('./js/components/examSimulatorPro.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderExamSimulatorPro', 'function renderExamSimulatorPro');

const flashcardsPro = fs.readFileSync('./js/components/flashcardsPro.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderFlashcardsPro', 'function renderFlashcardsPro');

const appendicesPro = fs.readFileSync('./js/components/appendicesPro.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderAppendicesPro', 'function renderAppendicesPro');

const onboardingTour = fs.readFileSync('./js/components/onboardingTour.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export class OnboardingTour', 'class OnboardingTour');

const appSenior = fs.readFileSync('./js/app-senior.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function showSeniorToast', 'function showSeniorToast');

const fullBundle = `
(function() {
  'use strict';
  const LOCALE = '${LOCALE}';
  ${i18nStrings}
  ${i18nHelpers}

  ${curriculum}
  ${processes}
  ${principles}
  ${focusAreas}
  ${domains}
  ${tools}
  ${appendices}
  ${glossary}
  ${questions}
  ${presentations}

  ${icons}
  ${audio}

  ${learningHub}
  ${matrixPro}
  ${presentationsPro}
  ${evmPro}
  ${examPro}
  ${flashcardsPro}
  ${appendicesPro}
  ${onboardingTour}

  ${appSenior}
})();
`;

fs.writeFileSync(OUT_FILE, fullBundle, 'utf-8');
console.log(`${LOCALE} bundle created: ${OUT_FILE} (${fullBundle.length} bytes)`);
