import { glossary } from "../data/glossary.js";
import { audio } from "../audio.js";
import { icons } from "../icons.js";
import { t, fmtNumber } from "../i18n/index.js";

export function renderFlashcardsPro(containerEl) {
  let activeTab = "flashcards";
  let currentCardIdx = 0;
  let isFlipped = false;
  let searchQuery = "";
  let activeCat = "all";

  // "all" is a stable internal key (never equal to a glossary category value),
  // so filtering stays language-independent; only the visible label is translated.
  const categories = ["all", ...new Set(glossary.map(g => g.category))];

  const render = () => {
    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("flash.heroTitle")}</h1>
          <p>
            ${t("flash.heroText")}
          </p>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="action-chip-btn ${activeTab === 'flashcards' ? 'active' : ''}" id="mode-flashcards" style="${activeTab === 'flashcards' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("flash.modeFlashcards", { count: fmtNumber(glossary.length) })}
          </button>
          <button class="action-chip-btn ${activeTab === 'glossary' ? 'active' : ''}" id="mode-glossary" style="${activeTab === 'glossary' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("flash.modeGlossary")}
          </button>
        </div>
      </div>

      <div id="fc-dynamic-container"></div>
    `;

    containerEl.querySelector("#mode-flashcards").onclick = () => {
      audio.playPop();
      activeTab = "flashcards";
      render();
    };

    containerEl.querySelector("#mode-glossary").onclick = () => {
      audio.playPop();
      activeTab = "glossary";
      render();
    };

    const targetArea = containerEl.querySelector("#fc-dynamic-container");
    if (activeTab === "flashcards") {
      renderFlashcardsCard(targetArea);
    } else {
      renderGlossaryTable(targetArea);
    }
  };

  const renderFlashcardsCard = (area) => {
    const card = glossary[currentCardIdx];

    area.innerHTML = `
      <div style="max-width: 620px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--text-tertiary); ">
          ${t("flash.cardOf", { current: fmtNumber(currentCardIdx + 1), total: fmtNumber(glossary.length) })}
        </span>

        <!-- 3D Card Scene -->
        <div style="perspective: 1000px; width: 100%; height: 300px; cursor: pointer;" id="fc-scene">
          <div id="fc-card-inner" style="position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); transform-style: preserve-3d; ${isFlipped ? 'transform: rotateY(180deg);' : ''}">
            <!-- Front Face -->
            <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 28px; box-shadow: var(--shadow-s);">
              <span style="padding: 3px 10px; border-radius: var(--radius-xs); background: var(--c-blue-subtle); color: var(--c-blue); font-size: 0.72rem; font-weight: 700; margin-bottom: 16px;">
                ${card.category}
              </span>
              <h3 style="font-size: 1.6rem; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin-bottom: 14px;">
                ${card.term}
              </h3>
              <span style="font-size: 0.8rem; color: var(--text-muted);">
                ${t("flash.clickToFlip")}
              </span>
            </div>

            <!-- Back Face -->
            <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background: var(--bg-surface); border: 2px solid var(--c-blue); border-radius: var(--radius-m); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; box-shadow: var(--shadow-s); transform: rotateY(180deg);">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--c-blue); margin-bottom: 10px;">
                ${t("flash.officialDef")}
              </span>
              <p style="font-size: 1.05rem; line-height: 1.55; color: var(--text-primary);">
                ${card.def}
              </p>
              <span style="font-size: 0.76rem; color: var(--text-muted); margin-top: 16px;">
                ${t("flash.clickToBack")}
              </span>
            </div>
          </div>
        </div>

        <!-- Rating Buttons for Spaced Repetition -->
        <div style="display: flex; gap: 10px; margin-top: 8px;">
          <button class="btn-flat-soft-rose" id="fc-btn-hard">
            ${t("flash.hard")}
          </button>
          <button class="btn-flat-soft-amber" id="fc-btn-med">
            ${t("flash.medium")}
          </button>
          <button class="btn-flat-soft-teal" id="fc-btn-easy">
            ${t("flash.mastered")}
          </button>
        </div>
      </div>
    `;

    const scene = area.querySelector("#fc-scene");
    const inner = area.querySelector("#fc-card-inner");

    scene.onclick = () => {
      audio.playPop();
      isFlipped = !isFlipped;
      inner.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
    };

    const nextCard = () => {
      isFlipped = false;
      currentCardIdx = (currentCardIdx + 1) % glossary.length;
      renderFlashcardsCard(area);
    };

    area.querySelector("#fc-btn-hard").onclick = () => { audio.playIncorrect(); nextCard(); };
    area.querySelector("#fc-btn-med").onclick = () => { audio.playPop(); nextCard(); };
    area.querySelector("#fc-btn-easy").onclick = () => { audio.playCorrect(); nextCard(); };
  };

  const renderGlossaryTable = (area) => {
    const filtered = glossary.filter(g =>
      (activeCat === "all" || g.category === activeCat) &&
      (searchQuery === "" ||
       g.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
       g.def.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="position: relative; width: 340px;">
            <input type="text" id="gloss-search-input" placeholder="${t("flash.searchPlaceholder")}" value="${searchQuery}" style="width: 100%; padding: 8px 12px 8px 34px; border-radius: var(--radius-s); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-size: 0.82rem; outline: none;">
            <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-muted); display: flex;">${icons.search}</span>
          </div>

          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${categories.map(c => `
              <button class="action-chip-btn ${activeCat === c ? 'active' : ''}" data-cat="${c}" style="${activeCat === c ? 'background: var(--c-blue); color: white;' : ''}">
                ${c === 'all' ? t("flash.allCategories") : c}
              </button>
            `).join('')}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
          ${filtered.map(item => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); padding: 18px; box-shadow: var(--shadow-xs);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${item.term}</h4>
                <span style="padding: 2px 8px; border-radius: var(--radius-xs); background: var(--bg-surface-subtle); color: var(--c-blue); font-size: 0.68rem; font-weight: 700; font-family: var(--font-mono);">
                  ${item.category}
                </span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">${item.def}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const inp = area.querySelector("#gloss-search-input");
    inp.oninput = (e) => {
      searchQuery = e.target.value;
      renderGlossaryTable(area);
      const newInp = area.querySelector("#gloss-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    area.querySelectorAll("[data-cat]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeCat = btn.dataset.cat;
        renderGlossaryTable(area);
      };
    });
  };

  render();
}
