import { LearningHub } from "./components/learningHub.js";
import { renderProcessMatrixPro } from "./components/processMatrixPro.js";
import { renderPresentationsPro } from "./components/presentationsPro.js";
import { renderEVMLabPro } from "./components/evmLabPro.js";
import { renderExamSimulatorPro } from "./components/examSimulatorPro.js";
import { renderFlashcardsPro } from "./components/flashcardsPro.js";
import { renderAppendicesPro } from "./components/appendicesPro.js";
import { OnboardingTour } from "./components/onboardingTour.js";
import { audio } from "./audio.js";
import { icons } from "./icons.js";
import { t } from "./i18n/index.js";

export function showSeniorToast(msg) {
  let toast = document.querySelector(".toast-pill-pro");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-pill-pro";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="display:flex;">${icons.check}</span> <span>${msg}</span>`;
  toast.classList.add("active");
  setTimeout(() => toast.classList.remove("active"), 2400);
}

document.addEventListener("DOMContentLoaded", () => {
  const views = {
    curriculum: document.getElementById("view-curriculum"),
    matrix: document.getElementById("view-matrix"),
    presentations: document.getElementById("view-presentations"),
    evm: document.getElementById("view-evm"),
    simulator: document.getElementById("view-simulator"),
    flashcards: document.getElementById("view-flashcards"),
    appendices: document.getElementById("view-appendices")
  };

  const navTabBtns = document.querySelectorAll(".nav-tab-btn[data-tab]");
  const modalBackdrop = document.getElementById("senior-modal-backdrop");
  const themeBtn = document.getElementById("theme-toggle-senior-btn");
  const soundBtn = document.getElementById("sound-toggle-senior-btn");
  const guideBtn = document.getElementById("platform-guide-btn");
  const headerProgBadge = document.getElementById("header-progress-text");

  // Localize static shell text (data-i18n attributes in index.html)
  document.title = t("shell.docTitle");
  document.documentElement.lang = LOCALE;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  let currentTab = "curriculum";

  // Tab switcher
  const switchTab = (tab) => {
    currentTab = tab;

    navTabBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.toggle("active", key === tab);
      }
    });

    if (tab === "curriculum") {
      learningHub.render();
    } else if (tab === "matrix") {
      renderProcessMatrixPro(views.matrix, modalBackdrop);
    } else if (tab === "presentations") {
      renderPresentationsPro(views.presentations, modalBackdrop);
    } else if (tab === "evm") {
      renderEVMLabPro(views.evm);
    } else if (tab === "simulator") {
      renderExamSimulatorPro(views.simulator);
    } else if (tab === "flashcards") {
      renderFlashcardsPro(views.flashcards);
    } else if (tab === "appendices") {
      renderAppendicesPro(views.appendices);
    }
  };

  const updateProgressHeader = (done, total) => {
    if (headerProgBadge) {
      const pct = Math.round((done / total) * 100);
      headerProgBadge.textContent = t("app.progressMastered", { pct });
    }
  };

  const learningHub = new LearningHub(views.curriculum, modalBackdrop, updateProgressHeader);

  // Initialize Onboarding Tour
  const tour = new OnboardingTour(modalBackdrop, (targetTab) => {
    switchTab(targetTab);
  });

  if (guideBtn) {
    guideBtn.onclick = () => {
      audio.playPop();
      tour.start();
    };
  }

  // Auto trigger tour on first visit
  const tourSeen = localStorage.getItem("pmbok8_tour_seen");
  if (!tourSeen) {
    localStorage.setItem("pmbok8_tour_seen", "true");
    setTimeout(() => {
      tour.start();
    }, 400);
  }

  navTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audio.playPop();
      switchTab(btn.dataset.tab);
    });
  });

  // Theme Toggle
  if (themeBtn) {
    let savedTheme = localStorage.getItem("pmbok8_pro_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeBtn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;

    themeBtn.addEventListener("click", () => {
      audio.playPop();
      savedTheme = savedTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
      localStorage.setItem("pmbok8_pro_theme", savedTheme);
      themeBtn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;
      showSeniorToast(savedTheme === 'dark' ? t("app.darkModeOn") : t("app.lightModeOn"));
    });
  }

  // Sound Toggle
  if (soundBtn) {
    soundBtn.innerHTML = audio.enabled ? icons.volume : icons.volumeX;
    soundBtn.addEventListener("click", () => {
      const en = audio.toggle();
      soundBtn.innerHTML = en ? icons.volume : icons.volumeX;
      showSeniorToast(en ? t("app.audioOn") : t("app.audioOff"));
    });
  }

  // Initial tab
  switchTab("curriculum");
});
