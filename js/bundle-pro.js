
(function() {
  'use strict';
  const LOCALE = 'es';
  const strings = {
  common: {
    close: "Cerrar ventana",
  },
  hub: {
    partBadge1: "Parte 1 · El Estándar ANSI/PMI",
    partBadge2: "Parte 2 · La Guía del PMBOK®",
    partBadge3: "Parte 3 · Apéndices Especializados",
    partDescFallback: "Eje fundamental del conocimiento oficial para la dirección de proyectos y preparación PMP.",
    unitDescFallback: "Fundamento oficial del PMBOK 8va edición para la gestión efectiva de proyectos.",
    heroTitle: "Ruta Maestra de Estudio • PMBOK® 8va Edición",
    heroText: "Programa oficial completo alineado al estándar ANSI/PMI 99-001-2025. Incluye los 6 principios rectores, los 7 dominios de desempeño, los 40 procesos y los nuevos apéndices de IA y PMO.",
    unitsMastered: "Unidades Dominadas",
    globalProgress: "Progreso Global",
    durationLessons: "{time} min • {count} lecciones",
    moreLessons: "+{count} lecciones más",
    mastered: "Dominada",
    pending: "Pendiente",
    slidesHint: "Ver las 10 diapositivas visuales de este tema",
    slides: "Diapositivas",
    review: "Repasar",
    study: "Estudiar",
    officialDesc: "Descripción Oficial del Tema • PMBOK® 8",
    sectionLabel: "Sección {section}",
    minutes: "{n} min",
    standardLessons: "Lecciones del Estándar ({count})",
    examTip: "Tip de Examen:",
    checkpoint: "Punto de Control Situacional PMP",
    validationQ: "Pregunta Oficial de Validación",
    viewSlides: "Ver 10 diapositivas de este tema",
    unitMastered: "Unidad dominada",
    markMastered: "Marcar unidad como dominada",
    correctAnswer: "Respuesta Correcta:",
    wrongAnswer: "Respuesta Incorrecta:",
  },
  tour: {
    stepCounter: "Paso {current} de {total}",
    closeBtnTitle: "Cerrar guía",
    detailsHeading: "Qué estás viendo en esta pantalla:",
    finishGuideBtn: "Finalizar guía",
    prevBtn: "Anterior",
    nextBtn: "Siguiente",
    startStudyBtn: "¡Comenzar estudio!",
    step1Title: "Paso 1: Ruta Maestra de Estudio",
    step1Badge: "Currículo en 18 Unidades",
    step1Lead: "Estás viendo la pantalla principal de estudio dividida en las 3 grandes partes oficiales del libro.",
    step1Detail1: "Parte 1: El Estándar para la Dirección de Proyectos (Fundamentos, Sistema de Entrega y los 6 Principios).",
    step1Detail2: "Parte 2: La Guía del PMBOK (Los 7 Dominios de Desempeño, Adaptación y Catálogo de Modelos).",
    step1Detail3: "Parte 3: Apéndices Oficiales (IA en Proyectos, PMO Moderna, Adquisiciones y Evolución Histórica).",
    step1Detail4: "Haz clic en cualquier tarjeta de unidad para desplegar su teoría, trampas de examen PMP y puntos de control.",
    step2Title: "Paso 2: Matriz de los 40 Procesos",
    step2Badge: "Modelo Matricial 2D",
    step2Lead: "Observa la tabla en pantalla: cruza los 7 Dominios de Desempeño (filas) con las 5 Áreas de Enfoque (columnas).",
    step2Detail1: "Cada celda contiene los procesos activos de esa intersección (ej. #01 Iniciar Proyecto).",
    step2Detail2: "Haz clic sobre cualquier proceso para ver su ficha técnica completa de Entradas, Herramientas y Salidas (ITTOs).",
    step2Detail3: "Usa los botones superiores para cambiar entre Vista Matriz 2D, Vista por Dominio o el Explorador universal de ITTOs.",
    step3Title: "Paso 3: Presentaciones Oficiales",
    step3Badge: "18 Decks • 180 Diapositivas",
    step3Lead: "Aquí dispones de una presentación ejecutiva visual de 10 láminas para cada punto del índice oficial.",
    step3Detail1: "18 Decks interactivos en formato 16:9 organizados por Parte 1, Parte 2 y Parte 3.",
    step3Detail2: "Cada diapositiva incluye diagramas de flujo, comparativas de enfoque ágil vs predictivo y alertas PMP.",
    step3Detail3: "Haz clic en 'Ver Presentación' en cualquier tarjeta para abrir el visor con soporte de teclado (flechas ← y →) y notas del orador.",
    step4Title: "Paso 4: Laboratorio de Valor Ganado (EVM)",
    step4Badge: "Tabla 5-1 de Fórmulas Oficiales",
    step4Lead: "Este es el simulador financiero para dominar las fórmulas matemáticas del examen PMP.",
    step4Detail1: "Gráfica interactiva de la Curva S que proyecta en tiempo real PV, EV, AC y el presupuesto BAC.",
    step4Detail2: "Mueve los controles deslizantes a la izquierda para simular situaciones de sobrecosto o retraso.",
    step4Detail3: "Revisa al instante los indicadores CPI, SPI, CV, SV, EAC y el índice de esfuerzo por completar TCPI.",
    step5Title: "Paso 5: Simulador de Examen PMP / CAPM",
    step5Badge: "Banco de Juicio Situacional",
    step5Lead: "Entrena con preguntas situacionales reales calibradas al nivel de dificultad del examen oficial.",
    step5Detail1: "3 modalidades de práctica: Rápido (10 preguntas), Estándar (20 preguntas) y Extensivo (banco completo).",
    step5Detail2: "Incluye cronómetro regresivo, marcado de preguntas con bandera y revisión detallada.",
    step5Detail3: "Al finalizar, recibirás tu porcentaje de acierto frente al umbral de 75% con citas textuales del PMBOK 8.",
    step6Title: "Paso 6: Flashcards & Glosario",
    step6Badge: "Memoria Activa & Diccionario",
    step6Lead: "Refuerza tu retención conceptual con tarjetas interactivas 3D y búsqueda instantánea.",
    step6Detail1: "Modo Flashcards: Haz clic en la tarjeta para voltearla y evaluar tu nivel de dominio (Difícil, Regular, Dominado).",
    step6Detail2: "Modo Diccionario: Búsqueda rápida de cualquier término oficial del glosario filtrado por categoría temática.",
    step7Title: "Paso 7: Apéndices Especializados",
    step7Badge: "Nuevas Fronteras del PMBOK 8",
    step7Lead: "Análisis exhaustivo de los 4 apéndices modernos que incorporó la 8va edición de la Guía.",
    step7Detail1: "Apéndice X3: Inteligencia Artificial en Proyectos (Automatización, Aumento, Autonomía y Gobernanza Ética).",
    step7Detail2: "Apéndice X2: La Oficina de Gestión de Proyectos (PMO) y su transformación en habilitadora de valor (VMO).",
    step7Detail3: "Apéndice X4: Adquisiciones y contratos comerciales (Precio Fijo, Costos Reembolsables y T&M).",
    step7Detail4: "Apéndice X5: Evolución Histórica de la Guía desde su primera edición.",
  },
  evm: {
    heroTitle: "Laboratorio Interactivo de Valor Ganado (EVM) • PMBOK® 8",
    heroDesc: "Simulador analítico basado estrictamente en la <strong>Tabla 5-1 de Fórmulas Oficiales</strong> de la 8va edición. Modifica las 4 variables base o selecciona un escenario preconfigurado para evaluar las decisiones gerenciales en tiempo real.",
    cpiShortLabel: "Eficiencia Costo (CPI)",
    spiShortLabel: "Eficiencia Tiempo (SPI)",
    presetsLabel: "Escenarios de Simulación Rápida:",
    presetHealthy: "Proyecto Saludable",
    presetOverbudget: "Alerta de Sobrecosto",
    presetBehind: "Alerta de Retraso",
    presetCrisis: "Crisis Integral",
    presetPerfect: "Máxima Eficiencia",
    inputsTitle: "Variables Fundamentales del Proyecto",
    inputsSubtitle: "Ajusta los valores con los controles deslizantes",
    bacTitle: "BAC · Presupuesto a la Conclusión",
    bacDesc: "Presupuesto total autorizado por el Patrocinador",
    pvTitle: "PV · Valor Planificado a la Fecha",
    pvDesc: "Presupuesto del trabajo que según cronograma debería estar listo",
    evTitle: "EV · Valor Ganado Real",
    evDesc: "Valor presupuestado del trabajo físicamente completado",
    acTitle: "AC · Costo Real Incurrido",
    acDesc: "Dinero efectivamente gastado y contabilizado a la fecha",
    costHealthy: "Saludable",
    costCritical: "Sobrecosto crítico",
    costModerate: "Sobrecosto moderado",
    costHealthyMsg: "Bajo control. Por cada $1.00 gastado, el proyecto entrega ${cpi} de valor tangible.",
    costSevereMsg: "Sobrecosto severo. Por cada $1.00 gastado, el proyecto solo entrega ${cpi} de valor. Estás perdiendo {cents} centavos por dólar.",
    costModerateMsg: "Alerta presupuestaria. El costo real supera al valor ganado en ${amount}.",
    scheduleOnTime: "A tiempo / adelantado",
    scheduleSevere: "Retraso severo",
    scheduleModerate: "Retraso moderado",
    scheduleOnTimeMsg: "Ritmo óptimo. El equipo avanza al {pct}% de la velocidad prevista en la línea base.",
    scheduleSevereMsg: "Retraso crítico. El proyecto avanza al {pct}% del ritmo planificado (un {delay}% de retraso en entregables).",
    scheduleModerateMsg: "Desvío temporal de ${amount} en entregables que debieron haberse completado a la fecha.",
    pmpExcellent: "<strong>Proyecto en Excelente Estado:</strong> Tanto el presupuesto como el cronograma están bajo control. En el examen PMP, la respuesta correcta es mantener el plan de gestión, continuar el monitoreo periódico y registrar las buenas prácticas en los activos de procesos (OPAs).",
    pmpSavingsDelay: "<strong>Proyecto con Ahorro pero con Retraso:</strong> Dispones de holgura financiera positiva (CPI > 1). En el examen PMP, este es el candidato ideal para <em>Crashing</em> (compresión de cronograma mediante horas extras o recursos adicionales), ya que cuentas con presupuesto de sobra para absorber el sobrecosto de acelerar tareas de la ruta crítica.",
    pmpOverrunOnTime: "<strong>Proyecto a Tiempo pero con Sobrecosto:</strong> El proyecto avanza al ritmo programado pero gastando más de la cuenta. En el examen PMP, <strong>nunca</strong> apliques <em>Crashing</em> en este escenario. Considera optimizar recursos, renegociar contratos de compras o aplicar <em>Fast Tracking</em> si no genera costos adicionales.",
    pmpCrisis: "<strong>Crisis Integral (Sobrecosto y Retraso):</strong> La situación más crítica en la gestión de proyectos. En el examen PMP, la acción inmediata del director de proyecto es convocar al Patrocinador y al Comité de Control de Cambios (CCB), realizar un análisis de causa raíz y evaluar una nueva línea base o reducción de alcance.",
    cpiName: "Índice de Rendimiento del Costo",
    spiName: "Índice de Rendimiento del Cronograma",
    formulasTitle: "Compendio de Fórmulas Oficiales • PMBOK 8 Tabla 5-1",
    cvLabel: "Variación de Costo (CV = EV - AC)",
    svLabel: "Variación de Cronograma (SV = EV - PV)",
    eacLabel: "Costo Final Estimado (EAC = BAC / CPI)",
    etcLabel: "Estimación para Terminar (ETC = EAC - AC)",
    vacLabel: "Variación a la Conclusión (VAC = BAC - EAC)",
    tcpiLabel: "Esfuerzo Requerido (TCPI a BAC)",
    cvUnder: "Bajo Presupuesto",
    cvOver: "Sobrecosto Acumulado",
    svAhead: "Adelantado",
    svBehind: "Retraso Físico",
    eacSub: "Pronóstico Final si se mantiene este ritmo",
    etcSub: "Capital restante necesario para finalizar",
    vacSurplus: "Superávit Final",
    vacDeficit: "Déficit presupuestario final",
    tcpiFeasible: "Factible sin estrés",
    tcpiAccelerate: "Requiere aceleración de eficiencia",
    pmpBadge: "Criterio Situacional PMP",
    pmpTitle: "Diagnóstico y Toma de Decisiones",
  },
  appendices: {
    heroTitle: "Nuevas Fronteras y Apéndices • PMBOK® 8",
    heroDesc: "Análisis exhaustivo de los 4 apéndices especializados: Inteligencia Artificial en Proyectos (X3), La PMO Moderna (X2), Gestión de Adquisiciones (X4) y Evolución Histórica de la Guía (X5).",
    tabX3: "Apéndice X3: IA en Proyectos",
    tabX2: "Apéndice X2: PMO Moderna",
    tabX4: "Apéndice X4: Adquisiciones",
    tabX5: "Apéndice X5: Evolución Histórica",
    officialStudy: "Estudio Especializado Oficial",
  },
  presentations: {
    catAll: "Todas las Presentaciones ({count})",
    catPart1: "Parte 1: Estándar ({count})",
    catPart2: "Parte 2: Guía PMBOK ({count})",
    catPart3: "Parte 3: Apéndices ({count})",
    heroTitle: "Presentaciones Oficiales por Tema • PMBOK® 8",
    heroText: "Diapositivas ejecutivas interactivas para cada una de las {units} unidades del índice oficial. Cada presentación incluye {slides} láminas visuales con fundamentos teóricos, diagramas de flujo, ITTOs, comparativas ágiles y trampas de examen PMP.",
    officialDecks: "Decks Oficiales",
    visualSlides: "Slides Visuales",
    searchPlaceholder: "Buscar presentación o tema...",
    slidesPill: "{count} Diapositivas",
    deckFormat: "Formato 16:9 • Notas del Expositor",
    viewDeck: "Ver presentación",
    toggleNotes: "Mostrar / Ocultar notas del expositor",
    closeDeck: "Cerrar presentación",
    slideCounter: "Lámina {current} de {total}",
    prevSlide: "Diapositiva anterior",
    keyboardHint: "Usa las teclas de flecha ← y → del teclado",
    finishDeck: "Finalizar presentación",
    nextSlide: "Siguiente diapositiva",
    speakerNotes: "Notas del Expositor / Fundamento Oficial:",
    scenario: "Escenario Situacional:",
    reference: "Referencia:",
  },
  app: {
    progressMastered: "{pct}% Dominado",
    darkModeOn: "Modo Oscuro activado",
    lightModeOn: "Modo Claro activado",
    audioOn: "Audio activado",
    audioOff: "Audio silenciado",
  },
  exam: {
    heroTitle: "Simulador Oficial de Examen PMP / CAPM",
    heroText: "Banco exhaustivo de preguntas de juicio profesional situacional alineadas estrictamente a los 7 dominios y 6 principios del PMBOK® 8va Edición.",
    passThreshold: "Umbral de Aprobación",
    quickBadge: "Modalidad ágil",
    durationCount: "{minutes} minutos · {count} preguntas",
    durationAll: "{minutes} minutos · Banco completo",
    quickTitle: "Simulacro rápido",
    quickSummary: "10 preguntas situacionales aleatorias de alta frecuencia. Ideal para una sesión ágil de práctica diaria y calibración de conceptos.",
    quickStatus: "Todos los dominios",
    startExam: "Iniciar examen",
    standardBadge: "Modalidad estándar",
    standardTitle: "Simulacro estándar",
    standardSummary: "20 preguntas situacionales equilibradas entre ciclos predictivos, ágiles e híbridos según el Exam Content Outline (ECO).",
    standardStatus: "Cobertura completa",
    extensiveBadge: "Modalidad extensiva",
    extensiveTitle: "Simulacro extensivo PMP",
    extensiveSummary: "Todas las preguntas del banco oficial sin interrupciones para medir tu resistencia mental y concentración bajo presión de tiempo real.",
    extensiveStatus: "Resistencia mental",
    exitExam: "Salir del examen",
    submit: "Entregar examen ({answered}/{total})",
    questionOf: "Pregunta {current} de {total}",
    markReview: "Marcar para revisión",
    prev: "Anterior",
    next: "Siguiente",
    reviewAndSubmit: "Revisar y entregar",
    confirmExit: "¿Deseas salir del examen? Se descartarán tus respuestas.",
    verdictPass: "Nivel de Certificación: Competente",
    verdictFail: "Resultado Insuficiente",
    scoreSummary: "Has respondido correctamente {correct} de {total} preguntas. El umbral para aprobar el examen oficial es de 75%.",
    retake: "Tomar otro simulacro",
    reviewTitle: "Revisión Detallada de Respuestas:",
    questionHash: "Pregunta #{n}",
    correct: "Correcta",
    incorrect: "Incorrecta",
    yourAnswer: "Tu respuesta:",
    unanswered: "Sin responder",
    correctAnswer: "Respuesta correcta:",
    basis: "Fundamento PMBOK 8:",
  },
  flash: {
    heroTitle: "Glosario y Tarjetas de Memoria Activa",
    heroText: "Entrena tu retención conceptual con tarjetas interactivas de repetición espaciada o explora el diccionario oficial de terminología del PMBOK® 8va Edición.",
    modeFlashcards: "Modo Flashcards ({count})",
    modeGlossary: "Diccionario de Términos",
    cardOf: "Tarjeta {current} de {total}",
    clickToFlip: "Haz clic en la tarjeta para voltear",
    officialDef: "Definición Oficial PMBOK® 8",
    clickToBack: "Clic para volver al término",
    hard: "Difícil",
    medium: "Regular",
    mastered: "Dominado",
    searchPlaceholder: "Buscar por término o definición...",
    allCategories: "Todos",
  },
  matrix: {
    heroTitle: "Matriz y Arquitectura de los 40 Procesos • PMBOK® 8",
    heroIntro: "En la 8va edición, los procesos no son etapas de cascada, sino un modelo matricial de capacidades. Las filas representan los 7 Dominios de Desempeño y las columnas representan las 5 Áreas de Enfoque.",
    filteredLabel: "Procesos Filtrados",
    explanationTitle: "Estructura Matricial Bidimensional:",
    explanationText: "Haz clic en cualquier proceso para abrir su ficha técnica oficial con {ittos}, pautas de adaptación y trampas de examen PMP.",
    ittosLabel: "Entradas, Herramientas, Salidas (ITTOs)",
    viewMatrix: "Vista Matriz 2D",
    viewByDomain: "Vista por Dominio (7)",
    viewByFocus: "Vista por Área de Enfoque (5)",
    viewItto: "Explorador de ITTOs",
    searchPlaceholder: "Buscar proceso, entrada, técnica o salida...",
    allDomains: "Todos los Dominios (40)",
    domainHeader: "Dominio de Desempeño",
    sectionBadge: "Sección {section}",
    domainSection: "Sección {section} • {count} procesos",
    cellTitle: "Ver ITTOs de #{number}: {name}",
    chapter: "Capítulo 2.{number}",
    processesBadge: "{count} Procesos",
    keyDeliverable: "Entregable clave: {deliverable}",
    explorerTitle: "Explorador Exhaustivo de Entradas, Herramientas y Salidas (ITTOs)",
    explorerDesc: "Auditoría de extremo a extremo del flujo de información en los 40 procesos del PMBOK® 8.",
    inputs: "Entradas (Inputs)",
    tools: "Herramientas & Técnicas",
    outputs: "Salidas (Outputs)",
    processBadge: "Proceso #{number}",
    closeWindow: "Cerrar ventana",
    officialPurpose: "Propósito Oficial PMBOK 8:",
    domainLabel: "Dominio:",
    focusAreaLabel: "Área de Enfoque:",
    tailoringTitle: "Pautas de Adaptación (Tailoring):",
    examTrapTitle: "Trampa Común de Examen PMP:",
    closeCard: "Cerrar Ficha",
  },
  shell: {
    brandTitle: "PMBOK 8va Edición Master Studio",
    docTitle: "PMBOK® 8 Master Studio • Estándar Oficial & Preparación PMP",
    navLabel: "Navegación por módulos",
    guide: "Guía de la Plataforma",
    guideTitle: "Iniciar tutorial interactivo de la plataforma",
    progressTitle: "Tu progreso en las 18 unidades",
    progressZero: "0% Dominado",
    soundTitle: "Activar / Silenciar audio",
    themeTitle: "Alternar Modo Oscuro / Claro",
    langTitle: "Switch language / Cambiar idioma",
    tabCurriculum: "Ruta de Estudio",
    tabMatrix: "40 Procesos (ITTO)",
    tabPresentations: "Presentaciones (18 temas)",
    tabEvm: "Laboratorio EVM",
    tabSimulator: "Simulador PMP",
    tabFlashcards: "Flashcards & Glosario",
    tabAppendices: "Apéndices (IA & PMO)",
  },
};

  // Runtime translation helpers. `strings` and `LOCALE` are provided by the
// locale bundle (see bundle-pro.mjs), so this file has no imports.

function t(key, vars = {}) {
  const value = key.split(".").reduce((node, part) => (node ? node[part] : undefined), strings);
  if (typeof value !== "string") return key;
  return value.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? vars[name] : `{${name}}`));
}

function fmtNumber(n) {
  return n.toLocaleString(LOCALE === "en" ? "en-US" : "es-ES");
}


  // PMBOK 8th Edition Complete Curriculum Structure
const curriculum = {
  "title": "PMBOK® Guide - 8va Edición (ANSI/PMI 99-001-2025)",
  "subtitle": "Academia Interactiva de Aprendizaje & Simulador de Certificación PMP/CAPM",
  "parts": [
    {
      "id": "part-1",
      "number": 1,
      "title": "El Estándar para la Dirección de Proyectos",
      "titleEn": "The Standard for Project Management",
      "description": "Fundamentos normativos ANSI: el sistema de valor, los 6 principios refinados y los ciclos de vida con las 5 áreas de enfoque.",
      "color": "#006874",
      "icon": "auto_stories",
      "units": [
        {
          "id": "unit-1",
          "number": 1,
          "title": "Introducción y Elementos Fundacionales",
          "sectionRef": "Sección 1 (1.1 - 1.3)",
          "description": "Propósito del estándar, vocabulario técnico clave de la 8va edición y gobernanza de proyectos.",
          "lessons": [
            {
              "id": "les-1-1",
              "title": "Propósito del Estándar",
              "section": "1.1",
              "xp": 25,
              "timeMin": 5,
              "summary": "El Estándar para la Dirección de Proyectos establece una base universal para facilitar resultados previstos en cualquier industria, tamaño y enfoque de desarrollo.",
              "points": [
                "Aplica a proyectos en todos los sectores (empresarial, gubernamental, sin fines de lucro).",
                "Es neutral frente al enfoque: sirve tanto para predictivo, adaptativo como híbrido.",
                "Alinea la entrega de proyectos con la estrategia de negocio y la sostenibilidad a largo plazo.",
                "El rol del PM se transforma de mero organizador a estratega de cambio y creador de valor."
              ],
              "examTip": "En el examen PMP v8, recuerda que el estándar ya NO es prescriptivo: se basa en principios y entrega de valor más allá del cumplimiento del cronograma/presupuesto."
            },
            {
              "id": "les-1-2",
              "title": "Términos y Conceptos Clave de la 8va Edición",
              "section": "1.2",
              "xp": 30,
              "timeMin": 7,
              "summary": "PMI actualizó las definiciones nucleares de Proyecto, Dirección de Proyectos, Salida, Resultado y Beneficio para responder a un entorno impulsado por valor.",
              "points": [
                "Proyecto (Project): Iniciativa temporal en un contexto único emprendida para CREAR VALOR (supera la vieja definición de 'producto, servicio o resultado único').",
                "Dirección de Proyectos (Project Management): Aplicación de conocimientos, habilidades, herramientas y técnicas para cumplir o superar el valor previsto sin incurrir en corrupción del alcance ni sobreoptimización (gold plating).",
                "Salida (Output): Producto, resultado o servicio generado por un proceso.",
                "Resultado (Outcome): Efecto, consecuencia o impacto a largo plazo de las salidas entregables. Puede ser positivo (beneficio) o negativo (desbeneficio).",
                "Beneficio (Benefit): Ganancia o activo percibido por la organización y sus partes interesadas como resultado de los outcomes logrados.",
                "Portafolio vs Programa: Portafolio agrupa programas y proyectos para maximizar valor estratégico; Programa coordina proyectos relacionados para obtener beneficios sinérgicos no logrables individualmente."
              ],
              "examTip": "Distingue siempre: Output (el software instalado) -> Outcome (los empleados operan el nuevo flujo) -> Benefit (reducción de 20% en tiempos de atención)."
            },
            {
              "id": "les-1-3",
              "title": "Características del Proyecto y Conexión de Gobernanzas",
              "section": "1.3.1 - 1.3.2",
              "xp": 30,
              "timeMin": 6,
              "summary": "Cómo se articula la naturaleza temporal y contextual de un proyecto con la gobernanza corporativa y la gobernanza específica del proyecto.",
              "points": [
                "El contexto único está delimitado por objetivos, entorno, stakeholders y enfoque de desarrollo.",
                "Gobernanza Organizacional: Reglas, políticas y directrices estratégicas de la entidad superior.",
                "Gobernanza del Proyecto: Marco estructurado que guía decisiones, escalamiento, puntos de revisión (phase gates) y rendición de cuentas dentro del proyecto.",
                "Alineación: La gobernanza del proyecto debe encajar orgánicamente en la gobernanza organizacional sin duplicar burocracia innecesaria."
              ],
              "examTip": "Cuando una decisión sobrepase el umbral de tolerancia del proyecto, el PM debe escalar a través del canal formal de gobernanza (Sponsor o Comité de Dirección)."
            },
            {
              "id": "les-1-4",
              "title": "Operaciones y el Ecosistema Portafolio-Programa",
              "section": "1.3.3 - 1.3.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Diferenciación entre el trabajo operativo continuo y las iniciativas temporales, y su integración en el marco estratégico.",
              "points": [
                "Operaciones: Trabajo repetitivo continuo que sostiene el negocio en marcha (business as usual).",
                "Proyectos: Transición del negocio hacia un nuevo estado futuro de mayor valor.",
                "Transición: Todo proyecto concluye transfiriendo sus entregables a operaciones, donde se materializan los beneficios a largo plazo.",
                "Sinergia en Portafolios: Aseguran que la organización haga 'los proyectos correctos', mientras que la dirección de proyectos asegura hacer 'los proyectos correctamente'."
              ],
              "examTip": "El proyecto termina cuando se entregan y aceptan los entregables y se transfieren a operaciones; el monitoreo de beneficios a largo plazo suele ser tarea de operaciones o del sponsor."
            }
          ]
        },
        {
          "id": "unit-2",
          "number": 2,
          "title": "Un Sistema para la Entrega de Valor",
          "sectionRef": "Sección 2 (2.1 - 2.5)",
          "description": "Componentes del valor, factores del entorno (EEFs/OPAs), gestión de producto, funciones y roles del proyecto.",
          "lessons": [
            {
              "id": "les-2-1",
              "title": "Creación de Valor y Criterios de Éxito",
              "section": "2.1 - 2.1.2",
              "xp": 30,
              "timeMin": 6,
              "summary": "Los proyectos existen para generar valor comercial o social. El éxito ya no se mide únicamente por tiempo, costo y alcance.",
              "points": [
                "El valor puede ser tangible (ahorros monetarios, cuota de mercado, instalaciones) o intangible (marca, reputación, moral del equipo).",
                "Evaluación del éxito multidimensional: alineación estratégica, satisfacción de partes interesadas, impacto social, adopción de usuario y retorno de inversión.",
                "Paradoja de la triple restricción: Un proyecto puede cumplir a la perfección alcance, costo y tiempo pero fracasar en el mercado si no genera valor."
              ],
              "examTip": "Pregunta de examen: Si el cliente no utiliza el software entregado a tiempo y en presupuesto, ¿el proyecto tuvo éxito? Respuesta: No, porque falló en materializar el resultado previsto (outcome) y su valor."
            },
            {
              "id": "les-2-2",
              "title": "Entorno del Proyecto: EEFs y OPAs",
              "section": "2.2.1 - 2.2.4",
              "xp": 35,
              "timeMin": 8,
              "summary": "Factores Ambientales de la Empresa (EEFs) y Activos de los Procesos de la Organización (OPAs): las dos fuerzas que moldean el proyecto.",
              "points": [
                "EEFs Internos: Cultura organizacional, infraestructura existente, disponibilidad y competencias del personal, canales de comunicación.",
                "EEFs Externos: Condiciones de mercado, regulaciones legales, estándares industriales, clima político, factores climáticos.",
                "OPAs: Recursos internos acumulados por la organización para ayudar al proyecto. Se dividen en dos categorías:",
                "1) Procesos, Políticas y Procedimientos: Plantillas predefinidas, lineamientos de calidad, políticas de contratación.",
                "2) Repositorios de Conocimiento: Registro de lecciones aprendidas pasadas, bases de datos de mediciones históricas, archivos de proyectos anteriores."
              ],
              "examTip": "Regla infalible: Los EEFs provienen del entorno y normalmente el equipo NO tiene control sobre ellos (se adaptan a ellos). Los OPAs son activos de la organización que el equipo consulta, utiliza y enriquece."
            },
            {
              "id": "les-2-3",
              "title": "Estructuras Organizacionales y Gestión de Producto",
              "section": "2.2.5 - 2.3",
              "xp": 30,
              "timeMin": 7,
              "summary": "Impacto de la estructura de la empresa (funcional, matricial, orientada a proyectos) y la relación entre ciclo de vida del producto y del proyecto.",
              "points": [
                "Estructura Funcional: El PM tiene autoridad casi nula; el gerente funcional controla el presupuesto y asigna tareas.",
                "Estructuras Matriciales: Débil (el PM actúa como coordinador/expedidor), Equilibrada (el PM comparte poder con el funcional), Fuerte (el PM tiene alta autoridad y dedicación completa).",
                "Orientada a Proyectos (Projectized): El PM tiene máxima autoridad y el equipo está dedicado al 100% al proyecto.",
                "Gestión de Producto (Product Management): Abarca todo el ciclo de vida de un producto (concepción, crecimiento, madurez, declive). Un solo producto puede requerir múltiples proyectos consecutivos a lo largo de su vida."
              ],
              "examTip": "En una estructura matricial débil, el PM no puede tomar decisiones unilaterales de asignación ni cambiar el presupuesto sin el visto bueno de los gerentes funcionales."
            },
            {
              "id": "les-2-4",
              "title": "Funciones Clave Asociadas a los Proyectos",
              "section": "2.4.1 - 2.4.7",
              "xp": 30,
              "timeMin": 6,
              "summary": "Las 7 funciones esenciales que deben satisfacerse en todo proyecto, independientemente de quién las ejecute formalmente.",
              "points": [
                "1. Proporcionar supervisión y coordinación.",
                "2. Solicitar y gestionar retroalimentación continua.",
                "3. Facilitar y apoyar el trabajo del equipo eliminando obstáculos.",
                "4. Realizar el trabajo técnico y operativo del entregable.",
                "5. Aplicar experiencia y criterio técnico especializado.",
                "6. Proporcionar dirección estratégica y perspectiva organizacional.",
                "7. Proporcionar recursos humanos, financieros y materiales."
              ],
              "examTip": "El PMBOK 8 enfatiza las 'funciones' antes que los 'títulos de puesto', porque en equipos ágiles o autoorganizados estas funciones se distribuyen entre varios roles."
            },
            {
              "id": "les-2-5",
              "title": "Roles en la Dirección de Proyectos",
              "section": "2.5.1 - 2.5.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Interacción entre el Equipo de Dirección del Proyecto, el Sponsor/Product Owner, el Equipo Técnico y los Usuarios Finales.",
              "points": [
                "Equipo de Dirección del Proyecto (Project Management Team): Quienes participan directamente en actividades de gestión.",
                "Sponsor / Patrocinador: Defiende el proyecto, proporciona fondos, aprueba el Acta de Constitución y remueve bloqueos a nivel ejecutivo.",
                "Product Owner: Voz del cliente en enfoques ágiles, gestiona el backlog y maximiza el valor del producto entregado.",
                "Equipo del Proyecto: Profesionales multidisciplinarios que crean los entregables.",
                "Usuarios Finales: Quienes operarán y validarán el producto en su entorno real."
              ],
              "examTip": "El Sponsor es el dueño del caso de negocio; si el caso de negocio deja de ser viable, el Sponsor es quien decide pausar o cancelar el proyecto."
            }
          ]
        },
        {
          "id": "unit-3",
          "number": 3,
          "title": "Los 6 Principios de Dirección de Proyectos",
          "sectionRef": "Sección 3 (3.1 - 3.8)",
          "description": "La mentalidad (mindset) con 3 dimensiones y los 6 principios refinados que guían la conducta del director de proyectos.",
          "lessons": [
            {
              "id": "les-3-1",
              "title": "La Mentalidad de Dirección de Proyectos",
              "section": "3.1 - 3.2",
              "xp": 30,
              "timeMin": 5,
              "summary": "La 8va edición consolida los 12 principios de la 7ma en 6 principios más accionables y directos, agrupados en 3 dimensiones de mentalidad.",
              "points": [
                "Dimensión Proactiva (Proactive): Anticiparse a los cambios y prevenir desviaciones (Principios: Visión Holística, Calidad Integrada).",
                "Dimensión Sentido de Propiedad (Ownership): Compromiso ético y rendición de cuentas (Principios: Líder Responsable, Cultura Empoderada).",
                "Dimensión Orientada a Valor (Value-Driven): Todas las acciones deben justificar retorno tangible o social (Principios: Enfoque en Valor, Sostenibilidad Integral).",
                "Interconexión: Los principios no son leyes rígidas; son guías de criterio que interactúan directamente con los 7 dominios de desempeño."
              ],
              "examTip": "Los principios guían la mentalidad (mindset), mientras que los dominios de desempeño y los procesos guían la mecánica (mechanics)."
            },
            {
              "id": "les-3-2",
              "title": "Principio 1: Adoptar una Visión Holística",
              "section": "3.3",
              "xp": 35,
              "timeMin": 7,
              "summary": "Adopt a Holistic View: Reconocer que el proyecto es un subsistema dentro de un ecosistema mayor complejo, interconectado y dinámico.",
              "points": [
                "Fusión de v7: Combina 'Navegar la Complejidad' y 'Reconocer Interacciones de Sistemas'.",
                "Pensamiento Sistémico: Un cambio en una parte del proyecto (ej. alcance o tecnología) repercute inevitablemente en costos, cronograma, riesgos y partes interesadas.",
                "Alejarse de la visión de túnel: El PM debe 'hacer zoom out' para entender el impacto en la organización, el mercado y las geografías.",
                "Dominios Conectados: Gobernanza, Alcance, Cronograma, Finanzas, Interesados, Recursos, Riesgos (todos los dominios)."
              ],
              "examTip": "Cuando surja un problema técnico, el PM holístico no solo lo resuelve en su silo: evalúa el efecto dominó en los demás dominios y áreas de la organización."
            },
            {
              "id": "les-3-3",
              "title": "Principio 2: Enfocarse en el Valor",
              "section": "3.4",
              "xp": 35,
              "timeMin": 7,
              "summary": "Focus on Value: El valor es el motor y la justificación fundamental de todo proyecto. Requiere adaptabilidad y gestión continua del cambio.",
              "points": [
                "Fusión de v7: Integra 'Enfoque en Valor', 'Adaptabilidad y Resiliencia' y 'Habilitar el Cambio hacia el Estado Futuro'.",
                "Alineación Continua: Revisar periódicamente si el caso de negocio sigue siendo válido a medida que cambian las condiciones del mercado.",
                "Gestión de Beneficios: Los entregables deben traducirse en capacidades operativas reales que generen resultados deseados.",
                "Resiliencia: Capacidad de absorber impactos negativos y pivotar la estrategia para salvaguardar la propuesta de valor."
              ],
              "examTip": "Si los requerimientos cambian para reflejar mejor lo que el mercado necesita, el PM promueve la adaptación ágil en vez de rechazar el cambio a ciegas."
            },
            {
              "id": "les-3-4",
              "title": "Principio 3: Integrar la Calidad en Procesos y Entregables",
              "section": "3.5",
              "xp": 35,
              "timeMin": 7,
              "summary": "Embed Quality Into Processes and Deliverables: La calidad se planifica, se diseña y se construye desde el inicio; no se inspecciona al final.",
              "points": [
                "Refinamiento de v7: Enfoca la calidad de manera dual: la calidad de los entregables y la calidad de los procesos que los producen.",
                "Costo de la Calidad (COQ): Invertir en Prevención y Evaluación siempre es mucho más rentable que pagar por Fallas Internas o Fallas Externas.",
                "Cultura de Cero Defectos y Mejora Continua: Adoptar ciclos como PDCA (Plan-Do-Check-Act) y retrospectivas sistemáticas.",
                "Aceptación de Stakeholders: La calidad es 'aptitud para el uso' y cumplimiento de expectativas acordadas, no lujo innecesario."
              ],
              "examTip": "Inspeccionar al final solo encuentra defectos ya cometidos. La mentalidad moderna del PMBOK 8 busca asegurar que los procesos eviten que los defectos se originen."
            },
            {
              "id": "les-3-5",
              "title": "Principio 4: Ser un Líder Responsable (Accountable Leader)",
              "section": "3.6",
              "xp": 35,
              "timeMin": 7,
              "summary": "Be an Accountable Leader: Liderar con integridad, empatía y sentido de administración fiduciaria (stewardship), asumiendo la responsabilidad total de las decisiones.",
              "points": [
                "Fusión de v7: Fusiona 'Demostrar Comportamientos de Liderazgo' y 'Ser un Administrador Diligente, Respetuoso y Cuidadoso (Steward)'.",
                "Liderazgo Servidor: El PM apoya a los miembros del equipo, remueve bloqueos y fomenta su desarrollo profesional.",
                "Rendición de Cuentas (Accountability): El líder asume la propiedad del éxito o fracaso, comunicando con transparencia radical a sponsors y equipo.",
                "Ética Profesional: Cumplimiento riguroso del Código de Ética y Conducta Profesional del PMI (Responsabilidad, Respeto, Imparcialidad, Honestidad)."
              ],
              "examTip": "Un líder responsable nunca culpa al equipo ante los ejecutivos; asume la responsabilidad del resultado y trabaja internamente con el equipo en la solución."
            },
            {
              "id": "les-3-6",
              "title": "Principio 5: Integrar la Sostenibilidad en Todas las Áreas",
              "section": "3.7",
              "xp": 35,
              "timeMin": 7,
              "summary": "Integrate Sustainability Within All Project Areas: ¡Novedad central de la 8va edición! Los proyectos deben considerar su huella ecológica, impacto social y viabilidad económica a largo plazo.",
              "points": [
                "Principio Nuevo en la 8va Edición: Eleva la sostenibilidad al nivel de principio nuclear de la profesión.",
                "Triple Cuenta de Resultados (ESG): Factores Ambientales (huella de carbono, recursos escasos), Sociales (derechos laborales, comunidad local) y Económicos (creación de valor durable).",
                "Pirámide de Sostenibilidad: Integrar prácticas sostenibles desde la selección de materiales hasta el desmantelamiento final del producto.",
                "Pensamiento de Ciclo de Vida Completo: Evaluar no solo cuánto cuesta construir el entregable, sino cuánto cuesta mantenerlo y reciclarlo en las próximas décadas."
              ],
              "examTip": "Pregunta de examen v8: Al seleccionar entre dos proveedores de materiales, uno es 5% más barato pero genera el doble de residuos tóxicos. Según el PMBOK 8, el PM debe evaluar el impacto de sostenibilidad integral."
            },
            {
              "id": "les-3-7",
              "title": "Principio 6: Construir una Cultura Empoderada",
              "section": "3.8",
              "xp": 35,
              "timeMin": 7,
              "summary": "Build an Empowered Culture: Fomentar seguridad psicológica, colaboración abierta, diversidad, inclusión y toma de decisiones descentralizada.",
              "points": [
                "Refinamiento de v7: Evoluciona de 'Crear un equipo colaborativo' hacia el empoderamiento cultural sistemático.",
                "Seguridad Psicológica: El equipo puede expresar dudas, señalar errores o proponer innovaciones sin temor a represalias o humillaciones.",
                "Delegación y Autonomía: Quienes realizan el trabajo diario están más cerca del problema y deben tener autoridad para decidir detalles de ejecución.",
                "Diversidad e Inclusión: Aprovechar perspectivas diversas en equipos globales y multidisciplinarios enriquece la resolución de problemas."
              ],
              "examTip": "Cuando el equipo se equivoca en un experimento controlado, el PM celebra el aprendizaje obtenido en lugar de imponer castigos punitivos."
            }
          ]
        },
        {
          "id": "unit-4",
          "number": 4,
          "title": "Ciclos de Vida del Proyecto y Áreas de Enfoque",
          "sectionRef": "Sección 4 (4.1 - 4.5)",
          "description": "Fases, enfoques (predictivo, adaptativo, híbrido), cadencia de entrega y las 5 Áreas de Enfoque que reincorporan los Grupos de Procesos.",
          "lessons": [
            {
              "id": "les-4-1",
              "title": "Fases y Enfoques de Desarrollo",
              "section": "4.1 - 4.2",
              "xp": 30,
              "timeMin": 7,
              "summary": "El espectro de desarrollo: desde el enfoque completamente predictivo (cascada) hasta el totalmente adaptativo (ágil/iterativo), y la realidad híbrida predominante.",
              "points": [
                "Predictivo (Waterfall): Alcance, tiempo y costo definidos al inicio. Los cambios son controlados estrictamente. Ideal para entregables bien entendidos (ej. construcción civil).",
                "Adaptativo (Agile): El alcance evoluciona con retroalimentación frecuente. Entregas tempranas e incrementales. Ideal para alta incertidumbre y software innovador.",
                "Híbrido: Combinación pragmática. Ejemplo: Desarrollo de software adaptativo con despliegue de infraestructura física predictivo.",
                "Fases del Proyecto: Divisiones lógicas que concluyen con una compuerta de fase (phase gate o kill point) donde se decide si continuar o abortar."
              ],
              "examTip": "Para el examen, no hay un enfoque superior a otro: la clave está en el tailoring según la incertidumbre técnica y de requisitos (Matriz de Stacey)."
            },
            {
              "id": "les-4-2",
              "title": "Criterios de Selección del Enfoque y Cadencia",
              "section": "4.3 - 4.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Factores que determinan el mejor enfoque (naturaleza del entregable, cultura de la organización) y las modalidades de cadencia de entrega.",
              "points": [
                "Factores del Entregable: Nivel de novedad, certeza de requisitos, facilidad de cambio y riesgo de seguridad.",
                "Factores Organizacionales: Capacidad del cliente para involucrarse semanalmente, estructura corporativa y apetito al riesgo.",
                "Cadencia de Entrega Única (Single delivery): Un solo lanzamiento al final (ej. un puente nuevo).",
                "Cadencia de Entregas Múltiples (Multiple deliveries): Entregas por módulos en hitos fijados.",
                "Cadencia Periódica / Continua (Continuous delivery): Lanzamientos frecuentes al final de cada sprint o despliegue continuo (DevOps)."
              ],
              "examTip": "Si un cliente no tiene disponibilidad para revisar entregables semanalmente, un enfoque puramente ágil fracasará por falta de retroalimentación; se requiere un modelo adaptado o híbrido."
            },
            {
              "id": "les-4-3",
              "title": "Las 5 Áreas de Enfoque (Focus Areas)",
              "section": "4.5",
              "xp": 35,
              "timeMin": 8,
              "summary": "La 8va edición reintroduce los históricos 'Grupos de Procesos' transformados en 'Áreas de Enfoque' flexibles y no prescriptivas.",
              "points": [
                "Reinvención histórica: Antes se llamaban 'Grupos de Procesos' (Iniciación, Planificación, Ejecución, Monitoreo y Control, Cierre). Ahora son 'Focus Areas'.",
                "No son fases cronológicas lineales: Son categorías lógicas de actividades que ocurren de manera concurrente e iterativa.",
                "1. Iniciación (Initiating): Autorización oficial y definición inicial del proyecto o fase.",
                "2. Planificación (Planning): Definición del curso de acción para lograr el valor previsto.",
                "3. Ejecución (Executing): Realización del trabajo coordinando personas y recursos.",
                "4. Monitoreo y Control (Monitoring & Controlling): Medición del desempeño frente al plan y gestión proactiva de cambios.",
                "5. Cierre (Closing): Conclusión formal, verificación de valor, archivo de conocimiento y liberación de recursos."
              ],
              "examTip": "¡Pregunta fija de examen!: Las Áreas de Enfoque se aplican en TODOS los enfoques (incluso en Scrum, donde cada Sprint tiene su propia mini-iniciación, planning, ejecución, control y retrospectiva/cierre)."
            }
          ]
        }
      ]
    },
    {
      "id": "part-2",
      "number": 2,
      "title": "Guía de los Fundamentos (PMBOK® Guide)",
      "titleEn": "A Guide to the Project Management Body of Knowledge",
      "description": "Los 7 Dominios de Desempeño sintetizados con los 40 Procesos, Entradas, Herramientas, Salidas, Adaptación y Comprobación de Resultados.",
      "color": "#1976D2",
      "icon": "account_tree",
      "units": [
        {
          "id": "unit-5",
          "number": 5,
          "title": "Introducción y Visión General de los 7 Dominios",
          "sectionRef": "Capítulo 1 y 2 (2.0)",
          "description": "Estructura de la Guía, integración de las Áreas de Conocimiento históricas en 7 Dominios y mapa de los 40 procesos.",
          "lessons": [
            {
              "id": "les-5-1",
              "title": "Estructura de la Guía y los 7 Dominios",
              "section": "1.1 - 1.3, 2.0",
              "xp": 30,
              "timeMin": 6,
              "summary": "Cómo la 8va edición sintetiza las 10 Áreas de Conocimiento tradicionales en 7 Dominios de Desempeño integrados con 40 procesos no prescriptivos.",
              "points": [
                "Los 7 Dominios: 1) Gobernanza, 2) Alcance, 3) Cronograma, 4) Finanzas, 5) Interesados, 6) Recursos, 7) Riesgo.",
                "Sinergia: Las 10 antiguas áreas de conocimiento (Integración, Alcance, Cronograma, Costos, Calidad, Recursos, Comunicaciones, Riesgos, Adquisiciones, Interesados) fueron redistribuidas orgánicamente.",
                "Integración y Calidad se integran en el Dominio de Gobernanza.",
                "Comunicaciones se integra en el Dominio de Interesados.",
                "Adquisiciones tiene presencia en Gobernanza (Plan Sourcing) y un apéndice técnico exhaustivo (X4).",
                "40 Procesos Formales pero no prescriptivos que se adaptan a cualquier entorno."
              ],
              "examTip": "Comprende la matriz: 7 Dominios en las filas x 5 Áreas de Enfoque en las columnas = 40 Procesos de Dirección de Proyectos."
            }
          ]
        },
        {
          "id": "unit-6",
          "number": 6,
          "title": "Dominio de Gobernanza (Governance Domain)",
          "sectionRef": "Capítulo 2 (2.1) - 9 Procesos",
          "description": "Toma de decisiones, integración de planes, estrategia de abastecimiento, calidad, conocimiento, gestión de cambios y cierre.",
          "lessons": [
            {
              "id": "les-6-1",
              "title": "Fundamentos y Modelos de Gobernanza",
              "section": "2.1.1 - 2.1.5",
              "xp": 35,
              "timeMin": 7,
              "summary": "Conceptos clave de gobernanza: asegurar que el proyecto cree y proteja valor, estructurar modelos de supervisión y fijar métricas de éxito.",
              "points": [
                "La gobernanza abarca todo el ciclo de vida: desde autorizar el inicio hasta decidir cancelar un proyecto si pierde viabilidad.",
                "Proyectos estructurados vs autogestionados: el nivel de rigidez del marco de control depende de la criticidad y del entorno.",
                "Métricas de Gobernanza: ROI, VAN, TIR, satisfacción de partes interesadas, índice de alineación estratégica y cumplimiento normativo.",
                "Consideraciones en entornos predictivos: Puntos de control formales y juntas de aprobación de cambios (CCB)."
              ],
              "examTip": "La gobernanza del proyecto define 'quién toma qué decisión' y 'cuándo se escala'. Si no está clara la gobernanza, surgen conflictos de autoridad."
            },
            {
              "id": "les-6-2",
              "title": "Procesos de Iniciación y Planificación de Gobernanza",
              "section": "2.1.6.1 - 2.1.6.3",
              "xp": 40,
              "timeMin": 9,
              "summary": "1. Iniciar el Proyecto o Fase, 2. Integrar y Alinear Planes del Proyecto, 3. Planificar la Estrategia de Abastecimiento.",
              "points": [
                "Proceso 1: Iniciar Proyecto o Fase (Initiate Project or Phase) [Iniciación]. Salidas clave: Project Charter (Acta de Constitución) y Registro de Supuestos.",
                "El Acta de Constitución autoriza formalmente la existencia del proyecto y otorga al PM autoridad para asignar recursos organizacionales.",
                "Proceso 2: Integrar y Alinear Planes (Integrate and Align Project Plans) [Planificación]. Salida clave: Plan para la Dirección del Proyecto (Project Management Plan).",
                "El plan integrado armoniza todas las líneas base (alcance, cronograma, costos) y planes secundarios.",
                "Proceso 3: Planificar Estrategia de Abastecimiento (Plan Sourcing Strategy) [Planificación]. Salida: Estrategia de abastecimiento y decisiones make-or-buy."
              ],
              "examTip": "El Acta de Constitución la firma el Patrocinador (Sponsor), NO el Director del Proyecto. El PM puede colaborar en su redacción, pero quien autoriza es el Sponsor."
            },
            {
              "id": "les-6-3",
              "title": "Procesos de Ejecución de Gobernanza",
              "section": "2.1.6.4 - 2.1.6.6",
              "xp": 40,
              "timeMin": 8,
              "summary": "4. Gestionar la Ejecución del Proyecto, 5. Gestionar el Aseguramiento de la Calidad, 6. Gestionar el Conocimiento del Proyecto.",
              "points": [
                "Proceso 4: Gestionar la Ejecución del Proyecto (Manage Project Execution) [Ejecución]. Dirige el trabajo diario, asigna tareas y genera los Entregables (Deliverables) y Datos de Desempeño.",
                "Proceso 5: Gestionar Aseguramiento de Calidad (Manage Quality Assurance) [Ejecución]. Audita los procesos para asegurar que cumplan estándares y mejoren continuamente. Salida: Informes de calidad y solicitudes de cambio.",
                "Proceso 6: Gestionar Conocimiento del Proyecto (Manage Project Knowledge) [Ejecución]. Fomenta el intercambio de conocimiento explícito y tácito. Salida: Registro de Lecciones Aprendidas (Lessons Learned Register)."
              ],
              "examTip": "Distinción crucial: Aseguramiento de Calidad (QA) se enfoca en los PROCESOS (¿estamos trabajando con los métodos adecuados?). Control de Calidad se enfoca en los ENTREGABLES (¿el producto tiene defectos?)."
            },
            {
              "id": "les-6-4",
              "title": "Monitoreo, Control de Cambios y Cierre de Gobernanza",
              "section": "2.1.6.7 - 2.1.6.9",
              "xp": 40,
              "timeMin": 9,
              "summary": "7. Monitorear y Controlar Desempeño, 8. Evaluar e Implementar Cambios, 9. Cerrar Proyecto o Fase.",
              "points": [
                "Proceso 7: Monitorear y Controlar Desempeño (Monitor and Control Project Performance) [M&C]. Compara la realidad con la línea base y genera Informes de Desempeño del Trabajo.",
                "Proceso 8: Evaluar e Implementar Cambios (Assess and Implement Changes) [M&C]. El flujo formal de control integrado de cambios: recibir solicitud, analizar impacto en todas las variables, someter a la CCB y actualizar planes.",
                "Proceso 9: Cerrar Proyecto o Fase (Close Project or Phase) [Cierre]. Transferencia formal del entregable final a operaciones, cierre de contratos, archivo del repositorio y liberación de recursos."
              ],
              "examTip": "Flujo de control de cambios para el examen: 1) Analizar impacto integral -> 2) Evaluar opciones con el equipo -> 3) Presentar a la CCB/Sponsor -> 4) Si se aprueba, actualizar plan y comunicar a interesados."
            },
            {
              "id": "les-6-5",
              "title": "Adaptación, Interacciones y Verificación de Resultados",
              "section": "2.1.7 - 2.1.9",
              "xp": 30,
              "timeMin": 6,
              "summary": "Cómo adaptar la gobernanza y verificar si el dominio logró sus resultados esperados (Tabla 2-5).",
              "points": [
                "Adaptación en Gobernanza: En proyectos ágiles, la gobernanza se descentraliza hacia el equipo y el Product Owner prioriza el backlog.",
                "Interacciones: Conecta con Finanzas (autorización de fondos), Alcance (cambios) y Riesgos (escalamiento).",
                "Verificación de Resultados (Check Outcomes): ¿Se alinearon las decisiones con la estrategia? ¿Los cambios se gestionaron con orden? ¿El cierre transfirió valor real a operaciones?"
              ],
              "examTip": "Cada dominio de desempeño concluye con una sección de 'Check Results' (Comprobación de Resultados). Si las partes interesadas no están satisfechas con la toma de decisiones, la gobernanza falló."
            }
          ]
        },
        {
          "id": "unit-7",
          "number": 7,
          "title": "Dominio de Alcance (Scope Domain)",
          "sectionRef": "Capítulo 2 (2.2) - 6 Procesos",
          "description": "Planificar alcance, levantar requisitos, definir alcance, crear EDT/WBS, monitorear y validar el alcance.",
          "lessons": [
            {
              "id": "les-7-1",
              "title": "Conceptos Clave del Alcance",
              "section": "2.2.1",
              "xp": 35,
              "timeMin": 6,
              "summary": "Diferencia entre alcance del producto y alcance del proyecto, historias de usuario, criterios de aceptación y descomposición.",
              "points": [
                "Alcance del Producto: Las características y funciones que describen el producto, servicio o resultado final.",
                "Alcance del Proyecto: El trabajo que debe realizarse para entregar el producto con las características especificadas.",
                "Corrupción del Alcance (Scope Creep): Expansión descontrolada del alcance sin ajustes de tiempo, costo o recursos.",
                "Criterios de Aceptación: Condiciones medibles y objetivas que deben cumplirse antes de que los entregables sean aceptados formalmente."
              ],
              "examTip": "Completar el alcance del producto se mide contra los requisitos; completar el alcance del proyecto se mide contra el plan para la dirección del proyecto."
            },
            {
              "id": "les-7-2",
              "title": "Procesos de Planificación del Alcance",
              "section": "2.2.2.1 - 2.2.2.4",
              "xp": 40,
              "timeMin": 9,
              "summary": "1. Planificar Alcance, 2. Levantar Requisitos, 3. Definir Alcance, 4. Desarrollar Estructura del Alcance (EDT/WBS).",
              "points": [
                "Proceso 10: Planificar Gestión del Alcance (Plan Scope Management). Documenta cómo se definirá, validará y controlará el alcance.",
                "Proceso 11: Levantar y Analizar Requisitos (Elicit and Analyze Requirements). Recopilación mediante entrevistas, encuestas, talleres facilitados. Salida: Matriz de Trazabilidad de Requisitos.",
                "Proceso 12: Definir Alcance (Define Scope). Elabora el Enunciado del Alcance del Proyecto (Project Scope Statement) con inclusiones y exclusiones explícitas.",
                "Proceso 13: Desarrollar Estructura del Alcance (Develop Scope Structure). Crea la EDT/WBS descomponiendo el trabajo en Paquetes de Trabajo (Work Packages). Regla del 100%: La EDT contiene el 100% del trabajo y nada más."
              ],
              "examTip": "El nivel más bajo de la EDT es el 'Paquete de Trabajo' (Work Package). El Diccionario de la EDT acompaña a la WBS detallando cada paquete."
            },
            {
              "id": "les-7-3",
              "title": "Monitoreo, Validación de Alcance y Verificación",
              "section": "2.2.2.5 - 2.2.5",
              "xp": 40,
              "timeMin": 8,
              "summary": "5. Monitorear Alcance, 6. Validar Alcance, consideraciones de adaptación y comprobación de resultados.",
              "points": [
                "Proceso 14: Monitorear y Controlar Alcance (Monitor and Control Scope). Mide el estado del alcance y gestiona desviaciones frente a la línea base.",
                "Proceso 15: Validar el Alcance (Validate Scope). Formaliza la aceptación de los entregables completados por parte del CLIENTE o SPONSOR.",
                "Distinción Vital: Control de Calidad (interno con el equipo) verifica exactitud técnica -> Luego Validar Alcance (con el cliente) obtiene la firma de aceptación formal.",
                "Comprobación de Resultados de Alcance (Table 2-6): Entregables cumplen expectativas, no hay scope creep, y los requisitos se rastrean de punta a punta."
              ],
              "examTip": "¡Pregunta clásica del examen!: ¿En qué proceso el cliente inspecciona y firma la aceptación de un entregable? Respuesta: Validar el Alcance (Validate Scope)."
            }
          ]
        },
        {
          "id": "unit-8",
          "number": 8,
          "title": "Dominio de Cronograma (Schedule Domain)",
          "sectionRef": "Capítulo 2 (2.3) - 3 Procesos",
          "description": "Planificar cronograma, desarrollar cronograma (Ruta Crítica CPM, dependencias, compresión) y monitorear el cronograma.",
          "lessons": [
            {
              "id": "les-8-1",
              "title": "Conceptos Clave de Cronograma",
              "section": "2.3.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Actividades, tipos de precedencia (FS, FF, SS, SF), adelantos (leads) y retrasos (lags), holgura total y libre.",
              "points": [
                "Tipos de Dependencia PDM: Final a Inicio (FS - más común), Inicio a Inicio (SS), Final a Final (FF), Inicio a Final (SF - muy raro).",
                "Adelanto (Lead): Tiempo en que una actividad sucesora puede comenzar antes de que termine la predecesora.",
                "Retraso (Lag): Demora obligatoria entre actividades (ej. esperar 3 días a que seque el concreto).",
                "Ruta Crítica (Critical Path Method - CPM): La secuencia de actividades con menor holgura (típicamente cero) que determina la duración total más corta del proyecto.",
                "Holgura Total: Tiempo que una actividad puede retrasarse sin demorar la fecha final del proyecto."
              ],
              "examTip": "Si una actividad de la ruta crítica se atrasa 2 días, la fecha de fin de todo el proyecto se atrasa 2 días automáticamente."
            },
            {
              "id": "les-8-2",
              "title": "Procesos de Planificación del Cronograma",
              "section": "2.3.2.1 - 2.3.2.2",
              "xp": 40,
              "timeMin": 9,
              "summary": "16. Planificar Gestión del Cronograma, 17. Desarrollar Cronograma (pasos, métodos de red y líneas base).",
              "points": [
                "Proceso 16: Planificar Gestión del Cronograma (Plan Schedule Management). Define metodologías, software, unidades de medida y niveles de tolerancia.",
                "Proceso 17: Desarrollar el Cronograma (Develop Schedule). Integra lista de actividades, estimaciones de duración, dependencias y recursos para construir el modelo de programación.",
                "Pasos para Desarrollar el Cronograma (Figura 2-23): 1) Definir actividades -> 2) Secuenciar actividades -> 3) Estimar recursos y duraciones -> 4) Analizar red y ruta crítica -> 5) Ajustar con nivelación de recursos.",
                "Salida Clave: Línea Base del Cronograma (Schedule Baseline) y Cronograma del Proyecto (Diagramas de Gantt, diagramas de hitos)."
              ],
              "examTip": "La Línea Base del Cronograma es la versión aprobada formalmente; solo puede modificarse mediante el proceso de Evaluar e Implementar Cambios con autorización."
            },
            {
              "id": "les-8-3",
              "title": "Monitoreo, Compresión y Verificación de Cronograma",
              "section": "2.3.2.3, 2.3.3 - 2.3.5",
              "xp": 40,
              "timeMin": 8,
              "summary": "18. Monitorear Cronograma, técnicas de compresión (Crashing vs Fast-Tracking) y comprobación de resultados.",
              "points": [
                "Proceso 18: Monitorear y Controlar Cronograma (Monitor and Control Schedule). Supervisa avances mediante gráficas de avance (burndown), SPI e hitos.",
                "Compresión: Intensificación (Crashing): Añadir recursos a actividades de la ruta crítica para acortar tiempo. AUMENTA COSTOS y riesgos.",
                "Compresión: Ejecución Rápida (Fast Tracking): Realizar actividades secuenciales en paralelo. AUMENTA RIESGOS y posible retrabajo, pero no necesariamente costo directo.",
                "Nivelación de Recursos (Resource Leveling): Resuelve sobreasignaciones moviendo fechas de actividades; A MENUDO ALARGA LA RUTA CRÍTICA.",
                "Estabilización de Recursos (Resource Smoothing): Ajusta recursos dentro de la holgura disponible; NO modifica la ruta crítica."
              ],
              "examTip": "Si el sponsor exige terminar antes pero NO hay presupuesto extra: utiliza Fast Tracking. Si hay presupuesto pero no se puede asumir riesgo de retrabajo: evalúa Crashing."
            }
          ]
        },
        {
          "id": "unit-9",
          "number": 9,
          "title": "Dominio de Finanzas (Finance Domain)",
          "sectionRef": "Capítulo 2 (2.4) - 4 Procesos",
          "description": "Planificar finanzas, estimar costos, desarrollar presupuesto (Línea Base de Costos), monitorear finanzas y gestión de valor ganado.",
          "lessons": [
            {
              "id": "les-9-1",
              "title": "Conceptos Clave de Gestión Financiera",
              "section": "2.4.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Costos directos e indirectos, fijos y variables, costo de oportunidad, costos hundidos y estructura del presupuesto.",
              "points": [
                "Costos Directos: Atribuibles exclusivamente al trabajo del proyecto (ej. salarios del equipo, materiales).",
                "Costos Indirectos: Compartidos por múltiples proyectos (ej. alquiler de oficinas, servicios públicos).",
                "Costo Hundido (Sunk Cost): Dinero ya gastado en el pasado; NO debe influir en decisiones futuras de continuar o cancelar el proyecto.",
                "Reserva de Contingencia: Dinero asignado para 'conocidos-desconocidos' (riesgos identificados en el registro). Parte de la Línea Base de Costos.",
                "Reserva de Gestión: Dinero asignado para 'desconocidos-desconocidos' (imprevistos no identificados). Controlada por el Sponsor; NO forma parte de la Línea Base."
              ],
              "examTip": "Presupuesto Total del Proyecto = Línea Base de Costos + Reserva de Gestión. El PM administra la Línea Base; para usar Reserva de Gestión requiere autorización ejecutiva."
            },
            {
              "id": "les-9-2",
              "title": "Planificación y Desarrollo del Presupuesto",
              "section": "2.4.2.1 - 2.4.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "19. Planificar Finanzas, 20. Estimar Costos, 21. Desarrollar Presupuesto y creación de la Curva S.",
              "points": [
                "Proceso 19: Planificar Gestión Financiera (Plan Financial Management). Establece criterios de redondeo, unidades monetarias y umbrales de control.",
                "Proceso 20: Estimar Costos (Estimate Costs). Métodos: Estimación Análoga (rápida, menor precisión), Paramétrica (estadística, costo/m2), Bottom-up (desde paquetes de trabajo hacia arriba, más precisa y costosa), Tres Puntos (PERT).",
                "Proceso 21: Desarrollar el Presupuesto (Develop Budget). Agrega estimaciones de actividades + paquetes de trabajo + reservas de contingencia.",
                "Salida Clave: Línea Base de Costos (Cost Baseline), representada gráficamente como una 'Curva S' en el tiempo."
              ],
              "examTip": "La Curva S muestra los costos acumulados planificados a lo largo del tiempo. Comienza con pendiente suave, se acelera en ejecución y se aplana al cierre."
            },
            {
              "id": "les-9-3",
              "title": "Monitoreo Financiero y Verificación de Resultados",
              "section": "2.4.2.4, 2.4.3 - 2.4.5",
              "xp": 40,
              "timeMin": 8,
              "summary": "22. Monitorear Finanzas, integración con Valor Ganado (EVM) y comprobación de resultados.",
              "points": [
                "Proceso 22: Monitorear y Controlar Finanzas (Monitor and Control Finances). Controla desembolsos, pagos a proveedores y calcula variaciones de costo.",
                "Gestión de Flujo de Caja: Asegurar que los fondos estén disponibles a tiempo para pagar obligaciones operativas.",
                "Verificación de Resultados (Table 2-8): ¿El proyecto se completó dentro de los fondos aprobados? ¿Se respetaron los límites de gasto? ¿Se generó el retorno financiero previsto?"
              ],
              "examTip": "El monitoreo financiero no solo revisa facturas pagadas (AC); debe contrastarse con el trabajo efectivamente completado (EV) para saber si hay sobrecosto real."
            }
          ]
        },
        {
          "id": "unit-10",
          "number": 10,
          "title": "Dominio de Interesados (Stakeholders Domain)",
          "sectionRef": "Capítulo 2 (2.5) - 7 Procesos",
          "description": "Identificar partes interesadas, planificar involucramiento y comunicaciones, gestionar relaciones y monitorear canales.",
          "lessons": [
            {
              "id": "les-10-1",
              "title": "Conceptos Clave de Interesados y Comunicación",
              "section": "2.5.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Interesados internos/externos, modelos de clasificación (Poder/Interés, Prominencia/Salience) y canales de comunicación.",
              "points": [
                "Parte Interesada (Stakeholder): Individuo o grupo que puede afectar, verse afectado o percibirse afectado por una decisión del proyecto.",
                "Matriz Poder vs Interés: 1) Alto Poder/Alto Interés (Gestionar de cerca), 2) Alto Poder/Bajo Interés (Mantener satisfecho), 3) Bajo Poder/Alto Interés (Mantener informado), 4) Bajo Poder/Bajo Interés (Monitorear con esfuerzo mínimo).",
                "Cálculo de Canales de Comunicación: Fórmula N * (N - 1) / 2. Si un equipo crece de 5 a 10 personas, los canales aumentan de 10 a 45.",
                "Ruido en la Comunicación: Barreras culturales, sesgos, tecnología deficiente o lenguaje técnico incomprensible."
              ],
              "examTip": "Cuando se añade un nuevo miembro al equipo, el número de canales de comunicación crece exponencialmente, aumentando la complejidad del PM."
            },
            {
              "id": "les-10-2",
              "title": "Identificación y Planificación de Interesados y Comunicaciones",
              "section": "2.5.2.1 - 2.5.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "23. Identificar Interesados, 24. Planificar Involucramiento, 25. Planificar Gestión de Comunicaciones.",
              "points": [
                "Proceso 23: Identificar Interesados (Identify Stakeholders) [Iniciación]. Se realiza desde el día uno y de manera continua. Salida: Registro de Interesados (Stakeholder Register).",
                "Proceso 24: Planificar Involucramiento de Interesados (Plan Stakeholder Engagement). Salida: Matriz de Evaluación del Involucramiento de Interesados (Desconocedor, Reticente, Neutral, Apoyo, Líder).",
                "Proceso 25: Planificar Gestión de Comunicaciones (Plan Communications Management). Define qué información, quién la necesita, con qué frecuencia, por qué medio y en qué formato."
              ],
              "examTip": "El Registro de Interesados contiene información confidencial de percepciones y actitudes de personas; debe protegerse adecuadamente."
            },
            {
              "id": "les-10-3",
              "title": "Gestión y Monitoreo de Interesados y Comunicaciones",
              "section": "2.5.2.4 - 2.5.5",
              "xp": 40,
              "timeMin": 9,
              "summary": "26. Gestionar Involucramiento, 27. Gestionar Comunicaciones, 28. Monitorear Involucramiento, 29. Monitorear Comunicaciones.",
              "points": [
                "Proceso 26: Gestionar Involucramiento (Manage Stakeholder Engagement) [Ejecución]. Interactuar activamente para fomentar el compromiso, resolver inquietudes y gestionar expectativas.",
                "Proceso 27: Gestionar Comunicaciones (Manage Communications) [Ejecución]. Crear, recopilar, distribuir, almacenar y recuperar la información del proyecto según el plan.",
                "Proceso 28: Monitorear Involucramiento (Monitor Stakeholder Engagement) [M&C]. Evaluar si las relaciones están funcionando o si se requiere ajustar estrategias de acercamiento.",
                "Proceso 29: Monitorear Comunicaciones (Monitor Communications) [M&C]. Asegurar que el mensaje correcto llegue a la persona adecuada en el momento oportuno.",
                "Comprobación de Resultados (Table 2-9): Relaciones productivas, comunicación abierta y alineación compartida de objetivos."
              ],
              "examTip": "El PM dedica hasta un 90% de su tiempo a comunicarse. Si un interesado clave muestra resistencia, la respuesta siempre es reunirse proactivamente para entender su preocupación."
            }
          ]
        },
        {
          "id": "unit-11",
          "number": 11,
          "title": "Dominio de Recursos (Resources Domain)",
          "sectionRef": "Capítulo 2 (2.6) - 5 Procesos",
          "description": "Planificar recursos, estimar, adquirir recursos físicos y humanos, liderar el equipo y monitorear asignaciones.",
          "lessons": [
            {
              "id": "les-11-1",
              "title": "Conceptos Clave de Recursos y Dinámica de Equipos",
              "section": "2.6.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Recursos humanos vs físicos, modelo de Tuckman, inteligencia emocional, liderazgo situacional y Matriz RACI.",
              "points": [
                "Recursos Físicos (equipos, materiales, licencias) vs Recursos del Equipo (personas y talentos).",
                "Etapas de Tuckman: Formación (Forming), Turbulencia (Storming), Normalización (Norming), Desempeño (Performing), Disolución (Adjourning).",
                "Inteligencia Emocional: Autoconciencia, autorregulación, motivación, empatía y habilidades sociales.",
                "Matriz RACI: Responsable (Responsible - hace el trabajo), Aprobador (Accountable - único que rinde cuentas), Consultado (Consulted), Informado (Informed). Regla: Solo UN 'A' por actividad."
              ],
              "examTip": "En la etapa de 'Storming' (conflicto y choque de personalidades), el PM debe actuar como mediador y fijar normas claras de equipo (Team Charter)."
            },
            {
              "id": "les-11-2",
              "title": "Planificación, Estimación y Adquisición de Recursos",
              "section": "2.6.2.1 - 2.6.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "30. Planificar Recursos, 31. Estimar Recursos, 32. Adquirir Recursos.",
              "points": [
                "Proceso 30: Planificar Gestión de Recursos (Plan Resource Management). Define adquisición, gestión y liberación de personal y materiales. Salida: Acta de Equipo (Team Charter).",
                "Proceso 31: Estimar Recursos (Estimate Resources). Determina personal, equipo y suministros requeridos para cada actividad. Salida: Estructura de Desglose de Recursos (RBS).",
                "Proceso 32: Adquirir Recursos (Acquire Resources) [Ejecución]. Obtener los miembros del equipo, instalaciones y materiales necesarios mediante asignación interna o negociación."
              ],
              "examTip": "El Acta de Equipo (Team Charter) la crea y consensúa el PROPIO EQUIPO, estableciendo valores compartidos, reglas de reunión y acuerdos de trabajo."
            },
            {
              "id": "les-11-3",
              "title": "Liderar al Equipo, Monitoreo y Verificación de Recursos",
              "section": "2.6.2.4 - 2.6.5",
              "xp": 40,
              "timeMin": 9,
              "summary": "33. Liderar el Equipo, 34. Monitorear Recursos, resolución de conflictos y comprobación de resultados.",
              "points": [
                "Proceso 33: Liderar el Equipo (Lead the Team) [Ejecución]. Desarrollar competencias, motivar, brindar retroalimentación y resolver conflictos.",
                "Técnicas de Resolución de Conflictos: 1) Colaborar / Resolver el Problema (ganar-ganar, la mejor según PMI), 2) Forzar / Dirigir (imponer solución), 3) Suavizar / Acomodar (resaltar coincidencias), 4) Retirarse / Evitar (posponer), 5) Conciliar / Ceder (ambos ceden algo).",
                "Proceso 34: Monitorear y Controlar Recursos (Monitor and Control Resourcing) [M&C]. Asegura que los recursos físicos estén disponibles en el lugar y momento adecuado.",
                "Comprobación de Resultados (Table 2-10): Alta moral y colaboración en el equipo, uso óptimo de recursos físicos sin desperdicio."
              ],
              "examTip": "En el examen PMP, la respuesta predilecta ante un conflicto entre dos profesionales es casi siempre: 'Colaborar / Resolver el problema' mediante diálogo constructivo cara a cara."
            }
          ]
        },
        {
          "id": "unit-12",
          "number": 12,
          "title": "Dominio de Riesgo (Risk Domain)",
          "sectionRef": "Capítulo 2 (2.7) - 6 Procesos",
          "description": "Planificar riesgos, identificación, análisis cualitativo y cuantitativo, plan de respuestas, implementación y monitoreo.",
          "lessons": [
            {
              "id": "les-12-1",
              "title": "Conceptos Clave de Gestión del Riesgo",
              "section": "2.7.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Incertidumbre, riesgo individual vs general, amenazas vs oportunidades, apetito al riesgo, tolerancia y umbral.",
              "points": [
                "Riesgo Individual del Proyecto: Evento o condición incierta que, si ocurre, tiene un efecto positivo (oportunidad) o negativo (amenaza) en uno o más objetivos.",
                "Riesgo General del Proyecto: El efecto de la incertidumbre sobre el proyecto en su conjunto, originado por todas las fuentes de riesgo y su interacción sistémica.",
                "Apetito de Riesgo: Grado de incertidumbre que una organización está dispuesta a aceptar con miras a una recompensa.",
                "Umbral de Riesgo: Medida cuantificable del nivel de riesgo aceptable; por encima del umbral, se exige respuesta inmediata obligatoria."
              ],
              "examTip": "¡Recuerda!: En PMBOK 8, el riesgo NO es solo peligro. Una oportunidad es un riesgo positivo que debe ser explotado, compartido o mejorado para maximizar valor."
            },
            {
              "id": "les-12-2",
              "title": "Planificación e Identificación de Riesgos",
              "section": "2.7.2.1 - 2.7.2.2",
              "xp": 40,
              "timeMin": 8,
              "summary": "35. Planificar Gestión de Riesgos, 36. Identificar Riesgos y creación del Registro de Riesgos.",
              "points": [
                "Proceso 35: Planificar Gestión de Riesgos (Plan Risk Management). Define cómo realizar las actividades de riesgo. Salida: Plan de Gestión de Riesgos y Estructura de Desglose del Riesgo (RBS).",
                "Proceso 36: Identificar Riesgos (Identify Risks). Identificar riesgos individuales y fuentes generales. Herramientas: Brainstorming, listas de verificación, análisis SWOT (FODA), análisis de supuestos.",
                "Salida Clave: Registro de Riesgos (Risk Register) e Informe de Riesgos (Risk Report). Se actualiza a lo largo de todo el proyecto."
              ],
              "examTip": "La identificación de riesgos es un proceso iterativo que NUNCA termina hasta que el proyecto se cierra formalmente."
            },
            {
              "id": "les-12-3",
              "title": "Análisis de Riesgos (Cualitativo y Cuantitativo)",
              "section": "2.7.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "37. Realizar Análisis de Riesgos: Matriz de Probabilidad e Impacto, Diagrama de Tornado y Simulación Monte Carlo.",
              "points": [
                "Proceso 37: Realizar Análisis de Riesgos (Perform Risk Analysis) [Planificación]. Combina la evaluación cualitativa y cuantitativa.",
                "Análisis Cualitativo: Prioriza riesgos evaluando su probabilidad de ocurrencia e impacto (P x I) en una Matriz de Probabilidad e Impacto. Rápido y aplicable a todos los proyectos.",
                "Análisis Cuantitativo: Modela matemáticamente el efecto numérico global de los riesgos en costo y cronograma.",
                "Herramientas Cuantitativas: Simulación Monte Carlo (genera curvas de probabilidad de terminar en fecha/costo), Diagrama de Tornado (análisis de sensibilidad), Valor Monetario Esperado (EMV = Probabilidad x Impacto)."
              ],
              "examTip": "El análisis cualitativo es obligatorio para todos los proyectos; el análisis cuantitativo se reserva para proyectos complejos, de alto riesgo o gran envergadura."
            },
            {
              "id": "les-12-4",
              "title": "Estrategias de Respuesta, Implementación y Monitoreo",
              "section": "2.7.2.4 - 2.7.5",
              "xp": 40,
              "timeMin": 9,
              "summary": "38. Planificar Respuestas, 39. Implementar Respuestas, 40. Monitorear Riesgos y comprobación de resultados.",
              "points": [
                "Proceso 38: Planificar Respuestas a los Riesgos (Plan Risk Responses). Salida: Asignar un 'Dueño del Riesgo' (Risk Owner) para cada riesgo clave.",
                "Estrategias para Amenazas: 1) Escalar, 2) Evitar (eliminar causa), 3) Transferir (seguros, contratos a precio fijo), 4) Mitigar (reducir probabilidad o impacto), 5) Aceptar (activo: contingencia; pasivo: asumir).",
                "Estrategias para Oportunidades: 1) Escalar, 2) Explotar (asegurar que ocurra al 100%), 3) Compartir (asociación con tercero experto), 4) Mejorar (aumentar probabilidad o impacto positivo), 5) Aceptar.",
                "Proceso 39: Implementar Respuestas a los Riesgos (Implement Risk Responses) [Ejecución]. Ejecutar las acciones acordadas cuando los disparadores (triggers) se activen.",
                "Proceso 40: Monitorear Riesgos (Monitor Risks) [M&C]. Monitorear efectividad, rastrear riesgos residuales y secundarios y cerrar riesgos caducados.",
                "Comprobación de Resultados (Table 2-11): Riesgos mantenidos dentro de los umbrales tolerables, oportunidades aprovechadas con éxito."
              ],
              "examTip": "Comprar una póliza de seguros es el ejemplo clásico de TRANSFERIR un riesgo. Eliminar la característica conflictiva del alcance es EVITAR el riesgo."
            }
          ]
        },
        {
          "id": "unit-13",
          "number": 13,
          "title": "Adaptación (Tailoring) en el PMBOK 8",
          "sectionRef": "Capítulo 3 (3.1 - 3.7)",
          "description": "El marco de adaptación: por qué adaptar, qué adaptar, el proceso de 4 pasos, diagnósticos y personalización de dominios.",
          "lessons": [
            {
              "id": "les-13-1",
              "title": "Fundamentos de la Adaptación: ¿Por qué y Qué Adaptar?",
              "section": "3.1 - 3.3",
              "xp": 35,
              "timeMin": 6,
              "summary": "Cada proyecto es único y ningún estándar debe aplicarse a ciegas. La adaptación adecúa el marco a la complejidad y entorno real.",
              "points": [
                "¿Por qué Adaptar?: Evitar burocracia inútil en proyectos sencillos y asegurar controles rigurosos en proyectos de misión crítica.",
                "¿Qué se Adapta?: 1) Selección del ciclo de vida y enfoque de desarrollo (predictivo, híbrido, ágil); 2) Procesos (cuáles usar, simplificar o combinar); 3) Involucramiento de partes interesadas y herramientas.",
                "Evitar dos extremos peligrosos: Ni sobreprocesamiento (burocracia paralizante) ni anarquía (eliminar controles básicos de gobernanza y calidad)."
              ],
              "examTip": "La adaptación no es omitir procesos por pereza; es una decisión deliberada y justificada para maximizar el valor entregado."
            },
            {
              "id": "les-13-2",
              "title": "El Proceso de Adaptación de 4 Pasos",
              "section": "3.4 (3.4.1 - 3.4.4)",
              "xp": 35,
              "timeMin": 7,
              "summary": "El método formal de PMBOK 8 para adaptar: 1) Seleccionar enfoque inicial, 2) Adaptar a la organización, 3) Adaptar al proyecto, 4) Implementar mejora continua.",
              "points": [
                "Paso 1: Seleccionar el Enfoque Inicial (Select Initial Approach): Evaluar tipo de entregable y grado de incertidumbre.",
                "Paso 2: Adaptar para la Organización (Tailor for the Organization): Integrar políticas corporativas, cultura, OPAs y marcos de cumplimiento normativo.",
                "Paso 3: Adaptar para el Proyecto (Tailor for the Project): Ajustar según tamaño del equipo, dispersión geográfica, criticidad del producto y disponibilidad del cliente.",
                "Paso 4: Implementar Mejora Continua (Implement Ongoing Improvement): Inspeccionar y adaptar mediante retrospectivas y lecciones aprendidas periódicas."
              ],
              "examTip": "El proceso de adaptación no concluye en la planificación: continúa durante todo el proyecto a medida que se aprende del contexto."
            },
            {
              "id": "les-13-3",
              "title": "Diagnósticos y Adaptación de los Dominios de Desempeño",
              "section": "3.5 - 3.7",
              "xp": 35,
              "timeMin": 6,
              "summary": "Herramientas de diagnóstico de idoneidad y ejemplos de adaptación para cada uno de los 7 dominios (Tabla 3-1).",
              "points": [
                "Herramientas de Diagnóstico: Radares de adecuación organizacional (Suitability assessment radars).",
                "Adaptación en Alcance: Requisitos cambiantes -> User Stories y Backlog en vez de Especificación de Requisitos formal de 200 páginas.",
                "Adaptación en Cronograma: Entregas frecuentes -> Tableros Kanban y límites WIP en vez de diagramas de Gantt con 5,000 líneas.",
                "Adaptación en Finanzas: Contratos ágiles con presupuesto modular por sprint en vez de precio fijo llave en mano."
              ],
              "examTip": "Para el examen, demuestra capacidad de evaluar cuándo conviene un enfoque formal y cuándo uno ágil y liviano según los factores de diagnóstico."
            }
          ]
        },
        {
          "id": "unit-14",
          "number": 14,
          "title": "Catálogo de Entradas, Salidas, Herramientas y Técnicas",
          "sectionRef": "Capítulos 4 y 5",
          "description": "Catálogo exhaustivo de ITTOs, fórmulas de Valor Ganado (EVM), métodos de estimación, compresión y diagramas analíticos.",
          "lessons": [
            {
              "id": "les-14-1",
              "title": "Catálogo Maestro de Entradas y Salidas",
              "section": "Capítulo 4",
              "xp": 35,
              "timeMin": 7,
              "summary": "Compendio clasificado de documentos fundamentales: Business Case, Project Charter, PMP, Entregables, Informes y Lecciones Aprendidas.",
              "points": [
                "Documentos de Negocio: Caso de Negocio (Business Case) y Plan de Gestión de Beneficios (preceden al proyecto).",
                "Documentos de Autorización: Acta de Constitución del Proyecto (Project Charter).",
                "Planes Secundarios: Planes de alcance, requisitos, cronograma, costos, calidad, recursos, comunicaciones, riesgos, adquisiciones e interesados.",
                "Líneas Base (Baselines): Alcance (WBS + Diccionario), Cronograma y Costos. La combinación de las tres forma la Línea Base de Medición del Desempeño (PMB).",
                "Documentos Vivos: Registro de Riesgos, Registro de Interesados, Registro de Supuestos, Registro de Incidentes (Issue Log)."
              ],
              "examTip": "Diferencia siempre: 'Registro de Supuestos' (lo que creemos que es cierto sin prueba) vs 'Registro de Incidentes' (problemas que YA ocurrieron y necesitan resolución inmediata)."
            },
            {
              "id": "les-14-2",
              "title": "Fórmulas Maestras de Valor Ganado (EVM)",
              "section": "Capítulo 5 - Tabla 5-1",
              "xp": 45,
              "timeMin": 10,
              "summary": "Todas las ecuaciones de EVM de la Tabla 5-1: PV, EV, AC, BAC, CV, SV, CPI, SPI, EAC, ETC, VAC y TCPI con reglas de interpretación.",
              "points": [
                "Valores Base: PV (Planned Value - valor planificado), EV (Earned Value - valor del trabajo hecho), AC (Actual Cost - costo real gastado), BAC (Budget at Completion - presupuesto total).",
                "Variaciones: CV = EV - AC (Positivo = Ahorro / Negativo = Sobrecosto). SV = EV - PV (Positivo = Adelantado / Negativo = Retrasado).",
                "Índices: CPI = EV / AC (> 1 = Eficiente en costo / < 1 = Ineficiente). SPI = EV / PV (> 1 = Adelantado / < 1 = Atrasado).",
                "Estimaciones a la Conclusión: EAC = BAC / CPI (si la tasa actual de costo continuará). EAC = AC + (BAC - EV) (si el trabajo futuro será a la tasa presupuestada).",
                "TCPI (To-Complete Performance Index): (BAC - EV) / (BAC - AC). Eficiencia que debe lograrse en el trabajo restante para terminar en presupuesto."
              ],
              "examTip": "Regla mnemotécnica infalible de EVM: Las variaciones son restas (EV - algo). Los índices son divisiones (EV / algo). El EV siempre va primero. Mayor que 1 o positivo = BUENO; menor que 1 o negativo = MALO."
            },
            {
              "id": "les-14-3",
              "title": "Métodos de Estimación, Red y Cronograma",
              "section": "Capítulo 5",
              "xp": 35,
              "timeMin": 8,
              "summary": "Fórmulas de PERT (Beta y Triangular), Desviación Estándar, Análisis de Red CPM, Holguras y Diagramas de Dispersión.",
              "points": [
                "Estimación Triangular (Promedio simple): (Optimista + Más Probable + Pesimista) / 3.",
                "Estimación Beta / PERT (Ponderada): (O + 4M + P) / 6. Da 4 veces más peso al escenario más probable.",
                "Desviación Estándar PERT (Sigma): (Pesimista - Optimista) / 6. Mide la incertidumbre y dispersión de la estimación.",
                "Varianza PERT: ((P - O) / 6)^2.",
                "Ruta Crítica y Holgura: Holgura Total = LS - ES (o LF - EF). Actividades con holgura cero están en la ruta crítica."
              ],
              "examTip": "En el examen PMP, si no especifican si usar Triangular o Beta, utiliza siempre la distribución Beta: (O + 4M + P) / 6."
            },
            {
              "id": "les-14-4",
              "title": "Herramientas de Análisis, Calidad y Métodos Visuales",
              "section": "Capítulo 5",
              "xp": 35,
              "timeMin": 8,
              "summary": "Diagrama de Tornado, Árboles de Decisión, Costo de la Calidad (COQ), Radiadores de Información, Tableros Kanban y Gráficas Burndown/Burnup.",
              "points": [
                "Diagrama de Tornado: Representación en barras horizontales para el análisis de sensibilidad que muestra qué variables tienen mayor impacto en el proyecto.",
                "Árboles de Decisión: Evalúa decisiones complejas calculando el Valor Monetario Esperado (EMV) en cada rama de decisión.",
                "Costo de Calidad (COQ): Costo de Conformidad (Prevención + Evaluación) vs Costo de No Conformidad (Fallas Internas + Fallas Externas).",
                "Radiador de Información: Pantalla física o digital en un espacio compartido que muestra métricas del proyecto en tiempo real (ej. tablero Kanban, gráficas burndown).",
                "Burndown vs Burnup: Burndown muestra el trabajo pendiente descendiendo hacia cero; Burnup muestra el trabajo completado subiendo hacia la meta."
              ],
              "examTip": "Un radiador de información permite que cualquier persona vea el estado del proyecto sin tener que pedirle un informe al equipo."
            }
          ]
        }
      ]
    },
    {
      "id": "part-3",
      "number": 3,
      "title": "Apéndices y Nuevas Fronteras del PMBOK 8",
      "titleEn": "Appendices and Special Topics",
      "description": "Oficinas de Dirección de Proyectos (PMO), Inteligencia Artificial en proyectos, Adquisiciones (Procurement) y evolución histórica.",
      "color": "#7B1FA2",
      "icon": "psychology",
      "units": [
        {
          "id": "unit-15",
          "number": 15,
          "title": "Apéndice X2: Oficinas de Dirección de Proyectos (PMO)",
          "sectionRef": "Apéndice X2 (X2.1 - X2.6)",
          "description": "Propuesta de valor de la PMO moderna, centralidad en el cliente, modelos híbridos y niveles de madurez.",
          "lessons": [
            {
              "id": "les-15-1",
              "title": "La PMO Moderna y Centrada en el Cliente",
              "section": "X2.1 - X2.6",
              "xp": 35,
              "timeMin": 7,
              "summary": "Evolución de la PMO: de centro de control burocrático a catalizador estratégico de entrega de valor centrado en sus clientes internos.",
              "points": [
                "Propuesta de Valor de la PMO: Facilitar la ejecución estratégica, estandarizar buenas prácticas sin ahogar la agilidad y optimizar la asignación de recursos.",
                "Centralidad en el Cliente: La PMO ve a los directores de proyectos y equipos como sus clientes, diseñando servicios adaptados a sus necesidades reales.",
                "Flexibilidad e Hibridación: Ya no existen modelos rígidos (apoyo, control, directiva); las PMOs exitosas combinan características híbridas.",
                "Modelos de Madurez de la PMO: Evalúan la evolución desde una PMO operativa básica hasta una PMO estratégica orientada al negocio."
              ],
              "examTip": "Una PMO de alto desempeño no impone metodologías arbitrarias; adapta su apoyo según la madurez y necesidades del proyecto."
            }
          ]
        },
        {
          "id": "unit-16",
          "number": 16,
          "title": "Apéndice X3: Inteligencia Artificial en Proyectos",
          "sectionRef": "Apéndice X3 (X3.1 - X3.4)",
          "description": "La gran incorporación del PMBOK 8: estrategias de adopción de IA, casos de uso prácticos, mitigación de sesgos y gobernanza ética.",
          "lessons": [
            {
              "id": "les-16-1",
              "title": "Estrategias de Adopción de IA en Proyectos",
              "section": "X3.1 - X3.2",
              "xp": 40,
              "timeMin": 8,
              "summary": "Cómo la IA transforma la gestión de proyectos: niveles de automatización, aumento de capacidades humanas y autonomía supervisada.",
              "points": [
                "Estrategias de Adopción: 1) Automatización (tareas repetitivas como minutas, asignación de tareas); 2) Aumento (asistencia para predicción de cronogramas, análisis de riesgos y redacción de planes); 3) Sistemas Autónomos (con supervisión humana).",
                "Casos de Uso Nucleares en PMBOK 8: Estimación predictiva basada en datos históricos masivos, optimización de asignación de recursos, detección temprana de anomalías en costos y simulación de escenarios complejos.",
                "El Factor Humano: La IA asume la carga mecánica y analítica, liberando al PM para enfocarse en liderazgo empático, negociación política, resolución de conflictos y estrategia."
              ],
              "examTip": "El PMBOK 8 recalca que la IA nunca reemplaza la responsabilidad: el ser humano sigue siendo 100% responsable de las decisiones éticas y de gobernanza."
            },
            {
              "id": "les-16-2",
              "title": "Uso Responsable, Sesgos y Ética en IA",
              "section": "X3.3 - X3.4",
              "xp": 35,
              "timeMin": 7,
              "summary": "Principios éticos para el uso de IA: mitigación de sesgo algorítmico, privacidad de datos corporativos y rendición de cuentas.",
              "points": [
                "Sesgo Algorítmico (Bias): Los modelos de IA heredan los prejuicios de los datos con los que fueron entrenados. Mitigación: Diversificación de conjuntos de datos y auditorías periódicas.",
                "Privacidad y Confidencialidad: Proteger datos sensibles de clientes, secretos industriales y código propietario de fugas en modelos públicos.",
                "Rendición de Cuentas (Accountability): La IA no puede ser legal ni éticamente responsable. Toda decisión automatizada debe tener un responsable humano claramente identificado.",
                "Transparencia y Explicabilidad: Poder explicar a los directivos cómo llegó la IA a una recomendación específica de presupuesto o riesgo."
              ],
              "examTip": "Pregunta de examen v8: Si un algoritmo de IA descarta candidatos para el equipo basándose en datos históricos sesgados, ¿quién es el responsable? El Director del Proyecto y la organización por no auditar la herramienta."
            }
          ]
        },
        {
          "id": "unit-17",
          "number": 17,
          "title": "Apéndice X4: Gestión de Adquisiciones (Procurement)",
          "sectionRef": "Apéndice X4 (X4.1 - X4.9)",
          "description": "Análisis Fabricar o Comprar, documentos de licitación (RFP, RFQ, IFB), tipos de contrato (FP, CR, T&M) y reclamaciones.",
          "lessons": [
            {
              "id": "les-17-1",
              "title": "Estrategia de Adquisiciones y Documentos de Licitación",
              "section": "X4.1 - X4.4",
              "xp": 35,
              "timeMin": 7,
              "summary": "Cuándo contratar a terceros (Make-or-Buy Analysis), cómo estructurar la estrategia de abastecimiento y elaborar pliegos de solicitud.",
              "points": [
                "Análisis Fabricar o Comprar (Make-or-Buy): Comparar costos directos e indirectos de desarrollar internamente vs adquirir en el mercado, considerando confidencialidad y capacidad técnica.",
                "Documentos de Licitación (Bid Documents):",
                "- RFI (Request for Information): Explorar qué soluciones existen en el mercado.",
                "- RFP (Request for Proposal): Solicitar propuestas técnicas y comerciales detalladas ante problemas complejos.",
                "- RFQ (Request for Quotation) / IFB (Invitation for Bid): Solicitar cotizaciones de precio para entregables estandarizados.",
                "Conferencias de Oferentes (Bidder Conferences): Reuniones con todos los proveedores para responder dudas asegurando igualdad de condiciones y transparencia."
              ],
              "examTip": "En una conferencia de oferentes, todas las preguntas y respuestas deben compartirse por escrito a TODOS los postores para evitar ventajas indebidas."
            },
            {
              "id": "les-17-2",
              "title": "Tipos de Contrato, Selección y Reclamaciones",
              "section": "X4.5 - X4.9",
              "xp": 40,
              "timeMin": 9,
              "summary": "Modelos contractuales (Precio Fijo, Costos Reembolsables, T&M), criterios de selección y gestión de reclamaciones (claims).",
              "points": [
                "Precio Fijo (Fixed-Price - FP / FFP): El vendedor asume el mayor riesgo financiero. Ideal cuando el alcance está perfectamente definido.",
                "Costos Reembolsables (Cost-Reimbursable - CPFF, CPIF): El comprador paga los costos reales más una tarifa de honorarios. El comprador asume el riesgo. Ideal para alcance incierto o investigación.",
                "Tiempo y Materiales (Time & Materials - T&M): Híbrido por horas trabajadas. Ideal para aumentos temporales de personal con tope máximo.",
                "Administración de Reclamaciones (Claims Administration): Proceso para gestionar disputas contractuales. Preferencia: Negociación directa -> Mediación -> Arbitraje -> Litigio judicial (último recurso)."
              ],
              "examTip": "¿Quién asume el mayor riesgo financiero en un contrato Firm Fixed Price (FFP)? El Vendedor (Seller). ¿En Cost Plus Fixed Fee (CPFF)? El Comprador (Buyer)."
            }
          ]
        },
        {
          "id": "unit-18",
          "number": 18,
          "title": "Apéndice X5: Evolución Histórica de la Guía del PMBOK",
          "sectionRef": "Apéndice X5 (X5.1 - X5.4)",
          "description": "Investigación empírica detrás de la 8va edición, tabla de transformaciones históricas y por qué 12 principios se sintetizaron en 6.",
          "lessons": [
            {
              "id": "les-18-1",
              "title": "De la 7ma a la 8va Edición: La Gran Síntesis",
              "section": "X5.1 - X5.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Por qué el PMI evolucionó hacia la 8va edición: balanceando la orientación a principios con la necesidad de procesos estructurados y dominios integrados.",
              "points": [
                "Base Empírica: 48,000 puntos de datos y 12,000 comentarios de la comunidad global.",
                "Evolución de los Principios: De los 12 principios de la 7ma edición a los 6 principios refinados de la 8va.",
                "Reincorporación de los Procesos: La 7ma eliminó los procesos detallados; la comunidad solicitó su regreso estructurado. La 8va ofrece 40 procesos no prescriptivos perfectamente balanceados.",
                "Proceso de Madurez de la Profesión: De la eficiencia mecanicista del siglo XX a la creación de valor sostenible e impulsada por tecnología del siglo XXI."
              ],
              "examTip": "La 8va edición une lo mejor de dos mundos: la visión estratégica por principios de la 7ma edición y la solidez metodológica de procesos de la 6ta edición."
            }
          ]
        }
      ]
    }
  ]
};

  // Complete 40 Processes of PMBOK 8th Edition
const processes = [
  {
    "id": "proc-gov-1",
    "number": 1,
    "name": "Iniciar el Proyecto o Fase",
    "nameEn": "Initiate Project or Phase",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Iniciación",
    "focusAreaEn": "Initiating",
    "purpose": "Autorizar oficialmente el inicio de un proyecto o fase y conferir al director de proyecto la autoridad para aplicar recursos de la organización a las actividades del proyecto.",
    "inputs": [
      "Documentos de negocio (Caso de Negocio, Plan de Gestión de Beneficios)",
      "Acuerdos y contratos",
      "Factores ambientales de la empresa (EEFs)",
      "Activos de los procesos de la organización (OPAs)"
    ],
    "tools": [
      "Juicio de expertos",
      "Recopilación de datos (Lluvia de ideas, Grupos focales, Entrevistas)",
      "Habilidades interpersonales y de equipo (Gestión de conflictos, Facilitación)",
      "Reuniones",
      "Project Canvas",
      "Matriz de asignación de responsabilidades"
    ],
    "outputs": [
      "Acta de Constitución del Proyecto (Project Charter)",
      "Registro de supuestos (Assumption Log)"
    ],
    "tailoring": "En entornos ágiles, el Project Charter suele ser una carta de visión ágil más breve centrada en el propósito y las restricciones de alto nivel.",
    "examTip": "El Project Charter es firmado y autorizado por el Patrocinador (Sponsor), otorgando autoridad formal al PM."
  },
  {
    "id": "proc-gov-2",
    "number": 2,
    "name": "Integrar y Alinear Planes del Proyecto",
    "nameEn": "Integrate and Align Project Plans",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Consolidar y coordinar todos los planes subsidiarios y líneas base en un Plan para la Dirección del Proyecto cohesivo e integrado.",
    "inputs": [
      "Acta de Constitución del Proyecto",
      "Salidas de otros procesos de planificación",
      "Factores ambientales de la empresa",
      "Activos de procesos de la organización"
    ],
    "tools": [
      "Juicio de expertos",
      "Recopilación y análisis de datos",
      "Habilidades interpersonales (Facilitación, Negociación)",
      "Reuniones de planificación"
    ],
    "outputs": [
      "Plan para la Dirección del Proyecto (Project Management Plan) con líneas base integradas"
    ],
    "tailoring": "En proyectos adaptativos, el plan integrado es altamente dinámico y se actualiza en cada iteración mediante planificación adaptativa de olas (rolling wave).",
    "examTip": "Una vez aprobado, el Plan para la Dirección del Proyecto se convierte en la línea base oficial y solo puede modificarse mediante control integrado de cambios."
  },
  {
    "id": "proc-gov-3",
    "number": 3,
    "name": "Planificar la Estrategia de Abastecimiento",
    "nameEn": "Plan Sourcing Strategy",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Determinar qué bienes o servicios se adquirirán externamente (make-or-buy), estructurar la estrategia de abastecimiento y seleccionar métodos de contratación.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Requisitos de recursos",
      "Documentos de negocio",
      "Condiciones de mercado (EEFs)"
    ],
    "tools": [
      "Análisis de fabricar o comprar (Make-or-buy analysis)",
      "Investigación de mercado",
      "Juicio de expertos",
      "Evaluación de capacidades internas"
    ],
    "outputs": [
      "Estrategia de abastecimiento (Sourcing Strategy)",
      "Decisiones de fabricar o comprar",
      "Enunciado del trabajo de adquisición (SOW)"
    ],
    "tailoring": "En ágil, se prefieren contratos con alcance adaptable como Target Cost o esquemas de tiempo y materiales con tope máximo.",
    "examTip": "El análisis Make-or-buy debe evaluar costos de mantenimiento y operación a largo plazo, no solo el costo inicial de adquisición."
  },
  {
    "id": "proc-gov-4",
    "number": 4,
    "name": "Gestionar la Ejecución del Proyecto",
    "nameEn": "Manage Project Execution",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Liderar y llevar a cabo el trabajo definido en los planes integrados para producir los entregables y alcanzar los objetivos del proyecto.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Solicitudes de cambio aprobadas",
      "Factores ambientales de la empresa"
    ],
    "tools": [
      "Juicio de expertos",
      "Sistema de información para la dirección de proyectos (PMIS)",
      "Reuniones de sincronización diaria / Daily standups"
    ],
    "outputs": [
      "Entregables (Deliverables)",
      "Datos de desempeño del trabajo (Work Performance Data)",
      "Registro de incidentes (Issue Log)"
    ],
    "tailoring": "En Scrum/Agile, la ejecución se sincroniza mediante iteraciones cortas donde el equipo técnico autogestiona la ejecución de las historias del Sprint.",
    "examTip": "Los 'Datos de desempeño del trabajo' (datos brutos de avance) nacen aquí en Ejecución y fluyen hacia Monitoreo y Control para convertirse en 'Información'."
  },
  {
    "id": "proc-gov-5",
    "number": 5,
    "name": "Gestionar el Aseguramiento de la Calidad",
    "nameEn": "Manage Quality Assurance",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Garantizar que los procesos utilizados en el proyecto cumplan con las normas acordadas y mejoren continuamente para prevenir defectos.",
    "inputs": [
      "Plan de gestión de calidad",
      "Mediciones de control de calidad",
      "Métricas de calidad"
    ],
    "tools": [
      "Auditorías de calidad",
      "Análisis de procesos (Kaizen / Lean)",
      "Diagramas de causa y efecto (Ishikawa)",
      "Análisis de causa raíz"
    ],
    "outputs": [
      "Informes de calidad",
      "Solicitudes de cambio para mejora de procesos",
      "Actualizaciones de OPAs"
    ],
    "tailoring": "En marcos ágiles, el aseguramiento de la calidad está embebido en la Definición de Terminado (DoD), pruebas automatizadas y retrospectivas de sprint.",
    "examTip": "Aseguramiento de Calidad = evaluar los PROCESOS. Control de Calidad = inspeccionar los ENTREGABLES."
  },
  {
    "id": "proc-gov-6",
    "number": 6,
    "name": "Gestionar el Conocimiento del Proyecto",
    "nameEn": "Manage Project Knowledge",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Utilizar el conocimiento existente de la organización y crear nuevo conocimiento para facilitar el logro de objetivos y contribuir al aprendizaje corporativo.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Documentos del proyecto",
      "Entregables",
      "OPAs (lecciones aprendidas históricas)"
    ],
    "tools": [
      "Gestión del conocimiento (Comunidades de práctica, foros de intercambio)",
      "Gestión de la información (Bibliotecas digitales, wikis)",
      "Habilidades interpersonales (Escucha activa, empatía)"
    ],
    "outputs": [
      "Registro de Lecciones Aprendidas (Lessons Learned Register)",
      "Actualizaciones a OPAs"
    ],
    "tailoring": "El conocimiento tácito (el que está en la mente de las personas) se transmite interactuando cara a cara, no solo guardando archivos.",
    "examTip": "El Registro de Lecciones Aprendidas se actualiza CONTINUAMENTE durante todo el ciclo de vida, no solo al final del proyecto."
  },
  {
    "id": "proc-gov-7",
    "number": 7,
    "name": "Monitorear y Controlar el Desempeño del Proyecto",
    "nameEn": "Monitor and Control Project Performance",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Rastrear, revisar e informar sobre el avance integral del proyecto para cumplir los objetivos de desempeño y anticipar desviaciones.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Datos de desempeño del trabajo",
      "Pronósticos de costo y cronograma"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de datos (Análisis de variación, Análisis de tendencias, EVM)",
      "Toma de decisiones"
    ],
    "outputs": [
      "Informes de desempeño del trabajo (Work Performance Reports)",
      "Solicitudes de cambio"
    ],
    "tailoring": "En tableros ágiles, el monitoreo se realiza en tiempo real a través de radiadores de información visibles y métricas de velocidad.",
    "examTip": "Este proceso produce los 'Informes de Desempeño del Trabajo' (ej. tableros de control ejecutivos) que se comunican a los interesados."
  },
  {
    "id": "proc-gov-8",
    "number": 8,
    "name": "Evaluar e Implementar Cambios",
    "nameEn": "Assess and Implement Changes",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Revisar todas las solicitudes de cambio, evaluar su impacto integral en la propuesta de valor, aprobar o rechazar cambios e implementar los aprobados.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Solicitudes de cambio",
      "Informes de desempeño del trabajo"
    ],
    "tools": [
      "Herramientas de control de cambios",
      "Juicio de expertos",
      "Comité de control de cambios (CCB)",
      "Reuniones de toma de decisiones"
    ],
    "outputs": [
      "Solicitudes de cambio aprobadas/rechazadas",
      "Actualizaciones al plan de dirección del proyecto",
      "Registro de cambios (Change Log)"
    ],
    "tailoring": "En entornos adaptativos, los cambios son bienvenidos y se incorporan al Product Backlog, donde el Product Owner los prioriza.",
    "examTip": "Si un interesado pide un cambio, NUNCA digas sí ni no de inmediato: primero analiza el impacto holístico en costo, tiempo, riesgo y valor."
  },
  {
    "id": "proc-gov-9",
    "number": 9,
    "name": "Cerrar el Proyecto o Fase",
    "nameEn": "Close Project or Phase",
    "domain": "Gobernanza",
    "domainEn": "Governance",
    "focusArea": "Cierre",
    "focusAreaEn": "Closing",
    "purpose": "Finalizar formalmente todas las actividades del proyecto o fase, archivar conocimientos, transferir el entregable a operaciones y liberar recursos.",
    "inputs": [
      "Acta de Constitución del Proyecto",
      "Plan para la dirección del proyecto",
      "Entregables aceptados",
      "Documentos de negocio"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de datos (Análisis de documentos)",
      "Reuniones de cierre y retrospectivas finales"
    ],
    "outputs": [
      "Transferencia del producto final",
      "Informe final del proyecto",
      "Actualizaciones a activos de los procesos de la organización"
    ],
    "tailoring": "Incluso si un proyecto se cancela prematuramente, este proceso DEBE ejecutarse para documentar lecciones aprendidas y liberar recursos ordenadamente.",
    "examTip": "Para cerrar un proyecto se requiere que los entregables hayan sido formalmente 'Aceptados' en el proceso Validar el Alcance."
  },
  {
    "id": "proc-scope-1",
    "number": 10,
    "name": "Planificar la Gestión del Alcance",
    "nameEn": "Plan Scope Management",
    "domain": "Alcance",
    "domainEn": "Scope",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Crear el plan de gestión del alcance que documenta cómo se definirá, validará y controlará el alcance del proyecto.",
    "inputs": [
      "Acta de constitución",
      "Plan para la dirección del proyecto",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de datos",
      "Reuniones"
    ],
    "outputs": [
      "Plan de gestión del alcance",
      "Plan de gestión de requisitos"
    ],
    "tailoring": "En proyectos adaptativos, el plan define cómo se gestionará y refinará el backlog continuamente.",
    "examTip": "El Plan de Gestión del Alcance no dice cuál es el alcance; dice CÓMO se gestionará y controlará."
  },
  {
    "id": "proc-scope-2",
    "number": 11,
    "name": "Levantar y Analizar Requisitos",
    "nameEn": "Elicit and Analyze Requirements",
    "domain": "Alcance",
    "domainEn": "Scope",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Determinar, documentar y gestionar las necesidades y expectativas de los interesados para cumplir con los objetivos del proyecto.",
    "inputs": [
      "Acta de constitución",
      "Registro de interesados",
      "Documentos de negocio"
    ],
    "tools": [
      "Entrevistas",
      "Grupos focales",
      "Talleres facilitados",
      "Historias de usuario",
      "Prototipos",
      "Mapas mentales"
    ],
    "outputs": [
      "Documentación de requisitos",
      "Matriz de trazabilidad de requisitos (RTM)"
    ],
    "tailoring": "Los requisitos en entornos ágiles se descomponen en Épicas e Historias de Usuario con Criterios de Aceptación claros.",
    "examTip": "La Matriz de Trazabilidad de Requisitos (RTM) conecta cada requisito con el objetivo de negocio que justifica su existencia."
  },
  {
    "id": "proc-scope-3",
    "number": 12,
    "name": "Definir el Alcance",
    "nameEn": "Define Scope",
    "domain": "Alcance",
    "domainEn": "Scope",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Desarrollar una descripción detallada del proyecto y del producto, estableciendo claramente qué está incluido y qué está excluido.",
    "inputs": [
      "Acta de constitución",
      "Documentación de requisitos",
      "Supuestos y restricciones"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de producto",
      "Toma de decisiones"
    ],
    "outputs": [
      "Enunciado del Alcance del Proyecto (Project Scope Statement)"
    ],
    "tailoring": "El enunciado del alcance delimita las fronteras del proyecto y es vital para evitar ambigüedades con el cliente.",
    "examTip": "Documentar las 'Exclusiones' explícitas del proyecto es tan crucial como documentar las inclusiones para evitar expectativas erróneas."
  },
  {
    "id": "proc-scope-4",
    "number": 13,
    "name": "Desarrollar la Estructura del Alcance (EDT/WBS)",
    "nameEn": "Develop Scope Structure",
    "domain": "Alcance",
    "domainEn": "Scope",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Descomponer jerárquicamente el alcance total del trabajo en componentes más pequeños y manejables llamados paquetes de trabajo.",
    "inputs": [
      "Plan de gestión del alcance",
      "Enunciado del alcance del proyecto",
      "Documentación de requisitos"
    ],
    "tools": [
      "Descomposición",
      "Juicio de expertos"
    ],
    "outputs": [
      "Línea Base del Alcance (Scope Baseline): EDT/WBS + Diccionario de la EDT + Enunciado del Alcance"
    ],
    "tailoring": "En ágil, la estructura del alcance se representa comúnmente como un árbol de temas, épicas y características en el product backlog.",
    "examTip": "Regla del 100%: La EDT abarca el 100% del trabajo acordado y nada más. El nivel más bajo es el Paquete de Trabajo (Work Package)."
  },
  {
    "id": "proc-scope-5",
    "number": 14,
    "name": "Monitorear y Controlar el Alcance",
    "nameEn": "Monitor and Control Scope",
    "domain": "Alcance",
    "domainEn": "Scope",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitorear el estado del alcance del proyecto y gestionar los cambios en la línea base del alcance para prevenir la corrupción del alcance.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Datos de desempeño del trabajo",
      "Documentación de requisitos"
    ],
    "tools": [
      "Análisis de variación",
      "Análisis de tendencias"
    ],
    "outputs": [
      "Información de desempeño del trabajo",
      "Solicitudes de cambio"
    ],
    "tailoring": "En marcos ágiles, la corrupción del alcance se previene fijando el tamaño del sprint; los nuevos requisitos se colocan en el backlog para priorizarse.",
    "examTip": "Evitar la 'Sobreoptimización' (Gold Plating): dar extras que el cliente no pidió no es buena gestión; añade riesgos y costos no justificados."
  },
  {
    "id": "proc-scope-6",
    "number": 15,
    "name": "Validar el Alcance",
    "nameEn": "Validate Scope",
    "domain": "Alcance",
    "domainEn": "Scope",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Formalizar la aceptación de los entregables completados del proyecto por parte del cliente o patrocinador mediante inspección formal.",
    "inputs": [
      "Entregables verificados (que ya pasaron Control de Calidad)",
      "Línea base del alcance",
      "Requisitos"
    ],
    "tools": [
      "Inspección",
      "Toma de decisiones (Votación, Aprobación)"
    ],
    "outputs": [
      "Entregables aceptados (Accepted Deliverables)",
      "Solicitudes de cambio (si se rechazan)",
      "Información de desempeño"
    ],
    "tailoring": "En Scrum, esto ocurre en la Sprint Review, donde los interesados prueban el incremento de software funcional.",
    "examTip": "¡Clave de examen!: Control de Calidad ocurre ANTES (con el equipo) para verificar exactitud; Validar el Alcance ocurre DESPUÉS (con el cliente) para obtener la aceptación formal."
  },
  {
    "id": "proc-sched-1",
    "number": 16,
    "name": "Planificar la Gestión del Cronograma",
    "nameEn": "Plan Schedule Management",
    "domain": "Cronograma",
    "domainEn": "Schedule",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Establecer las políticas, procedimientos y documentación para planificar, desarrollar, gestionar, ejecutar y controlar el cronograma del proyecto.",
    "inputs": [
      "Acta de constitución",
      "Plan para la dirección del proyecto",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de datos",
      "Reuniones"
    ],
    "outputs": [
      "Plan de Gestión del Cronograma (Schedule Management Plan)"
    ],
    "tailoring": "Define la duración de los ciclos o sprints (ej. 2 semanas fijas) si se utiliza un desarrollo adaptativo.",
    "examTip": "El Plan de Gestión del Cronograma establece las unidades de medida (días, horas), el nivel de precisión y los umbrales de variación permitidos."
  },
  {
    "id": "proc-sched-2",
    "number": 17,
    "name": "Desarrollar el Cronograma",
    "nameEn": "Develop Schedule",
    "domain": "Cronograma",
    "domainEn": "Schedule",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Analizar secuencias de actividades, duraciones, requisitos de recursos y restricciones del cronograma para crear el modelo de programación del proyecto.",
    "inputs": [
      "Lista de actividades",
      "Diagramas de red",
      "Requisitos de recursos",
      "Estimaciones de duración"
    ],
    "tools": [
      "Método de la Ruta Crítica (CPM)",
      "Nivelación de recursos",
      "Técnicas de compresión (Crashing / Fast Tracking)",
      "Software de programación"
    ],
    "outputs": [
      "Línea Base del Cronograma (Schedule Baseline)",
      "Cronograma del Proyecto (Gantt, Hitos)"
    ],
    "tailoring": "En desarrollo ágil, el cronograma se articula mediante el Release Plan e Iteration Burndown.",
    "examTip": "La Ruta Crítica es la ruta más larga en la red y tiene la menor holgura (generalmente 0). Determina la fecha más temprana de finalización del proyecto."
  },
  {
    "id": "proc-sched-3",
    "number": 18,
    "name": "Monitorear y Controlar el Cronograma",
    "nameEn": "Monitor and Control Schedule",
    "domain": "Cronograma",
    "domainEn": "Schedule",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitorear el estado de las actividades del proyecto para actualizar el cronograma y gestionar cambios en la línea base del cronograma.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Línea base del cronograma",
      "Datos de desempeño del trabajo"
    ],
    "tools": [
      "Análisis de variación de cronograma (SV, SPI)",
      "Gráficas de avance (Burndown/Burnup)",
      "Avance de hitos"
    ],
    "outputs": [
      "Pronósticos de cronograma",
      "Solicitudes de cambio",
      "Información de desempeño"
    ],
    "tailoring": "El equipo ágil mide su velocidad (puntos de historia por sprint) para predecir si completará las entregas en fecha.",
    "examTip": "SPI < 1.0 o SV negativo significa que el proyecto está atrasado respecto a lo planificado."
  },
  {
    "id": "proc-fin-1",
    "number": 19,
    "name": "Planificar la Gestión Financiera",
    "nameEn": "Plan Financial Management",
    "domain": "Finanzas",
    "domainEn": "Finance",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Definir cómo se estimarán, presupuestarán, gestionarán, supervisarán y controlarán los costos y aspectos financieros del proyecto.",
    "inputs": [
      "Acta de constitución",
      "Documentos de negocio",
      "Plan de dirección",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de datos",
      "Reuniones"
    ],
    "outputs": [
      "Plan de Gestión Financiera / Costos"
    ],
    "tailoring": "Define reglas para el cálculo del Valor Ganado (EVM), moneda de referencia y umbrales de variación financiera.",
    "examTip": "Determina los porcentajes aceptables de variación antes de requerir un plan formal de acción correctiva (ej. variación > 5%)."
  },
  {
    "id": "proc-fin-2",
    "number": 20,
    "name": "Estimar Costos",
    "nameEn": "Estimate Costs",
    "domain": "Finanzas",
    "domainEn": "Finance",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Desarrollar una aproximación del valor monetario de los recursos necesarios para completar las actividades del proyecto.",
    "inputs": [
      "Plan de gestión de costos",
      "Línea base del alcance",
      "Cronograma",
      "Factores ambientales"
    ],
    "tools": [
      "Estimación análoga",
      "Estimación paramétrica",
      "Estimación ascendente (Bottom-up)",
      "Estimación por tres puntos (PERT)",
      "Análisis de reservas"
    ],
    "outputs": [
      "Estimaciones de costos de las actividades",
      "Bases de las estimaciones"
    ],
    "tailoring": "En ágil, se estiman costos por tasa de quema (burn rate) multiplicando el costo del equipo por sprint.",
    "examTip": "La estimación ascendente (Bottom-up) es la más precisa pero también la más costosa y la que más tiempo toma."
  },
  {
    "id": "proc-fin-3",
    "number": 21,
    "name": "Desarrollar el Presupuesto",
    "nameEn": "Develop Budget",
    "domain": "Finanzas",
    "domainEn": "Finance",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Sumar los costos estimados de actividades individuales o paquetes de trabajo para establecer una línea base de costos autorizada.",
    "inputs": [
      "Estimaciones de costos",
      "Bases de las estimaciones",
      "Línea base del alcance",
      "Cronograma",
      "Contratos"
    ],
    "tools": [
      "Agregación de costos",
      "Conciliación del límite de financiamiento",
      "Análisis de reservas"
    ],
    "outputs": [
      "Línea Base de Costos (Cost Baseline - Curva S)",
      "Requisitos de financiamiento del proyecto"
    ],
    "tailoring": "La Línea Base incluye las Reservas de Contingencia (riesgos conocidos). NO incluye la Reserva de Gestión (riesgos desconocidos).",
    "examTip": "Presupuesto Total = Línea Base de Costos + Reserva de Gestión."
  },
  {
    "id": "proc-fin-4",
    "number": 22,
    "name": "Monitorear y Controlar las Finanzas",
    "nameEn": "Monitor and Control Finances",
    "domain": "Finanzas",
    "domainEn": "Finance",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitorear el estado financiero del proyecto para actualizar los costos y gestionar cambios en la línea base de costos.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Línea base de costos",
      "Datos de desempeño del trabajo",
      "Requisitos de financiamiento"
    ],
    "tools": [
      "Análisis de Valor Ganado (EVM: CV, CPI, EAC, TCPI)",
      "Análisis de reservas",
      "Índice de desempeño del trabajo por completar"
    ],
    "outputs": [
      "Pronósticos de costos (EAC, ETC, VAC)",
      "Solicitudes de cambio",
      "Información de desempeño financiero"
    ],
    "tailoring": "El PM debe asegurarse de que los desembolsos no superen los límites de financiamiento periódico autorizados.",
    "examTip": "CPI < 1.0 o CV negativo significa que el proyecto está gastando más de lo planificado para el trabajo realizado (sobrecosto)."
  },
  {
    "id": "proc-stk-1",
    "number": 23,
    "name": "Identificar Interesados",
    "nameEn": "Identify Stakeholders",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Iniciación",
    "focusAreaEn": "Initiating",
    "purpose": "Identificar regularmente a las personas, grupos u organizaciones que podrían afectar o ser afectados por el proyecto y analizar sus niveles de interés, influencia e impacto.",
    "inputs": [
      "Acta de constitución",
      "Documentos de negocio",
      "Acuerdos",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Juicio de expertos",
      "Recopilación de datos (Cuestionarios, lluvia de ideas)",
      "Matriz de Poder/Interés",
      "Modelo de Prominencia (Salience model)"
    ],
    "outputs": [
      "Registro de Interesados (Stakeholder Register)"
    ],
    "tailoring": "Este proceso se ejecuta desde el inicio y de forma continua; en proyectos ágiles se involucra a usuarios directamente en refinamientos y revisiones.",
    "examTip": "El Registro de Interesados debe contener clasificación de impacto, expectativas y estrategias potenciales de involucramiento."
  },
  {
    "id": "proc-stk-2",
    "number": 24,
    "name": "Planificar el Involucramiento de Interesados",
    "nameEn": "Plan Stakeholder Engagement",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Desarrollar enfoques para involucrar a las partes interesadas según sus necesidades, expectativas, intereses y el impacto potencial en el proyecto.",
    "inputs": [
      "Acta de constitución",
      "Registro de interesados",
      "Plan de dirección",
      "EEFs"
    ],
    "tools": [
      "Matriz de evaluación del involucramiento de los interesados (Actual vs Deseado)",
      "Juicio de expertos"
    ],
    "outputs": [
      "Plan de Involucramiento de Interesados (Stakeholder Engagement Plan)"
    ],
    "tailoring": "Establece estrategias específicas para mover a interesados clave desde una posición 'Reticente' o 'Neutral' hacia una posición de 'Apoyo' o 'Líder'.",
    "examTip": "La Matriz de Evaluación del Involucramiento clasifica a los interesados en: Desconocedor, Reticente, Neutral, De Apoyo, y Líder."
  },
  {
    "id": "proc-stk-3",
    "number": 25,
    "name": "Planificar la Gestión de Comunicaciones",
    "nameEn": "Plan Communications Management",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Desarrollar un enfoque y plan adecuados para las actividades de comunicación del proyecto en base a las necesidades de información de cada interesado.",
    "inputs": [
      "Acta de constitución",
      "Registro de interesados",
      "Plan de dirección",
      "EEFs"
    ],
    "tools": [
      "Análisis de requisitos de comunicación (Canales = N*(N-1)/2)",
      "Modelos de comunicación",
      "Métodos de comunicación (Push, Pull, Interactiva)"
    ],
    "outputs": [
      "Plan de Gestión de Comunicaciones (Communications Management Plan)"
    ],
    "tailoring": "En equipos ágiles o remotos, se prioriza la comunicación interactiva y radiadores de información transparentes.",
    "examTip": "Comunicación Push (correos, informes enviados) vs Pull (portales, wikis donde el usuario consulta a demanda) vs Interactiva (reuniones, videollamadas)."
  },
  {
    "id": "proc-stk-4",
    "number": 26,
    "name": "Gestionar el Involucramiento de Interesados",
    "nameEn": "Manage Stakeholder Engagement",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Comunicarse y trabajar activamente con las partes interesadas para satisfacer sus necesidades y expectativas, abordar incidentes y fomentar un compromiso constructivo.",
    "inputs": [
      "Plan de involucramiento de interesados",
      "Plan de comunicaciones",
      "Registro de incidentes (Issue log)"
    ],
    "tools": [
      "Habilidades interpersonales (Negociación, Influencia, Escucha activa)",
      "Gestión de conflictos",
      "Reuniones"
    ],
    "outputs": [
      "Registro de incidentes actualizado",
      "Solicitudes de cambio",
      "Actualizaciones de planes"
    ],
    "tailoring": "Mantener transparencia honesta con los patrocinadores evita sorpresas amargas en fases avanzadas.",
    "examTip": "El PM pasa gran parte de su tiempo gestionando expectativas de interesados y negociando acuerdos para mitigar resistencias."
  },
  {
    "id": "proc-stk-5",
    "number": 27,
    "name": "Gestionar las Comunicaciones",
    "nameEn": "Manage Communications",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Asegurar la recopilación, creación, distribución, almacenamiento, recuperación, gestión, monitoreo y disposición final oportuna de la información del proyecto.",
    "inputs": [
      "Plan de gestión de comunicaciones",
      "Informes de desempeño del trabajo",
      "EEFs"
    ],
    "tools": [
      "Sistemas de información (PMIS)",
      "Presentaciones ejecutivas",
      "Habilidades de retroalimentación"
    ],
    "outputs": [
      "Comunicaciones del proyecto (Project Communications)",
      "Actualizaciones de planes"
    ],
    "tailoring": "Adaptar el mensaje y canal según la cultura, jerarquía e idioma del receptor.",
    "examTip": "La retroalimentación confirma si el mensaje fue entendido correctamente por el receptor y si se lograron las acciones deseadas."
  },
  {
    "id": "proc-stk-6",
    "number": 28,
    "name": "Monitorear el Involucramiento de Interesados",
    "nameEn": "Monitor Stakeholder Engagement",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitorear las relaciones de los interesados y adaptar las estrategias para mantener el involucramiento a medida que el proyecto evoluciona.",
    "inputs": [
      "Plan de involucramiento",
      "Registro de incidentes",
      "Registro de interesados",
      "Datos de desempeño"
    ],
    "tools": [
      "Análisis de partes interesadas",
      "Toma de decisiones",
      "Reuniones"
    ],
    "outputs": [
      "Información de desempeño del trabajo",
      "Solicitudes de cambio"
    ],
    "tailoring": "Permite detectar tempranamente si un interesado que antes apoyaba el proyecto se ha vuelto reticente debido a un cambio.",
    "examTip": "Si un interesado clave cambia de actitud o entra un nuevo líder directivo, este proceso actualiza las estrategias de involucramiento."
  },
  {
    "id": "proc-stk-7",
    "number": 29,
    "name": "Monitorear las Comunicaciones",
    "nameEn": "Monitor Communications",
    "domain": "Interesados",
    "domainEn": "Stakeholders",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Asegurar que se satisfagan las necesidades óptimas de flujo de información del proyecto y de sus partes interesadas.",
    "inputs": [
      "Plan de comunicaciones",
      "Comunicaciones del proyecto",
      "Registro de incidentes",
      "Datos de desempeño"
    ],
    "tools": [
      "Evaluación de canales de comunicación",
      "Encuestas de satisfacción de comunicación",
      "Reuniones"
    ],
    "outputs": [
      "Información de desempeño del trabajo",
      "Solicitudes de cambio"
    ],
    "tailoring": "Elimina informes obsoletos que nadie lee y agiliza canales de retroalimentación directa.",
    "examTip": "Si las partes interesadas se quejan de falta de información o sobrecarga de correos, este proceso ajusta el plan de comunicaciones."
  },
  {
    "id": "proc-res-1",
    "number": 30,
    "name": "Planificar la Gestión de Recursos",
    "nameEn": "Plan Resource Management",
    "domain": "Recursos",
    "domainEn": "Resources",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Definir cómo estimar, adquirir, gestionar y utilizar recursos físicos y del equipo a lo largo del ciclo de vida del proyecto.",
    "inputs": [
      "Acta de constitución",
      "Plan de dirección",
      "Línea base del alcance",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Juicio de expertos",
      "Estructura de desglose de la organización (OBS)",
      "Matriz RACI",
      "Teoría organizacional"
    ],
    "outputs": [
      "Plan de Gestión de Recursos (Resource Management Plan)",
      "Acta del Equipo (Team Charter)"
    ],
    "tailoring": "En equipos ágiles, el Acta del Equipo (Team Charter o Normas de Trabajo) la define el equipo de forma autónoma.",
    "examTip": "El Team Charter establece los valores del equipo, acuerdos de comunicación, resolución interna de discrepancias y normas de convivencia."
  },
  {
    "id": "proc-res-2",
    "number": 31,
    "name": "Estimar Recursos",
    "nameEn": "Estimate Resources",
    "domain": "Recursos",
    "domainEn": "Resources",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Estimar el tipo y las cantidades de recursos humanos, materiales, equipos y suministros necesarios para realizar el trabajo de cada actividad.",
    "inputs": [
      "Plan de gestión de recursos",
      "Lista de actividades",
      "Atributos de actividad",
      "Calendarios de recursos"
    ],
    "tools": [
      "Estimación ascendente (Bottom-up)",
      "Estimación análoga",
      "Estimación paramétrica",
      "Software de gestión de recursos"
    ],
    "outputs": [
      "Requisitos de recursos",
      "Bases de las estimaciones",
      "Estructura de Desglose de Recursos (RBS)"
    ],
    "tailoring": "En Scrum, los recursos humanos suelen ser un equipo multidisciplinario estable de 5 a 9 personas dedicado a tiempo completo.",
    "examTip": "La Estructura de Desglose de Recursos (RBS) es una jerarquía visual que clasifica los recursos por categoría y tipo (ej. personal, maquinaria, software)."
  },
  {
    "id": "proc-res-3",
    "number": 32,
    "name": "Adquirir Recursos",
    "nameEn": "Acquire Resources",
    "domain": "Recursos",
    "domainEn": "Resources",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Obtener los miembros del equipo, instalaciones, equipos, materiales y suministros necesarios para completar el trabajo del proyecto.",
    "inputs": [
      "Plan de gestión de recursos",
      "Calendarios de recursos",
      "Requisitos de recursos",
      "EEFs"
    ],
    "tools": [
      "Toma de decisiones con criterios múltiples",
      "Negociación (con gerentes funcionales)",
      "Equipos virtuales",
      "Asignación previa"
    ],
    "outputs": [
      "Asignaciones de recursos físicos",
      "Asignaciones del equipo del proyecto",
      "Calendarios de recursos actualizados"
    ],
    "tailoring": "En organizaciones matriciales, el PM debe negociar activamente con los gerentes funcionales para conseguir talento calificado.",
    "examTip": "Si un recurso clave no está disponible, el PM negocia con el gerente funcional o evalúa contratar talento externo o reasignar prioridades."
  },
  {
    "id": "proc-res-4",
    "number": 33,
    "name": "Liderar al Equipo",
    "nameEn": "Lead the Team",
    "domain": "Recursos",
    "domainEn": "Resources",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Mejorar las competencias, la interacción de los miembros y el ambiente general del equipo para lograr un alto desempeño y motivar la excelencia.",
    "inputs": [
      "Asignaciones del equipo",
      "Plan de recursos",
      "Acta del equipo"
    ],
    "tools": [
      "Capacitación",
      "Actividades de desarrollo del equipo (Team building)",
      "Reconocimiento y recompensas",
      "Inteligencia emocional",
      "Resolución constructiva de conflictos"
    ],
    "outputs": [
      "Evaluaciones de desempeño del equipo",
      "Solicitudes de cambio",
      "Actualizaciones de planes"
    ],
    "tailoring": "El PM actúa como un líder servidor que protege al equipo de interferencias externas y facilita su autoorganización.",
    "examTip": "Técnica de resolución de conflictos predilecta en PMI: 'Colaborar / Resolver el problema' (ganar-ganar con diálogo franco y soluciones duraderas)."
  },
  {
    "id": "proc-res-5",
    "number": 34,
    "name": "Monitorear y Controlar los Recursos",
    "nameEn": "Monitor and Control Resourcing",
    "domain": "Recursos",
    "domainEn": "Resources",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Asegurar que los recursos físicos asignados estén disponibles a tiempo y en el lugar adecuado, y liberarlos cuando ya no se requieran.",
    "inputs": [
      "Plan de dirección",
      "Asignaciones de recursos físicos",
      "Datos de desempeño del trabajo",
      "Acuerdos"
    ],
    "tools": [
      "Análisis de datos (Análisis de utilización de recursos)",
      "Resolución de problemas",
      "Negociación"
    ],
    "outputs": [
      "Información de desempeño del trabajo",
      "Solicitudes de cambio"
    ],
    "tailoring": "Evita sobrecostos por alquiler prolongado de maquinaria o penalizaciones por materiales ociosos.",
    "examTip": "Este proceso se enfoca principalmente en recursos FÍSICOS (materiales, equipos). La gestión de las personas se cubre en 'Liderar al Equipo'."
  },
  {
    "id": "proc-risk-1",
    "number": 35,
    "name": "Planificar la Gestión de Riesgos",
    "nameEn": "Plan Risk Management",
    "domain": "Riesgo",
    "domainEn": "Risk",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Definir cómo conducir las actividades de gestión de riesgos para un proyecto, estableciendo categorías, umbrales y metodologías.",
    "inputs": [
      "Acta de constitución",
      "Plan para la dirección del proyecto",
      "Registro de interesados",
      "Apetito de riesgo (EEFs)"
    ],
    "tools": [
      "Juicio de expertos",
      "Análisis de datos (Análisis de partes interesadas)",
      "Reuniones de planificación de riesgos"
    ],
    "outputs": [
      "Plan de Gestión de Riesgos (Risk Management Plan)",
      "Estructura de Desglose del Riesgo (RBS)"
    ],
    "tailoring": "Gradúa el nivel de rigor: proyectos innovadores o con vidas humanas requieren procesos mucho más profundos.",
    "examTip": "El Plan de Gestión de Riesgos define las escalas de probabilidad e impacto (ej. de 1 a 5) y los umbrales de tolerancia de la organización."
  },
  {
    "id": "proc-risk-2",
    "number": 36,
    "name": "Identificar Riesgos",
    "nameEn": "Identify Risks",
    "domain": "Riesgo",
    "domainEn": "Risk",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Identificar tanto los riesgos individuales del proyecto como las fuentes de riesgo general, documentando sus características detalladas.",
    "inputs": [
      "Plan de gestión de riesgos",
      "Líneas base",
      "Documentos del proyecto",
      "Acuerdos",
      "EEFs y OPAs"
    ],
    "tools": [
      "Lluvia de ideas (Brainstorming)",
      "Listas de verificación",
      "Entrevistas",
      "Análisis de supuestos y restricciones",
      "Análisis FODA / SWOT"
    ],
    "outputs": [
      "Registro de Riesgos (Risk Register)",
      "Informe de Riesgos (Risk Report)"
    ],
    "tailoring": "La identificación de riesgos es un proceso iterativo que se repite en cada iteración, retrospectiva y reunión de estado.",
    "examTip": "Un riesgo bien formulado incluye: Causa -> Evento incierto -> Consecuencia/Impacto."
  },
  {
    "id": "proc-risk-3",
    "number": 37,
    "name": "Realizar el Análisis de Riesgos",
    "nameEn": "Perform Risk Analysis",
    "domain": "Riesgo",
    "domainEn": "Risk",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Priorizar riesgos individuales evaluando probabilidad e impacto (cualitativo) y modelar numéricamente el efecto global en el proyecto (cuantitativo).",
    "inputs": [
      "Registro de riesgos",
      "Plan de gestión de riesgos",
      "Línea base del alcance y cronograma"
    ],
    "tools": [
      "Matriz de Probabilidad e Impacto",
      "Evaluación de calidad de datos de riesgo",
      "Simulación Monte Carlo",
      "Diagrama de Tornado (Sensibilidad)",
      "Árboles de decisión (EMV)"
    ],
    "outputs": [
      "Registro de riesgos actualizado con puntuación y priorización",
      "Informe de riesgos con probabilidad de éxito global"
    ],
    "tailoring": "El análisis cualitativo es obligatorio para todo proyecto; el cuantitativo se reserva para proyectos complejos o de alta inversión.",
    "examTip": "El Valor Monetario Esperado (EMV) = Probabilidad x Impacto financiero. Se usa frecuentemente con árboles de decisión en el examen."
  },
  {
    "id": "proc-risk-4",
    "number": 38,
    "name": "Planificar las Respuestas a los Riesgos",
    "nameEn": "Plan Risk Responses",
    "domain": "Riesgo",
    "domainEn": "Risk",
    "focusArea": "Planificación",
    "focusAreaEn": "Planning",
    "purpose": "Desarrollar opciones, seleccionar estrategias y acordar acciones para abordar la exposición al riesgo individual y general.",
    "inputs": [
      "Registro de riesgos",
      "Informe de riesgos",
      "Plan de recursos",
      "Calendarios"
    ],
    "tools": [
      "Estrategias para amenazas (Escalar, Evitar, Transferir, Mitigar, Aceptar)",
      "Estrategias para oportunidades (Escalar, Explotar, Compartir, Mejorar, Aceptar)",
      "Planes de contingencia y reservas"
    ],
    "outputs": [
      "Dueños del riesgo asignados (Risk Owners)",
      "Solicitudes de cambio (para añadir actividades de respuesta al plan)",
      "Planes de contingencia acordados"
    ],
    "tailoring": "Cada respuesta debe ser rentable en relación con la gravedad del riesgo; no gastes $10,000 en mitigar un riesgo de $2,000.",
    "examTip": "Riesgo Residual: El riesgo que subsiste tras aplicar la respuesta. Riesgo Secundario: Un nuevo riesgo originado como efecto directo de aplicar una respuesta."
  },
  {
    "id": "proc-risk-5",
    "number": 39,
    "name": "Implementar las Respuestas a los Riesgos",
    "nameEn": "Implement Risk Responses",
    "domain": "Riesgo",
    "domainEn": "Risk",
    "focusArea": "Ejecución",
    "focusAreaEn": "Executing",
    "purpose": "Asegurar que las respuestas a los riesgos acordadas se ejecuten efectivamente según lo planificado cuando se disparen las condiciones de alerta.",
    "inputs": [
      "Plan para la dirección del proyecto",
      "Registro de riesgos",
      "OPAs"
    ],
    "tools": [
      "Habilidades de influencia y liderazgo",
      "Sistemas de información (PMIS)"
    ],
    "outputs": [
      "Solicitudes de cambio",
      "Actualizaciones al registro de incidentes y registro de riesgos"
    ],
    "tailoring": "El dueño del riesgo es responsable de monitorear los disparadores (triggers) y liderar la ejecución de la acción de respuesta.",
    "examTip": "Planificar respuestas no sirve de nada si el equipo no las ejecuta proactivamente antes de que el riesgo se convierta en un incidente."
  },
  {
    "id": "proc-risk-6",
    "number": 40,
    "name": "Monitorear los Riesgos",
    "nameEn": "Monitor Risks",
    "domain": "Riesgo",
    "domainEn": "Risk",
    "focusArea": "Monitoreo y Control",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitorear la implementación de respuestas, hacer seguimiento a riesgos identificados, evaluar nuevos riesgos y auditar la efectividad del proceso de riesgo.",
    "inputs": [
      "Registro de riesgos",
      "Datos de desempeño del trabajo",
      "Informes de riesgos"
    ],
    "tools": [
      "Auditorías de riesgos",
      "Análisis de reserva (análisis de 'burn' de contingencias)",
      "Reuniones de revisión periódica de riesgos"
    ],
    "outputs": [
      "Información de desempeño del trabajo",
      "Registro de riesgos actualizado (cerrando riesgos superados)",
      "Solicitudes de cambio"
    ],
    "tailoring": "Si un riesgo identificado ya no tiene posibilidad de ocurrir, se cierra formalmente y se puede reasignar su reserva de contingencia.",
    "examTip": "El análisis de reservas compara la reserva de contingencia restante contra el monto de riesgo residual aún presente en el proyecto."
  }
];

  // The 6 Refined Principles of PMBOK 8th Edition
const principles = [
  {
    "id": "prin-1",
    "number": 1,
    "name": "Adoptar una Visión Holística",
    "nameEn": "Adopt a Holistic View",
    "dimension": "Proactiva",
    "dimensionEn": "Proactive",
    "section": "3.3",
    "summary": "Reconocer que el proyecto es un sistema interactivo e interdependiente dentro de una organización y un entorno global más amplio.",
    "impact": "Evita la 'visión de túnel' y los silos funcionales. Permite que el equipo anticipe efectos secundarios y aproveche sinergias interdepartamentales.",
    "inAction": [
      "Evaluar el impacto de cambios técnicos en finanzas, riesgos y relaciones con clientes.",
      "Coordinar activamente con otros proyectos y programas del portafolio que compartan recursos.",
      "Monitorear factores externos como regulaciones, cambios geopolíticos y tendencias tecnológicas."
    ],
    "connectedDomains": [
      "Gobernanza",
      "Alcance",
      "Cronograma",
      "Finanzas",
      "Interesados",
      "Recursos",
      "Riesgo"
    ],
    "evolution": "Fusiona los principios de la 7ma edición: 'Navegar la Complejidad' y 'Reconocer Interacciones de Sistemas'."
  },
  {
    "id": "prin-2",
    "number": 2,
    "name": "Enfocarse en el Valor",
    "nameEn": "Focus on Value",
    "dimension": "Orientada a Valor",
    "dimensionEn": "Value-Driven",
    "section": "3.4",
    "summary": "El valor es la justificación primordial de todo proyecto. El éxito se define por los beneficios reales logrados, no solo por entregar entregables a tiempo.",
    "impact": "Mantiene al equipo orientado hacia el 'por qué' del proyecto, adaptando los planes según sea necesario para salvaguardar el caso de negocio.",
    "inAction": [
      "Validar continuamente la vigencia del Caso de Negocio a medida que cambia el mercado.",
      "Priorizar funcionalidades por retorno de inversión o impacto en el cliente sobre requisitos cosméticos.",
      "Estar dispuestos a pausar o replantear el proyecto si el valor proyectado desaparece."
    ],
    "connectedDomains": [
      "Gobernanza",
      "Alcance",
      "Finanzas",
      "Interesados"
    ],
    "evolution": "Fusiona: 'Enfoque en Valor', 'Abrazar la Adaptabilidad y Resiliencia' y 'Habilitar el Cambio hacia el Estado Futuro'."
  },
  {
    "id": "prin-3",
    "number": 3,
    "name": "Integrar la Calidad en Procesos y Entregables",
    "nameEn": "Embed Quality Into Processes and Deliverables",
    "dimension": "Proactiva",
    "dimensionEn": "Proactive",
    "section": "3.5",
    "summary": "La calidad se diseña y construye en cada actividad; no se añade como una inspección superficial al final.",
    "impact": "Reduce drásticamente el retrabajo, el desperdicio y los costos de no conformidad, elevando la confianza de clientes y usuarios.",
    "inAction": [
      "Invertir proactivamente en prevención y capacitación técnica del equipo.",
      "Implementar ciclos de mejora continua (PDCA, retrospectivas) y pruebas automatizadas.",
      "Definir criterios de aceptación medibles y acordados con los interesados antes de iniciar el trabajo."
    ],
    "connectedDomains": [
      "Gobernanza",
      "Alcance",
      "Recursos"
    ],
    "evolution": "Refinamiento directo de 'Incorporar la Calidad en los Procesos y los Entregables' de la 7ma edición."
  },
  {
    "id": "prin-4",
    "number": 4,
    "name": "Ser un Líder Responsable",
    "nameEn": "Be an Accountable Leader",
    "dimension": "Sentido de Propiedad",
    "dimensionEn": "Ownership",
    "section": "3.6",
    "summary": "Liderar con integridad ética, empatía y sentido de administración fiduciaria (stewardship), asumiendo plena rendición de cuentas por los resultados.",
    "impact": "Construye credibilidad institucional, genera confianza recíproca con patrocinadores y motiva al equipo en momentos de alta incertidumbre.",
    "inAction": [
      "Demostrar liderazgo servidor apoyando al equipo y eliminando impedimentos del camino.",
      "Rendir cuentas de forma transparente sobre desviaciones sin ocultar problemas ni buscar culpables.",
      "Actuar con apego estricto a las normas de conducta ética y proteger el patrimonio de la organización."
    ],
    "connectedDomains": [
      "Gobernanza",
      "Recursos",
      "Interesados"
    ],
    "evolution": "Fusiona: 'Demostrar Comportamientos de Liderazgo' y 'Ser un Administrador Diligente, Respetuoso y Cuidadoso (Steward)'."
  },
  {
    "id": "prin-5",
    "number": 5,
    "name": "Integrar la Sostenibilidad en Todas las Áreas",
    "nameEn": "Integrate Sustainability Within All Project Areas",
    "dimension": "Orientada a Valor",
    "dimensionEn": "Value-Driven",
    "section": "3.7",
    "summary": "Nuevo principio estandarte de la 8va edición: considerar el impacto ambiental, social y económico (criterios ESG) a lo largo de todo el ciclo de vida.",
    "impact": "Protege el planeta, apoya a las comunidades locales y asegura que las soluciones creadas sean viables económicamente durante décadas.",
    "inAction": [
      "Evaluar la huella de carbono y el uso eficiente de materiales en el diseño del producto.",
      "Considerar el ciclo de vida completo: desde la obtención de materias primas hasta el reciclaje o desmantelamiento.",
      "Priorizar proveedores éticos con políticas laborales justas y bajas emisiones."
    ],
    "connectedDomains": [
      "Gobernanza",
      "Alcance",
      "Finanzas",
      "Recursos",
      "Riesgo"
    ],
    "evolution": "¡Principio 100% NUEVO en la 8va Edición! Eleva la sostenibilidad al núcleo estratégico de la disciplina."
  },
  {
    "id": "prin-6",
    "number": 6,
    "name": "Construir una Cultura Empoderada",
    "nameEn": "Build an Empowered Culture",
    "dimension": "Sentido de Propiedad",
    "dimensionEn": "Ownership",
    "section": "3.8",
    "summary": "Fomentar un entorno de seguridad psicológica, diversidad, colaboración activa y autonomía para que las personas tomen decisiones con confianza.",
    "impact": "Desata la innovación, aumenta el compromiso del equipo, retiene el talento y acelera los tiempos de respuesta ante problemas.",
    "inAction": [
      "Crear un espacio seguro donde equivocar errores sea una oportunidad de aprendizaje, no de castigo.",
      "Delegar autoridad en los profesionales técnicos para decidir los detalles de implementación.",
      "Fomentar la inclusión activa de perspectivas multidisciplinarias y culturales diversas."
    ],
    "connectedDomains": [
      "Recursos",
      "Interesados",
      "Gobernanza"
    ],
    "evolution": "Evolución y refinamiento de 'Crear un Entorno Colaborativo para el Equipo del Proyecto' de la 7ma edición."
  }
];

  // The 5 Focus Areas of PMBOK 8th Edition
const focusAreas = [
  {
    "id": "fa-init",
    "name": "Área de Enfoque de Iniciación",
    "nameEn": "Initiating Focus Area",
    "section": "4.5.1",
    "processesCount": 2,
    "summary": "Autoriza el inicio formal del proyecto o fase e identifica a las partes interesadas clave que influirán en el resultado.",
    "processes": [
      "Iniciar el Proyecto o Fase",
      "Identificar Interesados"
    ],
    "keyDeliverable": "Acta de Constitución del Proyecto (Project Charter) y Registro de Interesados.",
    "adaptivePerspective": "En proyectos adaptativos, se realiza al inicio para fijar la visión estratégica y se revisa ligeramente en cada ciclo o release."
  },
  {
    "id": "fa-plan",
    "name": "Área de Enfoque de Planificación",
    "nameEn": "Planning Focus Area",
    "section": "4.5.2",
    "processesCount": 21,
    "summary": "Establece el alcance total del esfuerzo, define y refina los objetivos y desarrolla el curso de acción integral para alcanzarlos.",
    "processes": [
      "Integrar y Alinear Planes del Proyecto",
      "Planificar la Estrategia de Abastecimiento",
      "Planificar la Gestión del Alcance",
      "Levantar y Analizar Requisitos",
      "Definir el Alcance",
      "Desarrollar la Estructura del Alcance (EDT)",
      "Planificar la Gestión del Cronograma",
      "Desarrollar el Cronograma",
      "Planificar la Gestión Financiera",
      "Estimar Costos",
      "Desarrollar el Presupuesto",
      "Planificar el Involucramiento de Interesados",
      "Planificar la Gestión de Comunicaciones",
      "Planificar la Gestión de Recursos",
      "Estimar Recursos",
      "Planificar la Gestión de Riesgos",
      "Identificar Riesgos",
      "Realizar el Análisis de Riesgos",
      "Planificar las Respuestas a los Riesgos"
    ],
    "keyDeliverable": "Plan para la Dirección del Proyecto y las tres Líneas Base (Alcance, Cronograma, Costos).",
    "adaptivePerspective": "Enfoque de planificación por olas sucesivas (Rolling Wave Planning): planificación de alto nivel para el largo plazo y detallada solo para la próxima iteración."
  },
  {
    "id": "fa-exec",
    "name": "Área de Enfoque de Ejecución",
    "nameEn": "Executing Focus Area",
    "section": "4.5.3",
    "processesCount": 8,
    "summary": "Coordina personas y recursos para llevar a cabo el plan de dirección del proyecto y producir los entregables previstos.",
    "processes": [
      "Gestionar la Ejecución del Proyecto",
      "Gestionar el Aseguramiento de la Calidad",
      "Gestionar el Conocimiento del Proyecto",
      "Gestionar el Involucramiento de Interesados",
      "Gestionar las Comunicaciones",
      "Adquirir Recursos",
      "Liderar al Equipo",
      "Implementar las Respuestas a los Riesgos"
    ],
    "keyDeliverable": "Entregables terminados, Datos brutos de desempeño del trabajo y Registro de Lecciones Aprendidas.",
    "adaptivePerspective": "Aquí es donde el equipo ágil autogestiona el trabajo diario del sprint mediante tableros y standups diarios."
  },
  {
    "id": "fa-mon",
    "name": "Área de Enfoque de Monitoreo y Control",
    "nameEn": "Monitoring and Controlling Focus Area",
    "section": "4.5.4",
    "processesCount": 8,
    "summary": "Rastrea, revisa y regula el avance del proyecto, identifica variaciones frente al plan e inicia los cambios necesarios.",
    "processes": [
      "Monitorear y Controlar el Desempeño del Proyecto",
      "Evaluar e Implementar Cambios",
      "Monitorear y Controlar el Alcance",
      "Validar el Alcance",
      "Monitorear y Controlar el Cronograma",
      "Monitorear y Controlar las Finanzas",
      "Monitorear el Involucramiento de Interesados",
      "Monitorear las Comunicaciones",
      "Monitorear y Controlar los Recursos",
      "Monitorear los Riesgos"
    ],
    "keyDeliverable": "Informes de desempeño del trabajo, pronósticos de costo/tiempo y solicitudes de cambio aprobadas.",
    "adaptivePerspective": "Monitoreo continuo mediante radiadores de información, gráficas burndown y retrospectivas periódicas."
  },
  {
    "id": "fa-close",
    "name": "Área de Enfoque de Cierre",
    "nameEn": "Closing Focus Area",
    "section": "4.5.5",
    "processesCount": 1,
    "summary": "Finaliza formalmente todas las actividades a través de todas las áreas para cerrar el proyecto o una fase específica.",
    "processes": [
      "Cerrar el Proyecto o Fase"
    ],
    "keyDeliverable": "Transferencia del producto a operaciones, archivo formal del conocimiento y liberación de recursos.",
    "adaptivePerspective": "En ágil, cada fin de release concluye con una transferencia o despliegue y una retrospectiva formal de cierre."
  }
];

  // The 7 Performance Domains of PMBOK 8th Edition
const performanceDomains = [
  {
    "id": "dom-gov",
    "name": "Dominio de Gobernanza",
    "nameEn": "Governance Performance Domain",
    "section": "2.1",
    "processesCount": 9,
    "color": "#006874",
    "icon": "policy",
    "summary": "Abarca los procesos necesarios para tomar decisiones que protejan y aumenten la propuesta de valor del proyecto de forma holística.",
    "keyConcepts": [
      "Creación y protección continua del valor",
      "Modelos de gobernanza: proyectos estructurados vs autogestionados",
      "Puntos de revisión de fase (phase gates) y autoridad de cancelación de proyectos",
      "Integración de la gestión de calidad y del conocimiento"
    ],
    "checkResults": [
      "Alineación constante con los objetivos estratégicos organizacionales",
      "Toma de decisiones transparente y escalamiento efectivo de problemas",
      "Transición ordenada y exitosa hacia las operaciones de negocio"
    ]
  },
  {
    "id": "dom-scope",
    "name": "Dominio de Alcance",
    "nameEn": "Scope Performance Domain",
    "section": "2.2",
    "processesCount": 6,
    "color": "#1B5E20",
    "icon": "architecture",
    "summary": "Define, desarrolla y valida todo el trabajo necesario —y sólo el trabajo necesario— para cumplir con los requisitos del proyecto.",
    "keyConcepts": [
      "Diferenciación entre alcance del producto y alcance del proyecto",
      "Descomposición jerárquica mediante la EDT/WBS y la regla del 100%",
      "Prevención activa del Scope Creep (corrupción del alcance) y Gold Plating",
      "Validación y aceptación formal de entregables por parte del cliente"
    ],
    "checkResults": [
      "Los entregables cumplen con todos los criterios de aceptación acordados",
      "El alcance se completa sin omisiones ni trabajo no autorizado",
      "Existe trazabilidad completa desde la necesidad de negocio hasta el producto final"
    ]
  },
  {
    "id": "dom-sched",
    "name": "Dominio de Cronograma",
    "nameEn": "Schedule Performance Domain",
    "section": "2.3",
    "processesCount": 3,
    "color": "#E65100",
    "icon": "calendar_month",
    "summary": "Estructura la secuencia lógica, duraciones y dependencias de las actividades para entregar resultados en el tiempo previsto.",
    "keyConcepts": [
      "Método de la Ruta Crítica (CPM) y gestión de holguras",
      "Relaciones de precedencia PDM (FS, FF, SS, SF) y uso de leads/lags",
      "Técnicas de compresión: Crashing (más costo) vs Fast Tracking (más riesgo)",
      "Cadencia de entrega ágil e iterativa"
    ],
    "checkResults": [
      "Los hitos clave del proyecto se alcanzan dentro de las fechas comprometidas",
      "Las actividades en la ruta crítica se gestionan de manera proactiva",
      "Los recursos están balanceados sin cuellos de botella de sobreasignación"
    ]
  },
  {
    "id": "dom-fin",
    "name": "Dominio de Finanzas",
    "nameEn": "Finance Performance Domain",
    "section": "2.4",
    "processesCount": 4,
    "color": "#2E7D32",
    "icon": "monetization_on",
    "summary": "Planifica, estima, presupuesta y controla los costos y flujos financieros para asegurar la viabilidad económica y el retorno de inversión.",
    "keyConcepts": [
      "Línea Base de Costos (Curva S) y conciliación de financiamiento",
      "Reservas de Contingencia (riesgos conocidos) vs Reservas de Gestión (desconocidos)",
      "Gestión del Valor Ganado (EVM) para medir eficiencia de costo (CPI, CV)",
      "Evaluación de costos directos, indirectos y costos hundidos"
    ],
    "checkResults": [
      "El proyecto se completa dentro del presupuesto total autorizado",
      "Se mantiene un flujo de caja positivo que respalda la ejecución de las actividades",
      "Las variaciones financieras se detectan tempranamente y se corrigen con precisión"
    ]
  },
  {
    "id": "dom-stk",
    "name": "Dominio de Interesados",
    "nameEn": "Stakeholders Performance Domain",
    "section": "2.5",
    "processesCount": 7,
    "color": "#6A1B9A",
    "icon": "groups",
    "summary": "Identifica a las partes interesadas, comprende sus necesidades y diseña estrategias de comunicación para construir relaciones colaborativas duraderas.",
    "keyConcepts": [
      "Matriz de Poder vs Interés y Modelo de Prominencia (Salience)",
      "Planificación de comunicaciones (fórmula de canales N*(N-1)/2)",
      "Transición de interesados de reticentes a promotores y líderes",
      "Comunicación transparente mediante radiadores de información"
    ],
    "checkResults": [
      "Relaciones de trabajo productivas y de confianza con todos los interesados",
      "Las expectativas de los clientes y patrocinadores están alineadas y gestionadas",
      "El flujo de información llega a la persona correcta en el formato adecuado"
    ]
  },
  {
    "id": "dom-res",
    "name": "Dominio de Recursos",
    "nameEn": "Resources Performance Domain",
    "section": "2.6",
    "processesCount": 5,
    "color": "#0277BD",
    "icon": "engineering",
    "summary": "Organiza, adquiere, lidera y optimiza los recursos humanos y físicos necesarios para ejecutar con éxito el trabajo del proyecto.",
    "keyConcepts": [
      "Liderazgo Servidor y fomento de la Inteligencia Emocional",
      "Modelo de desarrollo de equipos de Tuckman (Forming, Storming, Norming, Performing)",
      "Matriz de asignación de responsabilidades RACI (un solo Aprobador)",
      "Técnicas de resolución de conflictos: Colaborar/Resolver el problema como estándar"
    ],
    "checkResults": [
      "Equipo cohesionado, altamente motivado y con seguridad psicológica",
      "Disponibilidad oportuna de suministros, maquinaria e infraestructura física",
      "Resolución constructiva de disputas sin perjudicar el clima laboral"
    ]
  },
  {
    "id": "dom-risk",
    "name": "Dominio de Riesgo",
    "nameEn": "Risk Performance Domain",
    "section": "2.7",
    "processesCount": 6,
    "color": "#C62828",
    "icon": "warning",
    "summary": "Identifica, evalúa y responde proactivamente a la incertidumbre, mitigando amenazas y explotando oportunidades para proteger el valor.",
    "keyConcepts": [
      "Riesgo individual vs Riesgo general del proyecto",
      "Evaluación de probabilidad e impacto (cualitativo) y modelado cuantitativo (Monte Carlo, Tornado)",
      "Estrategias para amenazas (Evitar, Mitigar, Transferir, Aceptar, Escalar)",
      "Estrategias para oportunidades (Explotar, Mejorar, Compartir, Aceptar, Escalar)",
      "Monitoreo de disparadores (triggers) y gestión de riesgos residuales y secundarios"
    ],
    "checkResults": [
      "Las amenazas se anticipan y neutralizan antes de convertirse en problemas graves",
      "Las oportunidades se identifican y aprovechan para incrementar beneficios",
      "La reserva de contingencia financiera y de tiempo se mantiene bajo control"
    ]
  }
];

  // Complete Catalog of Tools, Techniques & Formulas in PMBOK 8
const toolsAndTechniques = {
  "evm": [
    {
      "abbr": "PV",
      "name": "Valor Planificado (Planned Value)",
      "definition": "El presupuesto autorizado asignado al trabajo programado a completarse hasta una fecha específica.",
      "formula": "PV = Presupuesto planificado de la actividad a la fecha de corte",
      "interpretation": "Muestra cuánto trabajo debió haberse completado en términos monetarios."
    },
    {
      "abbr": "EV",
      "name": "Valor Ganado (Earned Value)",
      "definition": "La medida del trabajo realmente completado expresada en términos del presupuesto autorizado para ese trabajo.",
      "formula": "EV = Suma del valor planificado del trabajo efectivamente terminado",
      "interpretation": "Muestra el valor monetario real producido por el equipo, sin importar cuánto costó producirlo."
    },
    {
      "abbr": "AC",
      "name": "Costo Real (Actual Cost)",
      "definition": "El costo real incurrido por el trabajo realizado en una actividad durante un período de tiempo específico.",
      "formula": "AC = Suma de todos los costos reales desembolsados a la fecha",
      "interpretation": "Muestra cuánto dinero se gastó realmente para lograr el EV completado."
    },
    {
      "abbr": "BAC",
      "name": "Presupuesto a la Conclusión (Budget at Completion)",
      "definition": "La suma de todos los presupuestos establecidos para el trabajo a ser realizado (Línea Base de Costos).",
      "formula": "BAC = Presupuesto total aprobado del proyecto (sin reserva de gestión)",
      "interpretation": "El valor del trabajo total planificado al 100% de finalización."
    },
    {
      "abbr": "CV",
      "name": "Variación del Costo (Cost Variance)",
      "definition": "El monto del déficit o superávit presupuestario en un momento dado.",
      "formula": "CV = EV - AC",
      "interpretation": "Positivo (> 0): Por debajo del costo planificado (Ahorro / Excelente). Cero (= 0): En costo exacto. Negativo (< 0): Por encima del costo planificado (Sobrecosto / Alerta)."
    },
    {
      "abbr": "SV",
      "name": "Variación del Cronograma (Schedule Variance)",
      "definition": "La medida del desempeño del cronograma expresada como la diferencia entre el valor ganado y el valor planificado.",
      "formula": "SV = EV - PV",
      "interpretation": "Positivo (> 0): Adelantado respecto al cronograma. Cero (= 0): En tiempo exacto. Negativo (< 0): Atrasado respecto al cronograma."
    },
    {
      "abbr": "CPI",
      "name": "Índice de Desempeño del Costo (Cost Performance Index)",
      "definition": "La medida de la eficiencia del costo de los recursos presupuestados expresada como la relación entre EV y AC.",
      "formula": "CPI = EV / AC",
      "interpretation": "> 1.0: Eficiencia alta (obtenemos más de $1 de trabajo por cada $1 gastado). = 1.0: En presupuesto exacto. < 1.0: Ineficiencia (obtenemos menos de $1 de trabajo por cada $1 gastado)."
    },
    {
      "abbr": "SPI",
      "name": "Índice de Desempeño del Cronograma (Schedule Performance Index)",
      "definition": "La medida de la eficiencia del cronograma expresada como la relación entre EV y PV.",
      "formula": "SPI = EV / PV",
      "interpretation": "> 1.0: Se avanza a un ritmo más rápido de lo planificado. = 1.0: Exactamente al ritmo planificado. < 1.0: Se avanza a un ritmo más lento de lo planificado."
    },
    {
      "abbr": "EAC",
      "name": "Estimación a la Conclusión (Estimate at Completion)",
      "definition": "El costo total esperado de completar todo el trabajo del proyecto.",
      "formula": "EAC = BAC / CPI (si la tasa actual de costo se mantiene)\nEAC = AC + (BAC - EV) (si el trabajo futuro se realiza a la tasa original planificada)\nEAC = AC + [(BAC - EV) / (CPI * SPI)] (si tanto costo como cronograma impactan el futuro)",
      "interpretation": "El pronóstico más realista de cuánto costará el proyecto al terminar."
    },
    {
      "abbr": "ETC",
      "name": "Estimación hasta la Conclusión (Estimate to Complete)",
      "definition": "El costo esperado para terminar todo el trabajo restante del proyecto.",
      "formula": "ETC = EAC - AC",
      "interpretation": "Cuánto dinero adicional se necesita a partir de hoy para finalizar."
    },
    {
      "abbr": "VAC",
      "name": "Variación a la Conclusión (Variance at Completion)",
      "definition": "La proyección del déficit o superávit presupuestario final del proyecto.",
      "formula": "VAC = BAC - EAC",
      "interpretation": "Positivo: El proyecto terminará con dinero sobrante. Negativo: El proyecto terminará requiriendo más presupuesto del autorizado."
    },
    {
      "abbr": "TCPI",
      "name": "Índice de Desempeño del Trabajo por Completar (To-Complete Performance Index)",
      "definition": "La medida de la eficiencia de costos que debe alcanzarse en el trabajo restante para cumplir un objetivo de gestión especificado (BAC o EAC).",
      "formula": "TCPI (para cumplir BAC) = (BAC - EV) / (BAC - AC)\nTCPI (para cumplir EAC) = (BAC - EV) / (EAC - AC)",
      "interpretation": "> 1.0: Difícil de lograr (se debe ser más eficiente que el plan original). < 1.0: Fácil de lograr (hay margen para menor eficiencia)."
    }
  ],
  "estimation": [
    {
      "name": "Estimación Triangular (Simple)",
      "formula": "E = (O + M + P) / 3",
      "description": "Promedio aritmético directo de los escenarios Optimista (O), Más Probable (M) y Pesimista (P)."
    },
    {
      "name": "Estimación Beta / PERT (Ponderada)",
      "formula": "E = (O + 4M + P) / 6",
      "description": "Distribución Beta ponderada que asigna 4 veces más peso al escenario más probable."
    },
    {
      "name": "Desviación Estándar PERT (Sigma)",
      "formula": "σ = (P - O) / 6",
      "description": "Medida de la variabilidad o incertidumbre de la estimación de duración o costo."
    },
    {
      "name": "Varianza PERT",
      "formula": "Var = ((P - O) / 6)^2",
      "description": "Cuadrado de la desviación estándar. Las varianzas se suman para calcular la varianza total de la ruta crítica."
    }
  ],
  "communications": [
    {
      "name": "Canales de Comunicación Potenciales",
      "formula": "Canales = N * (N - 1) / 2",
      "description": "Calcula el número de vías de comunicación bidireccionales entre N participantes."
    }
  ],
  "scheduleCompression": [
    {
      "name": "Intensificación (Crashing)",
      "impact": "Acorta el cronograma agregando recursos a las actividades de la ruta crítica con el menor costo incremental.",
      "tradeOff": "Aumenta el costo y el riesgo de gestión."
    },
    {
      "name": "Ejecución Rápida (Fast Tracking)",
      "impact": "Realiza en paralelo actividades que normalmente se harían de forma secuencial.",
      "tradeOff": "Aumenta el riesgo y la posibilidad de retrabajo significativo, sin elevar necesariamente el costo directo inicial."
    }
  ]
};

  // Complete Appendices X2, X3, X4, X5 of PMBOK 8th Edition
const appendices = {
  "x2_pmo": {
    "title": "Apéndice X2: Oficinas de Dirección de Proyectos (PMO)",
    "summary": "Evolución hacia PMOs ágiles, centradas en el cliente y diseñadas como centros de habilitación estratégica y no meras auditorías burocráticas.",
    "topics": [
      {
        "subtitle": "La Propuesta de Valor de la PMO",
        "text": "La PMO debe justificar activamente su valor hacia la organización optimizando el retorno de las inversiones en proyectos, capacitando al personal y alineando los esfuerzos con los objetivos estratégicos corporativos."
      },
      {
        "subtitle": "Importancia de la Centralidad en el Cliente",
        "text": "El cliente de la PMO incluye a los Directores de Proyecto, los Equipos de Desarrollo y los Ejecutivos de Negocio. Una PMO centrada en el cliente adapta sus marcos para servir a sus usuarios en lugar de forzar reglas rígidas."
      },
      {
        "subtitle": "Modelos y Estructuras de PMO",
        "text": "Se aleja de las clasificaciones estáticas del pasado. Las PMOs modernas combinan funciones de soporte, control y dirección de forma híbrida y flexible según el área de la organización."
      },
      {
        "subtitle": "Modelos de Madurez de la PMO",
        "text": "Permiten diagnosticar las capacidades actuales de gobernanza, definir una hoja de ruta progresiva y medir cuantitativamente la mejora continua en la entrega de proyectos."
      }
    ]
  },
  "x3_ai": {
    "title": "Apéndice X3: Inteligencia Artificial en la Gestión de Proyectos",
    "summary": "Guía oficial del PMI sobre la adopción, casos de uso prácticos, desafíos éticos y gobernanza de la IA en iniciativas y equipos de proyectos.",
    "topics": [
      {
        "subtitle": "Estrategias de Adopción de IA",
        "text": "Se dividen en tres niveles evolutivos: 1) Automatización de tareas repetitivas (minutas, programación básica); 2) Aumento de capacidades analíticas del PM (asistencia en análisis de riesgos, estimaciones probabilísticas, redacción de planes); y 3) Autonomía supervisada (agentes inteligentes con gobernanza humana)."
      },
      {
        "subtitle": "Casos de Uso Principales (Tabla X3-1)",
        "text": "Predicción de desviaciones basada en big data histórica, optimización inteligente de asignación de recursos, modelado de riesgos en tiempo real, asistencia en redacción de requisitos y soporte conversacional a interesados."
      },
      {
        "subtitle": "Uso Responsable y Preocupaciones Éticas",
        "text": "Mitigación de sesgos algorítmicos en la toma de decisiones, preservación absoluta de la privacidad de los datos empresariales y garantía de rendición de cuentas humana (un ser humano siempre debe ser responsable de cada decisión final)."
      }
    ]
  },
  "x4_procurement": {
    "title": "Apéndice X4: Gestión de Adquisiciones (Procurement)",
    "summary": "Marco integral para planificar, contratar, supervisar y liquidar acuerdos contractuales comerciales con proveedores externos.",
    "topics": [
      {
        "subtitle": "Análisis de Fabricar o Comprar (Make-or-Buy)",
        "text": "Evaluación rigurosa de costos directos, costos operativos futuros, capacidades técnicas internas, confidencialidad y riesgos para decidir si crear una solución internamente o adquirirla a terceros."
      },
      {
        "subtitle": "Documentos de Licitación y Conferencias de Oferentes",
        "text": "Uso de RFI para explorar capacidades, RFP para propuestas complejas integrales y RFQ/IFB para compras estandarizadas. Las conferencias de oferentes garantizan transparencia e igualdad de trato entre postores."
      },
      {
        "subtitle": "Modelos Fundamentales de Contrato",
        "text": "Precio Fijo (Fixed Price - el vendedor asume el riesgo financiero), Costos Reembolsables (Cost Reimbursable - el comprador asume el riesgo financiero), y Tiempo y Materiales (T&M - híbrido por unidades de trabajo)."
      },
      {
        "subtitle": "Administración de Reclamaciones (Claims Administration)",
        "text": "Protocolos escalonados para resolver disputas: Negociación amistosa -> Mediación con tercero neutral -> Arbitraje vinculante -> Litigio judicial (último recurso a evitar)."
      }
    ]
  },
  "x5_evolution": {
    "title": "Apéndice X5: Evolución de la Guía del PMBOK",
    "summary": "Fundamento empírico detrás de la 8va edición y análisis detallado de la transición metodológica desde las ediciones previas.",
    "topics": [
      {
        "subtitle": "Enfoque Basado en Evidencia",
        "text": "Desarrollada tras analizar más de 48,000 datos cualitativos y cuantitativos y recibir 12,000 comentarios de la comunidad internacional de directores de proyectos."
      },
      {
        "subtitle": "Refinamiento de los Principios (Tabla X5-2)",
        "text": "Consolidación de los 12 principios de la 7ma edición en 6 principios más directos, eliminando solapamientos y agregando el principio nuclear de Sostenibilidad Integral."
      },
      {
        "subtitle": "Reincorporación de los Procesos como Áreas de Enfoque",
        "text": "Los antiguos 'Grupos de Procesos' reviven como 5 'Áreas de Enfoque' flexibles, articuladas de forma no prescriptiva con los 7 Dominios de Desempeño a través de 40 procesos clave."
      }
    ]
  }
};

  // Complete Glossary of PMBOK 8th Edition
const glossary = [
  {
    "term": "Acta de Constitución del Proyecto (Project Charter)",
    "def": "Documento emitido por el patrocinador que autoriza formalmente la existencia de un proyecto y confiere al director de proyecto la autoridad para asignar recursos organizacionales.",
    "category": "Gobernanza"
  },
  {
    "term": "Activos de los Procesos de la Organización (OPAs)",
    "def": "Planes, procesos, políticas, procedimientos y bases de conocimiento específicos de la organización ejecutora y utilizados por la misma.",
    "category": "Entorno"
  },
  {
    "term": "Factores Ambientales de la Empresa (EEFs)",
    "def": "Condiciones que no están bajo el control inmediato del equipo del proyecto y que influyen, restringen o dirigen el proyecto (cultura, regulaciones, mercado).",
    "category": "Entorno"
  },
  {
    "term": "Línea Base del Alcance (Scope Baseline)",
    "def": "La versión aprobada del enunciado del alcance del proyecto, la estructura de desglose del trabajo (EDT/WBS) y el diccionario de la EDT asociado.",
    "category": "Alcance"
  },
  {
    "term": "Línea Base del Cronograma (Schedule Baseline)",
    "def": "La versión aprobada del modelo de programación que se utiliza como base para comparar con los resultados reales.",
    "category": "Cronograma"
  },
  {
    "term": "Línea Base de Costos (Cost Baseline)",
    "def": "La versión aprobada del presupuesto del proyecto dividida en fases temporales (Curva S), que excluye cualquier reserva de gestión.",
    "category": "Finanzas"
  },
  {
    "term": "Valor Ganado (Earned Value - EV)",
    "def": "La medida del trabajo realizado expresada en términos del presupuesto autorizado para dicho trabajo.",
    "category": "Finanzas"
  },
  {
    "term": "Valor Planificado (Planned Value - PV)",
    "def": "El presupuesto autorizado asignado al trabajo programado que debió completarse a una fecha específica.",
    "category": "Finanzas"
  },
  {
    "term": "Costo Real (Actual Cost - AC)",
    "def": "El costo real en el que se ha incurrido para llevar a cabo el trabajo ejecutado hasta la fecha.",
    "category": "Finanzas"
  },
  {
    "term": "Índice de Desempeño del Costo (CPI)",
    "def": "Medida de la eficiencia del costo de los recursos presupuestados: EV / AC. Mayor a 1.0 indica ahorro.",
    "category": "Finanzas"
  },
  {
    "term": "Índice de Desempeño del Cronograma (SPI)",
    "def": "Medida de la eficiencia del avance del cronograma: EV / PV. Mayor a 1.0 indica adelanto.",
    "category": "Cronograma"
  },
  {
    "term": "Ruta Crítica (Critical Path)",
    "def": "La secuencia de actividades que representa el camino más largo a través de un proyecto, la cual determina la menor duración posible del mismo.",
    "category": "Cronograma"
  },
  {
    "term": "Holgura Total (Total Float)",
    "def": "La cantidad de tiempo que una actividad del cronograma puede demorarse o extenderse sin retrasar la fecha de finalización del proyecto.",
    "category": "Cronograma"
  },
  {
    "term": "Reserva de Contingencia (Contingency Reserve)",
    "def": "Fondos o tiempo asignados dentro de la línea base para responder a riesgos identificados ('conocidos-desconocidos').",
    "category": "Riesgo"
  },
  {
    "term": "Reserva de Gestión (Management Reserve)",
    "def": "Fondos o tiempo retenidos por la dirección para el control de la gestión y para abordar imprevistos impredecibles ('desconocidos-desconocidos'). No forma parte de la línea base.",
    "category": "Finanzas"
  },
  {
    "term": "Corrupción del Alcance (Scope Creep)",
    "def": "La adición no controlada o no autorizada de productos, servicios o características al alcance del proyecto sin ajustes en tiempo, costo o recursos.",
    "category": "Alcance"
  },
  {
    "term": "Sobreoptimización (Gold Plating)",
    "def": "La práctica de dar al cliente características o funcionalidades adicionales que no fueron solicitadas en los requisitos.",
    "category": "Calidad"
  },
  {
    "term": "Matriz RACI",
    "def": "Cuadro que muestra los recursos asignados a las actividades indicando quién es Responsable (R), Aprobador (A), Consultado (C) o Informado (I).",
    "category": "Recursos"
  },
  {
    "term": "Product Owner",
    "def": "Rol en marcos ágiles responsable de maximizar el valor del producto y de gestionar y priorizar el Product Backlog.",
    "category": "Roles"
  },
  {
    "term": "Sponsor (Patrocinador)",
    "def": "Persona o grupo que provee recursos financieros y apoyo político y estratégico para el proyecto y rinde cuentas por el caso de negocio.",
    "category": "Roles"
  },
  {
    "term": "Intensificación (Crashing)",
    "def": "Técnica de compresión del cronograma que acorta la duración del proyecto añadiendo recursos a la ruta crítica al menor costo posible.",
    "category": "Cronograma"
  },
  {
    "term": "Ejecución Rápida (Fast Tracking)",
    "def": "Técnica de compresión del cronograma en la que actividades o fases que normalmente se realizan secuencialmente se ejecutan en paralelo.",
    "category": "Cronograma"
  },
  {
    "term": "Análisis de Monte Carlo",
    "def": "Técnica cuantitativa que simula repetidamente el modelo del proyecto para calcular la distribución de probabilidades de costos y fechas posibles.",
    "category": "Riesgo"
  },
  {
    "term": "Diagrama de Tornado",
    "def": "Diagrama de barras especial usado en análisis de sensibilidad que muestra qué riesgos o variables tienen el mayor impacto relativo sobre los resultados.",
    "category": "Riesgo"
  },
  {
    "term": "Costo de la Calidad (COQ)",
    "def": "El costo total en el que se incurre para asegurar la conformidad (prevención y evaluación) más los costos derivados de no conformidades (fallas internas y externas).",
    "category": "Calidad"
  },
  {
    "term": "Seguridad Psicológica",
    "def": "Creencia compartida por los miembros del equipo de que el entorno es seguro para tomar riesgos interpersonales, opinar y admitir errores sin temor a represalias.",
    "category": "Principios"
  },
  {
    "term": "Tailoring (Adaptación)",
    "def": "La adecuación deliberada y reflexiva del enfoque de desarrollo, gobernanza, procesos y herramientas al contexto específico de la organización y del proyecto.",
    "category": "Adaptación"
  }
];

  // Rich Interactive Question Bank for PMBOK 8th Edition
const questions = [
  {
    "id": "q-1-1",
    "unitId": "unit-1",
    "lessonId": "les-1-1",
    "type": "single_choice",
    "title": "¿Cuál es el propósito primordial de El Estándar para la Dirección de Proyectos en su 8va edición?",
    "context": "Un director de proyectos recién incorporado a una empresa de tecnología revisa la nueva versión del PMBOK para entender cómo estructurar sus proyectos.",
    "options": [
      "Establecer una metodología fija y prescriptiva que todo proyecto debe seguir estrictamente.",
      "Proporcionar una base fundamental para comprender la dirección de proyectos y facilitar los resultados previstos y la entrega de valor.",
      "Definir el software obligatorio que debe utilizarse para programar el cronograma y los costos.",
      "Reemplazar completamente las prácticas ágiles por modelos de gobernanza secuenciales."
    ],
    "answerIndex": 1,
    "explanation": "El Estándar para la Dirección de Proyectos (PMBOK 8, Sección 1.1) no es prescriptivo; proporciona una base común y flexible aplicable a cualquier industria y enfoque (predictivo, ágil o híbrido) para facilitar resultados previstos y creación de valor.",
    "sectionRef": "Sección 1.1"
  },
  {
    "id": "q-1-2",
    "unitId": "unit-1",
    "lessonId": "les-1-2",
    "type": "single_choice",
    "title": "Diferenciación entre Salida (Output), Resultado (Outcome) y Beneficio (Benefit)",
    "context": "Tu equipo implementó un nuevo sistema CRM en la nube dentro del presupuesto acordado. Tres meses después, el tiempo de atención al cliente se redujo un 30% y la satisfacción aumentó.",
    "options": [
      "El sistema CRM es el Beneficio, la reducción del tiempo es la Salida y la satisfacción es el Resultado.",
      "El sistema CRM es la Salida (Output), la reducción del tiempo es el Resultado (Outcome) y la satisfacción y ganancias resultantes son los Beneficios (Benefits).",
      "La reducción del tiempo es la Salida (Output) y el sistema CRM es el Resultado (Outcome).",
      "En la 8va edición del PMBOK, Salida, Resultado y Beneficio son sinónimos intercambiables."
    ],
    "answerIndex": 1,
    "explanation": "En el PMBOK 8 (Sección 1.2), la Salida (Output) es el entregable directo producido por el proceso (el sistema CRM); el Resultado (Outcome) es la consecuencia o cambio operativo generado (atención más rápida); y el Beneficio (Benefit) es la ganancia de valor capitalizada por la organización.",
    "sectionRef": "Sección 1.2"
  },
  {
    "id": "q-1-3",
    "unitId": "unit-1",
    "lessonId": "les-1-2",
    "type": "match_pairs",
    "title": "Empareja cada concepto clave con su definición oficial del PMBOK 8",
    "pairs": [
      {
        "left": "Proyecto",
        "right": "Iniciativa temporal en un contexto único para crear valor"
      },
      {
        "left": "Dirección de Proyectos",
        "right": "Aplicación de conocimientos y técnicas para cumplir o superar el valor previsto"
      },
      {
        "left": "Portafolio",
        "right": "Colección de programas, proyectos y operaciones para maximizar valor estratégico"
      },
      {
        "left": "Programa",
        "right": "Grupo de proyectos relacionados coordinados para obtener beneficios sinérgicos"
      }
    ],
    "explanation": "Definiciones clave extraídas de la Sección 1.2 del Estándar para la Dirección de Proyectos (ANSI/PMI 99-001-2025).",
    "sectionRef": "Sección 1.2"
  },
  {
    "id": "q-1-4",
    "unitId": "unit-1",
    "lessonId": "les-1-3",
    "type": "single_choice",
    "title": "Gobernanza del Proyecto vs Gobernanza Organizacional",
    "context": "Durante la ejecución de un proyecto de modernización portuaria, surge una discrepancia sobre si suspender una fase por retrasos ambientales graves. El PM debe escalar la decisión.",
    "options": [
      "El PM debe cancelar el proyecto unilateralmente sin consultar a nadie.",
      "El PM debe utilizar el marco de gobernanza del proyecto para escalar formalmente al Patrocinador o Comité Directivo.",
      "El equipo de desarrollo debe votar democráticamente si continúan o no.",
      "Se debe ignorar la discrepancia y continuar con las siguientes actividades del cronograma."
    ],
    "answerIndex": 1,
    "explanation": "La Gobernanza del Proyecto (Sección 1.3.2) define los umbrales de autoridad y los canales de escalamiento hacia la gobernanza organizacional cuando los eventos superan la tolerancia del proyecto.",
    "sectionRef": "Sección 1.3.2"
  },
  {
    "id": "q-2-1",
    "unitId": "unit-2",
    "lessonId": "les-2-1",
    "type": "single_choice",
    "title": "Evaluación del Éxito del Proyecto en la 8va Edición",
    "context": "Un proyecto finaliza exactamente en el plazo y costo presupuestados, pero la aplicación móvil desarrollada tiene cero descargas porque las necesidades del usuario cambiaron durante el desarrollo.",
    "options": [
      "El proyecto fue 100% exitoso porque cumplió la triple restricción tradicional.",
      "El proyecto no logró el éxito integral porque fracasó en la creación y materialización de valor para la organización y los usuarios.",
      "El éxito del proyecto sólo le compete al equipo de marketing, no al Director del Proyecto.",
      "El director del proyecto debe recibir una bonificación porque no gastó de más."
    ],
    "answerIndex": 1,
    "explanation": "En el PMBOK 8 (Sección 2.1.2), el éxito se evalúa mediante la entrega efectiva de valor, beneficios sostenibles y satisfacción de las partes interesadas, no únicamente por la adherencia mecánica a tiempo y costo.",
    "sectionRef": "Sección 2.1.2"
  },
  {
    "id": "q-2-2",
    "unitId": "unit-2",
    "lessonId": "les-2-2",
    "type": "match_pairs",
    "title": "Clasifica los elementos en EEFs (Factores Ambientales) u OPAs (Activos de Procesos)",
    "pairs": [
      {
        "left": "Leyes laborales y regulaciones gubernamentales",
        "right": "EEF Externo"
      },
      {
        "left": "Cultura y estructura jerárquica corporativa",
        "right": "EEF Interno"
      },
      {
        "left": "Plantillas estándar de Acta de Constitución",
        "right": "OPA (Procesos y Procedimientos)"
      },
      {
        "left": "Repositorio histórico de lecciones aprendidas",
        "right": "OPA (Base de Conocimiento)"
      }
    ],
    "explanation": "Los EEFs son factores del entorno que el equipo no controla directamente. Los OPAs son activos internos que la organización aporta para facilitar el proyecto.",
    "sectionRef": "Sección 2.2.1 - 2.2.4"
  },
  {
    "id": "q-2-3",
    "unitId": "unit-2",
    "lessonId": "les-2-3",
    "type": "single_choice",
    "title": "Estructuras Organizacionales y Autoridad del PM",
    "context": "Trabajas en una organización donde los miembros de tu equipo reportan formalmente a gerentes de departamento funcional, quienes controlan los presupuestos. Tu rol se limita a coordinar reuniones y expedir informes.",
    "options": [
      "Estructura Orientada a Proyectos (Projectized).",
      "Estructura Matricial Fuerte (Strong Matrix).",
      "Estructura Matricial Débil / Funcional (Weak Matrix / Functional).",
      "Estructura Holocrática Autónoma."
    ],
    "answerIndex": 2,
    "explanation": "En una estructura funcional o matricial débil (Sección 2.2.5, Tabla 2-1), el director de proyectos tiene autoridad mínima o nula y actúa principalmente como un coordinador o expedidor de proyectos.",
    "sectionRef": "Sección 2.2.5"
  },
  {
    "id": "q-3-1",
    "unitId": "unit-3",
    "lessonId": "les-3-1",
    "type": "match_pairs",
    "title": "Empareja cada Principio Refinado con su Dimensión de Mentalidad (Mindset)",
    "pairs": [
      {
        "left": "Adoptar una Visión Holística",
        "right": "Dimensión Proactiva"
      },
      {
        "left": "Integrar la Calidad en Procesos y Entregables",
        "right": "Dimensión Proactiva"
      },
      {
        "left": "Ser un Líder Responsable (Accountable Leader)",
        "right": "Dimensión Sentido de Propiedad"
      },
      {
        "left": "Construir una Cultura Empoderada",
        "right": "Dimensión Sentido de Propiedad"
      },
      {
        "left": "Enfocarse en el Valor",
        "right": "Dimensión Orientada a Valor"
      },
      {
        "left": "Integrar la Sostenibilidad en Todas las Áreas",
        "right": "Dimensión Orientada a Valor"
      }
    ],
    "explanation": "La Figura 3-1 del PMBOK 8 clasifica los 6 principios en tres dimensiones de mentalidad: Proactiva, Sentido de Propiedad y Orientada a Valor.",
    "sectionRef": "Sección 3.1, Figura 3-1"
  },
  {
    "id": "q-3-2",
    "unitId": "unit-3",
    "lessonId": "les-3-2",
    "type": "single_choice",
    "title": "Principio en Acción: Adoptar una Visión Holística",
    "context": "Un proveedor clave de servidores notifica que retrasará su entrega 3 semanas. El líder técnico sugiere cambiar de proveedor inmediatamente sin consultar a nadie.",
    "options": [
      "El PM debe aceptar el cambio de proveedor de inmediato para no perder ni un solo día.",
      "El PM debe adoptar una visión holística: evaluar el impacto en costos, garantías, compatibilidad de arquitectura, riesgos y contratos antes de decidir.",
      "El PM debe pedir al equipo que trabaje los fines de semana sin evaluar alternativas.",
      "El PM debe suspender el proyecto indefinidamente."
    ],
    "answerIndex": 1,
    "explanation": "El Principio 1 (Adoptar una Visión Holística - Sección 3.3) exige hacer 'zoom out' y evaluar cómo una decisión técnica altera el sistema completo: contratos, riesgos, costos y gobernanza.",
    "sectionRef": "Sección 3.3"
  },
  {
    "id": "q-3-3",
    "unitId": "unit-3",
    "lessonId": "les-3-6",
    "type": "single_choice",
    "title": "Principio 5: Integrar la Sostenibilidad en Todas las Áreas",
    "context": "¿Por qué la 8va edición del PMBOK incorporó la Sostenibilidad como un principio nuclear e independiente de la profesión?",
    "options": [
      "Porque era un requisito secundario que no requería atención en proyectos comerciales.",
      "Porque los proyectos modernos deben considerar su impacto ambiental, social y económico (ESG) en todo el ciclo de vida del producto.",
      "Para obligar a todas las organizaciones a sembrar árboles al final de cada sprint.",
      "Para reemplazar el análisis de valor financiero por métricas puramente ecológicas."
    ],
    "answerIndex": 1,
    "explanation": "El Principio 5 (Sección 3.7) reconoce que las decisiones tomadas en los proyectos tienen impactos de largo plazo en el medio ambiente, la equidad social y la viabilidad económica duradera (criterios ESG).",
    "sectionRef": "Sección 3.7"
  },
  {
    "id": "q-3-4",
    "unitId": "unit-3",
    "lessonId": "les-3-7",
    "type": "single_choice",
    "title": "Principio 6: Construir una Cultura Empoderada y Seguridad Psicológica",
    "context": "Durante un sprint, un desarrollador comete un error en la configuración de la base de datos que provoca la caída del entorno de pruebas durante 2 horas. ¿Qué actitud refleja la mentalidad del PMBOK 8?",
    "options": [
      "Amonestar públicamente al desarrollador para que el resto del equipo no vuelva a cometer errores.",
      "Prohibir que los desarrolladores toquen configuraciones de servidores en adelante.",
      "Tratar el error en una retrospectiva constructiva para identificar causas raíz, mejorar los procesos de despliegue y reforzar la seguridad psicológica.",
      "Ocultar el incidente a los demás miembros del equipo."
    ],
    "answerIndex": 2,
    "explanation": "El Principio 6 (Construir una Cultura Empoderada - Sección 3.8) fomenta la seguridad psicológica donde los errores se analizan sin culpabilidad como fuentes de aprendizaje y fortalecimiento del proceso.",
    "sectionRef": "Sección 3.8"
  },
  {
    "id": "q-4-1",
    "unitId": "unit-4",
    "lessonId": "les-4-1",
    "type": "single_choice",
    "title": "Selección del Enfoque de Desarrollo",
    "context": "Una farmacéutica desarrolla un medicamento que requiere validaciones clínicas regulatorias secuenciales estrictas, pero el software complementario para el registro de pacientes puede evolucionar con feedback continuo.",
    "options": [
      "El proyecto debe gestionarse 100% de manera adaptativa.",
      "El proyecto debe gestionarse con un enfoque Híbrido, combinando predictibilidad para las fases clínicas con adaptabilidad para el desarrollo de software.",
      "No se puede gestionar este proyecto con las directrices del PMBOK.",
      "Se debe descartar el software hasta que el medicamento esté en el mercado."
    ],
    "answerIndex": 1,
    "explanation": "El PMBOK 8 (Sección 4.2.3) destaca que los enfoques híbridos son idóneos cuando distintos componentes de un mismo proyecto presentan diferentes niveles de incertidumbre y rigidez regulatoria.",
    "sectionRef": "Sección 4.2.3"
  },
  {
    "id": "q-4-2",
    "unitId": "unit-4",
    "lessonId": "les-4-3",
    "type": "sequence_flow",
    "title": "Ordena lógicamente las 5 Áreas de Enfoque (Focus Areas) de la 8va edición",
    "steps": [
      "Área de Enfoque de Iniciación (Initiating)",
      "Área de Enfoque de Planificación (Planning)",
      "Área de Enfoque de Ejecución (Executing)",
      "Área de Enfoque de Monitoreo y Control (Monitoring & Controlling)",
      "Área de Enfoque de Cierre (Closing)"
    ],
    "explanation": "Las 5 Áreas de Enfoque (Sección 4.5) reincorporan de manera flexible los antiguos grupos de procesos a lo largo del ciclo de vida del proyecto.",
    "sectionRef": "Sección 4.5"
  },
  {
    "id": "q-6-1",
    "unitId": "unit-6",
    "lessonId": "les-6-2",
    "type": "single_choice",
    "title": "Proceso de Iniciar el Proyecto o Fase: Project Charter",
    "context": "¿Cuál es la función principal del Acta de Constitución del Proyecto (Project Charter)?",
    "options": [
      "Describir el cronograma detallado con todas las actividades a nivel de horas.",
      "Autorizar formalmente el proyecto y otorgar al Director de Proyecto autoridad para aplicar recursos organizacionales.",
      "Servir como contrato vinculante exclusivo entre los miembros técnicos del equipo.",
      "Reemplazar el Caso de Negocio de la compañía."
    ],
    "answerIndex": 1,
    "explanation": "El proceso Iniciar el Proyecto o Fase (Sección 2.1.6.1) culmina con el Project Charter, documento emitido por el Patrocinador que otorga autoridad formal al PM y enlaza el proyecto con los objetivos estratégicos.",
    "sectionRef": "Sección 2.1.6.1"
  },
  {
    "id": "q-6-2",
    "unitId": "unit-6",
    "lessonId": "les-6-4",
    "type": "sequence_flow",
    "title": "Ordena los pasos del flujo formal para Gestionar un Cambio en el Proyecto",
    "steps": [
      "Recibir formalmente la solicitud de cambio y registrarla en el Registro de Cambios",
      "Analizar el impacto integral del cambio en alcance, tiempo, costo, riesgo y valor",
      "Evaluar alternativas y consensuar recomendaciones con el equipo",
      "Presentar la evaluación al Comité de Control de Cambios (CCB) o Patrocinador para decisión",
      "Actualizar el Plan para la Dirección del Proyecto y comunicar la decisión a las partes interesadas"
    ],
    "explanation": "El flujo de control integrado de cambios (Sección 2.1.6.8, Figura 2-11) asegura que ninguna modificación se apruebe sin entender su impacto sistémico.",
    "sectionRef": "Sección 2.1.6.8, Figura 2-11"
  },
  {
    "id": "q-7-1",
    "unitId": "unit-7",
    "lessonId": "les-7-3",
    "type": "single_choice",
    "title": "Control de Calidad vs Validar el Alcance",
    "context": "El equipo acaba de terminar un módulo de software. El equipo de testing interno prueba que no tenga errores. Posteriormente, el cliente asiste a una demostración y firma el acta de recepción.",
    "options": [
      "El testing interno es Validar el Alcance; la demostración al cliente es Control de Calidad.",
      "El testing interno es Control de Calidad (verifica exactitud técnica); la demostración y aceptación formal por parte del cliente es Validar el Alcance (Validate Scope).",
      "Ambas acciones corresponden al proceso de Definir el Alcance.",
      "En el PMBOK 8 ya no se distingue entre testing y validación."
    ],
    "answerIndex": 1,
    "explanation": "El Control de Calidad (Sección 2.1.6.5/2.2.2.6) se enfoca en la corrección técnica y produce 'entregables verificados'; mientras que Validar el Alcance (Sección 2.2.2.6) se realiza CON EL CLIENTE para obtener la 'aceptación formal'.",
    "sectionRef": "Sección 2.2.2.6"
  },
  {
    "id": "q-7-2",
    "unitId": "unit-7",
    "lessonId": "les-7-2",
    "type": "single_choice",
    "title": "La Regla del 100% en la Estructura de Desglose del Trabajo (EDT/WBS)",
    "context": "¿Qué establece la regla del 100% en el desarrollo de la EDT/WBS?",
    "options": [
      "Que cada tarea debe tardar un 100% más de tiempo de lo estimado como margen de seguridad.",
      "Que la EDT/WBS abarca la totalidad (el 100%) del trabajo definido por el alcance del proyecto y nada más.",
      "Que el 100% del presupuesto debe consumirse antes del cierre de fase.",
      "Que todos los interesados deben estar 100% de acuerdo con cada tarea."
    ],
    "answerIndex": 1,
    "explanation": "La regla del 100% (Sección 2.2.2.4) establece que la suma de los componentes hijos en cualquier nivel de la EDT debe sumar el 100% del componente padre, garantizando que no falte ni sobre trabajo.",
    "sectionRef": "Sección 2.2.2.4"
  },
  {
    "id": "q-8-1",
    "unitId": "unit-8",
    "lessonId": "les-8-1",
    "type": "single_choice",
    "title": "Comprensión de la Ruta Crítica y Holgura",
    "context": "En un diagrama de red de actividades, el camino A-B-E tiene una duración de 18 días, el camino A-C-E dura 22 días y el camino A-D-E dura 15 días. ¿Cuál es la ruta crítica y cuál es la holgura del camino A-B-E?",
    "options": [
      "La ruta crítica es A-B-E con 18 días; su holgura es cero.",
      "La ruta crítica es A-C-E (22 días); la holgura del camino A-B-E es de 4 días (22 - 18 = 4).",
      "La ruta crítica es A-D-E (15 días); su holgura es de 7 días.",
      "Todos los caminos tienen la misma holgura."
    ],
    "answerIndex": 1,
    "explanation": "La ruta crítica es la secuencia más larga (A-C-E = 22 días) y determina la duración mínima del proyecto. La holgura de A-B-E es la diferencia con la ruta crítica: 22 - 18 = 4 días.",
    "sectionRef": "Sección 2.3.1, Figura 5-4"
  },
  {
    "id": "q-8-2",
    "unitId": "unit-8",
    "lessonId": "les-8-3",
    "type": "single_choice",
    "title": "Técnicas de Compresión: Crashing vs Fast Tracking",
    "context": "Tu proyecto está 1 semana atrasado. El patrocinador te exige recuperar el tiempo sin aumentar los costos bajo ninguna circunstancia. ¿Qué técnica debes analizar?",
    "options": [
      "Intensificación (Crashing), contratando 3 consultores externos inmediatamente.",
      "Ejecución Rápida (Fast Tracking), solapando actividades que estaban programadas de forma secuencial.",
      "Eliminar todas las pruebas de calidad.",
      "Declarar el proyecto terminado antes de tiempo."
    ],
    "answerIndex": 1,
    "explanation": "La Intensificación (Crashing) agrega recursos y casi siempre INCREMENTA COSTOS. Si no hay presupuesto extra permitido, la opción a evaluar es Fast Tracking (hacer actividades en paralelo), asumiendo el riesgo de posible retrabajo (Sección 2.3.3).",
    "sectionRef": "Sección 2.3.3, Figura 5-20"
  },
  {
    "id": "q-9-1",
    "unitId": "unit-9",
    "lessonId": "les-9-3",
    "type": "calculation",
    "title": "Cálculo de EVM: Estado del Proyecto",
    "context": "A la fecha de corte, tu proyecto tiene un Presupuesto a la Conclusión BAC = $100,000. De acuerdo al cronograma, debías haber completado un PV = $50,000. Sin embargo, el trabajo realmente completado tiene un valor ganado EV = $40,000 y el costo real incurrido es AC = $45,000. ¿Cuál es el CPI y SPI, y qué significan?",
    "options": [
      "CPI = 1.12 (Ahorro) y SPI = 1.25 (Adelantado).",
      "CPI = 0.89 (Sobrecosto) y SPI = 0.80 (Retrasado). El proyecto gasta más de lo previsto y avanza más lento de lo planificado.",
      "CPI = 0.80 (Adelantado) y SPI = 0.89 (Ahorro).",
      "El proyecto está exactamente en la línea base."
    ],
    "answerIndex": 1,
    "explanation": "CPI = EV / AC = 40,000 / 45,000 = 0.888 (~0.89). Como es menor a 1.0, hay sobrecosto. SPI = EV / PV = 40,000 / 50,000 = 0.80. Como es menor a 1.0, el proyecto está retrasado (Tabla 5-1).",
    "sectionRef": "Sección 2.4.2.4, Tabla 5-1"
  },
  {
    "id": "q-9-2",
    "unitId": "unit-9",
    "lessonId": "les-9-1",
    "type": "single_choice",
    "title": "Reserva de Contingencia vs Reserva de Gestión",
    "context": "¿Quién tiene la autoridad para aprobar el uso de la Reserva de Gestión (Management Reserve)?",
    "options": [
      "El Director de Proyecto de forma unilateral sin avisar a nadie.",
      "El Patrocinador (Sponsor) o la Alta Dirección ejecutiva, tras evaluar el imprevisto imprevisto.",
      "Cualquier miembro del equipo de desarrollo cuando se quede sin dinero.",
      "El auditor financiero externo."
    ],
    "answerIndex": 1,
    "explanation": "La Reserva de Gestión está destinada a 'desconocidos-desconocidos' (imprevistos fuera del alcance planificado) y no forma parte de la Línea Base de Costos; requiere autorización ejecutiva del Patrocinador para su uso (Sección 2.4.1).",
    "sectionRef": "Sección 2.4.1"
  },
  {
    "id": "q-10-1",
    "unitId": "unit-10",
    "lessonId": "les-10-1",
    "type": "calculation",
    "title": "Cálculo de Canales de Comunicación",
    "context": "Tu equipo inicial de proyecto tenía 6 personas. Debido a un incremento de trabajo, se incorporan 4 nuevos integrantes, elevando el equipo a 10 personas. ¿En cuántos canales aumentaron las vías potenciales de comunicación?",
    "options": [
      "Aumentaron en 4 canales.",
      "Los canales originales eran 15 [6*(5)/2] y ahora son 45 [10*(9)/2]; por tanto, aumentaron en 30 canales.",
      "Aumentaron en 60 canales.",
      "El número de canales se mantuvo igual."
    ],
    "answerIndex": 1,
    "explanation": "Fórmula: N * (N - 1) / 2. Inicial: 6 * 5 / 2 = 15 canales. Nuevo: 10 * 9 / 2 = 45 canales. Incremento = 45 - 15 = 30 nuevos canales potenciales de comunicación.",
    "sectionRef": "Sección 2.5.1"
  },
  {
    "id": "q-11-1",
    "unitId": "unit-11",
    "lessonId": "les-11-3",
    "type": "single_choice",
    "title": "Resolución de Conflictos en el Equipo",
    "context": "Dos arquitectos senior de software tienen una acalorada discusión técnica sobre qué framework de base de datos utilizar. El desacuerdo está retrasando al equipo. Según PMI, ¿cuál es el mejor método de resolución?",
    "options": [
      "Forzar la decisión imponiendo la opinión del arquitecto con más antigüedad en la empresa.",
      "Evitar el problema esperando que lo resuelvan solos con el paso de las semanas.",
      "Colaborar / Resolver el Problema: reunir a ambos, analizar pros y contras objetivos basados en los requisitos y llegar a una solución de consenso ganar-ganar.",
      "Despedir a uno de los dos arquitectos para restaurar la paz."
    ],
    "answerIndex": 2,
    "explanation": "El método 'Colaborar / Resolver el problema' (Confronting / Problem Solving) es la técnica de resolución de conflictos más efectiva en la gestión de proyectos según el PMBOK (Sección 2.6.2.4), porque aborda la causa raíz y genera compromiso mutuo.",
    "sectionRef": "Sección 2.6.2.4"
  },
  {
    "id": "q-12-1",
    "unitId": "unit-12",
    "lessonId": "les-12-4",
    "type": "match_pairs",
    "title": "Empareja cada situación con la estrategia de respuesta al riesgo adecuada",
    "pairs": [
      {
        "left": "Contratar una póliza de seguros contra daños climáticos",
        "right": "Transferir (Amenaza)"
      },
      {
        "left": "Eliminar del alcance un módulo tecnológico inmaduro",
        "right": "Evitar (Amenaza)"
      },
      {
        "left": "Asignar a los mejores ingenieros para asegurar una patente innovadora",
        "right": "Explotar (Oportunidad)"
      },
      {
        "left": "Crear una sociedad temporal (joint venture) con un socio experto",
        "right": "Compartir (Oportunidad)"
      }
    ],
    "explanation": "Las estrategias para amenazas incluyen Evitar, Transferir, Mitigar, Aceptar y Escalar. Para oportunidades: Explotar, Compartir, Mejorar, Aceptar y Escalar (Sección 2.7.2.4).",
    "sectionRef": "Sección 2.7.2.4"
  },
  {
    "id": "q-13-1",
    "unitId": "unit-13",
    "lessonId": "les-13-2",
    "type": "sequence_flow",
    "title": "Ordena los 4 Pasos del Proceso de Adaptación (Tailoring Process) del PMBOK 8",
    "steps": [
      "Paso 1: Seleccionar el Enfoque Inicial de Desarrollo (Select Initial Approach)",
      "Paso 2: Adaptar para la Organización (Tailor for the Organization)",
      "Paso 3: Adaptar para el Proyecto (Tailor for the Project)",
      "Paso 4: Implementar Mejora Continua (Implement Ongoing Improvement)"
    ],
    "explanation": "La Sección 3.4 del PMBOK 8 establece formalmente estos 4 pasos secuenciales para adaptar los procesos y dominios al contexto real.",
    "sectionRef": "Sección 3.4, Figura 3-3"
  },
  {
    "id": "q-16-1",
    "unitId": "unit-16",
    "lessonId": "les-16-1",
    "type": "single_choice",
    "title": "Uso de Inteligencia Artificial en la Gestión de Proyectos (Apéndice X3)",
    "context": "Tu organización implementa un modelo de IA generativa para predecir sobrecostos y generar borradores de contratos. ¿Cuál es el principio ético de rendición de cuentas según el PMBOK 8?",
    "options": [
      "La IA es la única responsable legal si los contratos contienen cláusulas ilegales.",
      "El ser humano (el Director del Proyecto y la organización) siempre debe permanecer responsable de cada decisión final adoptada.",
      "No se necesita revisión humana una vez que el algoritmo alcanza 90% de precisión.",
      "La IA reemplazará al Director de Proyecto en todas las funciones de liderazgo."
    ],
    "answerIndex": 1,
    "explanation": "El Apéndice X3 (Sección X3.3) subraya que, sin importar el nivel de sofisticación del modelo de IA, la responsabilidad ética y fiduciaria (Accountability) recae siempre de manera indelegable en los seres humanos.",
    "sectionRef": "Apéndice X3, Sección X3.3"
  },
  {
    "id": "q-17-1",
    "unitId": "unit-17",
    "lessonId": "les-17-2",
    "type": "single_choice",
    "title": "Tipos de Contrato y Distribución del Riesgo Financiero (Apéndice X4)",
    "context": "Un comprador y un vendedor firman un contrato de Precio Fijo Firme (Firm Fixed Price - FFP) para construir una subestación eléctrica. La inflación aumenta los costos de los materiales en un 25%. ¿Quién asume este sobrecosto?",
    "options": [
      "El Comprador (Buyer) debe pagar el 25% adicional.",
      "El Vendedor (Seller) asume el sobrecosto porque en contratos FFP el vendedor asume el riesgo financiero derivado de fluctuaciones de costo.",
      "Se cancela el contrato automáticamente sin compensación.",
      "El gobierno debe subsidiar la diferencia."
    ],
    "answerIndex": 1,
    "explanation": "En un contrato a Precio Fijo Firme (FFP), el vendedor asume el máximo riesgo financiero; el precio final acordado no cambia por incrementos imprevistos en costos de materiales (Apéndice X4, Sección X4.8.1).",
    "sectionRef": "Apéndice X4, Sección X4.8.1"
  }
];

  // Complete 18 Presentation Decks for PMBOK 8 Units (180 Total Slides)
const presentationDecks = [
  {
    "id": "deck-unit-1",
    "unitId": "unit-1",
    "title": "Unidad 01: Introducción y Elementos Fundacionales",
    "sectionRef": "Sección 1 (1.1 - 1.3)",
    "category": "Parte 1 • Estándar",
    "summary": "Propósito de la Guía, audiencia, conceptos de proyecto, programa, portafolio y ética profesional.",
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • El Estándar",
        "title": "Introducción y Elementos Fundacionales",
        "subtitle": "Estructura general de la 8va edición, definiciones oficiales y el rol del proyecto en la sociedad.",
        "speakerNotes": "El PMBOK 8 reafirma que los proyectos son el medio principal mediante el cual las organizaciones introducen cambios e innovaciones."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Definición Esencial",
        "title": "¿Qué es un Proyecto según el PMBOK 8?",
        "leftTitle": "Características Inmutables",
        "leftItems": [
          "Esfuerzo temporal: Tiene un inicio y un final definidos.",
          "Crea un producto, servicio o resultado único y diferenciado.",
          "Impulsa el cambio desde un estado actual a un estado futuro deseado."
        ],
        "rightTitle": "Proyectos vs Operaciones",
        "rightItems": [
          "Proyectos: Trabajo no repetitivo, temporal y transformador.",
          "Operaciones: Trabajo continuo, repetitivo y enfocado en sostener el negocio.",
          "Interacción: Los proyectos transfieren sus resultados a las operaciones comerciales."
        ],
        "speakerNotes": "La frontera entre proyecto y operaciones es crítica para determinar los criterios de éxito y la transición."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Estructura Estratégica",
        "title": "La Jerarquía: Estrategia, Portafolios, Programas y Proyectos",
        "steps": [
          {
            "step": "01",
            "name": "Visión Estratégica",
            "desc": "Metas corporativas y directrices de alto nivel."
          },
          {
            "step": "02",
            "name": "Portafolios",
            "desc": "Colección de programas y proyectos agrupados para cumplir metas estratégicas."
          },
          {
            "step": "03",
            "name": "Programas",
            "desc": "Grupo de proyectos interconectados gestionados de forma coordinada."
          },
          {
            "step": "04",
            "name": "Proyectos",
            "desc": "Entregables tangibles que generan capacidades nuevas."
          },
          {
            "step": "05",
            "name": "Valor Realizado",
            "desc": "Retorno financiero, beneficio social y ventaja competitiva."
          }
        ],
        "speakerNotes": "Un portafolio prioriza las inversiones; un programa gestiona interdependencias; un proyecto gestiona el alcance."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Factores Organizacionales",
        "title": "Factores Ambientales (EEFs) vs Activos de Procesos (OPAs)",
        "cards": [
          {
            "title": "EEFs Internos",
            "desc": "Infraestructura, cultura, jerarquía y disponibilidad de talento calificado."
          },
          {
            "title": "EEFs Externos",
            "desc": "Legislación, tasas de interés, condiciones climatológicas y tendencias de mercado."
          },
          {
            "title": "OPAs (Procesos)",
            "desc": "Políticas de compra, metodologías de trabajo, plantillas y estándares de calidad."
          },
          {
            "title": "OPAs (Repositorio)",
            "desc": "Base de datos de estimaciones históricas, lecciones aprendidas y archivos de contratos."
          }
        ],
        "speakerNotes": "Los EEFs restringen o influyen en las opciones del PM; los OPAs proveen guías para planificar."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Tipología Organizacional",
        "title": "Comparativa de Estructuras Organizacionales",
        "headers": [
          "Estructura",
          "Autoridad del PM",
          "Presupuesto",
          "Rol del PM"
        ],
        "rows": [
          [
            "Funcional",
            "Poca o ninguna",
            "Gerente Funcional",
            "Tiempo parcial"
          ],
          [
            "Matricial Débil",
            "Limitada",
            "Gerente Funcional",
            "Coordinador / Expedidor"
          ],
          [
            "Matricial Equilibrada",
            "Compartida",
            "Compartido",
            "Tiempo completo dedicado"
          ],
          [
            "Matricial Fuerte",
            "Alta / Primaria",
            "Director de Proyecto",
            "Líder a tiempo completo"
          ],
          [
            "Orientada a Proyectos",
            "Total / Plena",
            "Director de Proyecto",
            "Autoridad absoluta"
          ]
        ],
        "speakerNotes": "En preguntas del examen que no indiquen estructura, siempre considera la Matricial Equilibrada."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Gobernanza Seminal",
        "title": "Componentes del Caso de Negocio (Business Case)",
        "inputsTitle": "Fundamentos",
        "inputs": [
          "Necesidad de Negocio",
          "Análisis de Brechas",
          "Estudio de Factibilidad",
          "Alineación Estratégica"
        ],
        "toolsTitle": "Evaluación",
        "tools": [
          "Análisis Costo-Beneficio",
          "Cálculo de NPV e IRR",
          "Período de Retorno (Payback)",
          "Evaluación de Riesgo Inicial"
        ],
        "outputsTitle": "Decisión",
        "outputs": [
          "Caso de Negocio Aprobado",
          "Plan de Gestión de Beneficios",
          "Recomendación de Inversión"
        ],
        "speakerNotes": "El Business Case justifica la inversión antes de emitir el Project Charter."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Código de Ética",
        "title": "Los 4 Valores del Código de Ética y Conducta Profesional PMI",
        "leftTitle": "Valores Obligatorios e Ideales",
        "leftItems": [
          "1. Responsabilidad: Asumir la propiedad de las decisiones tomadas o no tomadas.",
          "2. Respeto: Mostrar estima por uno mismo, por los demás y por los recursos asignados."
        ],
        "rightTitle": "Imparcialidad y Honestidad",
        "rightItems": [
          "3. Imparcialidad: Tomar decisiones libres de intereses personales o prejuicios.",
          "4. Honestidad: Comprender la verdad y actuar de manera veraz en la comunicación."
        ],
        "speakerNotes": "El código de ética es vinculante para todos los aspirantes y certificados PMP."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Métricas de Inicio",
        "title": "Criterios Financieros de Viabilidad",
        "metrics": [
          {
            "name": "Valor Presente Neto (NPV)",
            "val": "> 0",
            "status": "Obligatorio",
            "desc": "Valor actual del flujo futuro descontado menos la inversión inicial."
          },
          {
            "name": "Tasa Interna (IRR)",
            "val": "> Costo Capital",
            "status": "Favorable",
            "desc": "Rendimiento porcentual generado por el capital invertido."
          },
          {
            "name": "Payback Period",
            "val": "< 2 años",
            "status": "Deseable",
            "desc": "Meses requeridos para recuperar el dinero invertido."
          },
          {
            "name": "Relación B/C",
            "val": "> 1.5",
            "status": "Excelente",
            "desc": "Beneficio total dividido entre el costo total del proyecto."
          }
        ],
        "speakerNotes": "Entre proyectos mutuamente excluyentes, el de mayor NPV es siempre la mejor opción."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Conflicto de Interés No Declarado",
        "trapScenario": "Un familiar cercano del Director de Proyecto presenta una propuesta para una licitación del proyecto a un precio muy competitivo.",
        "wrongAction": "Acción incorrecta: El PM evalúa la propuesta en secreto y la aprueba argumentando que es la más económica para la empresa.",
        "correctAction": "Acción correcta PMI: El PM debe divulgar inmediatamente el conflicto de interés al patrocinador o al comité de ética y abstenerse totalmente del proceso de selección.",
        "citation": "Código de Ética y Conducta Profesional del PMI • Valor de Imparcialidad y Transparencia."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Fundamentos",
        "items": [
          "Distingo con precisión entre proyectos, programas y portafolios.",
          "Sé diferenciar entre EEFs (internos/externos) y OPAs (procesos/conocimiento).",
          "Conozco las 5 estructuras organizacionales y el nivel de autoridad del PM.",
          "Domino los criterios financieros de selección (NPV, IRR, Payback, B/C).",
          "Aplico los 4 valores del Código de Ética ante cualquier dilema situacional."
        ],
        "speakerNotes": "¡Excelente! Has dominado los Fundamentos de la Unidad 01."
      }
    ]
  },
  {
    "id": "deck-unit-2",
    "unitId": "unit-2",
    "title": "Unidad 02: Un Sistema para la Entrega de Valor",
    "sectionRef": "Sección 2 (2.1 - 2.5)",
    "category": "Parte 1 • Estándar",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Estándar",
        "title": "Un Sistema para la Entrega de Valor",
        "subtitle": "Flujo de valor continuo, gobernanza organizativa, entornos del proyecto y gestión de beneficios.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 02: Un Sistema para la Entrega de Valor según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Un Sistema para la Entrega de Valor",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Sección 2 (2.1 - 2.5) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Un Sistema para la Entrega de Valor",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Un Sistema para la Entrega de Valor durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Un Sistema para la Entrega de Valor",
        "items": [
          "Comprendo la importancia de Un Sistema para la Entrega de Valor en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 02: Un Sistema para la Entrega de Valor."
      }
    ]
  },
  {
    "id": "deck-unit-3",
    "unitId": "unit-3",
    "title": "Unidad 03: Los 6 Principios de Dirección de Proyectos",
    "sectionRef": "Sección 3 (3.1 - 3.8)",
    "category": "Parte 1 • Estándar",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Estándar",
        "title": "Los 6 Principios de Dirección de Proyectos",
        "subtitle": "Visión Holística, Enfoque en Valor, Calidad, Liderazgo Responsable, Sostenibilidad y Cultura Empoderada.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 03: Los 6 Principios de Dirección de Proyectos según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Los 6 Principios de Dirección de Proyectos",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Sección 3 (3.1 - 3.8) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Los 6 Principios de Dirección de Proyectos",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Los 6 Principios de Dirección de Proyectos durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Los 6 Principios de Dirección de Proyectos",
        "items": [
          "Comprendo la importancia de Los 6 Principios de Dirección de Proyectos en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 03: Los 6 Principios de Dirección de Proyectos."
      }
    ]
  },
  {
    "id": "deck-unit-4",
    "unitId": "unit-4",
    "title": "Unidad 04: Ciclos de Vida del Proyecto y Áreas de Enfoque",
    "sectionRef": "Sección 4 (4.1 - 4.5)",
    "category": "Parte 1 • Estándar",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Estándar",
        "title": "Ciclos de Vida del Proyecto y Áreas de Enfoque",
        "subtitle": "Las 5 Áreas de Enfoque (Iniciación a Cierre), cadencias de entrega y modelos de ciclo de vida adaptativos.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 04: Ciclos de Vida del Proyecto y Áreas de Enfoque según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Ciclos de Vida del Proyecto y Áreas de Enfoque",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Sección 4 (4.1 - 4.5) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Ciclos de Vida del Proyecto y Áreas de Enfoque",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Ciclos de Vida del Proyecto y Áreas de Enfoque durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Ciclos de Vida del Proyecto y Áreas de Enfoque",
        "items": [
          "Comprendo la importancia de Ciclos de Vida del Proyecto y Áreas de Enfoque en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 04: Ciclos de Vida del Proyecto y Áreas de Enfoque."
      }
    ]
  },
  {
    "id": "deck-unit-5",
    "unitId": "unit-5",
    "title": "Unidad 05: Introducción y Visión General de los 7 Dominios",
    "sectionRef": "Capítulo 1 y 2 (2.0)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Introducción y Visión General de los 7 Dominios",
        "subtitle": "Estructura no prescriptiva de los 7 Dominios de Desempeño y su interacción matricial con las 5 áreas.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 05: Introducción y Visión General de los 7 Dominios según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Introducción y Visión General de los 7 Dominios",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 1 y 2 (2.0) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Introducción y Visión General de los 7 Dominios",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Introducción y Visión General de los 7 Dominios durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Introducción y Visión General de los 7 Dominios",
        "items": [
          "Comprendo la importancia de Introducción y Visión General de los 7 Dominios en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 05: Introducción y Visión General de los 7 Dominios."
      }
    ]
  },
  {
    "id": "deck-unit-6",
    "unitId": "unit-6",
    "title": "Unidad 06: Dominio de Gobernanza (9 Procesos)",
    "sectionRef": "Capítulo 2 (2.1)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Gobernanza (9 Procesos)",
        "subtitle": "Charter, integración de planes, ejecución, monitoreo, control de cambios, cierre, conocimiento y calidad.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 06: Dominio de Gobernanza (9 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Gobernanza (9 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.1) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Gobernanza (9 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Gobernanza (9 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Gobernanza (9 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Gobernanza (9 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 06: Dominio de Gobernanza (9 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-7",
    "unitId": "unit-7",
    "title": "Unidad 07: Dominio de Alcance (6 Procesos)",
    "sectionRef": "Capítulo 2 (2.2)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Alcance (6 Procesos)",
        "subtitle": "Requisitos, definición del alcance, EDT/WBS jerárquica, validación formal y prevención del Scope Creep.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 07: Dominio de Alcance (6 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Alcance (6 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.2) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Alcance (6 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Alcance (6 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Alcance (6 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Alcance (6 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 07: Dominio de Alcance (6 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-8",
    "unitId": "unit-8",
    "title": "Unidad 08: Dominio de Cronograma (3 Procesos)",
    "sectionRef": "Capítulo 2 (2.3)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Cronograma (3 Procesos)",
        "subtitle": "Método de la Ruta Crítica (CPM), holguras, compresión (Crashing / Fast Tracking) y cadencia de sprints.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 08: Dominio de Cronograma (3 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Cronograma (3 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.3) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Cronograma (3 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Cronograma (3 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Cronograma (3 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Cronograma (3 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 08: Dominio de Cronograma (3 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-9",
    "unitId": "unit-9",
    "title": "Unidad 09: Dominio de Finanzas (4 Procesos)",
    "sectionRef": "Capítulo 2 (2.4)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Finanzas (4 Procesos)",
        "subtitle": "Línea Base de Costos (Curva S), Reservas de Contingencia y Gestión del Valor Ganado (EVM Tabla 5-1).",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 09: Dominio de Finanzas (4 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Finanzas (4 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.4) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Finanzas (4 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Finanzas (4 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Finanzas (4 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Finanzas (4 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 09: Dominio de Finanzas (4 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-10",
    "unitId": "unit-10",
    "title": "Unidad 10: Dominio de Interesados (7 Procesos)",
    "sectionRef": "Capítulo 2 (2.5)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Interesados (7 Procesos)",
        "subtitle": "Matriz Poder vs Interés, canales N*(N-1)/2, gestión de expectativas y radiadores de información.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 10: Dominio de Interesados (7 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Interesados (7 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.5) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Interesados (7 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Interesados (7 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Interesados (7 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Interesados (7 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 10: Dominio de Interesados (7 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-11",
    "unitId": "unit-11",
    "title": "Unidad 11: Dominio de Recursos (5 Procesos)",
    "sectionRef": "Capítulo 2 (2.6)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Recursos (5 Procesos)",
        "subtitle": "Liderazgo Servidor, curva de desarrollo de Tuckman, Matriz RACI y resolución de controversias.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 11: Dominio de Recursos (5 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Recursos (5 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.6) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Recursos (5 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Recursos (5 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Recursos (5 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Recursos (5 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 11: Dominio de Recursos (5 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-12",
    "unitId": "unit-12",
    "title": "Unidad 12: Dominio de Riesgo (6 Procesos)",
    "sectionRef": "Capítulo 2 (2.7)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Dominio de Riesgo (6 Procesos)",
        "subtitle": "Análisis cualitativo y cuantitativo (Monte Carlo), estrategias de respuesta y gestión de disparadores.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 12: Dominio de Riesgo (6 Procesos) según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Dominio de Riesgo (6 Procesos)",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 2 (2.7) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Dominio de Riesgo (6 Procesos)",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Dominio de Riesgo (6 Procesos) durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Dominio de Riesgo (6 Procesos)",
        "items": [
          "Comprendo la importancia de Dominio de Riesgo (6 Procesos) en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 12: Dominio de Riesgo (6 Procesos)."
      }
    ]
  },
  {
    "id": "deck-unit-13",
    "unitId": "unit-13",
    "title": "Unidad 13: Adaptación (Tailoring) en el PMBOK 8",
    "sectionRef": "Capítulo 3 (3.1 - 3.7)",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Adaptación (Tailoring) en el PMBOK 8",
        "subtitle": "Marco metodológico de 4 pasos para adaptar métodos, gobernanza y artefactos a cada proyecto.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 13: Adaptación (Tailoring) en el PMBOK 8 según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Adaptación (Tailoring) en el PMBOK 8",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulo 3 (3.1 - 3.7) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Adaptación (Tailoring) en el PMBOK 8",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Adaptación (Tailoring) en el PMBOK 8 durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Adaptación (Tailoring) en el PMBOK 8",
        "items": [
          "Comprendo la importancia de Adaptación (Tailoring) en el PMBOK 8 en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 13: Adaptación (Tailoring) en el PMBOK 8."
      }
    ]
  },
  {
    "id": "deck-unit-14",
    "unitId": "unit-14",
    "title": "Unidad 14: Catálogo de ITTOs y Artefactos",
    "sectionRef": "Capítulos 4 y 5",
    "category": "Parte 2 • Guía del PMBOK",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Guía del PMBOK",
        "title": "Catálogo de ITTOs y Artefactos",
        "subtitle": "Compendio oficial de entradas, salidas, modelos analíticos, planes y radiadores visuales.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 14: Catálogo de ITTOs y Artefactos según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Catálogo de ITTOs y Artefactos",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Capítulos 4 y 5 del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Catálogo de ITTOs y Artefactos",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Catálogo de ITTOs y Artefactos durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Catálogo de ITTOs y Artefactos",
        "items": [
          "Comprendo la importancia de Catálogo de ITTOs y Artefactos en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 14: Catálogo de ITTOs y Artefactos."
      }
    ]
  },
  {
    "id": "deck-unit-15",
    "unitId": "unit-15",
    "title": "Unidad 15: Apéndice X2 - La PMO Moderna",
    "sectionRef": "Apéndice X2 (X2.1 - X2.6)",
    "category": "Parte 3 • Apéndices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Apéndices",
        "title": "Apéndice X2 - La PMO Moderna",
        "subtitle": "Oficinas de Habilitación de Valor (VMO), modelos de soporte ágil y métricas de éxito estratégico.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 15: Apéndice X2 - La PMO Moderna según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Apéndice X2 - La PMO Moderna",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Apéndice X2 (X2.1 - X2.6) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Apéndice X2 - La PMO Moderna",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Apéndice X2 - La PMO Moderna durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Apéndice X2 - La PMO Moderna",
        "items": [
          "Comprendo la importancia de Apéndice X2 - La PMO Moderna en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 15: Apéndice X2 - La PMO Moderna."
      }
    ]
  },
  {
    "id": "deck-unit-16",
    "unitId": "unit-16",
    "title": "Unidad 16: Apéndice X3 - IA en Proyectos",
    "sectionRef": "Apéndice X3 (X3.1 - X3.4)",
    "category": "Parte 3 • Apéndices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Apéndices",
        "title": "Apéndice X3 - IA en Proyectos",
        "subtitle": "Automatización, Aumento, Autonomía, Gobernanza Ética, Sesgos y Responsabilidad Humana.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 16: Apéndice X3 - IA en Proyectos según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Apéndice X3 - IA en Proyectos",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Apéndice X3 (X3.1 - X3.4) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Apéndice X3 - IA en Proyectos",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Apéndice X3 - IA en Proyectos durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Apéndice X3 - IA en Proyectos",
        "items": [
          "Comprendo la importancia de Apéndice X3 - IA en Proyectos en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 16: Apéndice X3 - IA en Proyectos."
      }
    ]
  },
  {
    "id": "deck-unit-17",
    "unitId": "unit-17",
    "title": "Unidad 17: Apéndice X4 - Adquisiciones",
    "sectionRef": "Apéndice X4 (X4.1 - X4.9)",
    "category": "Parte 3 • Apéndices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Apéndices",
        "title": "Apéndice X4 - Adquisiciones",
        "subtitle": "Análisis Make-or-Buy, contratos FFP, Cost-Reimbursable, T&M y administración de reclamos.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 17: Apéndice X4 - Adquisiciones según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Apéndice X4 - Adquisiciones",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Apéndice X4 (X4.1 - X4.9) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Apéndice X4 - Adquisiciones",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Apéndice X4 - Adquisiciones durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Apéndice X4 - Adquisiciones",
        "items": [
          "Comprendo la importancia de Apéndice X4 - Adquisiciones en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 17: Apéndice X4 - Adquisiciones."
      }
    ]
  },
  {
    "id": "deck-unit-18",
    "unitId": "unit-18",
    "title": "Unidad 18: Apéndice X5 - Evolución Histórica",
    "sectionRef": "Apéndice X5 (X5.1 - X5.4)",
    "category": "Parte 3 • Apéndices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8va Edición • Apéndices",
        "title": "Apéndice X5 - Evolución Histórica",
        "subtitle": "Investigación empírica global, evolución desde PMBOK 1ra hasta la 8va edición y tendencias futuras.",
        "speakerNotes": "Presentación ejecutiva sobre Unidad 18: Apéndice X5 - Evolución Histórica según el estándar ANSI/PMI 99-001-2025."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Fundamento Teórico",
        "title": "Bases Conceptuales de Apéndice X5 - Evolución Histórica",
        "leftTitle": "Alcance y Propósito",
        "leftItems": [
          "Definición oficial según Apéndice X5 (X5.1 - X5.4) del PMBOK 8.",
          "Alineación directa con el Sistema de Entrega de Valor.",
          "Responsabilidades y límites de actuación del PM."
        ],
        "rightTitle": "Impacto en el Desempeño",
        "rightItems": [
          "Directrices de conducta y colaboración del equipo.",
          "Interacción con los demás dominios de desempeño.",
          "Entrega temprana y continua de valor al cliente."
        ],
        "speakerNotes": "Todo proceso o principio en el PMBOK 8 se evalúa por su contribución neta al valor del negocio."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Flujo Operativo",
        "title": "Secuencia de Trabajo y Flujo de Información",
        "steps": [
          {
            "step": "01",
            "name": "Concepción",
            "desc": "Evaluación de necesidades y definición de objetivos clave."
          },
          {
            "step": "02",
            "name": "Planificación",
            "desc": "Selección de herramientas y estructuración de acuerdos."
          },
          {
            "step": "03",
            "name": "Ejecución",
            "desc": "Coordinación técnica y generación de entregables de valor."
          },
          {
            "step": "04",
            "name": "Monitoreo",
            "desc": "Medición de variaciones frente a las expectativas iniciales."
          },
          {
            "step": "05",
            "name": "Cierre",
            "desc": "Aceptación formal, archivo de lecciones y transición operativa."
          }
        ],
        "speakerNotes": "En proyectos adaptativos este flujo se recorre en ciclos cortos e iterativos."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Componentes Estructurales",
        "title": "Herramientas y Prácticas Clave en Apéndice X5 - Evolución Histórica",
        "cards": [
          {
            "title": "Entradas Obligatorias",
            "desc": "Información base, acuerdos, EEFs y activos de procesos organizacionales (OPAs)."
          },
          {
            "title": "Técnicas Analíticas",
            "desc": "Juicio de expertos, modelos probabilísticos y facilitación participativa."
          },
          {
            "title": "Salidas Formales",
            "desc": "Entregables verificados, informes de desempeño y solicitudes de cambio."
          },
          {
            "title": "Criterios de Calidad",
            "desc": "Estándares rigurosos de aceptación acordados con el cliente."
          }
        ],
        "speakerNotes": "Identificar las técnicas correctas es fundamental para las preguntas situacionales del PMP."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Comparativa Metodológica",
        "title": "Adaptación: Predictivo vs Adaptativo vs Híbrido",
        "headers": [
          "Dimensión",
          "Ciclo Predictivo",
          "Ciclo Adaptativo (Agile)"
        ],
        "rows": [
          [
            "Requisitos",
            "Definidos al inicio en línea base",
            "Emergentes y priorizados por valor"
          ],
          [
            "Planificación",
            "Detallada por adelantado (WBS/EDT)",
            "Planificación por olas (Rolling Wave)"
          ],
          [
            "Gestión de Cambios",
            "Proceso formal ante comité CCB",
            "Aceptación ágil en el Product Backlog"
          ],
          [
            "Entregas",
            "Entregable mayor al final del ciclo",
            "Incrementos funcionales cada sprint"
          ]
        ],
        "speakerNotes": "La elección del ciclo depende de la claridad de los requisitos y la volatilidad del entorno."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "ITTOs Clave",
        "title": "Arquitectura de Entradas, Herramientas y Salidas",
        "inputsTitle": "Entradas (Inputs)",
        "inputs": [
          "Plan para la Dirección del Proyecto",
          "Documentos del Negocio",
          "Acuerdos Comerciales",
          "OPAs y EEFs"
        ],
        "toolsTitle": "Herramientas (Tools)",
        "tools": [
          "Juicio de Expertos",
          "Reuniones de Facilitación",
          "Sistemas de Gestión (PMIS)",
          "Análisis de Datos"
        ],
        "outputsTitle": "Salidas (Outputs)",
        "outputs": [
          "Entregables Validados",
          "Informes de Desempeño",
          "Solicitudes de Cambio",
          "Actualizaciones de Planes"
        ],
        "speakerNotes": "Los ITTOs conectan los 40 procesos del PMBOK 8 en una red integral de información."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Tailoring Práctico",
        "title": "Criterios de Adaptación (Tailoring)",
        "leftTitle": "Preguntas de Diagnóstico",
        "leftItems": [
          "¿Cuál es el nivel de incertidumbre tecnológica del proyecto?",
          "¿Qué requerimientos contractuales o legales deben auditarse?",
          "¿Cuál es la tolerancia al riesgo de los patrocinadores?"
        ],
        "rightTitle": "Pautas de Decisión",
        "rightItems": [
          "Eliminar documentación burocrática que no aporte valor.",
          "Establecer la cadencia óptima de retrospectivas y revisiones.",
          "Definir el balance de gobernanza entre la PMO y el equipo."
        ],
        "speakerNotes": "La adaptación no es eliminar rigor, sino aplicar el nivel justo de control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Indicadores de Éxito",
        "title": "Métricas de Desempeño y Medición de Resultados",
        "metrics": [
          {
            "name": "Cumplimiento de Objetivos",
            "val": "> 95%",
            "status": "Excelente",
            "desc": "Grado de logro de los criterios de aceptación y metas pactadas."
          },
          {
            "name": "Variación Financiera / Tiempo",
            "val": "< 5%",
            "status": "Controlado",
            "desc": "Desvío frente a la línea base autorizada por el comité."
          },
          {
            "name": "Satisfacción de Interesados",
            "val": "> 90%",
            "status": "Óptimo",
            "desc": "Nivel de satisfacción medido a través de encuestas periódicas."
          },
          {
            "name": "Adopción del Resultado",
            "val": "Inmediata",
            "status": "Exitoso",
            "desc": "Velocidad con la que el cliente incorpora el producto a sus operaciones."
          }
        ],
        "speakerNotes": "El éxito moderno se mide en la adopción efectiva del producto, no en horas trabajadas."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "Alerta de Examen PMP",
        "title": "Escenario Situacional de Examen de Certificación",
        "trapScenario": "Un interesado de alto poder expresa insatisfacción con el avance de Apéndice X5 - Evolución Histórica durante una reunión informal de pasillo.",
        "wrongAction": "Acción incorrecta: El PM ignora el comentario por no ser un canal formal, o promete cambios inmediatos de alcance sin consultar al equipo.",
        "correctAction": "Acción correcta PMI: El PM agenda una reunión privada para escuchar activamente sus preocupaciones, analiza el registro de interesados y evalúa si se requiere actualizar la estrategia de involucramiento o una solicitud formal de cambio.",
        "citation": "PMBOK® 8va Edición • Principio de Comunicación Transparente y Liderazgo Servidor."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Checklist de Cierre",
        "title": "Checklist de Dominio: Apéndice X5 - Evolución Histórica",
        "items": [
          "Comprendo la importancia de Apéndice X5 - Evolución Histórica en el marco del PMBOK 8.",
          "Sé diferenciar los enfoques predictivos y ágiles para este tema.",
          "Identifico con certeza las entradas, herramientas y salidas (ITTOs) clave.",
          "Aplico el criterio de adaptación para evitar el exceso de burocracia.",
          "Estoy preparado para responder preguntas situacionales de examen con la mentalidad PMI."
        ],
        "speakerNotes": "¡Felicidades! Has completado las 10 diapositivas maestras de Unidad 18: Apéndice X5 - Evolución Histórica."
      }
    ]
  }
];


  // Ultra-sharp SVG Icon System (No Emojis)
const icons = {
  book: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  calculator: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  cpu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  help: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  volume: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  volumeX: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  flag: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
};

  // Web Audio API Synthesizer (Zero external files needed)
class AudioManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq, type = "sine", duration = 0.2, gain = 0.15, startTime = 0) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      gainNode.gain.setValueAtTime(gain, this.ctx.currentTime + startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCorrect() {
    this.init();
    if (!this.enabled) return;
    // Pleasant arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, "sine", 0.35, 0.12, idx * 0.08);
    });
  }

  playIncorrect() {
    this.init();
    if (!this.enabled) return;
    // Low dissonant boop
    this.playTone(180, "sawtooth", 0.3, 0.12, 0);
    this.playTone(130, "sawtooth", 0.4, 0.15, 0.12);
  }

  playVictory() {
    this.init();
    if (!this.enabled) return;
    // Triumph fanfare
    const melody = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 659.25, t: 0.12, d: 0.15 },
      { f: 783.99, t: 0.24, d: 0.15 },
      { f: 1046.50, t: 0.36, d: 0.45 },
      { f: 880.00, t: 0.70, d: 0.15 },
      { f: 1046.50, t: 0.85, d: 0.60 }
    ];
    melody.forEach(m => this.playTone(m.f, "triangle", m.d, 0.15, m.t));
  }

  playPop() {
    this.init();
    if (!this.enabled) return;
    this.playTone(600, "sine", 0.08, 0.08, 0);
  }

  playHeartLost() {
    this.init();
    if (!this.enabled) return;
    this.playTone(320, "sine", 0.25, 0.15, 0);
    this.playTone(240, "sine", 0.35, 0.15, 0.15);
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

const audio = new AudioManager();


  






class LearningHub {
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
      t("hub.partBadge1"),
      t("hub.partBadge2"),
      t("hub.partBadge3")
    ];

    this.container.innerHTML = `
      <!-- Hero Header -->
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("hub.heroTitle")}</h1>
          <p>
            ${t("hub.heroText")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${completedCount}/${totalUnits}</span>
            <span class="stat-label">${t("hub.unitsMastered")}</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-teal);">${progressPercent}%</span>
            <span class="stat-label">${t("hub.globalProgress")}</span>
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
              <p class="part-description">${part.description || t("hub.partDescFallback")}</p>
            </div>

            <div class="units-grid">
              ${part.units.map(unit => {
                const isDone = this.completedUnits.has(unit.id);
                const lessonsCount = unit.lessons ? unit.lessons.length : 0;
                const estTime = unit.lessons ? unit.lessons.reduce((acc, l) => acc + (l.timeMin || 5), 0) : 15;
                const descText = unit.description || t("hub.unitDescFallback");

                return `
                  <div class="unit-card-pro ${isDone ? 'is-done' : ''}" data-unit-id="${unit.id}">
                    <div>
                      <div class="unit-card-top">
                        <span class="unit-ref-badge">${unit.sectionRef}</span>
                        <span class="unit-duration-pill">${t("hub.durationLessons", { time: estTime, count: lessonsCount })}</span>
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
                            <div class="lesson-bullet-more">${t("hub.moreLessons", { count: unit.lessons.length - 3 })}</div>
                          ` : ''}
                        </div>
                      ` : ''}
                    </div>

                    <div class="unit-card-footer">
                      <span class="unit-status-indicator ${isDone ? 'done' : ''}">
                        ${isDone ? '<span class="status-icon-done">' + icons.check + '</span> ' + t("hub.mastered") : '<span class="status-icon-pending"></span> ' + t("hub.pending")}
                      </span>

                      <div style="display: flex; gap: 8px;">
                        <button class="unit-slides-btn" data-unit-id="${unit.id}" title="${t("hub.slidesHint")}">
                          ${t("hub.slides")}
                        </button>
                        <button class="btn-primary-pro unit-study-btn" data-unit-id="${unit.id}">
                          ${isDone ? t("hub.review") : t("hub.study")} ${icons.arrowRight}
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
          <button class="icon-square-btn" id="close-lesson-x" title="${t("common.close")}">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <!-- Unit Overview -->
          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px 20px; margin-bottom: 20px;">
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${t("hub.officialDesc")}
            </span>
            <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-primary);">
              ${targetUnit.description}
            </p>
          </div>

          <!-- Lessons List -->
          ${targetUnit.lessons && targetUnit.lessons.length > 0 ? `
            <div style="margin-bottom: 24px;">
              <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--text-tertiary); margin-bottom: 12px;">
                ${t("hub.standardLessons", { count: targetUnit.lessons.length })}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${targetUnit.lessons.map((les, lIdx) => `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); padding: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <span style="font-size: 0.75rem; font-family: var(--font-mono); font-weight: 700; color: var(--c-blue); background: var(--c-blue-subtle); padding: 2px 7px; border-radius: var(--radius-xs);">
                        ${t("hub.sectionLabel", { section: les.section })}
                      </span>
                      <strong style="font-size: 0.96rem; color: var(--text-primary); flex: 1; margin-left: 10px;">${les.title}</strong>
                      <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 600;">${t("hub.minutes", { n: les.timeMin || 5 })}</span>
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
                        <strong>${t("hub.examTip")}</strong> ${les.examTip}
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
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--c-blue); ">
                ${t("hub.checkpoint")}
              </span>
              <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 600;">
                ${t("hub.validationQ")}
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
          <button class="btn-flat-soft-indigo" id="open-slides-from-modal-btn">
            ${t("hub.viewSlides")} ${icons.arrowRight}
          </button>

          <button class="${isDone ? 'btn-teal-pro' : 'btn-primary-pro'}" id="finish-lesson-btn">
            ${isDone ? t("hub.unitMastered") : t("hub.markMastered")}
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
              <strong style="color: var(--c-teal); display: block; margin-bottom: 2px;">${t("hub.correctAnswer")}</strong>
              ${q.explanation}
            </div>
          `;
        } else {
          audio.playIncorrect();
          row.style.borderColor = "var(--c-rose)";
          row.style.background = "var(--c-rose-subtle)";
          fbBox.innerHTML = `
            <div style="background: var(--c-rose-subtle); border-left: 3px solid var(--c-rose); padding: 12px 16px; border-radius: var(--radius-s); font-size: 0.85rem; color: var(--text-primary); line-height: 1.45;">
              <strong style="color: var(--c-rose); display: block; margin-bottom: 2px;">${t("hub.wrongAnswer")}</strong>
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

  
// Keyed by the English domain name (domainEn / nameEn), so colors do not depend on the display language.
const domainColorPalette = {
  governance: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  scope: { color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  schedule: { color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  finance: { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  stakeholders: { color: "#E11D48", bg: "#FFF1F2", border: "#FECDD3" },
  resources: { color: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD" },
  risk: { color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" }
};

function getDomColor(nameEn) {
  const n = (nameEn || "").toLowerCase();
  for (const k of Object.keys(domainColorPalette)) {
    if (n.includes(k)) return domainColorPalette[k];
  }
  return { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" };
}








function renderProcessMatrixPro(containerEl, modalBackdropEl) {
  let viewMode = "matrix"; // "matrix" | "by-domain" | "by-focus" | "ittos"
  let searchQuery = "";
  // Language-independent domain key: "all" or the domain's index in performanceDomains (as a string).
  let activeDomain = "all";

  // All matching uses English keys (p.domainEn / p.focusAreaEn vs d.nameEn / fa.nameEn), never localized labels.
  const matchDomain = (pDomainEn, dNameEn) => dNameEn.toLowerCase().includes(pDomainEn.toLowerCase());
  const matchFocusArea = (pFocusEn, faNameEn) => faNameEn.toLowerCase().includes(pFocusEn.toLowerCase());

  // Display-only helper (Spanish label for the UI). Not used for matching.
  const shortDomainName = (d) => d.name.replace("Dominio de ", "");
  // Key of the domain a process belongs to (index in performanceDomains). Never uses a display label.
  const domainKeyOfProcess = (p) =>
    String(performanceDomains.findIndex(d => matchDomain(p.domainEn, d.nameEn)));
  const isDomainSelected = (d) =>
    activeDomain === "all" || activeDomain === String(performanceDomains.indexOf(d));

  const render = () => {
    const filteredProcesses = processes.filter(p =>
      (activeDomain === "all" || domainKeyOfProcess(p) === activeDomain) &&
      (searchQuery === "" ||
       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       p.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (p.inputs || []).some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.tools || []).some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.outputs || []).some(o => o.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("matrix.heroTitle")}</h1>
          <p>
            ${t("matrix.heroIntro")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${fmtNumber(filteredProcesses.length)}/40</span>
            <span class="stat-label">${t("matrix.filteredLabel")}</span>
          </div>
        </div>
      </div>

      <!-- Explanation Banner -->
      <div class="matrix-explanation-banner">
        <strong>${t("matrix.explanationTitle")}</strong> ${t("matrix.explanationText", { ittos: `<strong>${t("matrix.ittosLabel")}</strong>` })}
      </div>

      <!-- View Switcher & Toolbar -->
      <div class="matrix-toolbar-row">
        <div class="matrix-view-switcher">
          <button class="matrix-view-btn ${viewMode === 'matrix' ? 'active' : ''}" data-view="matrix">
            ${t("matrix.viewMatrix")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-domain' ? 'active' : ''}" data-view="by-domain">
            ${t("matrix.viewByDomain")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-focus' ? 'active' : ''}" data-view="by-focus">
            ${t("matrix.viewByFocus")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'ittos' ? 'active' : ''}" data-view="ittos">
            ${t("matrix.viewItto")}
          </button>
        </div>

        <div class="matrix-search-box">
          <input type="text" id="matrix-search-input" placeholder="${t("matrix.searchPlaceholder")}" value="${searchQuery}">
          <span class="matrix-search-icon">${icons.search}</span>
        </div>
      </div>

      <!-- Domain filter chips -->
      <div class="domain-chips-row">
        <button class="action-chip-btn ${activeDomain === 'all' ? 'active' : ''}" data-domain="all">
          ${t("matrix.allDomains")}
        </button>
        ${performanceDomains.map((d, i) => {
          const shortName = shortDomainName(d);
          const isAct = activeDomain === String(i);
          const dCol = getDomColor(d.nameEn);
          return `
            <button class="action-chip-btn ${isAct ? 'active' : ''}" data-domain="${i}" style="${isAct ? `background: ${dCol.color}; color: #ffffff; border-color: ${dCol.color};` : `border-color: ${dCol.border};`}">
              <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${isAct ? '#ffffff' : dCol.color}; flex-shrink:0;"></span>
              ${shortName} (${d.processesCount})
            </button>
          `;
        }).join('')}
      </div>

      <!-- Dynamic View Container -->
      <div id="matrix-content-viewport" style="margin-top: 18px;"></div>
    `;

    // Render corresponding subview
    const viewport = containerEl.querySelector("#matrix-content-viewport");
    if (viewMode === "matrix") {
      render2DMatrix(viewport, filteredProcesses);
    } else if (viewMode === "by-domain") {
      renderByDomain(viewport, filteredProcesses);
    } else if (viewMode === "by-focus") {
      renderByFocusArea(viewport, filteredProcesses);
    } else if (viewMode === "ittos") {
      renderITTOExplorer(viewport, filteredProcesses);
    }

    // Attach search event
    const searchInp = containerEl.querySelector("#matrix-search-input");
    searchInp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
      const newInp = containerEl.querySelector("#matrix-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    // View buttons
    containerEl.querySelectorAll(".matrix-view-btn").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        viewMode = btn.dataset.view;
        render();
      };
    });

    // Domain filter chips
    containerEl.querySelectorAll("[data-domain]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeDomain = btn.dataset.domain;
        render();
      };
    });

    // Attach process card click listeners
    containerEl.querySelectorAll(".process-cell-card").forEach(card => {
      card.onclick = () => {
        audio.playPop();
        const pId = card.dataset.pid;
        const p = processes.find(item => item.id === pId);
        if (p) openProcessModal(p);
      };
    });
  };

  // Subview 1: 2D Matrix Grid
  const render2DMatrix = (area, pList) => {
    const visibleDomains = performanceDomains.filter(isDomainSelected);

    area.innerHTML = `
      <div class="matrix-table-card">
        <table class="matrix-grid-table">
          <thead>
            <tr>
              <th class="matrix-corner-th">${t("matrix.domainHeader")}</th>
              ${focusAreas.map(fa => `
                <th class="matrix-col-th">
                  <span class="fa-sec-badge">${t("matrix.sectionBadge", { section: fa.section })}</span>
                  <span class="fa-name-title">${fa.name.replace("Área de Enfoque de ", "")}</span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${visibleDomains.map(d => `
              <tr>
                <td class="domain-header-cell" style="border-left: 4px solid ${getDomColor(d.nameEn).color};">
                  <span class="domain-name-tag" style="color: ${getDomColor(d.nameEn).color};">${shortDomainName(d)}</span>
                  <span class="domain-section-tag">${t("matrix.domainSection", { section: d.section, count: d.processesCount })}</span>
                </td>
                ${focusAreas.map(fa => {
                  const cellProcs = pList.filter(p =>
                    matchDomain(p.domainEn, d.nameEn) &&
                    matchFocusArea(p.focusAreaEn, fa.nameEn)
                  );

                  return `
                    <td class="matrix-body-td">
                      ${cellProcs.length > 0 ? `
                        <div class="matrix-cell-procs-stack">
                          ${cellProcs.map(p => `
                            <div class="process-cell-card" data-pid="${p.id}" style="border-left: 3px solid ${getDomColor(p.domainEn).color};" title="${t("matrix.cellTitle", { number: p.number, name: p.name })}">
                              <span class="process-cell-num" style="color: ${getDomColor(p.domainEn).color};">#${p.number.toString().padStart(2, '0')}</span>
                              <span class="process-cell-title">${p.name}</span>
                            </div>
                          `).join('')}
                        </div>
                      ` : '<span class="cell-empty-placeholder">—</span>'}
                    </td>
                  `;
                }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  // Subview 2: Grouped by Performance Domain
  const renderByDomain = (area, pList) => {
    const visibleDomains = performanceDomains.filter(isDomainSelected);

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${visibleDomains.map(d => {
          const dProcs = pList.filter(p => matchDomain(p.domainEn, d.nameEn));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-blue); font-weight: 700;">${t("matrix.chapter", { number: d.number })}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${d.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${d.summary}</p>
                </div>
                <span class="action-chip-btn">${t("matrix.processesBadge", { count: dProcs.length })}</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${dProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); ">${p.focusArea}</span>
                    </div>
                    <span class="process-cell-title" style="font-size: 0.9rem;">${p.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Subview 3: Grouped by Focus Area
  const renderByFocusArea = (area, pList) => {
    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${focusAreas.map(fa => {
          const faProcs = pList.filter(p => matchFocusArea(p.focusAreaEn, fa.nameEn));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-teal); font-weight: 700;">${t("matrix.sectionBadge", { section: fa.section })}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${fa.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${fa.summary}</p>
                  <div style="font-size: 0.82rem; color: var(--c-teal); font-weight: 600; margin-top: 6px;">${t("matrix.keyDeliverable", { deliverable: fa.keyDeliverable })}</div>
                </div>
                <span class="action-chip-btn">${t("matrix.processesBadge", { count: faProcs.length })}</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${faProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); ">${p.domain}</span>
                    </div>
                    <span class="process-cell-title" style="font-size: 0.9rem;">${p.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Subview 4: ITTO Universal Search & Explorer
  const renderITTOExplorer = (area, pList) => {
    area.innerHTML = `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 24px;">
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 6px;">${t("matrix.explorerTitle")}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
          ${t("matrix.explorerDesc")}
        </p>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${pList.map(p => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                  <strong style="font-size: 0.96rem; color: var(--text-primary);">${p.name}</strong>
                </div>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${p.domain} • ${p.focusArea}</span>
              </div>

              <div class="itto-grid">
                <div class="itto-col">
                  <h5 style="color: var(--c-blue);">${t("matrix.inputs")}</h5>
                  <ul>
                    ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-purple);">${t("matrix.tools")}</h5>
                  <ul>
                    ${(p.tools || []).map(tool => `<li>${tool}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-teal);">${t("matrix.outputs")}</h5>
                  <ul>
                    ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  };

  // Process Modal Deep Dive
  const openProcessModal = (p) => {
    modalBackdropEl.innerHTML = `
      <div class="modal-window-card">
        <div class="modal-window-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="brand-tag">${t("matrix.processBadge", { number: p.number.toString().padStart(2, '0') })}</span>
            <h3 style="font-size: 1.15rem; font-weight: 800;">${p.name}</h3>
          </div>
          <button class="icon-square-btn" id="close-proc-modal-btn" title="${t("matrix.closeWindow")}">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <div style="background: var(--bg-surface-subtle); padding: 18px 20px; border-radius: var(--radius-s); border-left: 3px solid var(--c-blue); margin-bottom: 16px;">
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--c-blue); ">${t("matrix.officialPurpose")}</span>
            <p style="font-size: 0.98rem; line-height: 1.55; margin-top: 4px; color: var(--text-primary);">
              ${p.purpose}
            </p>
          </div>

          <div style="display: flex; gap: 12px; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 16px;">
            <span>${t("matrix.domainLabel")} <strong style="color: var(--text-primary);">${p.domain}</strong></span>
            <span>•</span>
            <span>${t("matrix.focusAreaLabel")} <strong style="color: var(--text-primary);">${p.focusArea}</strong></span>
          </div>

          <!-- ITTOs Grid -->
          <div class="itto-grid">
            <div class="itto-col">
              <h5 style="color: var(--c-blue);">${t("matrix.inputs")}</h5>
              <ul>
                ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-purple);">${t("matrix.tools")}</h5>
              <ul>
                ${(p.tools || []).map(tool => `<li>${tool}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-teal);">${t("matrix.outputs")}</h5>
              <ul>
                ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 16px; margin-top: 16px;">
            <strong style="font-size: 0.84rem; color: var(--text-primary); display: block; margin-bottom: 4px;">${t("matrix.tailoringTitle")}</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-secondary);">${p.tailoring}</p>
          </div>

          <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 16px; margin-top: 14px;">
            <strong style="font-size: 0.84rem; color: #B45309; display: block; margin-bottom: 4px;">${t("matrix.examTrapTitle")}</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-primary);">${p.examTip}</p>
          </div>
        </div>

        <div class="modal-window-footer">
          <button class="action-chip-btn" id="modal-close-bottom-btn">${t("matrix.closeCard")}</button>
        </div>
      </div>
    `;

    modalBackdropEl.classList.add("active");

    const closeHandler = () => modalBackdropEl.classList.remove("active");
    modalBackdropEl.querySelector("#close-proc-modal-btn").onclick = closeHandler;
    modalBackdropEl.querySelector("#modal-close-bottom-btn").onclick = closeHandler;
  };

  render();
}

  




// Stable part key derived from the deck's unitId (unit-1..unit-18), so the
// filter does not depend on the translated `category` label.
const partIdOf = (deck) => {
  const n = parseInt(deck.unitId.split("-")[1], 10);
  if (n <= 4) return "part1";
  if (n <= 14) return "part2";
  return "part3";
};

function renderPresentationsPro(containerEl, modalBackdropEl) {
  let activeCategory = "all";
  let searchQuery = "";
  let activeDeck = null;
  let currentSlideIdx = 0;
  let showNotes = true;

  const categories = [
    { id: "all", label: t("presentations.catAll", { count: fmtNumber(18) }) },
    { id: "part1", label: t("presentations.catPart1", { count: fmtNumber(4) }) },
    { id: "part2", label: t("presentations.catPart2", { count: fmtNumber(10) }) },
    { id: "part3", label: t("presentations.catPart3", { count: fmtNumber(4) }) }
  ];

  const render = () => {
    const filteredDecks = presentationDecks.filter(d =>
      (activeCategory === "all" || partIdOf(d) === activeCategory) &&
      (searchQuery === "" ||
       d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.sectionRef.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("presentations.heroTitle")}</h1>
          <p>
            ${t("presentations.heroText", { units: fmtNumber(18), slides: fmtNumber(10) })}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${fmtNumber(presentationDecks.length)}</span>
            <span class="stat-label">${t("presentations.officialDecks")}</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-purple);">${fmtNumber(180)}</span>
            <span class="stat-label">${t("presentations.visualSlides")}</span>
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
          <input type="text" id="deck-search-input" placeholder="${t("presentations.searchPlaceholder")}" value="${searchQuery}" style="width: 100%; padding: 8px 12px 8px 34px; border-radius: var(--radius-s); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-size: 0.82rem; outline: none;">
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
                <span class="unit-duration-pill">${t("presentations.slidesPill", { count: fmtNumber(10) })}</span>
              </div>

              <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-tertiary); display: block; margin-bottom: 4px;">
                ${deck.category}
              </span>

              <h3 class="unit-title" style="font-size: 1.1rem; line-height: 1.3;">${deck.title}</h3>
              <p class="unit-summary" style="margin-bottom: 16px;">${deck.summary}</p>
            </div>

            <div class="unit-card-footer">
              <span class="unit-status-indicator">
                ${t("presentations.deckFormat")}
              </span>
              <button class="btn-primary-pro start-deck-btn" data-deck-id="${deck.id}">
                ${t("presentations.viewDeck")} ${icons.arrowRight}
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
                ${t("presentations.slideCounter", { current: fmtNumber(currentSlideIdx + 1), total: fmtNumber(activeDeck.slides.length) })}
              </span>
              <button class="icon-square-btn" id="toggle-notes-btn" title="${t("presentations.toggleNotes")}">
                ${icons.book}
              </button>
              <button class="icon-square-btn" id="close-deck-btn" title="${t("presentations.closeDeck")}">
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
                <strong style="color: var(--text-primary); font-size: 0.72rem; display: block; margin-bottom: 2px;">
                  ${t("presentations.speakerNotes")}
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
                ${icons.arrowLeft} ${t("presentations.prevSlide")}
              </button>

              <span style="font-size: 0.76rem; color: var(--text-muted);">
                ${t("presentations.keyboardHint")}
              </span>

              <button class="btn-primary-pro" id="next-slide-btn">
                ${currentSlideIdx === activeDeck.slides.length - 1 ? t("presentations.finishDeck") : t("presentations.nextSlide") + ' ' + icons.arrowRight}
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
            <span style="display: inline-block; padding: 4px 12px; border-radius: var(--radius-xs); background: var(--c-blue-subtle); color: var(--c-blue); font-size: 0.8rem; font-weight: 700; margin-bottom: 16px;">
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-teal); display: block; margin-bottom: 6px;">
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-purple); display: block; margin-bottom: 6px;">
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 16px;">${slide.title}</h2>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); overflow: hidden;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                <thead>
                  <tr style="background: var(--bg-surface-subtle); border-bottom: 1px solid var(--border-medium);">
                    ${slide.headers.map(h => `<th style="padding: 10px 14px; text-align: left; font-size: 0.76rem; font-weight: 700; color: var(--text-secondary);">${h}</th>`).join('')}
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
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
                  ${slide.tools.map(tool => `<li>${tool}</li>`).join('')}
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-teal); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
              ${slide.metrics.map(m => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-tertiary); ">${m.name}</span>
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
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: #B45309; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 16px;">${slide.title}</h2>

            <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 18px; margin-bottom: 14px;">
              <strong style="font-size: 0.84rem; color: #B45309; display: block; margin-bottom: 4px;">${t("presentations.scenario")}</strong>
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
              ${t("presentations.reference")} ${slide.citation}
            </div>
          </div>
        `;

      case "checklist":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
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

  



function renderEVMLabPro(containerEl) {
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

  




function renderExamSimulatorPro(containerEl) {
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

  




function renderFlashcardsPro(containerEl) {
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

  



function renderAppendicesPro(containerEl) {
  let activeKey = "x3_ai";

  const render = () => {
    const cur = appendices[activeKey];

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("appendices.heroTitle")}</h1>
          <p>
            ${t("appendices.heroDesc")}
          </p>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="action-chip-btn ${activeKey === 'x3_ai' ? 'active' : ''}" data-key="x3_ai" style="${activeKey === 'x3_ai' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX3")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x2_pmo' ? 'active' : ''}" data-key="x2_pmo" style="${activeKey === 'x2_pmo' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX2")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x4_procurement' ? 'active' : ''}" data-key="x4_procurement" style="${activeKey === 'x4_procurement' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX4")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x5_evolution' ? 'active' : ''}" data-key="x5_evolution" style="${activeKey === 'x5_evolution' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX5")}
          </button>
        </div>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 32px; box-shadow: var(--shadow-xs);">
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--c-blue); ">
            ${t("appendices.officialStudy")}
          </span>
          <h2 style="font-size: 1.65rem; font-weight: 800; letter-spacing: -0.02em; margin: 4px 0 10px 0;">
            ${cur.title}
          </h2>
          <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary); max-width: 900px;">
            ${cur.summary}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${cur.topics.map(tp => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 20px; border-left: 4px solid var(--c-blue);">
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${tp.subtitle}</h4>
              <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${tp.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    containerEl.querySelectorAll("[data-key]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeKey = btn.dataset.key;
        render();
      };
    });
  };

  render();
}

  



class OnboardingTour {
  constructor(modalBackdropEl, onNavigateTab) {
    this.modalBackdrop = modalBackdropEl;
    this.onNavigateTab = onNavigateTab;
    this.currentStep = 0;
    this.dockEl = null;

    this.steps = [
      {
        title: t("tour.step1Title"),
        badge: t("tour.step1Badge"),
        tabId: "curriculum",
        lead: t("tour.step1Lead"),
        details: [
          t("tour.step1Detail1"),
          t("tour.step1Detail2"),
          t("tour.step1Detail3"),
          t("tour.step1Detail4")
        ]
      },
      {
        title: t("tour.step2Title"),
        badge: t("tour.step2Badge"),
        tabId: "matrix",
        lead: t("tour.step2Lead"),
        details: [
          t("tour.step2Detail1"),
          t("tour.step2Detail2"),
          t("tour.step2Detail3")
        ]
      },
      {
        title: t("tour.step3Title"),
        badge: t("tour.step3Badge"),
        tabId: "presentations",
        lead: t("tour.step3Lead"),
        details: [
          t("tour.step3Detail1"),
          t("tour.step3Detail2"),
          t("tour.step3Detail3")
        ]
      },
      {
        title: t("tour.step4Title"),
        badge: t("tour.step4Badge"),
        tabId: "evm",
        lead: t("tour.step4Lead"),
        details: [
          t("tour.step4Detail1"),
          t("tour.step4Detail2"),
          t("tour.step4Detail3")
        ]
      },
      {
        title: t("tour.step5Title"),
        badge: t("tour.step5Badge"),
        tabId: "simulator",
        lead: t("tour.step5Lead"),
        details: [
          t("tour.step5Detail1"),
          t("tour.step5Detail2"),
          t("tour.step5Detail3")
        ]
      },
      {
        title: t("tour.step6Title"),
        badge: t("tour.step6Badge"),
        tabId: "flashcards",
        lead: t("tour.step6Lead"),
        details: [
          t("tour.step6Detail1"),
          t("tour.step6Detail2")
        ]
      },
      {
        title: t("tour.step7Title"),
        badge: t("tour.step7Badge"),
        tabId: "appendices",
        lead: t("tour.step7Lead"),
        details: [
          t("tour.step7Detail1"),
          t("tour.step7Detail2"),
          t("tour.step7Detail3"),
          t("tour.step7Detail4")
        ]
      }
    ];
  }

  start() {
    this.currentStep = 0;
    this.renderStep();
  }

  clearSpotlights() {
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.classList.remove("tab-spotlight-active");
    });
  }

  renderStep() {
    const s = this.steps[this.currentStep];
    const isFirst = this.currentStep === 0;
    const isLast = this.currentStep === this.steps.length - 1;

    // Clear previous highlights
    this.clearSpotlights();

    // 1. Switch tab automatically in the background
    if (this.onNavigateTab && s.tabId) {
      this.onNavigateTab(s.tabId);
    }

    // 2. Highlight target tab in the header
    const targetTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${s.tabId}"]`);
    if (targetTabBtn) {
      targetTabBtn.classList.add("tab-spotlight-active");
      targetTabBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // 3. Create or update floating companion dock
    let dock = document.getElementById("tour-floating-dock");
    if (!dock) {
      dock = document.createElement("div");
      dock.id = "tour-floating-dock";
      dock.className = "tour-companion-dock";
      document.body.appendChild(dock);
    }

    dock.innerHTML = `
      <div class="tour-companion-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--c-blue); background: var(--c-blue-subtle); padding: 2px 7px; border-radius: var(--radius-xs);">
            ${t("tour.stepCounter", { current: this.currentStep + 1, total: this.steps.length })}
          </span>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-secondary); ">
            ${s.badge}
          </span>
        </div>

        <button class="icon-square-btn" id="tour-dock-close" title="${t("tour.closeBtnTitle")}" style="width: 26px; height: 26px;">
          ${icons.x}
        </button>
      </div>

      <div class="tour-companion-body">
        <h3 style="font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); line-height: 1.3;">
          ${s.title}
        </h3>

        <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
          ${s.lead}
        </p>

        <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 12px 14px;">
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-tertiary); display: block; margin-bottom: 8px;">
            ${t("tour.detailsHeading")}
          </span>
          <ul style="display: flex; flex-direction: column; gap: 7px; padding-left: 14px; font-size: 0.82rem; color: var(--text-primary); line-height: 1.45;">
            ${s.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="tour-companion-footer">
        <button class="action-chip-btn" id="tour-dock-skip" style="font-size: 0.76rem; padding: 5px 10px;">
          ${t("tour.finishGuideBtn")}
        </button>

        <div style="display: flex; gap: 6px;">
          <button class="action-chip-btn" id="tour-dock-prev" ${isFirst ? 'disabled style="opacity: 0.4; pointer-events: none;"' : ''} style="font-size: 0.78rem; padding: 5px 10px;">
            ${icons.arrowLeft} ${t("tour.prevBtn")}
          </button>
          <button class="btn-primary-pro" id="tour-dock-next" style="font-size: 0.78rem; padding: 5px 12px;">
            ${isLast ? t("tour.startStudyBtn") : t("tour.nextBtn") + ' ' + icons.arrowRight}
          </button>
        </div>
      </div>
    `;

    // Event listeners
    const closeDock = () => {
      this.clearSpotlights();
      const el = document.getElementById("tour-floating-dock");
      if (el) el.remove();
    };

    dock.querySelector("#tour-dock-close").onclick = () => {
      audio.playPop();
      closeDock();
    };

    dock.querySelector("#tour-dock-skip").onclick = () => {
      audio.playPop();
      closeDock();
    };

    const prevBtn = dock.querySelector("#tour-dock-prev");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.currentStep > 0) {
          audio.playPop();
          this.currentStep -= 1;
          this.renderStep();
        }
      };
    }

    const nextBtn = dock.querySelector("#tour-dock-next");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.currentStep < this.steps.length - 1) {
          audio.playPop();
          this.currentStep += 1;
          this.renderStep();
        } else {
          audio.playVictory();
          closeDock();
        }
      };
    }
  }
}


  











function showSeniorToast(msg) {
  let toast = document.querySelector(".toast-pill-pro");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-pill-pro";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="display:flex;">${icons.check}</span> <span>${msg}</span>`;
  toast.classList.add("active");
  setTimeout(() => toast.classList.remove("active"), 2400);
}

document.addEventListener("DOMContentLoaded", () => {
  const views = {
    curriculum: document.getElementById("view-curriculum"),
    matrix: document.getElementById("view-matrix"),
    presentations: document.getElementById("view-presentations"),
    evm: document.getElementById("view-evm"),
    simulator: document.getElementById("view-simulator"),
    flashcards: document.getElementById("view-flashcards"),
    appendices: document.getElementById("view-appendices")
  };

  const navTabBtns = document.querySelectorAll(".nav-tab-btn[data-tab]");
  const modalBackdrop = document.getElementById("senior-modal-backdrop");
  const themeBtn = document.getElementById("theme-toggle-senior-btn");
  const soundBtn = document.getElementById("sound-toggle-senior-btn");
  const guideBtn = document.getElementById("platform-guide-btn");
  const headerProgBadge = document.getElementById("header-progress-text");

  // Localize static shell text (data-i18n attributes in index.html)
  document.title = t("shell.docTitle");
  document.documentElement.lang = LOCALE;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  let currentTab = "curriculum";

  // Tab switcher
  const switchTab = (tab) => {
    currentTab = tab;

    navTabBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.toggle("active", key === tab);
      }
    });

    if (tab === "curriculum") {
      learningHub.render();
    } else if (tab === "matrix") {
      renderProcessMatrixPro(views.matrix, modalBackdrop);
    } else if (tab === "presentations") {
      renderPresentationsPro(views.presentations, modalBackdrop);
    } else if (tab === "evm") {
      renderEVMLabPro(views.evm);
    } else if (tab === "simulator") {
      renderExamSimulatorPro(views.simulator);
    } else if (tab === "flashcards") {
      renderFlashcardsPro(views.flashcards);
    } else if (tab === "appendices") {
      renderAppendicesPro(views.appendices);
    }
  };

  const updateProgressHeader = (done, total) => {
    if (headerProgBadge) {
      const pct = Math.round((done / total) * 100);
      headerProgBadge.textContent = t("app.progressMastered", { pct });
    }
  };

  const learningHub = new LearningHub(views.curriculum, modalBackdrop, updateProgressHeader);

  // Initialize Onboarding Tour
  const tour = new OnboardingTour(modalBackdrop, (targetTab) => {
    switchTab(targetTab);
  });

  if (guideBtn) {
    guideBtn.onclick = () => {
      audio.playPop();
      tour.start();
    };
  }

  // Auto trigger tour on first visit
  const tourSeen = localStorage.getItem("pmbok8_tour_seen");
  if (!tourSeen) {
    localStorage.setItem("pmbok8_tour_seen", "true");
    setTimeout(() => {
      tour.start();
    }, 400);
  }

  navTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audio.playPop();
      switchTab(btn.dataset.tab);
    });
  });

  // Theme Toggle
  if (themeBtn) {
    let savedTheme = localStorage.getItem("pmbok8_pro_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeBtn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;

    themeBtn.addEventListener("click", () => {
      audio.playPop();
      savedTheme = savedTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
      localStorage.setItem("pmbok8_pro_theme", savedTheme);
      themeBtn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;
      showSeniorToast(savedTheme === 'dark' ? t("app.darkModeOn") : t("app.lightModeOn"));
    });
  }

  // Sound Toggle
  if (soundBtn) {
    soundBtn.innerHTML = audio.enabled ? icons.volume : icons.volumeX;
    soundBtn.addEventListener("click", () => {
      const en = audio.toggle();
      soundBtn.innerHTML = en ? icons.volume : icons.volumeX;
      showSeniorToast(en ? t("app.audioOn") : t("app.audioOff"));
    });
  }

  // Initial tab
  switchTab("curriculum");
});

})();
