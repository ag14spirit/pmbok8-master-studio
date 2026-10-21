import { glossary } from "./data/glossary.js";
import { audio } from "./audio.js";
import { showToast, getContrastColor } from "./coolors-generator.js";

// Harmonized colors for glossary chips
const CAT_COLORS = {
  "Gobernanza": "#0077b6",
  "Entorno": "#2a9d8f",
  "Alcance": "#e76f51",
  "Cronograma": "#457b9d",
  "Finanzas": "#1b4332",
  "Riesgo": "#c81d25",
  "Calidad": "#e9c46a",
  "Recursos": "#7209b7",
  "Roles": "#3a0ca3",
  "Principios": "#264653",
  "Adaptación": "#028090"
};

export function renderCoolorsGlossary(containerEl) {
  let searchQuery = "";
  let activeCat = "all";

  const categories = ["all", ...new Set(glossary.map(g => g.category))];

  const render = () => {
    const filtered = glossary.filter(g =>
      (activeCat === "all" || g.category === activeCat) &&
      (searchQuery === "" ||
       g.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
       g.def.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    containerEl.innerHTML = `
      <div style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-size: 1.6rem; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 4px;">
            Biblioteca de Términos Oficiales • PMBOK® 8
          </h2>
          <p style="color: #666; font-size: 0.9rem;">
            Catálogo cromático de conceptos fundamentales. Haz clic para copiar la definición oficial.
          </p>
        </div>

        <div class="explore-search-box">
          <span class="icon">🔍</span>
          <input type="text" id="glossary-search-input" placeholder="Buscar concepto o definición..." value="${searchQuery}">
        </div>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${categories.map(c => `
          <button class="coolors-tab-btn ${activeCat === c ? 'active' : ''}" data-cat="${c}" style="border: 1px solid var(--coolors-border);">
            ${c === 'all' ? 'Todos los Términos' : c}
          </button>
        `).join('')}
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px;">
        ${filtered.map(item => {
          const catColor = CAT_COLORS[item.category] || "#0066ff";
          const textColor = getContrastColor(catColor);

          return `
            <div class="palette-card" style="cursor: pointer;" data-term="${item.term}" data-def="${item.def}">
              <div style="background-color: ${catColor}; color: ${textColor}; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9;">
                  ${item.category}
                </span>
                <span style="font-size: 11px; opacity: 0.8;">📋 Copiar</span>
              </div>
              <div style="padding: 18px; display: flex; flex-direction: column; gap: 8px;">
                <h4 style="font-size: 1.05rem; font-weight: 800;">${item.term}</h4>
                <p style="font-size: 0.85rem; line-height: 1.45; color: #555;">${item.def}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Events
    const inp = containerEl.querySelector("#glossary-search-input");
    inp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
      const newInp = containerEl.querySelector("#glossary-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    containerEl.querySelectorAll("[data-cat]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeCat = btn.dataset.cat;
        render();
      };
    });

    containerEl.querySelectorAll(".palette-card").forEach(card => {
      card.onclick = () => {
        const term = card.dataset.term;
        const def = card.dataset.def;
        navigator.clipboard.writeText(`${term}: ${def}`);
        audio.playCorrect();
        showToast(`¡"${term}" copiado al portapapeles!`);
      };
    });
  };

  render();
}
