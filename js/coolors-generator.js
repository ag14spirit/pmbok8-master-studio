import { principles } from "./data/principles.js";
import { performanceDomains } from "./data/domains.js";
import { focusAreas } from "./data/focusAreas.js";
import { processes } from "./data/processes.js";
import { toolsAndTechniques } from "./data/tools.js";
import { appendices } from "./data/appendices.js";
import { audio } from "./audio.js";

// Vibrant curated palette base colors inspired by Coolors
const VIBRANT_PALETTES = [
  ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"],
  ["#0077B6", "#0096C7", "#00B4D8", "#48CAE4", "#90E0EF"],
  ["#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C", "#D90429"],
  ["#05668D", "#028090", "#00A896", "#02C39A", "#F0F3BD"],
  ["#1D3557", "#457B9D", "#A8DADC", "#F1FAEE", "#E63946"],
  ["#583150", "#7B3E68", "#AA4465", "#DD6E42", "#E8DAB2"],
  ["#0B3954", "#087E8B", "#BFD7EA", "#FF5A5F", "#C81D25"],
  ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241"]
];

// Helper to determine whether text should be white or black based on luminance
export function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);
  // Relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? "#111111" : "#ffffff";
}

// Generate shade spectrum (10 tints/shades)
export function generateShades(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);

  const shades = [];
  for (let i = 0; i < 10; i++) {
    const factor = i / 9; // 0 to 1
    // Interpolate from black to color to white
    let nr, ng, nb;
    if (factor < 0.5) {
      const subFactor = factor / 0.5;
      nr = Math.round(r * subFactor);
      ng = Math.round(g * subFactor);
      nb = Math.round(b * subFactor);
    } else {
      const subFactor = (factor - 0.5) / 0.5;
      nr = Math.round(r + (255 - r) * subFactor);
      ng = Math.round(g + (255 - g) * subFactor);
      nb = Math.round(b + (255 - b) * subFactor);
    }
    const hexStr = `#${nr.toString(16).padStart(2, '0')}${ng.toString(16).padStart(2, '0')}${nb.toString(16).padStart(2, '0')}`.toUpperCase();
    shades.push(hexStr);
  }
  return shades;
}

export class CoolorsGenerator {
  constructor(containerEl, inspectorModalEl) {
    this.container = containerEl;
    this.inspectorModal = inspectorModalEl;
    this.columns = this.getInitialColumns();
    this.activeShadeColIdx = null;

    this.bindEvents();
    this.render();
  }

  getInitialColumns() {
    const palette = VIBRANT_PALETTES[0];
    return [
      {
        id: "col-1",
        type: "PRINCIPIO PMBOK 8",
        ref: "Sección 3.3",
        title: principles[0].name,
        subtitle: principles[0].statement,
        hex: palette[0],
        locked: false,
        data: principles[0],
        category: "principle"
      },
      {
        id: "col-2",
        type: "DOMINIO DE DESEMPEÑO",
        ref: "Capítulo 2.1",
        title: performanceDomains[0].name,
        subtitle: performanceDomains[0].summary,
        hex: palette[1],
        locked: false,
        data: performanceDomains[0],
        category: "domain"
      },
      {
        id: "col-3",
        type: "ÁREA DE ENFOQUE",
        ref: "Sección 4.5",
        title: focusAreas[0].name,
        subtitle: focusAreas[0].description,
        hex: palette[2],
        locked: false,
        data: focusAreas[0],
        category: "focusArea"
      },
      {
        id: "col-4",
        type: "PROCESO OFICIAL",
        ref: "Proceso #1",
        title: processes[0].name,
        subtitle: processes[0].purpose,
        hex: palette[3],
        locked: false,
        data: processes[0],
        category: "process"
      },
      {
        id: "col-5",
        type: "TÉCNICA & EVM",
        ref: "Tabla 5-1",
        title: "Valor Ganado (EV) & CPI",
        subtitle: toolsAndTechniques.evm[6].definition,
        hex: palette[4],
        locked: false,
        data: toolsAndTechniques.evm[6],
        category: "tool"
      }
    ];
  }

  generate() {
    audio.playPop();
    const randomPalette = VIBRANT_PALETTES[Math.floor(Math.random() * VIBRANT_PALETTES.length)];

    this.columns.forEach((col, idx) => {
      if (col.locked) return; // Keep locked column untouched

      col.hex = randomPalette[idx % randomPalette.length];

      if (col.category === "principle") {
        const item = principles[Math.floor(Math.random() * principles.length)];
        col.title = item.name;
        col.subtitle = item.statement;
        col.ref = `Sección ${item.section}`;
        col.data = item;
      } else if (col.category === "domain") {
        const item = performanceDomains[Math.floor(Math.random() * performanceDomains.length)];
        col.title = item.name;
        col.subtitle = item.summary;
        col.ref = `Capítulo ${item.chapter}`;
        col.data = item;
      } else if (col.category === "focusArea") {
        const item = focusAreas[Math.floor(Math.random() * focusAreas.length)];
        col.title = item.name;
        col.subtitle = item.description;
        col.ref = `Sección ${item.section}`;
        col.data = item;
      } else if (col.category === "process") {
        const item = processes[Math.floor(Math.random() * processes.length)];
        col.title = item.name;
        col.subtitle = item.purpose;
        col.ref = `Proceso #${item.number} • ${item.domain}`;
        col.data = item;
      } else if (col.category === "tool") {
        const evmItems = toolsAndTechniques.evm;
        const item = evmItems[Math.floor(Math.random() * evmItems.length)];
        col.title = `${item.abbr}: ${item.name}`;
        col.subtitle = item.definition;
        col.ref = "Tabla 5-1 PMBOK 8";
        col.data = item;
      }
    });

    this.render();
  }

  loadPalette(paletteData) {
    this.columns = paletteData.map((item, idx) => ({
      id: `col-${idx + 1}`,
      type: item.type,
      ref: item.ref,
      title: item.title,
      subtitle: item.subtitle,
      hex: item.hex,
      locked: false,
      data: item.data || item,
      category: item.category || "process"
    }));
    this.render();
  }

  bindEvents() {
    // Global spacebar listener for generator
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        this.generate();
      }
    });
  }

  render() {
    this.container.innerHTML = "";

    this.columns.forEach((col, idx) => {
      const colEl = document.createElement("div");
      colEl.className = `coolors-column ${col.locked ? 'is-locked' : ''}`;
      colEl.style.backgroundColor = col.hex;

      const textColor = getContrastColor(col.hex);
      colEl.style.color = textColor;

      colEl.innerHTML = `
        <!-- Top Info Header -->
        <div class="col-header">
          <span class="col-type-tag" style="color: ${textColor}; border: 1px solid ${textColor}33;">${col.type}</span>
          <span class="col-section-ref" style="color: ${textColor};">${col.ref}</span>
        </div>

        <!-- Center Micro-Toolbar (Hover / Lock) -->
        <div class="col-toolbar">
          <button class="col-tool-btn lock-btn ${col.locked ? 'locked' : ''}" title="${col.locked ? 'Desbloquear (L)' : 'Bloquear (L)'}" data-idx="${idx}">
            ${col.locked ? '🔒' : '🔓'}
          </button>
          <button class="col-tool-btn inspect-btn" title="Inspeccionar detalle PMBOK 8" data-idx="${idx}">
            👁️
          </button>
          <button class="col-tool-btn shades-btn" title="Ver tonos y sombras" data-idx="${idx}">
            🎨
          </button>
          <button class="col-tool-btn copy-btn" title="Copiar código y cita" data-idx="${idx}">
            📋
          </button>
          <button class="col-tool-btn move-left-btn" title="Mover a la izquierda" data-idx="${idx}" ${idx === 0 ? 'style="opacity:0.3; pointer-events:none;"' : ''}>
            ◀
          </button>
          <button class="col-tool-btn move-right-btn" title="Mover a la derecha" data-idx="${idx}" ${idx === this.columns.length - 1 ? 'style="opacity:0.3; pointer-events:none;"' : ''}>
            ▶
          </button>
        </div>

        <!-- Bottom Footer Info -->
        <div class="col-footer">
          <h2 class="col-title" style="color: ${textColor};">${col.title}</h2>
          <p class="col-subtitle" style="color: ${textColor};">${col.subtitle}</p>
          <div class="col-hex-code copy-hex-trigger" data-hex="${col.hex}" style="color: ${textColor}; border: 1px solid ${textColor}44;">
            <span>${col.hex}</span>
            <span style="font-size: 11px; opacity: 0.7;">📋</span>
          </div>
        </div>

        <!-- Shades Drawer (if active) -->
        <div class="shades-drawer" id="shades-drawer-${idx}">
          <div class="shades-header">
            <span>ESPECTRO DE TONOS • ${col.hex}</span>
            <button class="close-shades-btn" data-idx="${idx}" style="background:none; border:none; cursor:pointer; font-size:16px;">✕</button>
          </div>
          <div class="shades-palette-grid">
            ${generateShades(col.hex).map(shade => {
              const shadeText = getContrastColor(shade);
              return `
                <div class="shade-item" data-shade="${shade}" data-col="${idx}" style="background-color: ${shade}; color: ${shadeText};">
                  <span>${shade}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      // Attach column interactions
      colEl.querySelector(".lock-btn").onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        col.locked = !col.locked;
        this.render();
      };

      colEl.querySelector(".inspect-btn").onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        this.openInspector(col);
      };

      colEl.querySelector(".shades-btn").onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const drawer = colEl.querySelector(`#shades-drawer-${idx}`);
        drawer.classList.toggle("active");
      };

      colEl.querySelector(".close-shades-btn").onclick = (e) => {
        e.stopPropagation();
        const drawer = colEl.querySelector(`#shades-drawer-${idx}`);
        drawer.classList.remove("active");
      };

      colEl.querySelectorAll(".shade-item").forEach(sItem => {
        sItem.onclick = (e) => {
          e.stopPropagation();
          audio.playPop();
          col.hex = sItem.dataset.shade;
          this.render();
          showToast(`Color actualizado a ${col.hex}`);
        };
      });

      colEl.querySelector(".copy-btn").onclick = (e) => {
        e.stopPropagation();
        this.copyColumnInfo(col);
      };

      colEl.querySelector(".copy-hex-trigger").onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(col.hex);
        audio.playCorrect();
        showToast(`¡HEX ${col.hex} copiado al portapapeles!`);
      };

      colEl.querySelector(".move-left-btn").onclick = (e) => {
        e.stopPropagation();
        if (idx > 0) {
          audio.playPop();
          const temp = this.columns[idx];
          this.columns[idx] = this.columns[idx - 1];
          this.columns[idx - 1] = temp;
          this.render();
        }
      };

      colEl.querySelector(".move-right-btn").onclick = (e) => {
        e.stopPropagation();
        if (idx < this.columns.length - 1) {
          audio.playPop();
          const temp = this.columns[idx];
          this.columns[idx] = this.columns[idx + 1];
          this.columns[idx + 1] = temp;
          this.render();
        }
      };

      this.container.appendChild(colEl);
    });
  }

  copyColumnInfo(col) {
    const text = `[PMBOK® 8va Edición] ${col.type}: ${col.title}\nReferencia: ${col.ref}\nDescripción: ${col.subtitle}\nColor HEX: ${col.hex}`;
    navigator.clipboard.writeText(text);
    audio.playCorrect();
    showToast("¡Cita oficial copiada al portapapeles!");
  }

  openInspector(col) {
    const d = col.data;
    const textColor = getContrastColor(col.hex);

    this.inspectorModal.innerHTML = `
      <div class="inspector-card">
        <!-- Colored Header Banner -->
        <div class="inspector-banner" style="background-color: ${col.hex}; color: ${textColor};">
          <button class="inspector-close-btn" id="inspector-close-x">✕</button>
          <span style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;">
            ${col.type} • ${col.ref}
          </span>
          <h2 style="font-size: 1.8rem; font-weight: 900; line-height: 1.2;">${col.title}</h2>
          <span style="font-size: 1rem; opacity: 0.9;">${col.hex}</span>
        </div>

        <!-- Body Details -->
        <div class="inspector-body">
          <div class="inspector-section">
            <h4>Definición Oficial PMBOK 8</h4>
            <p style="font-size: 1.05rem; line-height: 1.5;">${col.subtitle}</p>
          </div>

          ${col.category === "process" ? `
            <div class="inspector-grid-3">
              <div class="inspector-box">
                <h5 style="color: #0d6efd;">📥 Entradas (Inputs)</h5>
                <ul>
                  ${(d.inputs || []).map(i => `<li>${i}</li>`).join('')}
                </ul>
              </div>
              <div class="inspector-box">
                <h5 style="color: #6f42c1;">🛠️ Herramientas & Técnicas</h5>
                <ul>
                  ${(d.tools || []).map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>
              <div class="inspector-box">
                <h5 style="color: #198754;">📤 Salidas (Outputs)</h5>
                <ul>
                  ${(d.outputs || []).map(o => `<li>${o}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="inspector-box" style="border-left: 4px solid var(--coolors-primary);">
              <h5>🔄 Guía de Adaptación (Tailoring) Ágil vs Predictivo</h5>
              <p style="font-size: 0.9rem; line-height: 1.45;">${d.tailoring || 'Adaptar la intensidad y documentación según el ciclo de vida del proyecto.'}</p>
            </div>
          ` : ''}

          ${col.category === "principle" ? `
            <div class="inspector-box">
              <h5>🧠 Dimensión de Mentalidad (Mindset)</h5>
              <p style="font-size: 0.95rem;"><strong>${d.mindsetDimension}</strong></p>
            </div>
            <div class="inspector-box">
              <h5>🎯 Impacto en el Proyecto</h5>
              <p style="font-size: 0.92rem; line-height: 1.45;">${d.impact}</p>
            </div>
          ` : ''}

          ${col.category === "tool" ? `
            <div class="inspector-box" style="background: var(--coolors-surface-2);">
              <h5>📐 Fórmula Oficial</h5>
              <pre style="font-size: 1.1rem; font-weight: 800; font-family: monospace; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 6px;">${d.formula || 'N/A'}</pre>
            </div>
            <div class="inspector-box">
              <h5>💡 Interpretación de Resultados</h5>
              <p style="font-size: 0.95rem; line-height: 1.45;">${d.interpretation || d.description}</p>
            </div>
          ` : ''}

          <!-- PMP Exam Tip Box -->
          <div class="inspector-box" style="background: #fff8e1; border-color: #ffe082; color: #664d03;">
            <div style="display: flex; gap: 10px; align-items: flex-start;">
              <span style="font-size: 24px;">💡</span>
              <div>
                <strong style="font-size: 0.95rem;">Consejo Clave de Examen PMP / CAPM:</strong>
                <p style="font-size: 0.88rem; margin-top: 4px; line-height: 1.45;">
                  ${d.examTip || 'El PMI evalúa intensamente el juicio situacional. Identifica siempre primero la causa raíz antes de emprender acciones correctivas.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.inspectorModal.classList.add("active");
    this.inspectorModal.querySelector("#inspector-close-x").onclick = () => {
      this.inspectorModal.classList.remove("active");
    };
  }
}

export function showToast(message) {
  let toast = document.querySelector(".coolors-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "coolors-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 2200);
}
