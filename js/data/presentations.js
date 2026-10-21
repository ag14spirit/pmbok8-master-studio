// Complete 18 Presentation Decks for PMBOK 8 Units (180 Total Slides)
export const presentationDecks = [
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
