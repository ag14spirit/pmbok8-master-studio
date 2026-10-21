import fs from 'fs';

// Read all data modules
const curriculum = fs.readFileSync('./js/data/curriculum.js', 'utf-8').replace('export const curriculum =', 'const curriculum =');
const processes = fs.readFileSync('./js/data/processes.js', 'utf-8').replace('export const processes =', 'const processes =');
const principles = fs.readFileSync('./js/data/principles.js', 'utf-8').replace('export const principles =', 'const principles =');
const focusAreas = fs.readFileSync('./js/data/focusAreas.js', 'utf-8').replace('export const focusAreas =', 'const focusAreas =');
const domains = fs.readFileSync('./js/data/domains.js', 'utf-8').replace('export const performanceDomains =', 'const performanceDomains =');
const tools = fs.readFileSync('./js/data/tools.js', 'utf-8').replace('export const toolsAndTechniques =', 'const toolsAndTechniques =');
const appendices = fs.readFileSync('./js/data/appendices.js', 'utf-8').replace('export const appendices =', 'const appendices =');
const glossary = fs.readFileSync('./js/data/glossary.js', 'utf-8').replace('export const glossary =', 'const glossary =');
const questions = fs.readFileSync('./js/data/questions.js', 'utf-8').replace('export const questions =', 'const questions =');

// Audio engine
const audio = fs.readFileSync('./js/audio.js', 'utf-8')
  .replace('export const audio = new AudioManager();', 'const audio = new AudioManager();');

// Coolors Generator
const generator = fs.readFileSync('./js/coolors-generator.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function getContrastColor', 'function getContrastColor')
  .replace('export function generateShades', 'function generateShades')
  .replace('export class CoolorsGenerator', 'class CoolorsGenerator')
  .replace('export function showToast', 'function showToast');

// Coolors Explore
const explore = fs.readFileSync('./js/coolors-explore.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export const CURATED_PALETTES =', 'const CURATED_PALETTES =')
  .replace('export function renderCoolorsExplore', 'function renderCoolorsExplore');

// Coolors Visualizer
const visualizer = fs.readFileSync('./js/coolors-visualizer.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderCoolorsVisualizer', 'function renderCoolorsVisualizer');

// Coolors EVM
const evm = fs.readFileSync('./js/coolors-evm.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderCoolorsEVM', 'function renderCoolorsEVM');

// Coolors Glossary
const glossView = fs.readFileSync('./js/coolors-glossary.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderCoolorsGlossary', 'function renderCoolorsGlossary');

// App main
const appMain = fs.readFileSync('./js/coolors-app.js', 'utf-8')
  .replace(/import .*/g, '');

const fullBundle = `
(function() {
  'use strict';
  ${curriculum}
  ${processes}
  ${principles}
  ${focusAreas}
  ${domains}
  ${tools}
  ${appendices}
  ${glossary}
  ${questions}

  ${audio}

  ${generator}
  ${explore}
  ${visualizer}
  ${evm}
  ${glossView}

  ${appMain}
})();
`;

fs.writeFileSync('./js/bundle-coolors.js', fullBundle, 'utf-8');
console.log('Coolors bundle created successfully! Size:', fullBundle.length, 'bytes');
