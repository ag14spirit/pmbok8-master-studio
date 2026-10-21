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
const presentations = fs.readFileSync('./js/data/presentations.js', 'utf-8').replace('export const presentationDecks =', 'const presentationDecks =');

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

fs.writeFileSync('./js/bundle-pro.js', fullBundle, 'utf-8');
console.log('Pro bundle created! Size:', fullBundle.length, 'bytes');
