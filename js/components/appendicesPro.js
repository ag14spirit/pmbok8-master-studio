import { appendices } from "../data/appendices.js";
import { audio } from "../audio.js";
import { t, fmtNumber } from "../i18n/index.js";

export function renderAppendicesPro(containerEl) {
  let activeKey = "x3_ai";

  const render = () => {
    const cur = appendices[activeKey];

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("appendices.heroTitle")}</h1>
          <p>
            ${t("appendices.heroDesc")}
          </p>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="action-chip-btn ${activeKey === 'x3_ai' ? 'active' : ''}" data-key="x3_ai" style="${activeKey === 'x3_ai' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX3")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x2_pmo' ? 'active' : ''}" data-key="x2_pmo" style="${activeKey === 'x2_pmo' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX2")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x4_procurement' ? 'active' : ''}" data-key="x4_procurement" style="${activeKey === 'x4_procurement' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX4")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x5_evolution' ? 'active' : ''}" data-key="x5_evolution" style="${activeKey === 'x5_evolution' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX5")}
          </button>
        </div>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 32px; box-shadow: var(--shadow-xs);">
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--c-blue); ">
            ${t("appendices.officialStudy")}
          </span>
          <h2 style="font-size: 1.65rem; font-weight: 800; letter-spacing: -0.02em; margin: 4px 0 10px 0;">
            ${cur.title}
          </h2>
          <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary); max-width: 900px;">
            ${cur.summary}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${cur.topics.map(tp => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 20px; border-left: 4px solid var(--c-blue);">
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${tp.subtitle}</h4>
              <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${tp.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    containerEl.querySelectorAll("[data-key]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeKey = btn.dataset.key;
        render();
      };
    });
  };

  render();
}
