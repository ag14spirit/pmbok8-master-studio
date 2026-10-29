import { audio } from "../audio.js";
import { icons } from "../icons.js";
import { t, fmtNumber } from "../i18n/index.js";

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
      status: t("evm.costHealthy"),
      badgeColor: "var(--c-teal)",
      badgeBg: "var(--c-teal-subtle)",
      message: t("evm.costHealthyMsg", { cpi: CPI.toFixed(2) })
    };
    if (CPI < 0.90) {
      costHealth = {
        status: t("evm.costCritical"),
        badgeColor: "var(--c-rose)",
        badgeBg: "var(--c-rose-subtle)",
        message: t("evm.costSevereMsg", { cpi: CPI.toFixed(2), cents: (100 - CPI * 100).toFixed(0) })
      };
    } else if (CPI < 1.0) {
      costHealth = {
        status: t("evm.costModerate"),
        badgeColor: "var(--c-amber)",
        badgeBg: "var(--c-amber-subtle)",
        message: t("evm.costModerateMsg", { amount: fmtNumber(Math.abs(CV)) })
      };
    }

    let scheduleHealth = {
      status: t("evm.scheduleOnTime"),
      badgeColor: "var(--c-teal)",
      badgeBg: "var(--c-teal-subtle)",
      message: t("evm.scheduleOnTimeMsg", { pct: (SPI * 100).toFixed(0) })
    };
    if (SPI < 0.90) {
      scheduleHealth = {
        status: t("evm.scheduleSevere"),
        badgeColor: "var(--c-rose)",
        badgeBg: "var(--c-rose-subtle)",
        message: t("evm.scheduleSevereMsg", { pct: (SPI * 100).toFixed(0), delay: (100 - SPI * 100).toFixed(0) })
      };
    } else if (SPI < 1.0) {
      scheduleHealth = {
        status: t("evm.scheduleModerate"),
        badgeColor: "var(--c-amber)",
        badgeBg: "var(--c-amber-subtle)",
        message: t("evm.scheduleModerateMsg", { amount: fmtNumber(Math.abs(SV)) })
      };
    }

    // PMP Strategic Decision recommendation
    let pmpAdvice = "";
    if (CPI >= 1 && SPI >= 1) {
      pmpAdvice = t("evm.pmpExcellent");
    } else if (CPI >= 1 && SPI < 1) {
      pmpAdvice = t("evm.pmpSavingsDelay");
    } else if (CPI < 1 && SPI >= 1) {
      pmpAdvice = t("evm.pmpOverrunOnTime");
    } else {
      pmpAdvice = t("evm.pmpCrisis");
    }

    return { CV, SV, CPI, SPI, EAC, ETC, VAC, TCPI, costHealth, scheduleHealth, pmpAdvice };
  };

  const render = () => {
    const r = calculateEVM();

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("evm.heroTitle")}</h1>
          <p>
            ${t("evm.heroDesc")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: ${r.costHealth.badgeColor};">${r.CPI.toFixed(2)}</span>
            <span class="stat-label">${t("evm.cpiShortLabel")}</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: ${r.scheduleHealth.badgeColor};">${r.SPI.toFixed(2)}</span>
            <span class="stat-label">${t("evm.spiShortLabel")}</span>
          </div>
        </div>
      </div>

      <!-- Presets Toolbar -->
      <div class="evm-presets-bar">
        <span class="evm-presets-label">${t("evm.presetsLabel")}</span>
        <div class="evm-presets-group">
          <button class="action-chip-btn" id="evm-btn-healthy">${t("evm.presetHealthy")}</button>
          <button class="action-chip-btn" id="evm-btn-overbudget">${t("evm.presetOverbudget")}</button>
          <button class="action-chip-btn" id="evm-btn-behind">${t("evm.presetBehind")}</button>
          <button class="action-chip-btn" id="evm-btn-crisis">${t("evm.presetCrisis")}</button>
          <button class="action-chip-btn" id="evm-btn-perfect">${t("evm.presetPerfect")}</button>
        </div>
      </div>

      <!-- Main Interactive Grid: Controls (Left) & KPIs (Right) -->
      <div class="evm-dashboard-grid">
        <!-- Left: 4 Fundamental Parameter Sliders -->
        <div class="evm-inputs-panel">
          <div class="evm-panel-header">
            <h3>${t("evm.inputsTitle")}</h3>
            <span class="evm-panel-subtitle">${t("evm.inputsSubtitle")}</span>
          </div>

          <div class="evm-sliders-stack">
            <!-- BAC -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">${t("evm.bacTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.bacDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-blue);">$${fmtNumber(BAC)}</div>
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
                  <strong class="evm-card-param-title">${t("evm.pvTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.pvDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-blue);">$${fmtNumber(PV)}</div>
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
                  <strong class="evm-card-param-title">${t("evm.evTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.evDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-teal);">$${fmtNumber(EV)}</div>
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
                  <strong class="evm-card-param-title">${t("evm.acTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.acDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-rose);">$${fmtNumber(AC)}</div>
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
              <span class="metric-hero-name">${t("evm.cpiName")}</span>
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
              <span class="metric-hero-name">${t("evm.spiName")}</span>
              <p class="metric-hero-desc">${r.scheduleHealth.message}</p>
            </div>
          </div>

          <!-- Variances & Forecast Grid (Table 5-1 PMBOK 8) -->
          <div class="evm-formulas-matrix-card">
            <h4 class="evm-matrix-title">${t("evm.formulasTitle")}</h4>

            <div class="evm-matrix-grid">
              <!-- CV -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.cvLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.CV >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.CV >= 0 ? '+' : ''}$${fmtNumber(Math.round(r.CV))}
                </div>
                <span class="formula-cell-sub">${r.CV >= 0 ? t("evm.cvUnder") : t("evm.cvOver")}</span>
              </div>

              <!-- SV -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.svLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.SV >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.SV >= 0 ? '+' : ''}$${fmtNumber(Math.round(r.SV))}
                </div>
                <span class="formula-cell-sub">${r.SV >= 0 ? t("evm.svAhead") : t("evm.svBehind")}</span>
              </div>

              <!-- EAC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.eacLabel")}</span>
                <div class="formula-cell-val" style="color: var(--text-primary);">
                  $${fmtNumber(Math.round(r.EAC))}
                </div>
                <span class="formula-cell-sub">${t("evm.eacSub")}</span>
              </div>

              <!-- ETC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.etcLabel")}</span>
                <div class="formula-cell-val" style="color: var(--text-primary);">
                  $${fmtNumber(Math.round(r.ETC))}
                </div>
                <span class="formula-cell-sub">${t("evm.etcSub")}</span>
              </div>

              <!-- VAC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.vacLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.VAC >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.VAC >= 0 ? '+' : ''}$${fmtNumber(Math.round(r.VAC))}
                </div>
                <span class="formula-cell-sub">${r.VAC >= 0 ? t("evm.vacSurplus") : t("evm.vacDeficit")}</span>
              </div>

              <!-- TCPI -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.tcpiLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.TCPI <= 1.05 ? 'var(--c-teal)' : r.TCPI <= 1.2 ? 'var(--c-amber)' : 'var(--c-rose)'};">
                  ${r.TCPI.toFixed(2)}
                </div>
                <span class="formula-cell-sub">${r.TCPI <= 1 ? t("evm.tcpiFeasible") : t("evm.tcpiAccelerate")}</span>
              </div>
            </div>
          </div>

          <!-- Strategic Advice & PMP Exam Trap -->
          <div class="evm-strategic-decision-card">
            <div class="strategic-card-header">
              <span class="brand-tag">${t("evm.pmpBadge")}</span>
              <strong style="font-size: 0.95rem; color: var(--text-primary);">${t("evm.pmpTitle")}</strong>
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
