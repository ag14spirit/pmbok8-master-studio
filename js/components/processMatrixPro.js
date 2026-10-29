
// Keyed by the English domain name (domainEn / nameEn), so colors do not depend on the display language.
const domainColorPalette = {
  governance: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  scope: { color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  schedule: { color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  finance: { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  stakeholders: { color: "#E11D48", bg: "#FFF1F2", border: "#FECDD3" },
  resources: { color: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD" },
  risk: { color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" }
};

function getDomColor(nameEn) {
  const n = (nameEn || "").toLowerCase();
  for (const k of Object.keys(domainColorPalette)) {
    if (n.includes(k)) return domainColorPalette[k];
  }
  return { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" };
}

import { processes } from "../data/processes.js";
import { performanceDomains } from "../data/domains.js";
import { focusAreas } from "../data/focusAreas.js";
import { audio } from "../audio.js";
import { icons } from "../icons.js";
import { t, fmtNumber } from "../i18n/index.js";

export function renderProcessMatrixPro(containerEl, modalBackdropEl) {
  let viewMode = "matrix"; // "matrix" | "by-domain" | "by-focus" | "ittos"
  let searchQuery = "";
  // Language-independent domain key: "all" or the domain's index in performanceDomains (as a string).
  let activeDomain = "all";

  // All matching uses English keys (p.domainEn / p.focusAreaEn vs d.nameEn / fa.nameEn), never localized labels.
  const matchDomain = (pDomainEn, dNameEn) => dNameEn.toLowerCase().includes(pDomainEn.toLowerCase());
  const matchFocusArea = (pFocusEn, faNameEn) => faNameEn.toLowerCase().includes(pFocusEn.toLowerCase());

  // Display-only helper (Spanish label for the UI). Not used for matching.
  const shortDomainName = (d) => d.name.replace("Dominio de ", "");
  // Key of the domain a process belongs to (index in performanceDomains). Never uses a display label.
  const domainKeyOfProcess = (p) =>
    String(performanceDomains.findIndex(d => matchDomain(p.domainEn, d.nameEn)));
  const isDomainSelected = (d) =>
    activeDomain === "all" || activeDomain === String(performanceDomains.indexOf(d));

  const render = () => {
    const filteredProcesses = processes.filter(p =>
      (activeDomain === "all" || domainKeyOfProcess(p) === activeDomain) &&
      (searchQuery === "" ||
       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       p.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (p.inputs || []).some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.tools || []).some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.outputs || []).some(o => o.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("matrix.heroTitle")}</h1>
          <p>
            ${t("matrix.heroIntro")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${fmtNumber(filteredProcesses.length)}/40</span>
            <span class="stat-label">${t("matrix.filteredLabel")}</span>
          </div>
        </div>
      </div>

      <!-- Explanation Banner -->
      <div class="matrix-explanation-banner">
        <strong>${t("matrix.explanationTitle")}</strong> ${t("matrix.explanationText", { ittos: `<strong>${t("matrix.ittosLabel")}</strong>` })}
      </div>

      <!-- View Switcher & Toolbar -->
      <div class="matrix-toolbar-row">
        <div class="matrix-view-switcher">
          <button class="matrix-view-btn ${viewMode === 'matrix' ? 'active' : ''}" data-view="matrix">
            ${t("matrix.viewMatrix")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-domain' ? 'active' : ''}" data-view="by-domain">
            ${t("matrix.viewByDomain")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-focus' ? 'active' : ''}" data-view="by-focus">
            ${t("matrix.viewByFocus")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'ittos' ? 'active' : ''}" data-view="ittos">
            ${t("matrix.viewItto")}
          </button>
        </div>

        <div class="matrix-search-box">
          <input type="text" id="matrix-search-input" placeholder="${t("matrix.searchPlaceholder")}" value="${searchQuery}">
          <span class="matrix-search-icon">${icons.search}</span>
        </div>
      </div>

      <!-- Domain filter chips -->
      <div class="domain-chips-row">
        <button class="action-chip-btn ${activeDomain === 'all' ? 'active' : ''}" data-domain="all">
          ${t("matrix.allDomains")}
        </button>
        ${performanceDomains.map((d, i) => {
          const shortName = shortDomainName(d);
          const isAct = activeDomain === String(i);
          const dCol = getDomColor(d.nameEn);
          return `
            <button class="action-chip-btn ${isAct ? 'active' : ''}" data-domain="${i}" style="${isAct ? `background: ${dCol.color}; color: #ffffff; border-color: ${dCol.color};` : `border-color: ${dCol.border};`}">
              <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${isAct ? '#ffffff' : dCol.color}; flex-shrink:0;"></span>
              ${shortName} (${d.processesCount})
            </button>
          `;
        }).join('')}
      </div>

      <!-- Dynamic View Container -->
      <div id="matrix-content-viewport" style="margin-top: 18px;"></div>
    `;

    // Render corresponding subview
    const viewport = containerEl.querySelector("#matrix-content-viewport");
    if (viewMode === "matrix") {
      render2DMatrix(viewport, filteredProcesses);
    } else if (viewMode === "by-domain") {
      renderByDomain(viewport, filteredProcesses);
    } else if (viewMode === "by-focus") {
      renderByFocusArea(viewport, filteredProcesses);
    } else if (viewMode === "ittos") {
      renderITTOExplorer(viewport, filteredProcesses);
    }

    // Attach search event
    const searchInp = containerEl.querySelector("#matrix-search-input");
    searchInp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
      const newInp = containerEl.querySelector("#matrix-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    // View buttons
    containerEl.querySelectorAll(".matrix-view-btn").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        viewMode = btn.dataset.view;
        render();
      };
    });

    // Domain filter chips
    containerEl.querySelectorAll("[data-domain]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeDomain = btn.dataset.domain;
        render();
      };
    });

    // Attach process card click listeners
    containerEl.querySelectorAll(".process-cell-card").forEach(card => {
      card.onclick = () => {
        audio.playPop();
        const pId = card.dataset.pid;
        const p = processes.find(item => item.id === pId);
        if (p) openProcessModal(p);
      };
    });
  };

  // Subview 1: 2D Matrix Grid
  const render2DMatrix = (area, pList) => {
    const visibleDomains = performanceDomains.filter(isDomainSelected);

    area.innerHTML = `
      <div class="matrix-table-card">
        <table class="matrix-grid-table">
          <thead>
            <tr>
              <th class="matrix-corner-th">${t("matrix.domainHeader")}</th>
              ${focusAreas.map(fa => `
                <th class="matrix-col-th">
                  <span class="fa-sec-badge">${t("matrix.sectionBadge", { section: fa.section })}</span>
                  <span class="fa-name-title">${fa.name.replace("Área de Enfoque de ", "")}</span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${visibleDomains.map(d => `
              <tr>
                <td class="domain-header-cell" style="border-left: 4px solid ${getDomColor(d.nameEn).color};">
                  <span class="domain-name-tag" style="color: ${getDomColor(d.nameEn).color};">${shortDomainName(d)}</span>
                  <span class="domain-section-tag">${t("matrix.domainSection", { section: d.section, count: d.processesCount })}</span>
                </td>
                ${focusAreas.map(fa => {
                  const cellProcs = pList.filter(p =>
                    matchDomain(p.domainEn, d.nameEn) &&
                    matchFocusArea(p.focusAreaEn, fa.nameEn)
                  );

                  return `
                    <td class="matrix-body-td">
                      ${cellProcs.length > 0 ? `
                        <div class="matrix-cell-procs-stack">
                          ${cellProcs.map(p => `
                            <div class="process-cell-card" data-pid="${p.id}" style="border-left: 3px solid ${getDomColor(p.domainEn).color};" title="${t("matrix.cellTitle", { number: p.number, name: p.name })}">
                              <span class="process-cell-num" style="color: ${getDomColor(p.domainEn).color};">#${p.number.toString().padStart(2, '0')}</span>
                              <span class="process-cell-title">${p.name}</span>
                            </div>
                          `).join('')}
                        </div>
                      ` : '<span class="cell-empty-placeholder">—</span>'}
                    </td>
                  `;
                }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  // Subview 2: Grouped by Performance Domain
  const renderByDomain = (area, pList) => {
    const visibleDomains = performanceDomains.filter(isDomainSelected);

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${visibleDomains.map(d => {
          const dProcs = pList.filter(p => matchDomain(p.domainEn, d.nameEn));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-blue); font-weight: 700;">${t("matrix.chapter", { number: d.number })}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${d.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${d.summary}</p>
                </div>
                <span class="action-chip-btn">${t("matrix.processesBadge", { count: dProcs.length })}</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${dProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); ">${p.focusArea}</span>
                    </div>
                    <span class="process-cell-title" style="font-size: 0.9rem;">${p.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Subview 3: Grouped by Focus Area
  const renderByFocusArea = (area, pList) => {
    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${focusAreas.map(fa => {
          const faProcs = pList.filter(p => matchFocusArea(p.focusAreaEn, fa.nameEn));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-teal); font-weight: 700;">${t("matrix.sectionBadge", { section: fa.section })}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${fa.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${fa.summary}</p>
                  <div style="font-size: 0.82rem; color: var(--c-teal); font-weight: 600; margin-top: 6px;">${t("matrix.keyDeliverable", { deliverable: fa.keyDeliverable })}</div>
                </div>
                <span class="action-chip-btn">${t("matrix.processesBadge", { count: faProcs.length })}</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${faProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); ">${p.domain}</span>
                    </div>
                    <span class="process-cell-title" style="font-size: 0.9rem;">${p.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Subview 4: ITTO Universal Search & Explorer
  const renderITTOExplorer = (area, pList) => {
    area.innerHTML = `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 24px;">
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 6px;">${t("matrix.explorerTitle")}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
          ${t("matrix.explorerDesc")}
        </p>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${pList.map(p => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                  <strong style="font-size: 0.96rem; color: var(--text-primary);">${p.name}</strong>
                </div>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${p.domain} • ${p.focusArea}</span>
              </div>

              <div class="itto-grid">
                <div class="itto-col">
                  <h5 style="color: var(--c-blue);">${t("matrix.inputs")}</h5>
                  <ul>
                    ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-purple);">${t("matrix.tools")}</h5>
                  <ul>
                    ${(p.tools || []).map(tool => `<li>${tool}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-teal);">${t("matrix.outputs")}</h5>
                  <ul>
                    ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  };

  // Process Modal Deep Dive
  const openProcessModal = (p) => {
    modalBackdropEl.innerHTML = `
      <div class="modal-window-card">
        <div class="modal-window-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="brand-tag">${t("matrix.processBadge", { number: p.number.toString().padStart(2, '0') })}</span>
            <h3 style="font-size: 1.15rem; font-weight: 800;">${p.name}</h3>
          </div>
          <button class="icon-square-btn" id="close-proc-modal-btn" title="${t("matrix.closeWindow")}">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <div style="background: var(--bg-surface-subtle); padding: 18px 20px; border-radius: var(--radius-s); border-left: 3px solid var(--c-blue); margin-bottom: 16px;">
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--c-blue); ">${t("matrix.officialPurpose")}</span>
            <p style="font-size: 0.98rem; line-height: 1.55; margin-top: 4px; color: var(--text-primary);">
              ${p.purpose}
            </p>
          </div>

          <div style="display: flex; gap: 12px; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 16px;">
            <span>${t("matrix.domainLabel")} <strong style="color: var(--text-primary);">${p.domain}</strong></span>
            <span>•</span>
            <span>${t("matrix.focusAreaLabel")} <strong style="color: var(--text-primary);">${p.focusArea}</strong></span>
          </div>

          <!-- ITTOs Grid -->
          <div class="itto-grid">
            <div class="itto-col">
              <h5 style="color: var(--c-blue);">${t("matrix.inputs")}</h5>
              <ul>
                ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-purple);">${t("matrix.tools")}</h5>
              <ul>
                ${(p.tools || []).map(tool => `<li>${tool}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-teal);">${t("matrix.outputs")}</h5>
              <ul>
                ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 16px; margin-top: 16px;">
            <strong style="font-size: 0.84rem; color: var(--text-primary); display: block; margin-bottom: 4px;">${t("matrix.tailoringTitle")}</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-secondary);">${p.tailoring}</p>
          </div>

          <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 16px; margin-top: 14px;">
            <strong style="font-size: 0.84rem; color: #B45309; display: block; margin-bottom: 4px;">${t("matrix.examTrapTitle")}</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-primary);">${p.examTip}</p>
          </div>
        </div>

        <div class="modal-window-footer">
          <button class="action-chip-btn" id="modal-close-bottom-btn">${t("matrix.closeCard")}</button>
        </div>
      </div>
    `;

    modalBackdropEl.classList.add("active");

    const closeHandler = () => modalBackdropEl.classList.remove("active");
    modalBackdropEl.querySelector("#close-proc-modal-btn").onclick = closeHandler;
    modalBackdropEl.querySelector("#modal-close-bottom-btn").onclick = closeHandler;
  };

  render();
}
