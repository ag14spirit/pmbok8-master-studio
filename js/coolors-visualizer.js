import { questions } from "./data/questions.js";
import { audio } from "./audio.js";
import { getContrastColor, showToast } from "./coolors-generator.js";

export function renderCoolorsVisualizer(containerEl, activeColumns) {
  const c = activeColumns.map(col => col.hex);
  const t = activeColumns.map(col => getContrastColor(col.hex));

  let currentQuestionIdx = 0;
  const sampleQuestion = questions[0];

  containerEl.innerHTML = `
    <div style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 14px;">
      <div>
        <h2 style="font-size: 1.6rem; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 4px;">
          Visualizador de Aplicación Práctica PMBOK® 8
        </h2>
        <p style="color: #666; font-size: 0.9rem;">
          Comprueba cómo interactúan los conceptos de tu paleta activa en un panel ejecutivo real y en una simulación de examen PMP.
        </p>
      </div>

      <!-- Mini palette ribbon -->
      <div style="display: flex; height: 36px; border-radius: var(--coolors-radius-s); overflow: hidden; box-shadow: var(--coolors-shadow-s);">
        ${c.map((color, i) => `
          <div style="width: 50px; height: 100%; background-color: ${color}; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; color: ${t[i]};">
            ${color.slice(1)}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Live Project Cockpit Styled with Active Palette -->
    <div style="background: var(--coolors-bg); border: 2px solid ${c[0]}; border-radius: var(--coolors-radius-l); overflow: hidden; box-shadow: var(--coolors-shadow-m); margin-bottom: 32px;">
      <!-- Dashboard Top Header Bar -->
      <div style="background-color: ${c[0]}; color: ${t[0]}; padding: 18px 24px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 14px; height: 14px; border-radius: 50%; background-color: ${c[2]};"></div>
          <h3 style="font-size: 1.15rem; font-weight: 900;">Panel Ejecutivo • Proyecto Transformación Digital</h3>
        </div>
        <span style="font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 99px; background: rgba(255,255,255,0.2);">
          FASE: EJECUCIÓN
        </span>
      </div>

      <!-- Dashboard Widgets Grid -->
      <div style="padding: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        <!-- Widget 1: CPI Metric -->
        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-left: 6px solid ${c[1]}; border-radius: var(--coolors-radius-m); padding: 18px;">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${c[1]};">Desempeño del Costo</span>
          <div style="font-size: 2.2rem; font-weight: 900; margin: 4px 0;">CPI 1.08</div>
          <p style="font-size: 0.82rem; color: #666;">Por debajo del presupuesto autorizado (Ahorro de $12,400).</p>
        </div>

        <!-- Widget 2: SPI Metric -->
        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-left: 6px solid ${c[2]}; border-radius: var(--coolors-radius-m); padding: 18px;">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${c[2]};">Desempeño del Cronograma</span>
          <div style="font-size: 2.2rem; font-weight: 900; margin: 4px 0;">SPI 1.02</div>
          <p style="font-size: 0.82rem; color: #666;">Ruta crítica adelantada 3 días respecto a la línea base.</p>
        </div>

        <!-- Widget 3: Principle in Action -->
        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-left: 6px solid ${c[3]}; border-radius: var(--coolors-radius-m); padding: 18px;">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${c[3]};">Principio Aplicado</span>
          <div style="font-size: 1.15rem; font-weight: 800; margin: 4px 0;">Enfocarse en el Valor</div>
          <p style="font-size: 0.82rem; color: #666;">Releases quincenales priorizados por valor neto para el cliente.</p>
        </div>

        <!-- Widget 4: Active Risk -->
        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-left: 6px solid ${c[4]}; border-radius: var(--coolors-radius-m); padding: 18px;">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${c[4]};">Respuesta a Riesgos</span>
          <div style="font-size: 1.15rem; font-weight: 800; margin: 4px 0;">Mitigación Activa</div>
          <p style="font-size: 0.82rem; color: #666;">Segunda fuente de suministro validada bajo contrato FFP.</p>
        </div>
      </div>
    </div>

    <!-- Interactive PMP Situational Question Themed with Palette -->
    <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-l); padding: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: ${c[0]}; letter-spacing: 0.05em;">
          Simulador de Juicio Profesional PMP • ${sampleQuestion.sectionRef}
        </span>
        <span style="background: ${c[1]}; color: ${t[1]}; padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 800;">
          DIFICULTAD: ALTA
        </span>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px; line-height: 1.35;">
        ${sampleQuestion.title}
      </h3>

      <div style="background: var(--coolors-bg); padding: 14px 18px; border-radius: var(--coolors-radius-m); border-left: 4px solid ${c[2]}; font-size: 0.92rem; color: #555; margin-bottom: 20px;">
        ${sampleQuestion.context}
      </div>

      <!-- Options List -->
      <div style="display: flex; flex-direction: column; gap: 10px;" id="vis-options-list">
        ${sampleQuestion.options.map((opt, i) => `
          <div class="vis-option-row" data-opt-idx="${i}" style="background: var(--coolors-bg); border: 2px solid var(--coolors-border); padding: 14px 18px; border-radius: var(--coolors-radius-m); cursor: pointer; display: flex; align-items: center; gap: 14px; font-weight: 600; font-size: 0.92rem; transition: all 0.15s ease;">
            <div style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #aaa; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.8rem; flex-shrink: 0;">
              ${['A', 'B', 'C', 'D'][i]}
            </div>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>

      <!-- Feedback Area -->
      <div id="vis-feedback-box" style="margin-top: 18px; display: none;"></div>
    </div>
  `;

  // Attach options interactions
  const optionRows = containerEl.querySelectorAll(".vis-option-row");
  const feedbackBox = containerEl.querySelector("#vis-feedback-box");

  optionRows.forEach(row => {
    row.onclick = () => {
      const selectedIdx = parseInt(row.dataset.optIdx, 10);
      const isCorrect = selectedIdx === sampleQuestion.answerIndex;

      optionRows.forEach(r => {
        r.style.borderColor = "var(--coolors-border)";
        r.style.background = "var(--coolors-bg)";
      });

      if (isCorrect) {
        audio.playCorrect();
        row.style.borderColor = "#198754";
        row.style.background = "#d1e7dd";
        feedbackBox.innerHTML = `
          <div style="background: #d1e7dd; color: #0f5132; padding: 16px; border-radius: var(--coolors-radius-m); border-left: 5px solid #198754;">
            <strong>🎉 ¡Respuesta Correcta!</strong>
            <p style="font-size: 0.88rem; margin-top: 4px;">${sampleQuestion.explanation}</p>
          </div>
        `;
      } else {
        audio.playIncorrect();
        row.style.borderColor = "#dc3545";
        row.style.background = "#f8d7da";
        feedbackBox.innerHTML = `
          <div style="background: #f8d7da; color: #842029; padding: 16px; border-radius: var(--coolors-radius-m); border-left: 5px solid #dc3545;">
            <strong>⚠️ Respuesta Incorrecta</strong>
            <p style="font-size: 0.88rem; margin-top: 4px;">${sampleQuestion.explanation}</p>
          </div>
        `;
      }
      feedbackBox.style.display = "block";
    };
  });
}
