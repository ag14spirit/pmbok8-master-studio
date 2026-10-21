import { principles } from "./data/principles.js";
import { performanceDomains } from "./data/domains.js";
import { processes } from "./data/processes.js";
import { toolsAndTechniques } from "./data/tools.js";
import { appendices } from "./data/appendices.js";
import { audio } from "./audio.js";
import { showToast, getContrastColor } from "./coolors-generator.js";

export const CURATED_PALETTES = [
  {
    id: "pal-principles",
    title: "Los 6 Principios Refinados del PMBOK 8",
    category: "Principios",
    desc: "Alineación de mentalidad proactiva, sentido de propiedad y orientación a valor sostenible.",
    colors: ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"],
    items: [
      { type: "PRINCIPIO 1", ref: "Sección 3.3", title: "Adoptar Visión Holística", subtitle: "Navegar la complejidad sistémica", hex: "#264653", category: "principle", data: principles[0] },
      { type: "PRINCIPIO 2", ref: "Sección 3.4", title: "Enfocarse en el Valor", subtitle: "Maximizar beneficios sostenibles", hex: "#2A9D8F", category: "principle", data: principles[1] },
      { type: "PRINCIPIO 3", ref: "Sección 3.5", title: "Integrar la Calidad", subtitle: "Calidad en procesos y entregables", hex: "#E9C46A", category: "principle", data: principles[2] },
      { type: "PRINCIPIO 4", ref: "Sección 3.6", title: "Líder Responsable", subtitle: "Liderazgo y rendición de cuentas", hex: "#F4A261", category: "principle", data: principles[3] },
      { type: "PRINCIPIO 5", ref: "Sección 3.7", title: "Integrar Sostenibilidad", subtitle: "Impacto ambiental, social y ESG", hex: "#E76F51", category: "principle", data: principles[4] }
    ]
  },
  {
    id: "pal-governance",
    title: "Gobernanza y Control Integrado de Cambios",
    category: "Gobernanza",
    desc: "Los procesos y umbrales clave para la dirección, autorización y cambio de proyectos.",
    colors: ["#0077B6", "#0096C7", "#00B4D8", "#48CAE4", "#90E0EF"],
    items: [
      { type: "PROCESO #1", ref: "Gobernanza • Iniciación", title: "Iniciar Proyecto / Fase", subtitle: "Desarrollar el Project Charter", hex: "#0077B6", category: "process", data: processes[0] },
      { type: "PROCESO #3", ref: "Gobernanza • Planificación", title: "Planificar la Gobernanza", subtitle: "Estructura de toma de decisiones", hex: "#0096C7", category: "process", data: processes[2] },
      { type: "PROCESO #4", ref: "Gobernanza • Ejecución", title: "Dirigir el Trabajo", subtitle: "Ejecutar actividades planificadas", hex: "#00B4D8", category: "process", data: processes[3] },
      { type: "PROCESO #8", ref: "Gobernanza • M&C", title: "Control Integrado Cambios", subtitle: "Evaluar impacto antes de aprobar", hex: "#48CAE4", category: "process", data: processes[7] },
      { type: "PROCESO #9", ref: "Gobernanza • Cierre", title: "Cerrar Proyecto o Fase", subtitle: "Transferencia formal y lecciones", hex: "#90E0EF", category: "process", data: processes[8] }
    ]
  },
  {
    id: "pal-evm",
    title: "Finanzas & Laboratorio EVM (Tabla 5-1)",
    category: "Finanzas",
    desc: "Fórmulas maestras de Gestión del Valor Ganado para el examen PMP y control presupuestario.",
    colors: ["#1B4332", "#2D6A4F", "#40916C", "#52B788", "#74C69D"],
    items: [
      { type: "EVM • BASE", ref: "Tabla 5-1", title: "PV (Valor Planificado)", subtitle: toolsAndTechniques.evm[0].definition, hex: "#1B4332", category: "tool", data: toolsAndTechniques.evm[0] },
      { type: "EVM • BASE", ref: "Tabla 5-1", title: "EV (Valor Ganado)", subtitle: toolsAndTechniques.evm[1].definition, hex: "#2D6A4F", category: "tool", data: toolsAndTechniques.evm[1] },
      { type: "EVM • BASE", ref: "Tabla 5-1", title: "AC (Costo Real)", subtitle: toolsAndTechniques.evm[2].definition, hex: "#40916C", category: "tool", data: toolsAndTechniques.evm[2] },
      { type: "EVM • ÍNDICE", ref: "Tabla 5-1", title: "CPI = EV / AC", subtitle: toolsAndTechniques.evm[6].definition, hex: "#52B788", category: "tool", data: toolsAndTechniques.evm[6] },
      { type: "EVM • PRONÓSTICO", ref: "Tabla 5-1", title: "EAC = BAC / CPI", subtitle: toolsAndTechniques.evm[8].definition, hex: "#74C69D", category: "tool", data: toolsAndTechniques.evm[8] }
    ]
  },
  {
    id: "pal-schedule",
    title: "Cronograma, Ruta Crítica & Compresión",
    category: "Cronograma",
    desc: "Secuenciación, estimación de duraciones, análisis de holguras y técnicas de Crashing y Fast Tracking.",
    colors: ["#03045E", "#023E8A", "#0077B6", "#0096C7", "#00B4D8"],
    items: [
      { type: "PROCESO #16", ref: "Cronograma • Plan", title: "Planificar Cronograma", subtitle: processes[15].purpose, hex: "#03045E", category: "process", data: processes[15] },
      { type: "PROCESO #17", ref: "Cronograma • Plan", title: "Desarrollar Cronograma", subtitle: processes[16].purpose, hex: "#023E8A", category: "process", data: processes[16] },
      { type: "PROCESO #18", ref: "Cronograma • M&C", title: "Controlar Cronograma", subtitle: processes[17].purpose, hex: "#0077B6", category: "process", data: processes[17] },
      { type: "TÉCNICA", ref: "Figura 5-20", title: "Intensificación (Crashing)", subtitle: toolsAndTechniques.scheduleCompression[0].impact, hex: "#0096C7", category: "tool", data: toolsAndTechniques.scheduleCompression[0] },
      { type: "TÉCNICA", ref: "Figura 5-20", title: "Ejecución Rápida", subtitle: toolsAndTechniques.scheduleCompression[1].impact, hex: "#00B4D8", category: "tool", data: toolsAndTechniques.scheduleCompression[1] }
    ]
  },
  {
    id: "pal-ai",
    title: "Apéndice X3: Inteligencia Artificial en PM",
    category: "Apéndices",
    desc: "Niveles de automatización, aumento analítico, agentes autónomos y rendición de cuentas ética humana.",
    colors: ["#3A0CA3", "#4361EE", "#4CC9F0", "#F72585", "#7209B7"],
    items: [
      { type: "APÉNDICE X3", ref: "Sección X3.1", title: "Estrategias Adopción IA", subtitle: appendices.x3_ai.topics[0].text, hex: "#3A0CA3", category: "tool", data: appendices.x3_ai.topics[0] },
      { type: "APÉNDICE X3", ref: "Tabla X3-1", title: "Automatización", subtitle: "Tareas repetitivas, actas y minutas", hex: "#4361EE", category: "tool", data: appendices.x3_ai.topics[1] },
      { type: "APÉNDICE X3", ref: "Tabla X3-1", title: "Aumento Analítico", subtitle: "Modelado probabilístico y riesgos", hex: "#4CC9F0", category: "tool", data: appendices.x3_ai.topics[1] },
      { type: "APÉNDICE X3", ref: "Sección X3.3", title: "Ética y Mitigación Sesgos", subtitle: "Privacidad y equidad algorítmica", hex: "#F72585", category: "tool", data: appendices.x3_ai.topics[2] },
      { type: "APÉNDICE X3", ref: "Sección X3.3", title: "Rendición de Cuentas", subtitle: "Responsabilidad humana indelegable", hex: "#7209B7", category: "tool", data: appendices.x3_ai.topics[2] }
    ]
  },
  {
    id: "pal-procurement",
    title: "Apéndice X4: Adquisiciones & Contratos",
    category: "Apéndices",
    desc: "Análisis Make-or-Buy, conferencias de oferentes, contratos Precio Fijo y administración de reclamaciones.",
    colors: ["#D90429", "#EF233C", "#2B2D42", "#8D99AE", "#EDF2F4"],
    items: [
      { type: "APÉNDICE X4", ref: "Sección X4.2", title: "Fabricar o Comprar", subtitle: appendices.x4_procurement.topics[0].text, hex: "#D90429", category: "tool", data: appendices.x4_procurement.topics[0] },
      { type: "APÉNDICE X4", ref: "Sección X4.4", title: "Licitaciones (RFP/RFQ)", subtitle: appendices.x4_procurement.topics[1].text, hex: "#EF233C", category: "tool", data: appendices.x4_procurement.topics[1] },
      { type: "CONTRATO", ref: "Sección X4.8", title: "Precio Fijo Firme (FFP)", subtitle: "El vendedor asume el riesgo de costos", hex: "#2B2D42", category: "tool", data: appendices.x4_procurement.topics[2] },
      { type: "CONTRATO", ref: "Sección X4.8", title: "Costos Reembolsables", subtitle: "El comprador asume el riesgo financiero", hex: "#8D99AE", category: "tool", data: appendices.x4_procurement.topics[2] },
      { type: "DISPUTAS", ref: "Sección X4.10", title: "Gestión Reclamaciones", subtitle: appendices.x4_procurement.topics[3].text, hex: "#EDF2F4", category: "tool", data: appendices.x4_procurement.topics[3] }
    ]
  }
];

export function renderCoolorsExplore(containerEl, onOpenInGenerator) {
  let searchQuery = "";
  let activeCat = "all";

  const categories = ["all", "Principios", "Gobernanza", "Finanzas", "Cronograma", "Apéndices"];

  const renderUI = () => {
    const filtered = CURATED_PALETTES.filter(p =>
      (activeCat === "all" || p.category === activeCat) &&
      (searchQuery === "" ||
       p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       p.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    containerEl.innerHTML = `
      <div class="explore-toolbar">
        <div>
          <h2 style="font-size: 1.6rem; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 4px;">
            Explorar Paletas de Estudio PMBOK® 8
          </h2>
          <p style="color: #666; font-size: 0.9rem;">
            Colecciones curadas de conceptos, procesos y fórmulas para el examen PMP y CAPM.
          </p>
        </div>

        <div class="explore-search-box">
          <span class="icon">🔍</span>
          <input type="text" id="explore-search-input" placeholder="Buscar paleta temática..." value="${searchQuery}">
        </div>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${categories.map(c => `
          <button class="coolors-tab-btn ${activeCat === c ? 'active' : ''}" data-cat="${c}" style="border: 1px solid var(--coolors-border);">
            ${c === 'all' ? 'Todas las Paletas' : c}
          </button>
        `).join('')}
      </div>

      <div class="explore-grid">
        ${filtered.map(palette => `
          <div class="palette-card">
            <!-- 5-Color Swatches Strip -->
            <div class="palette-swatches-strip" data-pal-id="${palette.id}">
              ${palette.colors.map(c => `
                <div class="swatch-bar" style="background-color: ${c}; color: ${getContrastColor(c)};">
                  <span>${c}</span>
                </div>
              `).join('')}
            </div>

            <div class="palette-info">
              <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--coolors-primary); letter-spacing: 0.05em;">
                ${palette.category}
              </span>
              <h3 class="palette-title">${palette.title}</h3>
              <p class="palette-desc">${palette.desc}</p>

              <div class="palette-footer">
                <button class="coolors-btn copy-pal-btn" data-pal-id="${palette.id}">
                  📋 Copiar
                </button>
                <button class="open-in-gen-btn" data-pal-id="${palette.id}">
                  Abrir en Generador ▶
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Events
    const searchInput = containerEl.querySelector("#explore-search-input");
    searchInput.oninput = (e) => {
      searchQuery = e.target.value;
      renderUI();
      const newInp = containerEl.querySelector("#explore-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    containerEl.querySelectorAll("[data-cat]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeCat = btn.dataset.cat;
        renderUI();
      };
    });

    containerEl.querySelectorAll(".open-in-gen-btn, .palette-swatches-strip").forEach(el => {
      el.onclick = () => {
        audio.playPop();
        const palId = el.dataset.palId;
        const pal = CURATED_PALETTES.find(p => p.id === palId);
        if (pal) {
          onOpenInGenerator(pal.items);
          showToast(`¡Paleta cargada en el Generador!`);
        }
      };
    });

    containerEl.querySelectorAll(".copy-pal-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const palId = btn.dataset.palId;
        const pal = CURATED_PALETTES.find(p => p.id === palId);
        if (pal) {
          const hexString = pal.colors.join(", ");
          navigator.clipboard.writeText(`${pal.title}: ${hexString}`);
          audio.playCorrect();
          showToast(`¡Colores ${hexString} copiados!`);
        }
      };
    });
  };

  renderUI();
}
