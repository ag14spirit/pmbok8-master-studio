import { questions } from "../data/questions.js";
import { audio } from "../audio.js";
import { icons } from "../icons.js";
import { t, fmtNumber } from "../i18n/index.js";

export function renderExamSimulatorPro(containerEl) {
  let examActive = false;
  let examPool = [];
  let userAnswers = {};
  let flagged = new Set();
  let currentIdx = 0;
  let remainingSeconds = 0;
  let timerId = null;

  const startExam = (qCount, durationMin) => {
    audio.playPop();
    const pool = questions.filter(q => q.type === "single_choice" || q.type === "calculation");
    examPool = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(qCount, pool.length));
    userAnswers = {};
    flagged = new Set();
    currentIdx = 0;
    remainingSeconds = durationMin * 60;
    examActive = true;

    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      remainingSeconds -= 1;
      const tEl = containerEl.querySelector("#exam-timer-clock");
      if (tEl) {
        const m = Math.floor(remainingSeconds / 60);
        const s = remainingSeconds % 60;
        tEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (remainingSeconds <= 120) {
          tEl.style.color = "var(--c-rose)";
        }
      }
      if (remainingSeconds <= 0) {
        clearInterval(timerId);
        finishExam();
      }
    }, 1000);

    renderExamView();
  };

  const renderHome = () => {
    examActive = false;
    if (timerId) clearInterval(timerId);

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("exam.heroTitle")}</h1>
          <p>
            ${t("exam.heroText")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-purple);">75%</span>
            <span class="stat-label">${t("exam.passThreshold")}</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <div class="unit-card-pro">
          <div>
            <div class="unit-card-top">
              <span class="unit-ref-badge">${t("exam.quickBadge")}</span>
              <span class="unit-duration-pill">${t("exam.durationCount", { minutes: fmtNumber(15), count: fmtNumber(10) })}</span>
            </div>
            <h3 class="unit-title">${t("exam.quickTitle")}</h3>
            <p class="unit-summary">${t("exam.quickSummary")}</p>
          </div>
          <div class="unit-card-footer">
            <span class="unit-status-indicator">${t("exam.quickStatus")}</span>
            <button class="btn-primary-pro" id="start-sim-10">
              ${t("exam.startExam")} ${icons.arrowRight}
            </button>
          </div>
        </div>

        <div class="unit-card-pro">
          <div>
            <div class="unit-card-top">
              <span class="unit-ref-badge" style="color: var(--c-teal); background: var(--c-teal-subtle);">${t("exam.standardBadge")}</span>
              <span class="unit-duration-pill">${t("exam.durationCount", { minutes: fmtNumber(30), count: fmtNumber(20) })}</span>
            </div>
            <h3 class="unit-title">${t("exam.standardTitle")}</h3>
            <p class="unit-summary">${t("exam.standardSummary")}</p>
          </div>
          <div class="unit-card-footer">
            <span class="unit-status-indicator">${t("exam.standardStatus")}</span>
            <button class="btn-teal-pro" id="start-sim-20">
              ${t("exam.startExam")} ${icons.arrowRight}
            </button>
          </div>
        </div>

        <div class="unit-card-pro">
          <div>
            <div class="unit-card-top">
              <span class="unit-ref-badge" style="color: var(--c-purple); background: var(--c-purple-subtle);">${t("exam.extensiveBadge")}</span>
              <span class="unit-duration-pill">${t("exam.durationAll", { minutes: fmtNumber(45) })}</span>
            </div>
            <h3 class="unit-title">${t("exam.extensiveTitle")}</h3>
            <p class="unit-summary">${t("exam.extensiveSummary")}</p>
          </div>
          <div class="unit-card-footer">
            <span class="unit-status-indicator">${t("exam.extensiveStatus")}</span>
            <button class="btn-purple-pro" id="start-sim-all">
              ${t("exam.startExam")} ${icons.arrowRight}
            </button>
          </div>
        </div>
      </div>
    `;

    containerEl.querySelector("#start-sim-10").onclick = () => startExam(10, 15);
    containerEl.querySelector("#start-sim-20").onclick = () => startExam(20, 30);
    containerEl.querySelector("#start-sim-all").onclick = () => startExam(27, 45);
  };

  const renderExamView = () => {
    const q = examPool[currentIdx];
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    const isFlagged = flagged.has(currentIdx);
    const answeredCount = Object.keys(userAnswers).length;

    containerEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <button class="action-chip-btn" id="exit-exam-btn">${icons.x} ${t("exam.exitExam")}</button>

        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 6px 14px; border-radius: var(--radius-s); font-weight: 700; font-family: var(--font-mono); font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            ${icons.clock} <span id="exam-timer-clock">${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}</span>
          </div>

          <button class="btn-primary-pro" id="submit-exam-btn">
            ${t("exam.submit", { answered: fmtNumber(answeredCount), total: fmtNumber(examPool.length) })}
          </button>
        </div>
      </div>

      <!-- Question Strip -->
      <div style="display: flex; gap: 6px; flex-wrap: wrap; padding: 10px; background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); margin-bottom: 16px;">
        ${examPool.map((_, i) => {
          let bg = "var(--bg-surface-subtle)";
          let col = "var(--text-primary)";
          let bdr = "var(--border-subtle)";

          if (i === currentIdx) {
            bg = "var(--c-blue)";
            col = "white";
            bdr = "var(--c-blue)";
          } else if (flagged.has(i)) {
            bg = "var(--c-amber-subtle)";
            col = "#B45309";
            bdr = "var(--c-amber-border)";
          } else if (userAnswers[i] !== undefined) {
            bg = "var(--c-teal-subtle)";
            col = "var(--c-teal)";
            bdr = "var(--c-teal-border)";
          }

          return `
            <button class="action-chip-btn" data-qidx="${i}" style="width: 32px; height: 32px; padding: 0; justify-content: center; font-family: var(--font-mono); font-weight: 700; background: ${bg}; color: ${col}; border-color: ${bdr};">
              ${i + 1}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Question Card -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 28px; box-shadow: var(--shadow-xs);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <span style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--c-blue);">
            ${t("exam.questionOf", { current: fmtNumber(currentIdx + 1), total: fmtNumber(examPool.length) })} • ${q.sectionRef}
          </span>
          <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">
            <input type="checkbox" id="flag-toggle-check" ${isFlagged ? 'checked' : ''}>
            ${icons.flag} ${t("exam.markReview")}
          </label>
        </div>

        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; line-height: 1.35;">${q.title}</h3>
        ${q.context ? `<p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 20px; background: var(--bg-surface-subtle); padding: 12px 16px; border-radius: var(--radius-s);">${q.context}</p>` : ''}

        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${q.options.map((opt, i) => `
            <div class="quiz-option-row" data-choice="${i}" style="background: var(--bg-surface); border: 1px solid ${userAnswers[currentIdx] === i ? 'var(--c-blue)' : 'var(--border-medium)'}; ${userAnswers[currentIdx] === i ? 'background: var(--c-blue-subtle);' : ''} padding: 14px 18px; border-radius: var(--radius-s); cursor: pointer; display: flex; align-items: center; gap: 12px; font-size: 0.9rem;">
              <span style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.76rem; font-weight: 700; flex-shrink: 0;">
                ${['A', 'B', 'C', 'D'][i]}
              </span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
          <button class="action-chip-btn" id="prev-btn" ${currentIdx === 0 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''}>
            ${icons.arrowLeft} ${t("exam.prev")}
          </button>
          <button class="btn-primary-pro" id="next-btn">
            ${currentIdx === examPool.length - 1 ? t("exam.reviewAndSubmit") : t("exam.next") + ' ' + icons.arrowRight}
          </button>
        </div>
      </div>
    `;

    containerEl.querySelector("#exit-exam-btn").onclick = () => {
      if (confirm(t("exam.confirmExit"))) renderHome();
    };

    containerEl.querySelector("#submit-exam-btn").onclick = () => finishExam();

    containerEl.querySelectorAll("[data-qidx]").forEach(btn => {
      btn.onclick = () => {
        currentIdx = parseInt(btn.dataset.qidx, 10);
        renderExamView();
      };
    });

    containerEl.querySelector("#flag-toggle-check").onchange = (e) => {
      if (e.target.checked) flagged.add(currentIdx);
      else flagged.delete(currentIdx);
      renderExamView();
    };

    containerEl.querySelectorAll(".quiz-option-row").forEach(row => {
      row.onclick = () => {
        audio.playPop();
        const ch = parseInt(row.dataset.choice, 10);
        userAnswers[currentIdx] = ch;
        renderExamView();
      };
    });

    const prevBtn = containerEl.querySelector("#prev-btn");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (currentIdx > 0) { currentIdx -= 1; renderExamView(); }
      };
    }

    const nextBtn = containerEl.querySelector("#next-btn");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (currentIdx < examPool.length - 1) {
          currentIdx += 1;
          renderExamView();
        } else {
          finishExam();
        }
      };
    }
  };

  const finishExam = () => {
    if (timerId) clearInterval(timerId);

    let correctCount = 0;
    examPool.forEach((q, i) => {
      if (userAnswers[i] === q.answerIndex) correctCount += 1;
    });

    const percent = Math.round((correctCount / examPool.length) * 100);
    const passed = percent >= 75;

    if (passed) audio.playVictory();
    else audio.playIncorrect();

    containerEl.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="background: var(--bg-surface); border: 1px solid ${passed ? 'var(--c-teal)' : 'var(--c-rose)'}; border-radius: var(--radius-m); padding: 32px; text-align: center; margin-bottom: 24px; box-shadow: var(--shadow-xs);">
          <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: ${passed ? 'var(--c-teal)' : 'var(--c-rose)'};">
            ${passed ? t("exam.verdictPass") : t("exam.verdictFail")}
          </span>
          <div style="font-size: 3.5rem; font-weight: 900; font-family: var(--font-mono); letter-spacing: -0.04em; margin: 10px 0; color: ${passed ? 'var(--c-teal)' : 'var(--c-rose)'};">
            ${fmtNumber(percent)}%
          </div>
          <p style="color: var(--text-secondary); font-size: 0.94rem; max-width: 520px; margin: 0 auto 20px auto;">
            ${t("exam.scoreSummary", { correct: `<strong>${fmtNumber(correctCount)}</strong>`, total: `<strong>${fmtNumber(examPool.length)}</strong>` })}
          </p>
          <button class="btn-primary-pro" id="retake-exam-pro-btn">${t("exam.retake")} ${icons.arrowRight}</button>
        </div>

        <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 16px;">${t("exam.reviewTitle")}</h3>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${examPool.map((q, i) => {
            const userChoice = userAnswers[i];
            const isQCorrect = userChoice === q.answerIndex;

            return `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-left: 4px solid ${isQCorrect ? 'var(--c-teal)' : 'var(--c-rose)'}; border-radius: var(--radius-s); padding: 18px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; margin-bottom: 6px;">
                  <span style="font-family: var(--font-mono); color: var(--c-blue);">${t("exam.questionHash", { n: fmtNumber(i + 1) })} • ${q.sectionRef}</span>
                  <span style="color: ${isQCorrect ? 'var(--c-teal)' : 'var(--c-rose)'};">
                    ${isQCorrect ? t("exam.correct") : t("exam.incorrect")}
                  </span>
                </div>
                <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 8px;">${q.title}</h4>
                <div style="font-size: 0.85rem; margin-bottom: 4px;">
                  <strong>${t("exam.yourAnswer")}</strong> ${userChoice !== undefined ? q.options[userChoice] : `<em>${t("exam.unanswered")}</em>`}
                </div>
                ${!isQCorrect ? `
                  <div style="font-size: 0.85rem; color: var(--c-teal); margin-bottom: 6px;">
                    <strong>${t("exam.correctAnswer")}</strong> ${q.options[q.answerIndex]}
                  </div>
                ` : ''}
                <div style="background: var(--bg-surface-subtle); padding: 10px 14px; border-radius: var(--radius-xs); font-size: 0.82rem; line-height: 1.45; color: var(--text-secondary); margin-top: 8px;">
                  <strong>${t("exam.basis")}</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    containerEl.querySelector("#retake-exam-pro-btn").onclick = () => renderHome();
  };

  renderHome();
}
