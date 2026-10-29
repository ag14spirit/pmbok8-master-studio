import { audio } from "../audio.js";
import { icons } from "../icons.js";
import { t } from "../i18n/index.js";

export class OnboardingTour {
  constructor(modalBackdropEl, onNavigateTab) {
    this.modalBackdrop = modalBackdropEl;
    this.onNavigateTab = onNavigateTab;
    this.currentStep = 0;
    this.dockEl = null;

    this.steps = [
      {
        title: t("tour.step1Title"),
        badge: t("tour.step1Badge"),
        tabId: "curriculum",
        lead: t("tour.step1Lead"),
        details: [
          t("tour.step1Detail1"),
          t("tour.step1Detail2"),
          t("tour.step1Detail3"),
          t("tour.step1Detail4")
        ]
      },
      {
        title: t("tour.step2Title"),
        badge: t("tour.step2Badge"),
        tabId: "matrix",
        lead: t("tour.step2Lead"),
        details: [
          t("tour.step2Detail1"),
          t("tour.step2Detail2"),
          t("tour.step2Detail3")
        ]
      },
      {
        title: t("tour.step3Title"),
        badge: t("tour.step3Badge"),
        tabId: "presentations",
        lead: t("tour.step3Lead"),
        details: [
          t("tour.step3Detail1"),
          t("tour.step3Detail2"),
          t("tour.step3Detail3")
        ]
      },
      {
        title: t("tour.step4Title"),
        badge: t("tour.step4Badge"),
        tabId: "evm",
        lead: t("tour.step4Lead"),
        details: [
          t("tour.step4Detail1"),
          t("tour.step4Detail2"),
          t("tour.step4Detail3")
        ]
      },
      {
        title: t("tour.step5Title"),
        badge: t("tour.step5Badge"),
        tabId: "simulator",
        lead: t("tour.step5Lead"),
        details: [
          t("tour.step5Detail1"),
          t("tour.step5Detail2"),
          t("tour.step5Detail3")
        ]
      },
      {
        title: t("tour.step6Title"),
        badge: t("tour.step6Badge"),
        tabId: "flashcards",
        lead: t("tour.step6Lead"),
        details: [
          t("tour.step6Detail1"),
          t("tour.step6Detail2")
        ]
      },
      {
        title: t("tour.step7Title"),
        badge: t("tour.step7Badge"),
        tabId: "appendices",
        lead: t("tour.step7Lead"),
        details: [
          t("tour.step7Detail1"),
          t("tour.step7Detail2"),
          t("tour.step7Detail3"),
          t("tour.step7Detail4")
        ]
      }
    ];
  }

  start() {
    this.currentStep = 0;
    this.renderStep();
  }

  clearSpotlights() {
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.classList.remove("tab-spotlight-active");
    });
  }

  renderStep() {
    const s = this.steps[this.currentStep];
    const isFirst = this.currentStep === 0;
    const isLast = this.currentStep === this.steps.length - 1;

    // Clear previous highlights
    this.clearSpotlights();

    // 1. Switch tab automatically in the background
    if (this.onNavigateTab && s.tabId) {
      this.onNavigateTab(s.tabId);
    }

    // 2. Highlight target tab in the header
    const targetTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${s.tabId}"]`);
    if (targetTabBtn) {
      targetTabBtn.classList.add("tab-spotlight-active");
      targetTabBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // 3. Create or update floating companion dock
    let dock = document.getElementById("tour-floating-dock");
    if (!dock) {
      dock = document.createElement("div");
      dock.id = "tour-floating-dock";
      dock.className = "tour-companion-dock";
      document.body.appendChild(dock);
    }

    dock.innerHTML = `
      <div class="tour-companion-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--c-blue); background: var(--c-blue-subtle); padding: 2px 7px; border-radius: var(--radius-xs);">
            ${t("tour.stepCounter", { current: this.currentStep + 1, total: this.steps.length })}
          </span>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-secondary); ">
            ${s.badge}
          </span>
        </div>

        <button class="icon-square-btn" id="tour-dock-close" title="${t("tour.closeBtnTitle")}" style="width: 26px; height: 26px;">
          ${icons.x}
        </button>
      </div>

      <div class="tour-companion-body">
        <h3 style="font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); line-height: 1.3;">
          ${s.title}
        </h3>

        <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
          ${s.lead}
        </p>

        <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 12px 14px;">
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-tertiary); display: block; margin-bottom: 8px;">
            ${t("tour.detailsHeading")}
          </span>
          <ul style="display: flex; flex-direction: column; gap: 7px; padding-left: 14px; font-size: 0.82rem; color: var(--text-primary); line-height: 1.45;">
            ${s.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="tour-companion-footer">
        <button class="action-chip-btn" id="tour-dock-skip" style="font-size: 0.76rem; padding: 5px 10px;">
          ${t("tour.finishGuideBtn")}
        </button>

        <div style="display: flex; gap: 6px;">
          <button class="action-chip-btn" id="tour-dock-prev" ${isFirst ? 'disabled style="opacity: 0.4; pointer-events: none;"' : ''} style="font-size: 0.78rem; padding: 5px 10px;">
            ${icons.arrowLeft} ${t("tour.prevBtn")}
          </button>
          <button class="btn-primary-pro" id="tour-dock-next" style="font-size: 0.78rem; padding: 5px 12px;">
            ${isLast ? t("tour.startStudyBtn") : t("tour.nextBtn") + ' ' + icons.arrowRight}
          </button>
        </div>
      </div>
    `;

    // Event listeners
    const closeDock = () => {
      this.clearSpotlights();
      const el = document.getElementById("tour-floating-dock");
      if (el) el.remove();
    };

    dock.querySelector("#tour-dock-close").onclick = () => {
      audio.playPop();
      closeDock();
    };

    dock.querySelector("#tour-dock-skip").onclick = () => {
      audio.playPop();
      closeDock();
    };

    const prevBtn = dock.querySelector("#tour-dock-prev");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.currentStep > 0) {
          audio.playPop();
          this.currentStep -= 1;
          this.renderStep();
        }
      };
    }

    const nextBtn = dock.querySelector("#tour-dock-next");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.currentStep < this.steps.length - 1) {
          audio.playPop();
          this.currentStep += 1;
          this.renderStep();
        } else {
          audio.playVictory();
          closeDock();
        }
      };
    }
  }
}
