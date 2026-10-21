import { audio } from "./audio.js";
import { showToast } from "./coolors-generator.js";

export function renderCoolorsEVM(containerEl) {
  let BAC = 100000;
  let PV = 50000;
  let EV = 45000;
  let AC = 48000;

  const calculate = () => {
    const CV = EV - AC;
    const SV = EV - PV;
    const CPI = AC > 0 ? (EV / AC) : 1;
    const SPI = PV > 0 ? (EV / PV) : 1;
    const EAC = CPI > 0 ? (BAC / CPI) : BAC;
    const ETC = Math.max(0, EAC - AC);
    const VAC = BAC - EAC;
    const TCPI = (BAC - AC) > 0 ? ((BAC - EV) / (BAC - AC)) : 1;

    let cpiBadge = { text: "EFICIENTE (AHORRO)", color: "#198754", bg: "#d1e7dd" };
    if (CPI < 0.9) cpiBadge = { text: "CRÍTICO (SOBRECOSTO)", color: "#dc3545", bg: "#f8d7da" };
    else if (CPI < 1.0) cpiBadge = { text: "ATENCIÓN LEVE", color: "#664d03", bg: "#fff3cd" };

    let spiBadge = { text: "ADELANTADO", color: "#198754", bg: "#d1e7dd" };
    if (SPI < 0.9) spiBadge = { text: "CRÍTICO (RETRASO)", color: "#dc3545", bg: "#f8d7da" };
    else if (SPI < 1.0) spiBadge = { text: "ATENCIÓN LEVE", color: "#664d03", bg: "#fff3cd" };

    return { CV, SV, CPI, SPI, EAC, ETC, VAC, TCPI, cpiBadge, spiBadge };
  };

  const render = () => {
    const res = calculate();

    containerEl.innerHTML = `
      <div style="margin-bottom: 28px;">
        <h2 style="font-size: 1.6rem; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 4px;">
          Calculadora de Valor Ganado (EVM) • Tabla 5-1
        </h2>
        <p style="color: #666; font-size: 0.9rem;">
          Inspirada en el Contrast Checker de Coolors: ajusta los parámetros del proyecto y evalúa la salud en tiempo real.
        </p>
      </div>

      <!-- Presets Toolbar -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="coolors-btn" id="evm-p-healthy">🌟 Caso Saludable</button>
        <button class="coolors-btn" id="evm-p-crisis">🚨 Caso Crisis</button>
        <button class="coolors-btn" id="evm-p-overbudget">💸 Rápido pero Caro</button>
        <button class="coolors-btn" id="evm-p-behind">🐢 Lento pero Económico</button>
      </div>

      <!-- Giant Coolors-style Rating Hero Cards -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px;">
        <!-- Cost Performance Index CPI -->
        <div style="background: var(--coolors-surface); border: 2px solid ${res.cpiBadge.color}; border-radius: var(--coolors-radius-l); padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">Índice de Costo (CPI = EV / AC)</span>
            <span style="background: ${res.cpiBadge.bg}; color: ${res.cpiBadge.color}; padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 800;">
              ${res.cpiBadge.text}
            </span>
          </div>
          <div style="font-size: 3.5rem; font-weight: 900; color: ${res.cpiBadge.color}; margin: 12px 0;">
            ${res.CPI.toFixed(2)}
          </div>
          <p style="font-size: 0.85rem; color: #666;">
            Obtienes <strong>$${res.CPI.toFixed(2)}</strong> de valor de trabajo por cada $1.00 gastado.
          </p>
        </div>

        <!-- Schedule Performance Index SPI -->
        <div style="background: var(--coolors-surface); border: 2px solid ${res.spiBadge.color}; border-radius: var(--coolors-radius-l); padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">Índice Cronograma (SPI = EV / PV)</span>
            <span style="background: ${res.spiBadge.bg}; color: ${res.spiBadge.color}; padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 800;">
              ${res.spiBadge.text}
            </span>
          </div>
          <div style="font-size: 3.5rem; font-weight: 900; color: ${res.spiBadge.color}; margin: 12px 0;">
            ${res.SPI.toFixed(2)}
          </div>
          <p style="font-size: 0.85rem; color: #666;">
            El proyecto avanza al <strong>${Math.round(res.SPI * 100)}%</strong> del ritmo planificado originalmente.
          </p>
        </div>
      </div>

      <!-- Sliders Panel -->
      <div style="background: var(--coolors-bg); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-l); padding: 28px; box-shadow: var(--coolors-shadow-s); margin-bottom: 32px;">
        <h3 style="font-size: 1.15rem; font-weight: 900; margin-bottom: 20px;">Ajustar Parámetros Base del Proyecto</h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
          <!-- BAC -->
          <div>
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; margin-bottom: 8px;">
              <span>BAC (Presupuesto Total)</span>
              <span style="color: var(--coolors-primary); font-weight: 900;">$${BAC.toLocaleString()}</span>
            </div>
            <input type="range" id="c-slider-bac" min="10000" max="500000" step="5000" value="${BAC}" style="width: 100%; accent-color: var(--coolors-primary);">
          </div>

          <!-- PV -->
          <div>
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; margin-bottom: 8px;">
              <span>PV (Planificado a la fecha)</span>
              <span style="color: #0077b6; font-weight: 900;">$${PV.toLocaleString()}</span>
            </div>
            <input type="range" id="c-slider-pv" min="5000" max="${BAC}" step="1000" value="${PV}" style="width: 100%; accent-color: #0077b6;">
          </div>

          <!-- EV -->
          <div>
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; margin-bottom: 8px;">
              <span>EV (Ganado a la fecha)</span>
              <span style="color: #198754; font-weight: 900;">$${EV.toLocaleString()}</span>
            </div>
            <input type="range" id="c-slider-ev" min="0" max="${BAC}" step="1000" value="${EV}" style="width: 100%; accent-color: #198754;">
          </div>

          <!-- AC -->
          <div>
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; margin-bottom: 8px;">
              <span>AC (Costo Real incurrido)</span>
              <span style="color: #dc3545; font-weight: 900;">$${AC.toLocaleString()}</span>
            </div>
            <input type="range" id="c-slider-ac" min="1000" max="${BAC * 1.5}" step="1000" value="${AC}" style="width: 100%; accent-color: #dc3545;">
          </div>
        </div>
      </div>

      <!-- Complete Formulas Metrics Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-m); padding: 16px;">
          <span style="font-size: 0.75rem; color: #666; font-weight: 700;">CV (EV - AC)</span>
          <div style="font-size: 1.5rem; font-weight: 900; color: ${res.CV >= 0 ? '#198754' : '#dc3545'}; margin: 4px 0;">
            ${res.CV >= 0 ? '+' : ''}$${Math.round(res.CV).toLocaleString()}
          </div>
          <span style="font-size: 0.75rem; color: #888;">Variación de Costo</span>
        </div>

        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-m); padding: 16px;">
          <span style="font-size: 0.75rem; color: #666; font-weight: 700;">SV (EV - PV)</span>
          <div style="font-size: 1.5rem; font-weight: 900; color: ${res.SV >= 0 ? '#198754' : '#dc3545'}; margin: 4px 0;">
            ${res.SV >= 0 ? '+' : ''}$${Math.round(res.SV).toLocaleString()}
          </div>
          <span style="font-size: 0.75rem; color: #888;">Variación de Cronograma</span>
        </div>

        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-m); padding: 16px;">
          <span style="font-size: 0.75rem; color: #666; font-weight: 700;">EAC (BAC / CPI)</span>
          <div style="font-size: 1.5rem; font-weight: 900; margin: 4px 0;">
            $${Math.round(res.EAC).toLocaleString()}
          </div>
          <span style="font-size: 0.75rem; color: #888;">Estimación a Conclusión</span>
        </div>

        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-m); padding: 16px;">
          <span style="font-size: 0.75rem; color: #666; font-weight: 700;">VAC (BAC - EAC)</span>
          <div style="font-size: 1.5rem; font-weight: 900; color: ${res.VAC >= 0 ? '#198754' : '#dc3545'}; margin: 4px 0;">
            ${res.VAC >= 0 ? '+' : ''}$${Math.round(res.VAC).toLocaleString()}
          </div>
          <span style="font-size: 0.75rem; color: #888;">Variación a la Conclusión</span>
        </div>

        <div style="background: var(--coolors-surface); border: 1px solid var(--coolors-border); border-radius: var(--coolors-radius-m); padding: 16px;">
          <span style="font-size: 0.75rem; color: #666; font-weight: 700;">TCPI (Trabajo por Completar)</span>
          <div style="font-size: 1.5rem; font-weight: 900; margin: 4px 0;">
            ${res.TCPI.toFixed(2)}
          </div>
          <span style="font-size: 0.75rem; color: #888;">${res.TCPI <= 1 ? 'Meta factible' : 'Exige mayor eficiencia'}</span>
        </div>
      </div>
    `;

    // Sliders
    containerEl.querySelector("#c-slider-bac").oninput = (e) => { BAC = parseInt(e.target.value); render(); };
    containerEl.querySelector("#c-slider-pv").oninput = (e) => { PV = parseInt(e.target.value); render(); };
    containerEl.querySelector("#c-slider-ev").oninput = (e) => { EV = parseInt(e.target.value); render(); };
    containerEl.querySelector("#c-slider-ac").oninput = (e) => { AC = parseInt(e.target.value); render(); };

    // Presets
    containerEl.querySelector("#evm-p-healthy").onclick = () => {
      audio.playPop(); BAC = 100000; PV = 50000; EV = 60000; AC = 52000; render();
    };
    containerEl.querySelector("#evm-p-crisis").onclick = () => {
      audio.playPop(); BAC = 100000; PV = 60000; EV = 40000; AC = 55000; render();
    };
    containerEl.querySelector("#evm-p-overbudget").onclick = () => {
      audio.playPop(); BAC = 100000; PV = 45000; EV = 55000; AC = 65000; render();
    };
    containerEl.querySelector("#evm-p-behind").onclick = () => {
      audio.playPop(); BAC = 100000; PV = 60000; EV = 48000; AC = 42000; render();
    };
  };

  render();
}
