import { curriculum } from "../data/curriculum.js";
import { questions } from "../data/questions.js";
import { presentationDecks } from "../data/presentations.js";
import { audio } from "../audio.js";
import { icons } from "../icons.js";

export class LearningHub {
  constructor(containerEl, modalBackdropEl, onProgressUpdate) {
    this.container = containerEl;
    this.modalBackdrop = modalBackdropEl;
    this.onProgressUpdate = onProgressUpdate;
    this.completedUnits = new Set(JSON.parse(localStorage.getItem("pmbok8_completed_units") || "[]"));
    this.filterPart = "all";
  }

  saveProgress() {
    localStorage.setItem("pmbok8_completed_units", JSON.stringify([...this.completedUnits]));
    if (this.onProgressUpdate) {
      let total = 0;
      curriculum.parts.forEach(p => total += p.units.length);
      this.onProgressUpdate(this.completedUnits.size, total);
    }
  }

  render() {
    let totalUnits = 0;
    curriculum.parts.forEach(p => totalUnits += p.units.length);
    const completedCount = this.completedUnits.size;
    const progressPercent = Math.round((completedCount / totalUnits) * 100);

    const partBadges = [
      "Parte 1 • Estándar ANSI/PMI",
      "Parte 2 • Guía del PMBOK®",
      "Parte 3 • Apéndices Especiales"
    ];

    this.container.innerHTML = `
      <!-- Hero Header -->
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>Ruta Maestra de Estudio • PMBOK® 8va Edición</h1>
          <p>
            Programa oficial completo alineado al estándar ANSI/PMI 99-001-2025. Incluye los 6 principios rectores, los 7 dominios de desempeño, los 40 procesos y los nuevos apéndices de IA y PMO.
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${completedCount}/${totalUnits}</span>
            <span class="stat-label">Unidades Dominadas</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-teal);">${progressPercent}%</span>
            <span class="stat-label">Progreso Global</span>
          </div>
        </div>
      </div>

      <!-- Parts Container -->
      <div style="display: flex; flex-direction: column; gap: 36px;">
        ${curriculum.parts.map((part, pIdx) => `
          <section class="part-section-group">
            <div class="part-section-header">
              <span class="part-badge part-badge-${pIdx + 1}">
                ${partBadges[pIdx]}
              </span>
              <h2 class="part-title">${part.title}</h2>
              <p class="part-description">${part.description || 'Eje fundamental del conocimiento oficial para la dirección de proyectos y preparación PMP.'}</p>
            </div>

            <div class="units-grid">
              ${part.units.map(unit => {
                const isDone = this.completedUnits.has(unit.id);
                const lessonsCount = unit.lessons ? unit.lessons.length : 0;
                const estTime = unit.lessons ? unit.lessons.reduce((acc, l) => acc + (l.timeMin || 5), 0) : 15;
                const descText = unit.description || 'Fundamento oficial del PMBOK 8va edición para la gestión efectiva de proyectos.';

                return `
                  <div class="unit-card-pro ${isDone ? 'is-done' : ''}" data-unit-id="${unit.id}">
                    <div>
                      <div class="unit-card-top">
                        <span class="unit-ref-badge">${unit.sectionRef}</span>
                        <span class="unit-duration-pill">${estTime} min • ${lessonsCount} lecciones</span>
                      </div>

                      <h3 class="unit-title">${unit.title}</h3>
                      <p class="unit-summary">${descText}</p>

                      <!-- Key topics bullet preview -->
                      ${unit.lessons && unit.lessons.length > 0 ? `
                        <div class="unit-lessons-preview">
                          ${unit.lessons.slice(0, 3).map(l => `
                            <div class="lesson-bullet-item">
                              <span class="bullet-dot"></span>
                              <span>${l.title}</span>
                            </div>
                          `).join('')}
                          ${unit.lessons.length > 3 ? `
                            <div class="lesson-bullet-more">+${unit.lessons.length - 3} lecciones más</div>
                          ` : ''}
                        </div>
                      ` : ''}
                    </div>

                    <div class="unit-card-footer">
                      <span class="unit-status-indicator ${isDone ? 'done' : ''}">
                        ${isDone ? '<span class="status-icon-done">' + icons.check + '</span> Dominada' : '<span class="status-icon-pending"></span> Pendiente'}
                      </span>

                      <div style="display: flex; gap: 8px;">
                        <button class="unit-slides-btn" data-unit-id="${unit.id}" title="Ver las 10 diapositivas visuales de este tema">
                          Diapositivas
                        </button>
                        <button class="btn-primary-pro unit-study-btn" data-unit-id="${unit.id}">
                          ${isDone ? 'Repasar' : 'Estudiar'} ${icons.arrowRight}
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `;

    // Click events on Study Buttons
    this.container.querySelectorAll(".unit-study-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const uId = btn.dataset.unitId;
        this.openUnitModal(uId);
      };
    });

    // Click on entire card
    this.container.querySelectorAll(".unit-card-pro").forEach(card => {
      card.onclick = (e) => {
        if (e.target.closest(".unit-slides-btn")) return;
        audio.playPop();
        const uId = card.dataset.unitId;
        this.openUnitModal(uId);
      };
    });

    // Click on Direct Slides Button
    this.container.querySelectorAll(".unit-slides-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const uId = btn.dataset.unitId;
        // Trigger presentation tab and open deck
        const presTabBtn = document.querySelector('.nav-tab-btn[data-tab="presentations"]');
        if (presTabBtn) {
          presTabBtn.click();
          // Give view a brief tick to mount, then click the matching deck
          setTimeout(() => {
            const deckCard = document.querySelector(`.unit-card-pro[data-deck-id="deck-${uId}"] .start-deck-btn`);
            if (deckCard) deckCard.click();
          }, 60);
        }
      };
    });
  }

  openUnitModal(unitId) {
    let targetUnit = null;
    curriculum.parts.forEach(p => {
      const u = p.units.find(item => item.id === unitId);
      if (u) targetUnit = u;
    });

    if (!targetUnit) return;
    const q = questions.find(item => item.unitId === unitId) || questions[0];
    const isDone = this.completedUnits.has(unitId);

    this.modalBackdrop.innerHTML = `
      <div class="modal-window-card" style="max-width: 860px;">
        <div class="modal-window-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="brand-tag">${targetUnit.sectionRef}</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">${targetUnit.title}</h3>
          </div>
          <button class="icon-square-btn" id="close-lesson-x" title="Cerrar ventana">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <!-- Unit Overview -->
          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px 20px; margin-bottom: 20px;">
            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              Descripción Oficial del Tema • PMBOK® 8
            </span>
            <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-primary);">
              ${targetUnit.description}
            </p>
          </div>

          <!-- Lessons List -->
          ${targetUnit.lessons && targetUnit.lessons.length > 0 ? `
            <div style="margin-bottom: 24px;">
              <h4 style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-tertiary); letter-spacing: 0.05em; margin-bottom: 12px;">
                Lecciones del Estándar (${targetUnit.lessons.length})
              </h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${targetUnit.lessons.map((les, lIdx) => `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); padding: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <span style="font-size: 0.75rem; font-family: var(--font-mono); font-weight: 700; color: var(--c-blue); background: var(--c-blue-subtle); padding: 2px 7px; border-radius: var(--radius-xs);">
                        Sección ${les.section}
                      </span>
                      <strong style="font-size: 0.96rem; color: var(--text-primary); flex: 1; margin-left: 10px;">${les.title}</strong>
                      <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 600;">${les.timeMin || 5} min</span>
                    </div>

                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 10px;">
                      ${les.summary}
                    </p>

                    ${les.points && les.points.length > 0 ? `
                      <ul style="display: flex; flex-direction: column; gap: 6px; padding-left: 18px; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.45; margin-bottom: 10px;">
                        ${les.points.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    ` : ''}

                    ${les.examTip ? `
                      <div style="background: var(--c-amber-subtle); border-left: 3px solid var(--c-amber); padding: 8px 12px; border-radius: var(--radius-xs); font-size: 0.8rem; color: #78350F; line-height: 1.4;">
                        <strong>Tip de Examen:</strong> ${les.examTip}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Practice Question Checkpoint -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em;">
                Punto de Control Situacional PMP
              </span>
              <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 600;">
                Pregunta Oficial de Validación
              </span>
            </div>

            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 10px; line-height: 1.35; color: var(--text-primary);">
              ${q.title}
            </h4>
            ${q.context ? `<p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px; background: var(--bg-surface-subtle); padding: 12px 14px; border-radius: var(--radius-s); line-height: 1.5;">${q.context}</p>` : ''}

            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${q.options.map((opt, i) => `
                <div class="quiz-option-row" data-idx="${i}" style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 12px 16px; border-radius: var(--radius-s); cursor: pointer; display: flex; align-items: center; gap: 12px; font-size: 0.88rem; transition: all 0.15s ease;">
                  <span style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;">
                    ${['A', 'B', 'C', 'D'][i]}
                  </span>
                  <span>${opt}</span>
                </div>
              `).join('')}
            </div>

            <div id="checkpoint-feedback" style="margin-top: 14px; display: none;"></div>
          </div>
        </div>

        <div class="modal-window-footer" style="justify-content: space-between;">
          <button class="action-chip-btn" id="open-slides-from-modal-btn">
            Ver 10 Diapositivas de este Tema ${icons.arrowRight}
          </button>

          <button class="btn-primary-pro" id="finish-lesson-btn">
            ${isDone ? 'Unidad Marcada como Dominada' : 'Marcar Unidad como Dominada'}
          </button>
        </div>
      </div>
    `;

    this.modalBackdrop.classList.add("active");

    this.modalBackdrop.querySelector("#close-lesson-x").onclick = () => {
      this.modalBackdrop.classList.remove("active");
    };

    // Open slides from inside modal
    this.modalBackdrop.querySelector("#open-slides-from-modal-btn").onclick = () => {
      this.modalBackdrop.classList.remove("active");
      const presTabBtn = document.querySelector('.nav-tab-btn[data-tab="presentations"]');
      if (presTabBtn) {
        presTabBtn.click();
        setTimeout(() => {
          const deckCard = document.querySelector(`.unit-card-pro[data-deck-id="deck-${unitId}"] .start-deck-btn`);
          if (deckCard) deckCard.click();
        }, 60);
      }
    };

    // Quiz evaluation
    const optRows = this.modalBackdrop.querySelectorAll(".quiz-option-row");
    const fbBox = this.modalBackdrop.querySelector("#checkpoint-feedback");

    optRows.forEach(row => {
      row.onclick = () => {
        const choice = parseInt(row.dataset.idx, 10);
        const isCorrect = choice === q.answerIndex;

        optRows.forEach(r => {
          r.style.borderColor = "var(--border-medium)";
          r.style.background = "var(--bg-surface)";
        });

        if (isCorrect) {
          audio.playCorrect();
          row.style.borderColor = "var(--c-teal)";
          row.style.background = "var(--c-teal-subtle)";
          fbBox.innerHTML = `
            <div style="background: var(--c-teal-subtle); border-left: 3px solid var(--c-teal); padding: 12px 16px; border-radius: var(--radius-s); font-size: 0.85rem; color: var(--text-primary); line-height: 1.45;">
              <strong style="color: var(--c-teal); display: block; margin-bottom: 2px;">Respuesta Correcta:</strong>
              ${q.explanation}
            </div>
          `;
        } else {
          audio.playIncorrect();
          row.style.borderColor = "var(--c-rose)";
          row.style.background = "var(--c-rose-subtle)";
          fbBox.innerHTML = `
            <div style="background: var(--c-rose-subtle); border-left: 3px solid var(--c-rose); padding: 12px 16px; border-radius: var(--radius-s); font-size: 0.85rem; color: var(--text-primary); line-height: 1.45;">
              <strong style="color: var(--c-rose); display: block; margin-bottom: 2px;">Respuesta Incorrecta:</strong>
              ${q.explanation}
            </div>
          `;
        }
        fbBox.style.display = "block";
      };
    });

    this.modalBackdrop.querySelector("#finish-lesson-btn").onclick = () => {
      audio.playVictory();
      this.completedUnits.add(unitId);
      this.saveProgress();
      this.modalBackdrop.classList.remove("active");
      this.render();
    };
  }
}
