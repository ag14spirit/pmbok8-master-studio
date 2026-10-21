import { presentationDecks } from "../data/presentations.js";
import { audio } from "../audio.js";
import { icons } from "../icons.js";

export function renderPresentationsPro(containerEl, modalBackdropEl) {
  let activeCategory = "all";
  let searchQuery = "";
  let activeDeck = null;
  let currentSlideIdx = 0;
  let showNotes = true;

  const categories = [
    { id: "all", label: "Todas las Presentaciones (18)" },
    { id: "Parte 1", label: "Parte 1: Estándar (4)" },
    { id: "Parte 2", label: "Parte 2: Guía PMBOK (10)" },
    { id: "Parte 3", label: "Parte 3: Apéndices (4)" }
  ];

  const render = () => {
    const filteredDecks = presentationDecks.filter(d =>
      (activeCategory === "all" || d.category.includes(activeCategory)) &&
      (searchQuery === "" ||
       d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.sectionRef.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>Presentaciones Oficiales por Tema • PMBOK® 8</h1>
          <p>
            Diapositivas ejecutivas interactivas para cada una de las 18 unidades del índice oficial. Cada presentación incluye 10 láminas visuales con fundamentos teóricos, diagramas de flujo, ITTOs, comparativas ágiles y trampas de examen PMP.
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${presentationDecks.length}</span>
            <span class="stat-label">Decks Oficiales</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-purple);">180</span>
            <span class="stat-label">Slides Visuales</span>
          </div>
        </div>
      </div>

      <!-- Toolbar & Category Filter -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${categories.map(c => `
            <button class="action-chip-btn ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}" style="${activeCategory === c.id ? 'background: var(--c-blue); color: white; border-color: var(--c-blue);' : ''}">
              ${c.label}
            </button>
          `).join('')}
        </div>

        <div style="position: relative; width: 320px;">
          <input type="text" id="deck-search-input" placeholder="Buscar presentación o tema..." value="${searchQuery}" style="width: 100%; padding: 8px 12px 8px 34px; border-radius: var(--radius-s); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-size: 0.82rem; outline: none;">
          <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-muted); display: flex;">${icons.search}</span>
        </div>
      </div>

      <!-- Decks Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 18px;">
        ${filteredDecks.map(deck => `
          <div class="unit-card-pro" data-deck-id="${deck.id}" style="border: 1px solid var(--border-medium);">
            <div>
              <div class="unit-card-top">
                <span class="unit-ref-badge">${deck.sectionRef}</span>
                <span class="unit-duration-pill">10 Diapositivas</span>
              </div>

              <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--text-tertiary); letter-spacing: 0.05em; display: block; margin-bottom: 4px;">
                ${deck.category}
              </span>

              <h3 class="unit-title" style="font-size: 1.1rem; line-height: 1.3;">${deck.title}</h3>
              <p class="unit-summary" style="margin-bottom: 16px;">${deck.summary}</p>
            </div>

            <div class="unit-card-footer">
              <span class="unit-status-indicator">
                Formato 16:9 • Notas del Expositor
              </span>
              <button class="btn-primary-pro start-deck-btn" data-deck-id="${deck.id}">
                Ver Presentación ${icons.arrowRight}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Search event
    const searchInp = containerEl.querySelector("#deck-search-input");
    searchInp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
      const newInp = containerEl.querySelector("#deck-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    // Category buttons
    containerEl.querySelectorAll("[data-cat]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeCategory = btn.dataset.cat;
        render();
      };
    });

    // Start presentation buttons
    containerEl.querySelectorAll(".start-deck-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const dId = btn.dataset.deckId;
        const target = presentationDecks.find(d => d.id === dId);
        if (target) openPresentationPlayer(target);
      };
    });

    containerEl.querySelectorAll(".unit-card-pro").forEach(card => {
      card.onclick = () => {
        audio.playPop();
        const dId = card.dataset.deckId;
        const target = presentationDecks.find(d => d.id === dId);
        if (target) openPresentationPlayer(target);
      };
    });
  };

  // Presentation Player Modal
  const openPresentationPlayer = (deck) => {
    activeDeck = deck;
    currentSlideIdx = 0;

    const renderPlayer = () => {
      const slide = activeDeck.slides[currentSlideIdx];

      modalBackdropEl.innerHTML = `
        <div class="modal-window-card" style="max-width: 1060px; max-height: 94vh; height: 90vh;">
          <!-- Player Header -->
          <div class="modal-window-header" style="padding: 12px 20px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="brand-tag">${activeDeck.sectionRef}</span>
              <h3 style="font-size: 1rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 520px;">
                ${activeDeck.title}
              </h3>
            </div>

            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--c-blue); background: var(--bg-surface-subtle); padding: 4px 10px; border-radius: var(--radius-xs);">
                Lámina ${currentSlideIdx + 1} de ${activeDeck.slides.length}
              </span>
              <button class="icon-square-btn" id="toggle-notes-btn" title="Mostrar / Ocultar notas del expositor">
                ${icons.book}
              </button>
              <button class="icon-square-btn" id="close-deck-btn" title="Cerrar presentación">
                ${icons.x}
              </button>
            </div>
          </div>

          <!-- Slide Stage Canvas -->
          <div class="modal-window-body" style="padding: 24px 32px; flex: 1; display: flex; flex-direction: column; justify-content: center; overflow-y: auto;">
            ${renderSlideBody(slide)}

            <!-- Speaker Notes Callout -->
            ${showNotes && slide.speakerNotes ? `
              <div style="margin-top: 24px; padding: 12px 16px; border-radius: var(--radius-s); background: var(--bg-surface-subtle); border-left: 3px solid var(--c-purple); font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">
                <strong style="color: var(--text-primary); text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">
                  Notas del Expositor / Fundamento Oficial:
                </strong>
                ${slide.speakerNotes}
              </div>
            ` : ''}
          </div>

          <!-- Player Controls & Thumbnails Strip -->
          <div class="modal-window-footer" style="padding: 12px 20px; flex-direction: column; gap: 10px;">
            <!-- Thumbnails Strip -->
            <div style="display: flex; gap: 6px; width: 100%; justify-content: center;">
              ${activeDeck.slides.map((s, i) => `
                <button class="action-chip-btn ${i === currentSlideIdx ? 'active' : ''}" data-goto-slide="${i}" style="width: 28px; height: 28px; padding: 0; justify-content: center; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; ${i === currentSlideIdx ? 'background: var(--c-blue); color: white; border-color: var(--c-blue);' : ''}">
                  ${i + 1}
                </button>
              `).join('')}
            </div>

            <!-- Navigation Buttons -->
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <button class="action-chip-btn" id="prev-slide-btn" ${currentSlideIdx === 0 ? 'disabled style="opacity: 0.4; pointer-events: none;"' : ''}>
                ${icons.arrowLeft} Diapositiva Anterior
              </button>

              <span style="font-size: 0.76rem; color: var(--text-muted);">
                Usa las teclas de flecha ← y → del teclado
              </span>

              <button class="btn-primary-pro" id="next-slide-btn">
                ${currentSlideIdx === activeDeck.slides.length - 1 ? 'Finalizar Presentación' : 'Siguiente Diapositiva ' + icons.arrowRight}
              </button>
            </div>
          </div>
        </div>
      `;

      // Attach player events
      modalBackdropEl.querySelector("#close-deck-btn").onclick = () => {
        modalBackdropEl.classList.remove("active");
        document.removeEventListener("keydown", keyHandler);
      };

      modalBackdropEl.querySelector("#toggle-notes-btn").onclick = () => {
        showNotes = !showNotes;
        renderPlayer();
      };

      const prevBtn = modalBackdropEl.querySelector("#prev-slide-btn");
      if (prevBtn) {
        prevBtn.onclick = () => {
          if (currentSlideIdx > 0) {
            audio.playPop();
            currentSlideIdx -= 1;
            renderPlayer();
          }
        };
      }

      const nextBtn = modalBackdropEl.querySelector("#next-slide-btn");
      if (nextBtn) {
        nextBtn.onclick = () => {
          if (currentSlideIdx < activeDeck.slides.length - 1) {
            audio.playPop();
            currentSlideIdx += 1;
            renderPlayer();
          } else {
            audio.playVictory();
            modalBackdropEl.classList.remove("active");
            document.removeEventListener("keydown", keyHandler);
          }
        };
      }

      modalBackdropEl.querySelectorAll("[data-goto-slide]").forEach(btn => {
        btn.onclick = () => {
          audio.playPop();
          currentSlideIdx = parseInt(btn.dataset.gotoSlide, 10);
          renderPlayer();
        };
      });
    };

    // Keyboard navigation
    const keyHandler = (e) => {
      if (e.key === "ArrowLeft" && currentSlideIdx > 0) {
        currentSlideIdx -= 1;
        renderPlayer();
      } else if (e.key === "ArrowRight" && currentSlideIdx < activeDeck.slides.length - 1) {
        currentSlideIdx += 1;
        renderPlayer();
      } else if (e.key === "Escape") {
        modalBackdropEl.classList.remove("active");
        document.removeEventListener("keydown", keyHandler);
      }
    };

    document.addEventListener("keydown", keyHandler);
    modalBackdropEl.classList.add("active");
    renderPlayer();
  };

  // Helper renderer for different slide layouts
  const renderSlideBody = (slide) => {
    switch (slide.type) {
      case "cover":
        return `
          <div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 30px 0;">
            <span style="display: inline-block; padding: 4px 12px; border-radius: var(--radius-xs); background: var(--c-blue-subtle); color: var(--c-blue); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
              ${slide.tag}
            </span>
            <h1 style="font-size: 2.3rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 16px; color: var(--text-primary);">
              ${slide.title}
            </h1>
            <p style="font-size: 1.15rem; line-height: 1.6; color: var(--text-secondary); max-width: 700px; margin: 0 auto;">
              ${slide.subtitle}
            </p>
          </div>
        `;

      case "split_concept":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 20px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 22px;">
                <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">${slide.leftTitle}</h4>
                <ul style="padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
                  ${slide.leftItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>

              <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 22px; border-left: 3px solid var(--c-blue);">
                <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">${slide.rightTitle}</h4>
                <ul style="padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
                  ${slide.rightItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;

      case "flow_diagram":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-teal); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 20px;">${slide.title}</h2>

            <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;">
              ${slide.steps.map(st => `
                <div style="flex: 1; min-width: 160px; background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px; display: flex; flex-direction: column;">
                  <span style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 800; color: var(--c-teal); line-height: 1; margin-bottom: 8px;">
                    ${st.step}
                  </span>
                  <h4 style="font-size: 0.94rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${st.name}</h4>
                  <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">${st.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "grid_cards":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-purple); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 20px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
              ${slide.cards.map(card => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
                  <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${card.title}</h4>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${card.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "matrix_comparison":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 16px;">${slide.title}</h2>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); overflow: hidden;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                <thead>
                  <tr style="background: var(--bg-surface-subtle); border-bottom: 1px solid var(--border-medium);">
                    ${slide.headers.map(h => `<th style="padding: 10px 14px; text-align: left; font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary);">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${slide.rows.map(row => `
                    <tr style="border-bottom: 1px solid var(--border-subtle);">
                      ${row.map((cell, idx) => `
                        <td style="padding: 10px 14px; ${idx === 0 ? 'font-weight: 700;' : 'color: var(--text-secondary);'}">${cell}</td>
                      `).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;

      case "itto_breakdown":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div class="itto-grid">
              <div class="itto-col">
                <h5 style="color: var(--c-blue);">${slide.inputsTitle}</h5>
                <ul>
                  ${slide.inputs.map(i => `<li>${i}</li>`).join('')}
                </ul>
              </div>

              <div class="itto-col">
                <h5 style="color: var(--c-purple);">${slide.toolsTitle}</h5>
                <ul>
                  ${slide.tools.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>

              <div class="itto-col">
                <h5 style="color: var(--c-teal);">${slide.outputsTitle}</h5>
                <ul>
                  ${slide.outputs.map(o => `<li>${o}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;

      case "metrics_dashboard":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-teal); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
              ${slide.metrics.map(m => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">${m.name}</span>
                    <span style="padding: 2px 8px; border-radius: var(--radius-xs); background: var(--c-teal-subtle); color: var(--c-teal); font-size: 0.7rem; font-weight: 700;">${m.status}</span>
                  </div>
                  <div style="font-size: 1.8rem; font-weight: 900; font-family: var(--font-mono); color: var(--c-teal); margin-bottom: 4px;">${m.val}</div>
                  <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">${m.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "exam_trap":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #B45309; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 16px;">${slide.title}</h2>

            <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 18px; margin-bottom: 14px;">
              <strong style="font-size: 0.84rem; text-transform: uppercase; color: #B45309; display: block; margin-bottom: 4px;">Escenario Situacional:</strong>
              <p style="font-size: 0.94rem; line-height: 1.5; color: var(--text-primary);">${slide.trapScenario}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
              <div style="background: var(--c-rose-subtle); border-left: 3px solid var(--c-rose); padding: 14px 18px; border-radius: var(--radius-s);">
                <p style="font-size: 0.86rem; line-height: 1.45; color: var(--text-primary);">${slide.wrongAction}</p>
              </div>

              <div style="background: var(--c-teal-subtle); border-left: 3px solid var(--c-teal); padding: 14px 18px; border-radius: var(--radius-s);">
                <p style="font-size: 0.86rem; line-height: 1.45; color: var(--text-primary);">${slide.correctAction}</p>
              </div>
            </div>

            <div style="font-size: 0.8rem; font-style: italic; color: var(--text-tertiary);">
              Referencia: ${slide.citation}
            </div>
          </div>
        `;

      case "checklist":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--c-blue); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${slide.items.map(item => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); padding: 12px 16px; border-radius: var(--radius-s); display: flex; align-items: center; gap: 12px; font-size: 0.9rem;">
                  <span style="color: var(--c-teal); display: flex;">${icons.check}</span>
                  <span style="color: var(--text-primary); font-weight: 500;">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      default:
        return `<p>${slide.title}</p>`;
    }
  };

  render();
}
