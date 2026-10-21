import fs from 'fs';
import path from 'path';

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

// Read engines
const audio = fs.readFileSync('./js/audio.js', 'utf-8')
  .replace('export const audio = new AudioManager();', 'const audio = new AudioManager();');
const confetti = fs.readFileSync('./js/confetti.js', 'utf-8')
  .replace('export class ConfettiEngine', 'class ConfettiEngine')
  .replace('export const confetti = new ConfettiEngine();', 'const confetti = new ConfettiEngine();');
const state = fs.readFileSync('./js/state.js', 'utf-8')
  .replace('export const stateManager = new StateManager();', 'const stateManager = new StateManager();');

// Read components
const skillTree = fs.readFileSync('./js/components/skillTree.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderSkillTree', 'function renderSkillTree');
const quizEngine = fs.readFileSync('./js/components/quizEngine.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export class QuizEngine', 'class QuizEngine');
const processMatrix = fs.readFileSync('./js/components/processMatrix.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderProcessMatrix', 'function renderProcessMatrix');
const evmLab = fs.readFileSync('./js/components/evmLab.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderEVMLab', 'function renderEVMLab');
const pmpSim = fs.readFileSync('./js/components/pmpSimulator.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderPMPSimulator', 'function renderPMPSimulator');
const flashcards = fs.readFileSync('./js/components/flashcardsGlossary.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderFlashcardsAndGlossary', 'function renderFlashcardsAndGlossary');
const appView = fs.readFileSync('./js/components/appendicesView.js', 'utf-8')
  .replace(/import .*/g, '')
  .replace('export function renderAppendicesView', 'function renderAppendicesView');

const appMain = fs.readFileSync('./js/app.js', 'utf-8')
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
  ${confetti}
  ${state}

  ${skillTree}
  ${quizEngine}
  ${processMatrix}
  ${evmLab}
  ${pmpSim}
  ${flashcards}
  ${appView}

  ${appMain}
})();
`;

fs.writeFileSync('./js/bundle.js', fullBundle, 'utf-8');
console.log('Bundle created successfully in js/bundle.js! Size:', fullBundle.length, 'bytes');
