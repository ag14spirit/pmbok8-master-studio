import { audio } from "../audio.js";
import { icons } from "../icons.js";

export class OnboardingTour {
  constructor(modalBackdropEl, onNavigateTab) {
    this.modalBackdrop = modalBackdropEl;
    this.onNavigateTab = onNavigateTab;
    this.currentStep = 0;
    this.dockEl = null;

    this.steps = [
      {
        title: "Paso 1: Ruta Maestra de Estudio",
        badge: "Currículo en 18 Unidades",
        tabId: "curriculum",
        lead: "Estás viendo la pantalla principal de estudio dividida en las 3 grandes partes oficiales del libro.",
        details: [
          "Parte 1: El Estándar para la Dirección de Proyectos (Fundamentos, Sistema de Entrega y los 6 Principios).",
          "Parte 2: La Guía del PMBOK (Los 7 Dominios de Desempeño, Adaptación y Catálogo de Modelos).",
          "Parte 3: Apéndices Oficiales (IA en Proyectos, PMO Moderna, Adquisiciones y Evolución Histórica).",
          "Haz clic en cualquier tarjeta de unidad para desplegar su teoría, trampas de examen PMP y puntos de control."
        ]
      },
      {
        title: "Paso 2: Matriz de los 40 Procesos",
        badge: "Modelo Matricial 2D",
        tabId: "matrix",
        lead: "Observa la tabla en pantalla: cruza los 7 Dominios de Desempeño (filas) con las 5 Áreas de Enfoque (columnas).",
        details: [
          "Cada celda contiene los procesos activos de esa intersección (ej. #01 Iniciar Proyecto).",
          "Haz clic sobre cualquier proceso para ver su ficha técnica completa de Entradas, Herramientas y Salidas (ITTOs).",
          "Usa los botones superiores para cambiar entre Vista Matriz 2D, Vista por Dominio o el Explorador universal de ITTOs."
        ]
      },
      {
        title: "Paso 3: Presentaciones Oficiales",
        badge: "18 Decks • 180 Diapositivas",
        tabId: "presentations",
        lead: "Aquí dispones de una presentación ejecutiva visual de 10 láminas para cada punto del índice oficial.",
        details: [
          "18 Decks interactivos en formato 16:9 organizados por Parte 1, Parte 2 y Parte 3.",
          "Cada diapositiva incluye diagramas de flujo, comparativas de enfoque ágil vs predictivo y alertas PMP.",
          "Haz clic en 'Ver Presentación' en cualquier tarjeta para abrir el visor con soporte de teclado (flechas ← y →) y notas del orador."
        ]
      },
      {
        title: "Paso 4: Laboratorio de Valor Ganado (EVM)",
        badge: "Tabla 5-1 de Fórmulas Oficiales",
        tabId: "evm",
        lead: "Este es el simulador financiero para dominar las fórmulas matemáticas del examen PMP.",
        details: [
          "Gráfica interactiva de la Curva S que proyecta en tiempo real PV, EV, AC y el presupuesto BAC.",
          "Mueve los controles deslizantes a la izquierda para simular situaciones de sobrecosto o retraso.",
          "Revisa al instante los indicadores CPI, SPI, CV, SV, EAC y el índice de esfuerzo por completar TCPI."
        ]
      },
      {
        title: "Paso 5: Simulador de Examen PMP / CAPM",
        badge: "Banco de Juicio Situacional",
        tabId: "simulator",
        lead: "Entrena con preguntas situacionales reales calibradas al nivel de dificultad del examen oficial.",
        details: [
          "3 modalidades de práctica: Rápido (10 preguntas), Estándar (20 preguntas) y Extensivo (banco completo).",
          "Incluye cronómetro regresivo, marcado de preguntas con bandera y revisión detallada.",
          "Al finalizar, recibirás tu porcentaje de acierto frente al umbral de 75% con citas textuales del PMBOK 8."
        ]
      },
      {
        title: "Paso 6: Flashcards & Glosario",
        badge: "Memoria Activa & Diccionario",
        tabId: "flashcards",
        lead: "Refuerza tu retención conceptual con tarjetas interactivas 3D y búsqueda instantánea.",
        details: [
          "Modo Flashcards: Haz clic en la tarjeta para voltearla y evaluar tu nivel de dominio (Difícil, Regular, Dominado).",
          "Modo Diccionario: Búsqueda rápida de cualquier término oficial del glosario filtrado por categoría temática."
        ]
      },
      {
        title: "Paso 7: Apéndices Especializados",
        badge: "Nuevas Fronteras del PMBOK 8",
        tabId: "appendices",
        lead: "Análisis exhaustivo de los 4 apéndices modernos que incorporó la 8va edición de la Guía.",
        details: [
          "Apéndice X3: Inteligencia Artificial en Proyectos (Automatización, Aumento, Autonomía y Gobernanza Ética).",
          "Apéndice X2: La Oficina de Gestión de Proyectos (PMO) y su transformación en habilitadora de valor (VMO).",
          "Apéndice X4: Adquisiciones y contratos comerciales (Precio Fijo, Costos Reembolsables y T&M).",
          "Apéndice X5: Evolución Histórica de la Guía desde su primera edición."
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
            Paso ${this.currentStep + 1} de ${this.steps.length}
          </span>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-secondary); ">
            ${s.badge}
          </span>
        </div>

        <button class="icon-square-btn" id="tour-dock-close" title="Cerrar guía" style="width: 26px; height: 26px;">
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
            Qué estás viendo en esta pantalla:
          </span>
          <ul style="display: flex; flex-direction: column; gap: 7px; padding-left: 14px; font-size: 0.82rem; color: var(--text-primary); line-height: 1.45;">
            ${s.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="tour-companion-footer">
        <button class="action-chip-btn" id="tour-dock-skip" style="font-size: 0.76rem; padding: 5px 10px;">
          Finalizar Guía
        </button>

        <div style="display: flex; gap: 6px;">
          <button class="action-chip-btn" id="tour-dock-prev" ${isFirst ? 'disabled style="opacity: 0.4; pointer-events: none;"' : ''} style="font-size: 0.78rem; padding: 5px 10px;">
            ${icons.arrowLeft} Anterior
          </button>
          <button class="btn-primary-pro" id="tour-dock-next" style="font-size: 0.78rem; padding: 5px 12px;">
            ${isLast ? '¡Listo para Estudiar!' : 'Siguiente ' + icons.arrowRight}
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
