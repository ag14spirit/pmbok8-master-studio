import { stateManager } from "./state.js";
import { audio } from "./audio.js";
import { renderSkillTree } from "./components/skillTree.js";
import { QuizEngine } from "./components/quizEngine.js";
import { renderProcessMatrix } from "./components/processMatrix.js";
import { renderEVMLab } from "./components/evmLab.js";
import { renderPMPSimulator } from "./components/pmpSimulator.js";
import { renderFlashcardsAndGlossary } from "./components/flashcardsGlossary.js";
import { renderAppendicesView } from "./components/appendicesView.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State & DOM bindings
  const lessonModal = document.getElementById("lesson-modal");
  const detailModal = document.getElementById("detail-modal");
  const quizEngine = new QuizEngine(lessonModal);

  // Stats header elements
  const heartsVal = document.getElementById("header-hearts-val");
  const streakVal = document.getElementById("header-streak-val");
  const xpVal = document.getElementById("header-xp-val");
  const themeToggle = document.getElementById("theme-toggle-btn");
  const soundToggle = document.getElementById("sound-toggle-btn");
  const refillHeartsBtn = document.getElementById("refill-hearts-btn");

  // Rank in side rail
  const rankTitle = document.getElementById("rail-rank-title");
  const rankLevel = document.getElementById("rail-rank-level");
  const rankXpFill = document.getElementById("rail-xp-fill");
  const rankXpText = document.getElementById("rail-xp-text");

  // Page Views
  const views = {
    learn: document.getElementById("view-learn"),
    matrix: document.getElementById("view-matrix"),
    evm: document.getElementById("view-evm"),
    simulator: document.getElementById("view-simulator"),
    flashcards: document.getElementById("view-flashcards"),
    appendices: document.getElementById("view-appendices")
  };

  const navItems = document.querySelectorAll(".nav-item");

  let currentView = "learn";

  // 2. State update subscription
  const updateHeaderStats = (state) => {
    if (heartsVal) heartsVal.textContent = state.hearts;
    if (streakVal) streakVal.textContent = state.streak;
    if (xpVal) xpVal.textContent = state.xp;

    const rank = stateManager.getRank();
    if (rankTitle) rankTitle.textContent = rank.title;
    if (rankLevel) rankLevel.textContent = `NIVEL ${rank.level}`;
    if (rankXpFill) rankXpFill.style.width = `${rank.progressPercent}%`;
    if (rankXpText) rankXpText.textContent = `${rank.currentXP} / ${rank.nextXP} XP`;

    // Apply theme
    document.documentElement.setAttribute("data-theme", state.theme);
    if (themeToggle) {
      themeToggle.textContent = state.theme === "dark" ? "☀️" : "🌙";
    }

    // Audio state
    audio.enabled = state.soundEnabled;
    if (soundToggle) {
      soundToggle.textContent = state.soundEnabled ? "🔊" : "🔇";
    }
  };

  stateManager.subscribe(updateHeaderStats);

  // 3. Navigation Switcher
  const switchView = (targetView) => {
    currentView = targetView;
    navItems.forEach(item => {
      item.classList.toggle("active", item.dataset.view === targetView);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.toggle("active", key === targetView);
      }
    });

    // Render active view
    if (targetView === "learn") {
      renderSkillTree(views.learn, (lesson, unit, part) => {
        quizEngine.startLesson(lesson, unit, part);
      });
    } else if (targetView === "matrix") {
      renderProcessMatrix(views.matrix, detailModal);
    } else if (targetView === "evm") {
      renderEVMLab(views.evm);
    } else if (targetView === "simulator") {
      renderPMPSimulator(views.simulator);
    } else if (targetView === "flashcards") {
      renderFlashcardsAndGlossary(views.flashcards);
    } else if (targetView === "appendices") {
      renderAppendicesView(views.appendices);
    }
  };

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      audio.playPop();
      switchView(item.dataset.view);
    });
  });

  // 4. Action buttons
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      audio.playPop();
      const newTheme = stateManager.state.theme === "dark" ? "light" : "dark";
      stateManager.state.theme = newTheme;
      stateManager.save();
    });
  }

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      const enabled = audio.toggle();
      stateManager.state.soundEnabled = enabled;
      stateManager.save();
    });
  }

  if (refillHeartsBtn) {
    refillHeartsBtn.addEventListener("click", () => {
      audio.playVictory();
      stateManager.refillHearts();
      alert("❤️ ¡Tus corazones han sido recargados a 5!");
    });
  }

  // 5. Initial Render
  switchView("learn");
  console.log("PMBOK 8th Edition Interactive Learning Platform Initialized Successfully!");
});
