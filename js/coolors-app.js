import { CoolorsGenerator, showToast } from "./coolors-generator.js";
import { renderCoolorsExplore } from "./coolors-explore.js";
import { renderCoolorsVisualizer } from "./coolors-visualizer.js";
import { renderCoolorsEVM } from "./coolors-evm.js";
import { renderCoolorsGlossary } from "./coolors-glossary.js";
import { audio } from "./audio.js";

document.addEventListener("DOMContentLoaded", () => {
  // Views
  const views = {
    generator: document.getElementById("view-generator"),
    explore: document.getElementById("view-explore"),
    visualizer: document.getElementById("view-visualizer"),
    evm: document.getElementById("view-evm"),
    glossary: document.getElementById("view-glossary")
  };

  const navTabBtns = document.querySelectorAll(".coolors-tab-btn[data-tab]");
  const inspectorModal = document.getElementById("inspector-modal");
  const spacebarPill = document.getElementById("spacebar-generate-btn");
  const quickGenBtn = document.getElementById("quick-gen-btn");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  const exportBtn = document.getElementById("export-palette-btn");

  let currentTab = "generator";

  // Initialize Generator
  const generator = new CoolorsGenerator(views.generator, inspectorModal);

  // Tab switcher
  const switchTab = (tabName) => {
    currentTab = tabName;

    navTabBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === "generator") {
          views[key].style.display = (tabName === "generator") ? "flex" : "none";
        } else {
          views[key].classList.toggle("active", key === tabName);
        }
      }
    });

    if (tabName === "generator") {
      generator.render();
    } else if (tabName === "explore") {
      renderCoolorsExplore(views.explore, (items) => {
        generator.loadPalette(items);
        switchTab("generator");
      });
    } else if (tabName === "visualizer") {
      renderCoolorsVisualizer(views.visualizer, generator.columns);
    } else if (tabName === "evm") {
      renderCoolorsEVM(views.evm);
    } else if (tabName === "glossary") {
      renderCoolorsGlossary(views.glossary);
    }
  };

  navTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audio.playPop();
      switchTab(btn.dataset.tab);
    });
  });

  // Spacebar and Generate buttons
  if (spacebarPill) {
    spacebarPill.addEventListener("click", () => {
      if (currentTab !== "generator") switchTab("generator");
      generator.generate();
    });
  }

  if (quickGenBtn) {
    quickGenBtn.addEventListener("click", () => {
      if (currentTab !== "generator") switchTab("generator");
      generator.generate();
    });
  }

  // Theme toggle
  if (themeToggleBtn) {
    let currentTheme = localStorage.getItem("pmbok8_coolors_theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeToggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";

    themeToggleBtn.addEventListener("click", () => {
      audio.playPop();
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("pmbok8_coolors_theme", currentTheme);
      themeToggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
      showToast(`Modo ${currentTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`);
    });
  }

  // Sound toggle
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      const enabled = audio.toggle();
      soundToggleBtn.textContent = enabled ? "🔊" : "🔇";
      showToast(`Sonido ${enabled ? 'activado' : 'silenciado'}`);
    });
  }

  // Export palette / study guide
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      audio.playCorrect();
      const content = [
        `# PMBOK® 8va Edición - Hoja de Estudio Generada`,
        `Fecha: ${new Date().toLocaleDateString()}`,
        `Colores: ${generator.columns.map(c => c.hex).join(', ')}`,
        `----------------------------------------------------`,
        ...generator.columns.map(c =>
          `[${c.type} • ${c.ref}]\n${c.title} (${c.hex})\n${c.subtitle}\n`
        )
      ].join('\n\n');

      const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `PMBOK8_Estudio_${Date.now()}.md`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("¡Hoja de estudio descargada!");
    });
  }

  // Initial render
  switchTab("generator");
  console.log("Coolors-style PMBOK 8 Master loaded successfully!");
});
