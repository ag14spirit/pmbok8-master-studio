import { audio } from "../audio.js";
import { icons } from "../icons.js";

export function renderEVMLabPro(containerEl) {
  // Base State Variables
  let BAC = 100000; // Presupuesto Total Autorizado
  let PV = 50000;   // Valor Planificado a la fecha
  let EV = 45000;   // Valor Ganado físico real
  let AC = 48000;   // Costo Real contable

  const calculateEVM = () => {
    const CV = EV - AC;
    const SV = EV - PV;
    const CPI = AC > 0 ? EV / AC : 1;
    const SPI = PV > 0 ? EV / PV : 1;
    const EAC = CPI > 0 ? BAC / CPI : BAC;
    const ETC = EAC - AC;
    const VAC = BAC - EAC;
    const TCPI = (BAC - AC) > 0 ? (BAC - EV) / (BAC - AC) : 1;

    // Health interpretation
    let costHealth = {
      status: "Saludable",
      badgeColor: "var(--c-teal)",
      badgeBg: "var(--c-teal-subtle)",
      message: `Bajo control. Por cada $1.00 gastado, el proyecto entrega $${CPI.toFixed(2)} de valor tangible.`
    };
    if (CPI < 0.90) {
      costHealth = {
        status: "Sobrecosto crítico",
        badgeColor: "var(--c-rose)",
        badgeBg: "var(--c-rose-subtle)",
        message: `Sobrecosto severo. Por cada $1.00 gastado, el proyecto solo entrega $${CPI.toFixed(2)} de valor. Estás perdiendo ${(100 - CPI * 100).toFixed(0)} centavos por dólar.`
      };
    } else if (CPI < 1.0) {
      costHealth = {
        status: "Sobrecosto moderado",
        badgeColor: "var(--c-amber)",
        badgeBg: "var(--c-amber-subtle)",
        message: `Alerta presupuestaria. El costo real supera al valor ganado en $${Math.abs(CV).toLocaleString()}.`
      };
    }

    let scheduleHealth = {
      status: "A tiempo / adelantado",
      badgeColor: "var(--c-teal)",
      badgeBg: "var(--c-teal-subtle)",
      message: `Ritmo óptimo. El equipo avanza al ${(SPI * 100).toFixed(0)}% de la velocidad prevista en la línea base.`
    };
    if (SPI < 0.90) {
      scheduleHealth = {
        status: "Retraso severo",
        badgeColor: "var(--c-rose)",
        badgeBg: "var(--c-rose-subtle)",
        message: `Retraso crítico. El proyecto avanza al ${(SPI * 100).toFixed(0)}% del ritmo planificado (un ${(100 - SPI * 100).toFixed(0)}% de retraso en entregables).`
      };
    } else if (SPI < 1.0) {
      scheduleHealth = {
        status: "Retraso moderado",
        badgeColor: "var(--c-amber)",
        badgeBg: "var(--c-amber-subtle)",
        message: `Desvío temporal de $${Math.abs(SV).toLocaleString()} en entregables que debieron haberse completado a la fecha.`
      };
    }

    // PMP Strategic Decision recommendation
    let pmpAdvice = "";
    if (CPI >= 1 && SPI >= 1) {
      pmpAdvice = "<strong>Proyecto en Excelente Estado:</strong> Tanto el presupuesto como el cronograma están bajo control. En el examen PMP, la respuesta correcta es mantener el plan de gestión, continuar el monitoreo periódico y registrar las buenas prácticas en los activos de procesos (OPAs).";
    } else if (CPI >= 1 && SPI < 1) {
      pmpAdvice = "<strong>Proyecto con Ahorro pero con Retraso:</strong> Dispones de holgura financiera positiva (CPI > 1). En el examen PMP, este es el candidato ideal para <em>Crashing</em> (compresión de cronograma mediante horas extras o recursos adicionales), ya que cuentas con presupuesto de sobra para absorber el sobrecosto de acelerar tareas de la ruta crítica.";
    } else if (CPI < 1 && SPI >= 1) {
      pmpAdvice = "<strong>Proyecto a Tiempo pero con Sobrecosto:</strong> El proyecto avanza al ritmo programado pero gastando más de la cuenta. En el examen PMP, <strong>nunca</strong> apliques <em>Crashing</em> en este escenario. Considera optimizar recursos, renegociar contratos de compras o aplicar <em>Fast Tracking</em> si no genera costos adicionales.";
    } else {
      pmpAdvice = "<strong>Crisis Integral (Sobrecosto y Retraso):</strong> La situación más crítica en la gestión de proyectos. En el examen PMP, la acción inmediata del director de proyecto es convocar al Patrocinador y al Comité de Control de Cambios (CCB), realizar un análisis de causa raíz y evaluar una nueva línea base o reducción de alcance.";
    }

    return { CV, SV, CPI, SPI, EAC, ETC, VAC, TCPI, costHealth, scheduleHealth, pmpAdvice };
  };

  const render = () => {
    const r = calculateEVM();

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>Laboratorio Interactivo de Valor Ganado (EVM) • PMBOK® 8</h1>
          <p>
            Simulador analítico basado estrictamente en la <strong>Tabla 5-1 de Fórmulas Oficiales</strong> de la 8va edición. Modifica las 4 variables base o selecciona un escenario preconfigurado para evaluar las decisiones gerenciales en tiempo real.
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: ${r.costHealth.badgeColor};">${r.CPI.toFixed(2)}</span>
            <span class="stat-label">Eficiencia Costo (CPI)</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: ${r.scheduleHealth.badgeColor};">${r.SPI.toFixed(2)}</span>
            <span class="stat-label">Eficiencia Tiempo (SPI)</span>
          </div>
        </div>
      </div>

      <!-- Presets Toolbar -->
      <div class="evm-presets-bar">
        <span class="evm-presets-label">Escenarios de Simulación Rápida:</span>
        <div class="evm-presets-group">
          <button class="action-chip-btn" id="evm-btn-healthy">Proyecto Saludable</button>
          <button class="action-chip-btn" id="evm-btn-overbudget">Alerta de Sobrecosto</button>
          <button class="action-chip-btn" id="evm-btn-behind">Alerta de Retraso</button>
          <button class="action-chip-btn" id="evm-btn-crisis">Crisis Integral</button>
          <button class="action-chip-btn" id="evm-btn-perfect">Máxima Eficiencia</button>
        </div>
      </div>

      <!-- Main Interactive Grid: Controls (Left) & KPIs (Right) -->
      <div class="evm-dashboard-grid">
        <!-- Left: 4 Fundamental Parameter Sliders -->
        <div class="evm-inputs-panel">
          <div class="evm-panel-header">
            <h3>Variables Fundamentales del Proyecto</h3>
            <span class="evm-panel-subtitle">Ajusta los valores con los controles deslizantes</span>
          </div>

          <div class="evm-sliders-stack">
            <!-- BAC -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">BAC · Presupuesto a la Conclusión</strong>
                  <span class="evm-card-param-desc">Presupuesto total autorizado por el Patrocinador</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-blue);">$${BAC.toLocaleString()}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-bac" min="20000" max="300000" step="5000" value="${BAC}">
              <div class="evm-slider-ticks">
                <span>$20k</span>
                <span>$150k</span>
                <span>$300k</span>
              </div>
            </div>

            <!-- PV -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">PV · Valor Planificado a la Fecha</strong>
                  <span class="evm-card-param-desc">Presupuesto del trabajo que según cronograma debería estar listo</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-blue);">$${PV.toLocaleString()}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-pv" min="5000" max="${BAC}" step="2000" value="${PV}">
              <div class="evm-slider-ticks">
                <span>$5k</span>
                <span>$${Math.round(BAC/2000)}k</span>
                <span>$${Math.round(BAC/1000)}k</span>
              </div>
            </div>

            <!-- EV -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">EV · Valor Ganado Real</strong>
                  <span class="evm-card-param-desc">Valor presupuestado del trabajo físicamente completado</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-teal);">$${EV.toLocaleString()}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-ev" min="2000" max="${BAC}" step="2000" value="${EV}">
              <div class="evm-slider-ticks">
                <span>$2k</span>
                <span>$${Math.round(BAC/2000)}k</span>
                <span>$${Math.round(BAC/1000)}k</span>
              </div>
            </div>

            <!-- AC -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">AC · Costo Real Incurrido</strong>
                  <span class="evm-card-param-desc">Dinero efectivamente gastado y contabilizado a la fecha</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-rose);">$${AC.toLocaleString()}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-ac" min="2000" max="${Math.round(BAC * 1.4)}" step="2000" value="${AC}">
              <div class="evm-slider-ticks">
                <span>$2k</span>
                <span>$${Math.round(BAC/1000)}k</span>
                <span>$${Math.round(BAC * 1.4 / 1000)}k</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Diagnostic Performance Gauges & Table 5-1 Breakdown -->
        <div class="evm-results-panel">
          <!-- Primary Indices: CPI & SPI Cards -->
          <div class="evm-gauges-cards-row">
            <!-- CPI Card -->
            <div class="evm-metric-hero-card" style="border-top: 3px solid ${r.costHealth.badgeColor};">
              <div class="metric-hero-top">
                <span class="metric-hero-code">CPI = EV / AC</span>
                <span class="metric-status-chip" style="background: ${r.costHealth.badgeBg}; color: ${r.costHealth.badgeColor};">
                  ${r.costHealth.status}
                </span>
              </div>
              <div class="metric-hero-value" style="color: ${r.costHealth.badgeColor};">
                ${r.CPI.toFixed(2)}
              </div>
              <span class="metric-hero-name">Índice de Rendimiento del Costo</span>
              <p class="metric-hero-desc">${r.costHealth.message}</p>
            </div>

            <!-- SPI Card -->
            <div class="evm-metric-hero-card" style="border-top: 3px solid ${r.scheduleHealth.badgeColor};">
              <div class="metric-hero-top">
                <span class="metric-hero-code">SPI = EV / PV</span>
                <span class="metric-status-chip" style="background: ${r.scheduleHealth.badgeBg}; color: ${r.scheduleHealth.badgeColor};">
                  ${r.scheduleHealth.status}
                </span>
              </div>
              <div class="metric-hero-value" style="color: ${r.scheduleHealth.badgeColor};">
                ${r.SPI.toFixed(2)}
              </div>
              <span class="metric-hero-name">Índice de Rendimiento del Cronograma</span>
              <p class="metric-hero-desc">${r.scheduleHealth.message}</p>
            </div>
          </div>

          <!-- Variances & Forecast Grid (Table 5-1 PMBOK 8) -->
          <div class="evm-formulas-matrix-card">
            <h4 class="evm-matrix-title">Compendio de Fórmulas Oficiales • PMBOK 8 Tabla 5-1</h4>

            <div class="evm-matrix-grid">
              <!-- CV -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">Variación de Costo (CV = EV - AC)</span>
                <div class="formula-cell-val" style="color: ${r.CV >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.CV >= 0 ? '+' : ''}$${Math.round(r.CV).toLocaleString()}
                </div>
                <span class="formula-cell-sub">${r.CV >= 0 ? 'Bajo Presupuesto' : 'Sobrecosto Acumulado'}</span>
              </div>

              <!-- SV -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">Variación de Cronograma (SV = EV - PV)</span>
                <div class="formula-cell-val" style="color: ${r.SV >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.SV >= 0 ? '+' : ''}$${Math.round(r.SV).toLocaleString()}
                </div>
                <span class="formula-cell-sub">${r.SV >= 0 ? 'Adelantado' : 'Retraso Físico'}</span>
              </div>

              <!-- EAC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">Costo Final Estimado (EAC = BAC / CPI)</span>
                <div class="formula-cell-val" style="color: var(--text-primary);">
                  $${Math.round(r.EAC).toLocaleString()}
                </div>
                <span class="formula-cell-sub">Pronóstico Final si se mantiene este ritmo</span>
              </div>

              <!-- ETC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">Estimación para Terminar (ETC = EAC - AC)</span>
                <div class="formula-cell-val" style="color: var(--text-primary);">
                  $${Math.round(r.ETC).toLocaleString()}
                </div>
                <span class="formula-cell-sub">Capital restante necesario para finalizar</span>
              </div>

              <!-- VAC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">Variación a la Conclusión (VAC = BAC - EAC)</span>
                <div class="formula-cell-val" style="color: ${r.VAC >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.VAC >= 0 ? '+' : ''}$${Math.round(r.VAC).toLocaleString()}
                </div>
                <span class="formula-cell-sub">${r.VAC >= 0 ? 'Superávit Final' : 'Déficit presupuestario final'}</span>
              </div>

              <!-- TCPI -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">Esfuerzo Requerido (TCPI a BAC)</span>
                <div class="formula-cell-val" style="color: ${r.TCPI <= 1.05 ? 'var(--c-teal)' : r.TCPI <= 1.2 ? 'var(--c-amber)' : 'var(--c-rose)'};">
                  ${r.TCPI.toFixed(2)}
                </div>
                <span class="formula-cell-sub">${r.TCPI <= 1 ? 'Factible sin estrés' : 'Requiere aceleración de eficiencia'}</span>
              </div>
            </div>
          </div>

          <!-- Strategic Advice & PMP Exam Trap -->
          <div class="evm-strategic-decision-card">
            <div class="strategic-card-header">
              <span class="brand-tag">Criterio Situacional PMP</span>
              <strong style="font-size: 0.95rem; color: var(--text-primary);">Diagnóstico y Toma de Decisiones</strong>
            </div>
            <p class="strategic-card-text">
              ${r.pmpAdvice}
            </p>
          </div>
        </div>
      </div>
    `;

    // Sliders event listeners
    const slBac = containerEl.querySelector("#sl-bac");
    const slPv = containerEl.querySelector("#sl-pv");
    const slEv = containerEl.querySelector("#sl-ev");
    const slAc = containerEl.querySelector("#sl-ac");

    if (slBac) slBac.oninput = (e) => {
      BAC = parseInt(e.target.value, 10);
      if (PV > BAC) PV = BAC;
      if (EV > BAC) EV = BAC;
      render();
    };

    if (slPv) slPv.oninput = (e) => {
      PV = parseInt(e.target.value, 10);
      render();
    };

    if (slEv) slEv.oninput = (e) => {
      EV = parseInt(e.target.value, 10);
      render();
    };

    if (slAc) slAc.oninput = (e) => {
      AC = parseInt(e.target.value, 10);
      render();
    };

    // Presets event listeners
    const btnHealthy = containerEl.querySelector("#evm-btn-healthy");
    if (btnHealthy) btnHealthy.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 50000; EV = 55000; AC = 48000;
      render();
    };

    const btnOverbudget = containerEl.querySelector("#evm-btn-overbudget");
    if (btnOverbudget) btnOverbudget.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 50000; EV = 46000; AC = 58000;
      render();
    };

    const btnBehind = containerEl.querySelector("#evm-btn-behind");
    if (btnBehind) btnBehind.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 60000; EV = 45000; AC = 42000;
      render();
    };

    const btnCrisis = containerEl.querySelector("#evm-btn-crisis");
    if (btnCrisis) btnCrisis.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 65000; EV = 40000; AC = 56000;
      render();
    };

    const btnPerfect = containerEl.querySelector("#evm-btn-perfect");
    if (btnPerfect) btnPerfect.onclick = () => {
      audio.playPop();
      BAC = 120000; PV = 60000; EV = 75000; AC = 60000;
      render();
    };
  };

  render();
}
