import { processes } from "../data/processes.js";
import { performanceDomains } from "../data/domains.js";
import { focusAreas } from "../data/focusAreas.js";
import { audio } from "../audio.js";
import { icons } from "../icons.js";

export function renderProcessMatrixPro(containerEl, modalBackdropEl) {
  let viewMode = "matrix"; // "matrix" | "by-domain" | "by-focus" | "ittos"
  let searchQuery = "";
  let activeDomain = "all";

  const matchDomain = (pDomain, dName) => dName.toLowerCase().includes(pDomain.toLowerCase());
  const matchFocusArea = (pFocus, faName) => faName.toLowerCase().includes(pFocus.toLowerCase());

  const render = () => {
    const filteredProcesses = processes.filter(p =>
      (activeDomain === "all" || p.domain.toLowerCase() === activeDomain.toLowerCase()) &&
      (searchQuery === "" ||
       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       p.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (p.inputs || []).some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.tools || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.outputs || []).some(o => o.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>Matriz y Arquitectura de los 40 Procesos • PMBOK® 8</h1>
          <p>
            En la 8va edición, los procesos no son etapas de cascada, sino un modelo matricial de capacidades. Las filas representan los 7 Dominios de Desempeño y las columnas representan las 5 Áreas de Enfoque.
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${filteredProcesses.length}/40</span>
            <span class="stat-label">Procesos Filtrados</span>
          </div>
        </div>
      </div>

      <!-- Explanation Banner -->
      <div class="matrix-explanation-banner">
        <strong>Estructura Matricial Bidimensional:</strong> Haz clic en cualquier proceso para abrir su ficha técnica oficial con <strong>Entradas, Herramientas, Salidas (ITTOs)</strong>, pautas de adaptación y trampas de examen PMP.
      </div>

      <!-- View Switcher & Toolbar -->
      <div class="matrix-toolbar-row">
        <div class="matrix-view-switcher">
          <button class="matrix-view-btn ${viewMode === 'matrix' ? 'active' : ''}" data-view="matrix">
            Vista Matriz 2D
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-domain' ? 'active' : ''}" data-view="by-domain">
            Vista por Dominio (7)
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-focus' ? 'active' : ''}" data-view="by-focus">
            Vista por Área de Enfoque (5)
          </button>
          <button class="matrix-view-btn ${viewMode === 'ittos' ? 'active' : ''}" data-view="ittos">
            Explorador de ITTOs
          </button>
        </div>

        <div class="matrix-search-box">
          <input type="text" id="matrix-search-input" placeholder="Buscar proceso, entrada, técnica o salida..." value="${searchQuery}">
          <span class="matrix-search-icon">${icons.search}</span>
        </div>
      </div>

      <!-- Domain filter chips -->
      <div class="domain-chips-row">
        <button class="action-chip-btn ${activeDomain === 'all' ? 'active' : ''}" data-domain="all">
          Todos los Dominios (40)
        </button>
        ${performanceDomains.map(d => {
          const shortName = d.name.replace("Dominio de ", "");
          const isAct = activeDomain.toLowerCase() === shortName.toLowerCase();
          return `
            <button class="action-chip-btn ${isAct ? 'active' : ''}" data-domain="${shortName}">
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
    const visibleDomains = performanceDomains.filter(d =>
      activeDomain === "all" || d.name.toLowerCase().includes(activeDomain.toLowerCase())
    );

    area.innerHTML = `
      <div class="matrix-table-card">
        <table class="matrix-grid-table">
          <thead>
            <tr>
              <th class="matrix-corner-th">Dominio de Desempeño</th>
              ${focusAreas.map(fa => `
                <th class="matrix-col-th">
                  <span class="fa-sec-badge">Sección ${fa.section}</span>
                  <span class="fa-name-title">${fa.name.replace("Área de Enfoque de ", "")}</span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${visibleDomains.map(d => `
              <tr>
                <td class="domain-header-cell">
                  <span class="domain-name-tag">${d.name.replace("Dominio de ", "")}</span>
                  <span class="domain-section-tag">Sección ${d.section} • ${d.processesCount} procesos</span>
                </td>
                ${focusAreas.map(fa => {
                  const cellProcs = pList.filter(p =>
                    matchDomain(p.domain, d.name) &&
                    matchFocusArea(p.focusArea, fa.name)
                  );

                  return `
                    <td class="matrix-body-td">
                      ${cellProcs.length > 0 ? `
                        <div class="matrix-cell-procs-stack">
                          ${cellProcs.map(p => `
                            <div class="process-cell-card" data-pid="${p.id}" title="Ver ITTOs de #${p.number}: ${p.name}">
                              <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
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
    const visibleDomains = performanceDomains.filter(d =>
      activeDomain === "all" || d.name.toLowerCase().includes(activeDomain.toLowerCase())
    );

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${visibleDomains.map(d => {
          const dProcs = pList.filter(p => matchDomain(p.domain, d.name));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-blue); font-weight: 700;">Capítulo 2.${d.number}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${d.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${d.summary}</p>
                </div>
                <span class="action-chip-btn">${dProcs.length} Procesos</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${dProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${p.focusArea}</span>
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
          const faProcs = pList.filter(p => matchFocusArea(p.focusArea, fa.name));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-teal); font-weight: 700;">Sección ${fa.section}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${fa.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${fa.summary}</p>
                  <div style="font-size: 0.82rem; color: var(--c-teal); font-weight: 600; margin-top: 6px;">Entregable clave: ${fa.keyDeliverable}</div>
                </div>
                <span class="action-chip-btn">${faProcs.length} Procesos</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${faProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${p.domain}</span>
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
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 6px;">Explorador Exhaustivo de Entradas, Herramientas y Salidas (ITTOs)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
          Auditoría de extremo a extremo del flujo de información en los 40 procesos del PMBOK® 8.
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
                  <h5 style="color: var(--c-blue);">Entradas (Inputs)</h5>
                  <ul>
                    ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-purple);">Herramientas & Técnicas</h5>
                  <ul>
                    ${(p.tools || []).map(t => `<li>${t}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-teal);">Salidas (Outputs)</h5>
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
            <span class="brand-tag">Proceso #${p.number.toString().padStart(2, '0')}</span>
            <h3 style="font-size: 1.15rem; font-weight: 800;">${p.name}</h3>
          </div>
          <button class="icon-square-btn" id="close-proc-modal-btn" title="Cerrar ventana">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <div style="background: var(--bg-surface-subtle); padding: 18px 20px; border-radius: var(--radius-s); border-left: 3px solid var(--c-blue); margin-bottom: 16px;">
            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em;">Propósito Oficial PMBOK 8:</span>
            <p style="font-size: 0.98rem; line-height: 1.55; margin-top: 4px; color: var(--text-primary);">
              ${p.purpose}
            </p>
          </div>

          <div style="display: flex; gap: 12px; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 16px;">
            <span>Dominio: <strong style="color: var(--text-primary);">${p.domain}</strong></span>
            <span>•</span>
            <span>Área de Enfoque: <strong style="color: var(--text-primary);">${p.focusArea}</strong></span>
          </div>

          <!-- ITTOs Grid -->
          <div class="itto-grid">
            <div class="itto-col">
              <h5 style="color: var(--c-blue);">Entradas (Inputs)</h5>
              <ul>
                ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-purple);">Herramientas & Técnicas</h5>
              <ul>
                ${(p.tools || []).map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-teal);">Salidas (Outputs)</h5>
              <ul>
                ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 16px; margin-top: 16px;">
            <strong style="font-size: 0.84rem; color: var(--text-primary); display: block; margin-bottom: 4px;">Pautas de Adaptación (Tailoring):</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-secondary);">${p.tailoring}</p>
          </div>

          <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 16px; margin-top: 14px;">
            <strong style="font-size: 0.84rem; color: #B45309; display: block; margin-bottom: 4px;">Trampa Común de Examen PMP:</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-primary);">${p.examTip}</p>
          </div>
        </div>

        <div class="modal-window-footer">
          <button class="action-chip-btn" id="modal-close-bottom-btn">Cerrar Ficha</button>
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
