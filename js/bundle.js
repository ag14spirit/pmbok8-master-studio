
(function() {
  'use strict';
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

  // Native HTML5 Canvas Confetti Physics Simulation
class ConfettiEngine {
  constructor(canvasId = "confetti-canvas") {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement("canvas");
      this.canvas.id = canvasId;
      document.body.appendChild(this.canvas);
    }
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.animationFrame = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(count = 120) {
    this.resize();
    const colors = ["#58cc02", "#ff4b4b", "#ffc800", "#1cb0f6", "#ce82ff", "#006874"];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: this.canvas.height / 2 + 50,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 18 - 8,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.45,
        opacity: 1
      });
    }

    if (!this.animationFrame) {
      this.animate();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.007;

      if (p.opacity <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationFrame = requestAnimationFrame(() => this.animate());
    } else {
      this.animationFrame = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiEngine();

  // State Management & LocalStorage Persistence
const RANKS = [
  { minXP: 0, title: "Asistente de Proyecto", level: 1 },
  { minXP: 150, title: "Coordinador de Proyecto", level: 2 },
  { minXP: 450, title: "Project Manager Junior", level: 3 },
  { minXP: 900, title: "Senior Project Manager", level: 4 },
  { minXP: 1600, title: "Agile Project Leader", level: 5 },
  { minXP: 2500, title: "Director de Proyectos PMP", level: 6 },
  { minXP: 4000, title: "Leyenda PMBOK 8 Master", level: 7 }
];

class StateManager {
  constructor() {
    this.storageKey = "pmbok8_app_state_v1";
    this.listeners = [];
    this.state = this.loadState();
    this.checkStreak();
  }

  getDefaultState() {
    return {
      hearts: 5,
      maxHearts: 5,
      lastHeartLossTime: null,
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      completedLessons: ["les-1-1"], // First lesson unlocked by default
      passedQuizzes: [],
      theme: "light",
      soundEnabled: true,
      dailyQuests: {
        date: new Date().toISOString().split("T")[0],
        xpEarnedToday: 0,
        lessonsDoneToday: 0,
        streakKept: false
      }
    };
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...this.getDefaultState(), ...parsed };
      }
    } catch (e) {
      console.warn("Could not load local state:", e);
    }
    return this.getDefaultState();
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
    this.notify();
  }

  checkStreak() {
    const today = new Date().toISOString().split("T")[0];
    const last = this.state.lastActiveDate;
    if (last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (last === yesterday) {
        // Streak continues
      } else {
        // Streak lost
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
      this.save();
    }
  }

  getRank() {
    const xp = this.state.xp;
    let currentRank = RANKS[0];
    let nextRank = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
      if (xp >= RANKS[i].minXP) {
        currentRank = RANKS[i];
        nextRank = RANKS[i + 1] || null;
      }
    }

    const currentBase = currentRank.minXP;
    const nextTarget = nextRank ? nextRank.minXP : currentRank.minXP + 1000;
    const progress = Math.min(100, Math.max(0, ((xp - currentBase) / (nextTarget - currentBase)) * 100));

    return {
      title: currentRank.title,
      level: currentRank.level,
      currentXP: xp,
      nextXP: nextTarget,
      progressPercent: progress
    };
  }

  addXP(amount) {
    this.state.xp += amount;
    this.state.dailyQuests.xpEarnedToday += amount;
    this.save();
  }

  decrementHeart() {
    if (this.state.hearts > 0) {
      this.state.hearts -= 1;
      this.state.lastHeartLossTime = Date.now();
      this.save();
    }
    return this.state.hearts;
  }

  refillHearts() {
    this.state.hearts = this.state.maxHearts;
    this.save();
  }

  completeLesson(lessonId, xpReward = 30) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    this.addXP(xpReward);
    this.state.dailyQuests.lessonsDoneToday += 1;
    this.save();
  }

  isLessonCompleted(lessonId) {
    return this.state.completedLessons.includes(lessonId);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.state);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }
}

const stateManager = new StateManager();


  



function renderSkillTree(containerElement, onOpenLesson) {
  containerElement.innerHTML = "";

  const state = stateManager.state;
  const completedLessons = state.completedLessons || [];

  curriculum.parts.forEach((part, partIdx) => {
    const partWrapper = document.createElement("div");
    partWrapper.className = "part-section";
    partWrapper.style.setProperty("--world-color", part.color);

    // World Banner
    const banner = document.createElement("div");
    banner.className = "world-banner";
    banner.innerHTML = `
      <div class="world-banner-content">
        <h2>Parte ${part.number}: ${part.title}</h2>
        <p>${part.description}</p>
      </div>
      <div class="world-badge">Mundo ${part.number}</div>
    `;
    partWrapper.appendChild(banner);

    // Units
    part.units.forEach((unit, unitIdx) => {
      const unitCard = document.createElement("div");
      unitCard.className = "unit-section";

      // Unit Header Card
      const unitHeader = document.createElement("div");
      unitHeader.className = "unit-header-card";
      unitHeader.innerHTML = `
        <div class="unit-info">
          <span>Unidad ${unit.number} • ${unit.sectionRef}</span>
          <h3>${unit.title}</h3>
        </div>
        <button class="unit-guide-btn" data-unit-id="${unit.id}">
          <span class="icon">📖</span> Guía Rápida
        </button>
      `;
      unitCard.appendChild(unitHeader);

      // Node Stream (S-Curve path layout)
      const stream = document.createElement("div");
      stream.className = "nodes-stream";

      unit.lessons.forEach((lesson, lIdx) => {
        const row = document.createElement("div");
        row.className = "node-row";

        // Alternate offsets to create the Duolingo zigzag
        const offsetPatterns = ["", "offset-left", "offset-far-left", "offset-left", "", "offset-right", "offset-far-right", "offset-right"];
        const patternClass = offsetPatterns[lIdx % offsetPatterns.length];
        if (patternClass) row.classList.add(patternClass);

        const isCompleted = completedLessons.includes(lesson.id);
        // A lesson is unlocked if it's completed or if the preceding lesson in the unit is completed
        let isUnlocked = false;
        if (unitIdx === 0 && lIdx === 0 && partIdx === 0) {
          isUnlocked = true;
        } else if (lIdx > 0 && completedLessons.includes(unit.lessons[lIdx - 1].id)) {
          isUnlocked = true;
        } else if (lIdx === 0 && unitIdx > 0) {
          // Unlocked if last lesson of previous unit completed
          const prevUnit = part.units[unitIdx - 1];
          const lastLesson = prevUnit.lessons[prevUnit.lessons.length - 1];
          if (completedLessons.includes(lastLesson.id)) isUnlocked = true;
        } else if (lIdx === 0 && unitIdx === 0 && partIdx > 0) {
          const prevPart = curriculum.parts[partIdx - 1];
          const lastUnit = prevPart.units[prevPart.units.length - 1];
          const lastLesson = lastUnit.lessons[lastUnit.lessons.length - 1];
          if (completedLessons.includes(lastLesson.id)) isUnlocked = true;
        }

        const btn = document.createElement("button");
        btn.className = "lesson-node-btn";
        btn.dataset.lessonId = lesson.id;

        let iconChar = "⭐";
        if (isCompleted) {
          btn.classList.add("completed");
          iconChar = "✓";
        } else if (isUnlocked) {
          btn.classList.add("active");
          iconChar = "★";
        } else {
          btn.classList.add("locked");
          iconChar = "🔒";
        }

        btn.innerHTML = `
          <span>${iconChar}</span>
          ${isUnlocked && !isCompleted ? '<div class="pulse-ring"></div>' : ''}
          ${isCompleted ? '<div class="node-status-badge">🏆</div>' : ''}
          <div class="node-tooltip">${lesson.section}: ${lesson.title}</div>
        `;

        btn.addEventListener("click", () => {
          audio.playPop();
          if (isUnlocked || isCompleted) {
            onOpenLesson(lesson, unit, part);
          } else {
            audio.playIncorrect();
            alert("Completa las lecciones previas para desbloquear esta sección del PMBOK 8.");
          }
        });

        row.appendChild(btn);
        stream.appendChild(row);
      });

      unitCard.appendChild(stream);
      partWrapper.appendChild(unitCard);
    });

    containerElement.appendChild(partWrapper);
  });
}

  




class QuizEngine {
  constructor(modalElement) {
    this.modal = modalElement;
    this.currentLesson = null;
    this.currentUnit = null;
    this.lessonQuestions = [];
    this.currentStep = 0; // 0 = Theory, 1..N = Questions, N+1 = Victory
    this.selectedAnswer = null;
    this.matchedPairs = {};
    this.sequenceSteps = [];
    this.hasAnswered = false;

    this.bindDOM();
  }

  bindDOM() {
    this.closeBtn = this.modal.querySelector(".quiz-close-btn");
    this.progressBar = this.modal.querySelector(".quiz-progress-fill");
    this.heartsEl = this.modal.querySelector(".quiz-hearts-val");
    this.bodyEl = this.modal.querySelector(".quiz-body");
    this.footerDrawer = this.modal.querySelector(".quiz-footer-drawer");
    this.feedbackTitle = this.modal.querySelector(".feedback-title");
    this.feedbackDesc = this.modal.querySelector(".feedback-explanation");
    this.actionBtn = this.modal.querySelector(".quiz-action-btn");

    this.closeBtn.addEventListener("click", () => this.close());
    this.actionBtn.addEventListener("click", () => this.handleActionClick());
  }

  startLesson(lesson, unit, part) {
    this.currentLesson = lesson;
    this.currentUnit = unit;
    this.currentStep = 0;
    this.hasAnswered = false;

    // Filter relevant questions for this lesson, or fallback to unit questions
    let pool = questions.filter(q => q.lessonId === lesson.id);
    if (pool.length === 0) {
      pool = questions.filter(q => q.unitId === unit.id);
    }
    if (pool.length === 0) {
      // Pick random 2 questions from global pool if none specific
      pool = questions.slice(0, 2);
    }
    this.lessonQuestions = pool;

    this.updateHearts();
    this.modal.classList.add("active");
    this.renderCurrentStep();
  }

  close() {
    this.modal.classList.remove("active");
  }

  updateHearts() {
    if (this.heartsEl) {
      this.heartsEl.textContent = stateManager.state.hearts;
    }
  }

  updateProgress() {
    const totalSteps = this.lessonQuestions.length + 1; // 1 for theory
    const progress = Math.min(100, (this.currentStep / totalSteps) * 100);
    this.progressBar.style.width = `${progress}%`;
  }

  renderCurrentStep() {
    this.updateProgress();
    this.hideFeedbackDrawer();

    if (this.currentStep === 0) {
      this.renderTheoryCard();
    } else if (this.currentStep <= this.lessonQuestions.length) {
      this.renderQuestion(this.lessonQuestions[this.currentStep - 1]);
    } else {
      this.renderVictory();
    }
  }

  renderTheoryCard() {
    const l = this.currentLesson;
    const u = this.currentUnit;

    this.bodyEl.innerHTML = `
      <div class="theory-card">
        <div class="theory-badge">
          <span>📖 PMBOK 8va Edición • Sección ${l.section}</span>
        </div>
        <h2>${l.title}</h2>
        <p class="theory-summary">${l.summary}</p>

        <div class="theory-points-list">
          ${l.points.map(pt => `
            <div class="theory-point-item">
              <span class="icon">🔹</span>
              <span>${pt}</span>
            </div>
          `).join('')}
        </div>

        <div class="exam-tip-box">
          <span style="font-size: 24px;">💡</span>
          <div>
            <strong>Consejo para el Examen PMP / CAPM:</strong>
            <p>${l.examTip}</p>
          </div>
        </div>
      </div>
    `;

    this.actionBtn.textContent = "¡Comenzar Práctica!";
    this.actionBtn.className = "quiz-action-btn primary";
    this.actionBtn.disabled = false;
  }

  renderQuestion(q) {
    this.hasAnswered = false;
    this.selectedAnswer = null;

    let questionHTML = `
      <div class="question-container">
        <h3 class="question-title">${q.title}</h3>
        ${q.context ? `<div class="question-context">${q.context}</div>` : ''}
    `;

    if (q.type === "single_choice" || q.type === "calculation") {
      questionHTML += `
        <div class="options-grid">
          ${q.options.map((opt, i) => `
            <div class="option-card" data-opt-index="${i}">
              <div class="option-badge">${['A', 'B', 'C', 'D'][i]}</div>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (q.type === "match_pairs") {
      this.matchedPairs = {};
      const lefts = q.pairs.map(p => p.left);
      const rights = [...q.pairs.map(p => p.right)].sort(() => Math.random() - 0.5);

      questionHTML += `
        <div class="match-pairs-container">
          <div class="match-column left-col">
            ${lefts.map((txt, i) => `
              <div class="match-tile left-tile" data-left="${txt}">${txt}</div>
            `).join('')}
          </div>
          <div class="match-column right-col">
            ${rights.map((txt, i) => `
              <div class="match-tile right-tile" data-right="${txt}">${txt}</div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (q.type === "sequence_flow") {
      // Shuffle steps initially
      this.sequenceSteps = [...q.steps].sort(() => Math.random() - 0.5);
      questionHTML += `
        <div class="sequence-flow-container">
          ${this.sequenceSteps.map((step, idx) => `
            <div class="sequence-step-card" data-step-idx="${idx}">
              <div class="step-info">
                <div class="step-num">${idx + 1}</div>
                <span>${step}</span>
              </div>
              <div class="step-controls">
                <button class="step-btn move-up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''}>▲</button>
                <button class="step-btn move-down" data-idx="${idx}" ${idx === this.sequenceSteps.length - 1 ? 'disabled' : ''}>▼</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    questionHTML += `</div>`;
    this.bodyEl.innerHTML = questionHTML;

    this.bindQuestionInteractions(q);

    this.actionBtn.textContent = "Comprobar";
    this.actionBtn.className = "quiz-action-btn primary";
    this.actionBtn.disabled = true;
  }

  bindQuestionInteractions(q) {
    if (q.type === "single_choice" || q.type === "calculation") {
      const cards = this.bodyEl.querySelectorAll(".option-card");
      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (this.hasAnswered) return;
          audio.playPop();
          cards.forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          this.selectedAnswer = parseInt(card.dataset.optIndex, 10);
          this.actionBtn.disabled = false;
        });
      });
    } else if (q.type === "match_pairs") {
      let selectedLeft = null;
      let selectedRight = null;

      const leftTiles = this.bodyEl.querySelectorAll(".left-tile");
      const rightTiles = this.bodyEl.querySelectorAll(".right-tile");

      leftTiles.forEach(tile => {
        tile.addEventListener("click", () => {
          if (tile.classList.contains("matched")) return;
          audio.playPop();
          leftTiles.forEach(t => t.classList.remove("selected"));
          tile.classList.add("selected");
          selectedLeft = tile.dataset.left;
          checkMatch();
        });
      });

      rightTiles.forEach(tile => {
        tile.addEventListener("click", () => {
          if (tile.classList.contains("matched")) return;
          audio.playPop();
          rightTiles.forEach(t => t.classList.remove("selected"));
          tile.classList.add("selected");
          selectedRight = tile.dataset.right;
          checkMatch();
        });
      });

      const checkMatch = () => {
        if (selectedLeft && selectedRight) {
          // Find correct pair
          const pair = q.pairs.find(p => p.left === selectedLeft && p.right === selectedRight);
          if (pair) {
            audio.playCorrect();
            this.matchedPairs[selectedLeft] = selectedRight;
            const lEl = this.bodyEl.querySelector(`.left-tile[data-left="${selectedLeft}"]`);
            const rEl = this.bodyEl.querySelector(`.right-tile[data-right="${selectedRight}"]`);
            lEl.classList.remove("selected");
            rEl.classList.remove("selected");
            lEl.classList.add("matched");
            rEl.classList.add("matched");
          } else {
            audio.playIncorrect();
            const lEl = this.bodyEl.querySelector(`.left-tile[data-left="${selectedLeft}"]`);
            const rEl = this.bodyEl.querySelector(`.right-tile[data-right="${selectedRight}"]`);
            lEl.classList.remove("selected");
            rEl.classList.remove("selected");
          }
          selectedLeft = null;
          selectedRight = null;

          if (Object.keys(this.matchedPairs).length === q.pairs.length) {
            this.actionBtn.disabled = false;
          }
        }
      };
    } else if (q.type === "sequence_flow") {
      this.actionBtn.disabled = false;
      const attachControls = () => {
        this.bodyEl.querySelectorAll(".move-up").forEach(btn => {
          btn.onclick = () => {
            const idx = parseInt(btn.dataset.idx, 10);
            if (idx > 0) {
              audio.playPop();
              const temp = this.sequenceSteps[idx];
              this.sequenceSteps[idx] = this.sequenceSteps[idx - 1];
              this.sequenceSteps[idx - 1] = temp;
              this.reRenderSequence(q);
            }
          };
        });
        this.bodyEl.querySelectorAll(".move-down").forEach(btn => {
          btn.onclick = () => {
            const idx = parseInt(btn.dataset.idx, 10);
            if (idx < this.sequenceSteps.length - 1) {
              audio.playPop();
              const temp = this.sequenceSteps[idx];
              this.sequenceSteps[idx] = this.sequenceSteps[idx + 1];
              this.sequenceSteps[idx + 1] = temp;
              this.reRenderSequence(q);
            }
          };
        });
      };
      attachControls();
    }
  }

  reRenderSequence(q) {
    const container = this.bodyEl.querySelector(".sequence-flow-container");
    container.innerHTML = this.sequenceSteps.map((step, idx) => `
      <div class="sequence-step-card" data-step-idx="${idx}">
        <div class="step-info">
          <div class="step-num">${idx + 1}</div>
          <span>${step}</span>
        </div>
        <div class="step-controls">
          <button class="step-btn move-up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''}>▲</button>
          <button class="step-btn move-down" data-idx="${idx}" ${idx === this.sequenceSteps.length - 1 ? 'disabled' : ''}>▼</button>
        </div>
      </div>
    `).join('');
    this.bindQuestionInteractions(q);
  }

  handleActionClick() {
    if (this.currentStep === 0) {
      // From Theory to Question 1
      this.currentStep = 1;
      this.renderCurrentStep();
      return;
    }

    if (this.currentStep > this.lessonQuestions.length) {
      // From Victory to close
      this.close();
      return;
    }

    if (!this.hasAnswered) {
      // Evaluate Answer
      this.checkCurrentAnswer();
    } else {
      // Continue to next question or victory
      this.currentStep += 1;
      this.renderCurrentStep();
    }
  }

  checkCurrentAnswer() {
    this.hasAnswered = true;
    const q = this.lessonQuestions[this.currentStep - 1];
    let isCorrect = false;

    if (q.type === "single_choice" || q.type === "calculation") {
      isCorrect = (this.selectedAnswer === q.answerIndex);
    } else if (q.type === "match_pairs") {
      isCorrect = Object.keys(this.matchedPairs).length === q.pairs.length;
    } else if (q.type === "sequence_flow") {
      isCorrect = JSON.stringify(this.sequenceSteps) === JSON.stringify(q.steps);
    }

    if (isCorrect) {
      audio.playCorrect();
      stateManager.addXP(10);
      this.showFeedbackDrawer(true, "¡Excelente respuesta!", q.explanation);
    } else {
      audio.playIncorrect();
      stateManager.decrementHeart();
      this.updateHearts();
      this.showFeedbackDrawer(false, "¡Respuesta Incorrecta! Pierdes 1 corazón ❤️", q.explanation);

      if (stateManager.state.hearts <= 0) {
        audio.playHeartLost();
        setTimeout(() => {
          alert("¡Te has quedado sin corazones! Practica en las lecciones previas o espera para recuperarlos.");
          stateManager.refillHearts();
          this.close();
        }, 1500);
      }
    }

    this.actionBtn.textContent = "Continuar";
    this.actionBtn.className = isCorrect ? "quiz-action-btn primary" : "quiz-action-btn danger";
  }

  showFeedbackDrawer(isCorrect, title, desc) {
    this.footerDrawer.className = `quiz-footer-drawer ${isCorrect ? 'correct' : 'incorrect'}`;
    this.feedbackTitle.innerHTML = `${isCorrect ? '🎉' : '⚠️'} ${title}`;
    this.feedbackDesc.textContent = desc;
  }

  hideFeedbackDrawer() {
    this.footerDrawer.className = "quiz-footer-drawer";
    this.feedbackTitle.innerHTML = "";
    this.feedbackDesc.textContent = "";
  }

  renderVictory() {
    audio.playVictory();
    confetti.fire(150);

    const xpEarned = this.currentLesson.xp || 30;
    stateManager.completeLesson(this.currentLesson.id, xpEarned);

    this.bodyEl.innerHTML = `
      <div class="victory-screen">
        <div class="victory-trophy">🏆</div>
        <h2 class="victory-title">¡Lección Completada!</h2>
        <p>Has dominado los conceptos de la Sección ${this.currentLesson.section} del PMBOK 8.</p>

        <div class="victory-stats-grid">
          <div class="v-stat-card">
            <span class="v-stat-val" style="color: var(--duo-yellow);">+${xpEarned}</span>
            <span class="v-stat-lbl">XP Ganados</span>
          </div>
          <div class="v-stat-card">
            <span class="v-stat-val" style="color: #ff9600;">🔥 ${stateManager.state.streak}</span>
            <span class="v-stat-lbl">Días de Racha</span>
          </div>
          <div class="v-stat-card">
            <span class="v-stat-val" style="color: var(--duo-green);">100%</span>
            <span class="v-stat-lbl">Dominio</span>
          </div>
        </div>
      </div>
    `;

    this.actionBtn.textContent = "Finalizar y Continuar";
    this.actionBtn.className = "quiz-action-btn primary";
    this.actionBtn.disabled = false;
  }
}

  




function renderProcessMatrix(containerEl, detailModalEl) {
  let activeDomainFilter = "all";
  let searchQuery = "";

  const renderUI = () => {
    containerEl.innerHTML = `
      <div class="matrix-page-header">
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Matriz Oficial de los 40 Procesos del PMBOK 8</h2>
        <p style="color: var(--md-sys-color-outline); margin-bottom: 20px;">
          Cruce bidimensional no prescriptivo entre los 7 Dominios de Desempeño y las 5 Áreas de Enfoque (Focus Areas).
        </p>
      </div>

      <div class="matrix-controls-bar">
        <div class="search-input-box">
          <span class="icon">🔍</span>
          <input type="text" id="matrix-search" placeholder="Buscar proceso, entrada, salida o técnica..." value="${searchQuery}">
        </div>

        <div class="filter-chips-row">
          <button class="filter-chip ${activeDomainFilter === 'all' ? 'active' : ''}" data-domain="all">Todos (40)</button>
          ${performanceDomains.map(d => `
            <button class="filter-chip ${activeDomainFilter === d.name ? 'active' : ''}" data-domain="${d.name}">${d.name} (${d.processesCount})</button>
          `).join('')}
        </div>
      </div>

      <div class="matrix-table-container">
        <table class="matrix-table">
          <thead>
            <tr>
              <th class="domain-header-cell">Dominio de Desempeño</th>
              ${focusAreas.map(fa => `<th>${fa.name}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${performanceDomains
              .filter(d => activeDomainFilter === "all" || activeDomainFilter === d.name)
              .map(dom => `
                <tr>
                  <td class="domain-header-cell" style="border-left: 6px solid ${dom.color};">
                    <strong style="color: ${dom.color}; font-size: 0.95rem;">${dom.name}</strong>
                    <div style="font-size: 0.72rem; color: var(--md-sys-color-outline);">${dom.nameEn}</div>
                  </td>
                  ${focusAreas.map(fa => {
                    const cellProcesses = processes.filter(p =>
                      p.domain === dom.name &&
                      p.focusArea.toLowerCase().includes(fa.name.toLowerCase().replace('área de enfoque de ', '').replace(' y control', '')) &&
                      (searchQuery === "" ||
                       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.inputs.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
                       p.outputs.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
                       p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
                    );

                    return `
                      <td>
                        ${cellProcesses.map(proc => `
                          <div class="process-chip-card" data-proc-id="${proc.id}" style="--domain-color: ${dom.color};">
                            <span class="process-chip-num">P${proc.number} • ${proc.focusArea}</span>
                            <strong>${proc.name}</strong>
                          </div>
                        `).join('')}
                      </td>
                    `;
                  }).join('')}
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    `;

    // Attach Event Listeners
    const searchInput = containerEl.querySelector("#matrix-search");
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderUI();
      // Keep focus on input
      const newSearch = containerEl.querySelector("#matrix-search");
      newSearch.focus();
      newSearch.setSelectionRange(searchQuery.length, searchQuery.length);
    });

    const filterChips = containerEl.querySelectorAll(".filter-chip");
    filterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        audio.playPop();
        activeDomainFilter = chip.dataset.domain;
        renderUI();
      });
    });

    const procCards = containerEl.querySelectorAll(".process-chip-card");
    procCards.forEach(card => {
      card.addEventListener("click", () => {
        audio.playPop();
        const procId = card.dataset.procId;
        const proc = processes.find(p => p.id === procId);
        if (proc) openProcessDetailModal(proc, detailModalEl);
      });
    });
  };

  renderUI();
}

function openProcessDetailModal(proc, modalEl) {
  modalEl.innerHTML = `
    <div class="quiz-modal-box" style="max-width: 800px;">
      <div class="quiz-header">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--md-sys-color-primary);">
            PROCESO #${proc.number} • ${proc.domain.toUpperCase()} • ${proc.focusArea.toUpperCase()}
          </span>
          <h2 style="font-size: 1.35rem; font-weight: 800;">${proc.name}</h2>
          <span style="font-size: 0.82rem; color: var(--md-sys-color-outline);">${proc.nameEn}</span>
        </div>
        <button class="quiz-close-btn" id="proc-detail-close">✕</button>
      </div>

      <div class="quiz-body" style="padding-bottom: 30px;">
        <div style="background-color: var(--md-sys-color-surface-container-low); padding: 14px; border-radius: var(--md-sys-shape-corner-m); margin-bottom: 20px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--md-sys-color-primary); margin-bottom: 4px;">Propósito Oficial PMBOK 8</h4>
          <p style="font-size: 0.95rem; line-height: 1.45;">${proc.purpose}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <!-- Entradas -->
          <div style="background: var(--md-sys-color-surface-container); padding: 14px; border-radius: var(--md-sys-shape-corner-m); border: 1px solid var(--md-sys-color-outline-variant);">
            <h4 style="color: #0d6efd; font-size: 0.88rem; margin-bottom: 8px;">📥 Entradas (Inputs)</h4>
            <ul style="padding-left: 18px; font-size: 0.82rem; display: flex; flex-direction: column; gap: 4px;">
              ${proc.inputs.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>

          <!-- Herramientas y Técnicas -->
          <div style="background: var(--md-sys-color-surface-container); padding: 14px; border-radius: var(--md-sys-shape-corner-m); border: 1px solid var(--md-sys-color-outline-variant);">
            <h4 style="color: #6f42c1; font-size: 0.88rem; margin-bottom: 8px;">🛠️ Herramientas y Técnicas</h4>
            <ul style="padding-left: 18px; font-size: 0.82rem; display: flex; flex-direction: column; gap: 4px;">
              ${proc.tools.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>

          <!-- Salidas -->
          <div style="background: var(--md-sys-color-surface-container); padding: 14px; border-radius: var(--md-sys-shape-corner-m); border: 1px solid var(--md-sys-color-outline-variant);">
            <h4 style="color: #198754; font-size: 0.88rem; margin-bottom: 8px;">📤 Salidas (Outputs)</h4>
            <ul style="padding-left: 18px; font-size: 0.82rem; display: flex; flex-direction: column; gap: 4px;">
              ${proc.outputs.map(o => `<li>${o}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Adaptación y PMP Tip -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="background-color: var(--md-sys-color-surface-container-high); padding: 14px; border-radius: var(--md-sys-shape-corner-m);">
            <strong>🔄 Adaptación (Tailoring) Ágil vs Predictivo:</strong>
            <p style="font-size: 0.88rem; margin-top: 4px; color: var(--md-sys-color-on-surface-variant);">${proc.tailoring}</p>
          </div>

          <div class="exam-tip-box">
            <span style="font-size: 22px;">💡</span>
            <div>
              <strong>Consejo de Examen PMP v8:</strong>
              <p style="font-size: 0.88rem; margin-top: 2px;">${proc.examTip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modalEl.classList.add("active");
  modalEl.querySelector("#proc-detail-close").onclick = () => {
    modalEl.classList.remove("active");
  };
}

  

function renderEVMLab(containerEl) {
  let BAC = 100000;
  let PV = 50000;
  let EV = 45000;
  let AC = 48000;

  const updateCalculations = () => {
    const CV = EV - AC;
    const SV = EV - PV;
    const CPI = AC > 0 ? (EV / AC) : 1;
    const SPI = PV > 0 ? (EV / PV) : 1;
    const EAC = CPI > 0 ? (BAC / CPI) : BAC;
    const ETC = Math.max(0, EAC - AC);
    const VAC = BAC - EAC;
    const TCPI = (BAC - AC) > 0 ? ((BAC - EV) / (BAC - AC)) : 1;

    let statusType = "warning";
    let statusMsg = "Proyecto en estado de atención";

    if (CPI >= 1.0 && SPI >= 1.0) {
      statusType = "healthy";
      statusMsg = "🎉 ¡Proyecto Excelente! Por debajo del presupuesto y adelantado en cronograma.";
    } else if (CPI < 0.9 && SPI < 0.9) {
      statusType = "critical";
      statusMsg = "🚨 ¡Alerta Crítica! Sobrecosto severo y retraso en el cronograma.";
    } else if (CPI < 1.0 && SPI >= 1.0) {
      statusType = "warning";
      statusMsg = "⚠️ Adelantado en cronograma pero con sobrecosto financiero.";
    } else if (CPI >= 1.0 && SPI < 1.0) {
      statusType = "warning";
      statusMsg = "⚠️ Eficiente en costos pero retrasado en el cronograma.";
    }

    return { CV, SV, CPI, SPI, EAC, ETC, VAC, TCPI, statusType, statusMsg };
  };

  const render = () => {
    const calc = updateCalculations();

    containerEl.innerHTML = `
      <div class="evm-page-header" style="margin-bottom: 24px;">
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Laboratorio Interactivo de Valor Ganado (EVM)</h2>
        <p style="color: var(--md-sys-color-outline);">
          Simulador oficial según la Tabla 5-1 del PMBOK 8. Modifica las variables o carga escenarios para dominar los cálculos del PMP.
        </p>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
        <button class="filter-chip" id="preset-healthy">🌟 Caso: Saludable</button>
        <button class="filter-chip" id="preset-crisis">🚨 Caso: En Crisis</button>
        <button class="filter-chip" id="preset-fast-costly">⚡ Caso: Rápido pero Costoso</button>
        <button class="filter-chip" id="preset-slow-cheap">🐢 Caso: Lento pero Ahorrativo</button>
      </div>

      <div class="evm-lab-grid">
        <!-- Panel Izquierdo: Controles -->
        <div class="evm-controls-panel">
          <h3 style="font-size: 1.1rem; font-weight: 800;">Variables Base del Proyecto</h3>

          <div class="slider-group">
            <div class="slider-header">
              <span>BAC (Presupuesto Total)</span>
              <span class="slider-value" id="val-bac">$${BAC.toLocaleString()}</span>
            </div>
            <input type="range" class="range-slider" id="slider-bac" min="10000" max="500000" step="5000" value="${BAC}">
          </div>

          <div class="slider-group">
            <div class="slider-header">
              <span>PV (Valor Planificado a hoy)</span>
              <span class="slider-value" id="val-pv">$${PV.toLocaleString()}</span>
            </div>
            <input type="range" class="range-slider" id="slider-pv" min="5000" max="${BAC}" step="1000" value="${PV}">
          </div>

          <div class="slider-group">
            <div class="slider-header">
              <span>EV (Valor Ganado a hoy)</span>
              <span class="slider-value" id="val-ev">$${EV.toLocaleString()}</span>
            </div>
            <input type="range" class="range-slider" id="slider-ev" min="0" max="${BAC}" step="1000" value="${EV}">
          </div>

          <div class="slider-group">
            <div class="slider-header">
              <span>AC (Costo Real gastado a hoy)</span>
              <span class="slider-value" id="val-ac">$${AC.toLocaleString()}</span>
            </div>
            <input type="range" class="range-slider" id="slider-ac" min="1000" max="${BAC * 1.5}" step="1000" value="${AC}">
          </div>
        </div>

        <!-- Panel Derecho: Métricas y Diagnóstico -->
        <div class="evm-metrics-panel">
          <div class="status-callout-card ${calc.statusType}">
            <span>${calc.statusMsg}</span>
          </div>

          <div class="evm-cards-grid">
            <!-- CV -->
            <div class="evm-card">
              <span class="evm-card-title">Variación Costo (CV = EV - AC)</span>
              <span class="evm-card-val" style="color: ${calc.CV >= 0 ? 'var(--duo-green)' : 'var(--duo-red)'};">
                ${calc.CV >= 0 ? '+' : ''}$${Math.round(calc.CV).toLocaleString()}
              </span>
              <span class="evm-card-sub">${calc.CV >= 0 ? 'Ahorro presupuestario' : 'Sobrecosto'}</span>
            </div>

            <!-- SV -->
            <div class="evm-card">
              <span class="evm-card-title">Variación Cronograma (SV = EV - PV)</span>
              <span class="evm-card-val" style="color: ${calc.SV >= 0 ? 'var(--duo-green)' : 'var(--duo-red)'};">
                ${calc.SV >= 0 ? '+' : ''}$${Math.round(calc.SV).toLocaleString()}
              </span>
              <span class="evm-card-sub">${calc.SV >= 0 ? 'Adelantado' : 'Atrasado'}</span>
            </div>

            <!-- CPI -->
            <div class="evm-card">
              <span class="evm-card-title">Índice Costo (CPI = EV / AC)</span>
              <span class="evm-card-val" style="color: ${calc.CPI >= 1 ? 'var(--duo-green)' : 'var(--duo-red)'};">
                ${calc.CPI.toFixed(2)}
              </span>
              <span class="evm-card-sub">${calc.CPI >= 1 ? 'Eficiente (> 1.0)' : 'Ineficiente (< 1.0)'}</span>
            </div>

            <!-- SPI -->
            <div class="evm-card">
              <span class="evm-card-title">Índice Cronograma (SPI = EV / PV)</span>
              <span class="evm-card-val" style="color: ${calc.SPI >= 1 ? 'var(--duo-green)' : 'var(--duo-red)'};">
                ${calc.SPI.toFixed(2)}
              </span>
              <span class="evm-card-sub">${calc.SPI >= 1 ? 'Ritmo Rápido (> 1.0)' : 'Ritmo Lento (< 1.0)'}</span>
            </div>

            <!-- EAC -->
            <div class="evm-card">
              <span class="evm-card-title">Estimación al Concluir (EAC)</span>
              <span class="evm-card-val">$${Math.round(calc.EAC).toLocaleString()}</span>
              <span class="evm-card-sub">Pronóstico final del costo</span>
            </div>

            <!-- VAC -->
            <div class="evm-card">
              <span class="evm-card-title">Variación al Concluir (VAC)</span>
              <span class="evm-card-val" style="color: ${calc.VAC >= 0 ? 'var(--duo-green)' : 'var(--duo-red)'};">
                ${calc.VAC >= 0 ? '+' : ''}$${Math.round(calc.VAC).toLocaleString()}
              </span>
              <span class="evm-card-sub">${calc.VAC >= 0 ? 'Superávit final' : 'Déficit final'}</span>
            </div>

            <!-- TCPI -->
            <div class="evm-card">
              <span class="evm-card-title">Eficiencia Requerida (TCPI)</span>
              <span class="evm-card-val">${calc.TCPI.toFixed(2)}</span>
              <span class="evm-card-sub">${calc.TCPI <= 1 ? 'Meta alcanzable' : 'Exige mayor esfuerzo'}</span>
            </div>
          </div>

          <!-- S-Curve Dynamic Chart SVG -->
          <div class="evm-chart-container">
            <h4 style="font-size: 0.95rem; font-weight: 800;">Curva S de Desempeño Acumulado</h4>
            <div style="width: 100%; height: 180px; position: relative;">
              <svg width="100%" height="100%" viewBox="0 0 500 180" style="overflow: visible;">
                <!-- Grid Lines -->
                <line x1="40" y1="20" x2="480" y2="20" stroke="var(--md-sys-color-outline-variant)" stroke-dasharray="4" />
                <line x1="40" y1="90" x2="480" y2="90" stroke="var(--md-sys-color-outline-variant)" stroke-dasharray="4" />
                <line x1="40" y1="160" x2="480" y2="160" stroke="var(--md-sys-color-outline-variant)" />

                <!-- Axes labels -->
                <text x="35" y="24" fill="var(--md-sys-color-outline)" font-size="10" text-anchor="end">BAC</text>
                <text x="35" y="94" fill="var(--md-sys-color-outline)" font-size="10" text-anchor="end">50%</text>
                <text x="35" y="164" fill="var(--md-sys-color-outline)" font-size="10" text-anchor="end">$0</text>
                <text x="260" y="176" fill="var(--md-sys-color-outline)" font-size="10" text-anchor="middle">Fecha de Corte (Hoy)</text>

                <!-- Curves -->
                <!-- Planned Value PV (Blue) -->
                <path d="M 40 160 Q 150 140, 260 ${160 - (PV / BAC) * 140} T 480 20" fill="none" stroke="#0d6efd" stroke-width="3" stroke-dasharray="3" />
                <!-- Earned Value EV (Green) -->
                <path d="M 40 160 Q 150 145, 260 ${160 - (EV / BAC) * 140}" fill="none" stroke="#198754" stroke-width="4" />
                <!-- Actual Cost AC (Red) -->
                <path d="M 40 160 Q 150 135, 260 ${160 - (AC / BAC) * 140}" fill="none" stroke="#dc3545" stroke-width="3" />

                <!-- Legend -->
                <circle cx="280" cy="20" r="4" fill="#0d6efd" />
                <text x="290" y="23" fill="var(--md-sys-color-on-surface)" font-size="11">PV (Plan)</text>

                <circle cx="350" cy="20" r="4" fill="#198754" />
                <text x="360" y="23" fill="var(--md-sys-color-on-surface)" font-size="11">EV (Ganado)</text>

                <circle cx="430" cy="20" r="4" fill="#dc3545" />
                <text x="440" y="23" fill="var(--md-sys-color-on-surface)" font-size="11">AC (Real)</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;

    // Sliders
    const sBac = containerEl.querySelector("#slider-bac");
    const sPv = containerEl.querySelector("#slider-pv");
    const sEv = containerEl.querySelector("#slider-ev");
    const sAc = containerEl.querySelector("#slider-ac");

    sBac.oninput = (e) => { BAC = parseInt(e.target.value); render(); };
    sPv.oninput = (e) => { PV = parseInt(e.target.value); render(); };
    sEv.oninput = (e) => { EV = parseInt(e.target.value); render(); };
    sAc.oninput = (e) => { AC = parseInt(e.target.value); render(); };

    // Presets
    containerEl.querySelector("#preset-healthy").onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 50000; EV = 60000; AC = 52000; render();
    };
    containerEl.querySelector("#preset-crisis").onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 60000; EV = 40000; AC = 55000; render();
    };
    containerEl.querySelector("#preset-fast-costly").onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 45000; EV = 55000; AC = 65000; render();
    };
    containerEl.querySelector("#preset-slow-cheap").onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 60000; EV = 48000; AC = 42000; render();
    };
  };

  render();
}

  




function renderPMPSimulator(containerEl) {
  let examActive = false;
  let examQuestions = [];
  let userAnswers = {};
  let flaggedQuestions = new Set();
  let currentQIdx = 0;
  let timerInterval = null;
  let remainingSeconds = 0;

  const startExam = (qCount, durationMin) => {
    audio.playPop();
    // Shuffle and pick qCount
    const pool = questions.filter(q => q.type === "single_choice" || q.type === "calculation");
    examQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(qCount, pool.length));
    userAnswers = {};
    flaggedQuestions = new Set();
    currentQIdx = 0;
    remainingSeconds = durationMin * 60;
    examActive = true;

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remainingSeconds -= 1;
      const tEl = containerEl.querySelector("#exam-timer-display");
      if (tEl) {
        const mins = Math.floor(remainingSeconds / 60);
        const secs = remainingSeconds % 60;
        tEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (remainingSeconds <= 120) {
          tEl.style.color = "var(--duo-red)";
        }
      }
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        finishExam();
      }
    }, 1000);

    renderExamView();
  };

  const renderHome = () => {
    examActive = false;
    if (timerInterval) clearInterval(timerInterval);

    containerEl.innerHTML = `
      <div class="sim-hero-card">
        <div>
          <span style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 99px; font-weight: 700; font-size: 0.8rem;">
            CERTIFICACIÓN OFICIAL PMP / CAPM
          </span>
          <h2 style="font-size: 1.8rem; font-weight: 900; margin: 8px 0;">Simulador Situacional PMBOK 8va Edición</h2>
          <p style="opacity: 0.9; max-width: 600px;">
            Enfréntate a preguntas situacionales de juicio profesional. Practica bajo presión de tiempo con retroalimentación alineada a los 7 dominios y 6 principios.
          </p>
        </div>
        <div style="font-size: 64px;">🎓</div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 16px;">Selecciona tu Modo de Simulacro:</h3>

      <div class="sim-modes-grid">
        <div class="sim-mode-card" data-count="10" data-time="15">
          <span style="font-size: 32px;">⚡</span>
          <h3>Simulacro Rápido</h3>
          <p>10 preguntas situacionales aleatorias. Ideal para una sesión de 15 minutos en el receso o transporte.</p>
          <button class="start-sim-btn">Iniciar (15 min)</button>
        </div>

        <div class="sim-mode-card" data-count="20" data-time="30">
          <span style="font-size: 32px;">⏱️</span>
          <h3>Simulacro Estándar</h3>
          <p>20 preguntas con cobertura de los 7 dominios. Excelente para medir tu nivel de preparación general.</p>
          <button class="start-sim-btn">Iniciar (30 min)</button>
        </div>

        <div class="sim-mode-card" data-count="27" data-time="45">
          <span style="font-size: 32px;">🏆</span>
          <h3>Examen Completo Banco</h3>
          <p>Todas las preguntas disponibles sin descanso. Pon a prueba tu concentración y resistencia.</p>
          <button class="start-sim-btn">Iniciar (45 min)</button>
        </div>
      </div>
    `;

    containerEl.querySelectorAll(".sim-mode-card").forEach(card => {
      card.onclick = () => {
        const count = parseInt(card.dataset.count, 10);
        const time = parseInt(card.dataset.time, 10);
        startExam(count, time);
      };
    });
  };

  const renderExamView = () => {
    const q = examQuestions[currentQIdx];
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const isFlagged = flaggedQuestions.has(currentQIdx);
    const answeredCount = Object.keys(userAnswers).length;

    containerEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <div>
          <button class="icon-button" id="exit-exam-btn" style="width: auto; padding: 0 16px; border-radius: var(--md-sys-shape-corner-full);">
            ✕ Abandonar Examen
          </button>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="font-weight: 800; font-size: 1.15rem; background: var(--md-sys-color-surface-container-high); padding: 6px 16px; border-radius: 99px;">
            ⏱️ <span id="exam-timer-display">${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}</span>
          </div>
          <button class="quiz-action-btn primary" id="finish-exam-now-btn" style="padding: 8px 18px; font-size: 0.9rem;">
            Entregar Examen (${answeredCount}/${examQuestions.length})
          </button>
        </div>
      </div>

      <!-- Question Navigator Bar -->
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 24px; padding: 12px; background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-m);">
        ${examQuestions.map((_, i) => {
          let bg = "var(--md-sys-color-surface-container-highest)";
          let color = "var(--md-sys-color-on-surface)";
          if (i === currentQIdx) { bg = "var(--md-sys-color-primary)"; color = "white"; }
          else if (flaggedQuestions.has(i)) { bg = "#ffc107"; color = "#332500"; }
          else if (userAnswers[i] !== undefined) { bg = "var(--duo-green)"; color = "white"; }

          return `
            <button class="q-nav-pill" data-idx="${i}" style="width: 32px; height: 32px; border-radius: 50%; border: none; font-weight: 800; cursor: pointer; background: ${bg}; color: ${color};">
              ${i + 1}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Question Card -->
      <div class="question-container" style="background: var(--md-sys-color-surface-container); padding: 24px; border-radius: var(--md-sys-shape-corner-xl); border: 1px solid var(--md-sys-color-outline-variant);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--md-sys-color-primary);">
            PREGUNTA ${currentQIdx + 1} DE ${examQuestions.length}
          </span>
          <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 700;">
            <input type="checkbox" id="flag-check" ${isFlagged ? 'checked' : ''}>
            🚩 Marcar para revisar después
          </label>
        </div>

        <h3 class="question-title">${q.title}</h3>
        ${q.context ? `<div class="question-context">${q.context}</div>` : ''}

        <div class="options-grid">
          ${q.options.map((opt, i) => `
            <div class="option-card ${userAnswers[currentQIdx] === i ? 'selected' : ''}" data-opt-idx="${i}">
              <div class="option-badge">${['A', 'B', 'C', 'D'][i]}</div>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
          <button class="quiz-action-btn" id="prev-q-btn" style="background: var(--md-sys-color-surface-container-highest);" ${currentQIdx === 0 ? 'disabled' : ''}>
            ◀ Anterior
          </button>
          <button class="quiz-action-btn primary" id="next-q-btn">
            ${currentQIdx === examQuestions.length - 1 ? 'Revisar / Finalizar' : 'Siguiente ▶'}
          </button>
        </div>
      </div>
    `;

    // Interactions
    containerEl.querySelector("#exit-exam-btn").onclick = () => {
      if (confirm("¿Estás seguro de que deseas salir del examen? Se perderán las respuestas.")) renderHome();
    };

    containerEl.querySelector("#finish-exam-now-btn").onclick = () => {
      const unanswered = examQuestions.length - Object.keys(userAnswers).length;
      if (unanswered > 0) {
        if (confirm(`Tienes ${unanswered} preguntas sin responder. ¿Deseas entregar el examen ahora?`)) finishExam();
      } else {
        finishExam();
      }
    };

    containerEl.querySelectorAll(".q-nav-pill").forEach(p => {
      p.onclick = () => {
        currentQIdx = parseInt(p.dataset.idx, 10);
        renderExamView();
      };
    });

    containerEl.querySelector("#flag-check").onchange = (e) => {
      if (e.target.checked) flaggedQuestions.add(currentQIdx);
      else flaggedQuestions.delete(currentQIdx);
      renderExamView();
    };

    containerEl.querySelectorAll(".option-card").forEach(card => {
      card.onclick = () => {
        audio.playPop();
        const opt = parseInt(card.dataset.optIdx, 10);
        userAnswers[currentQIdx] = opt;
        renderExamView();
      };
    });

    const prevBtn = containerEl.querySelector("#prev-q-btn");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (currentQIdx > 0) {
          currentQIdx -= 1;
          renderExamView();
        }
      };
    }

    const nextBtn = containerEl.querySelector("#next-q-btn");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (currentQIdx < examQuestions.length - 1) {
          currentQIdx += 1;
          renderExamView();
        } else {
          finishExam();
        }
      };
    }
  };

  const finishExam = () => {
    if (timerInterval) clearInterval(timerInterval);

    let correctCount = 0;
    examQuestions.forEach((q, i) => {
      if (userAnswers[i] === q.answerIndex) correctCount += 1;
    });

    const percent = Math.round((correctCount / examQuestions.length) * 100);
    const passed = percent >= 75;

    if (passed) {
      audio.playVictory();
      confetti.fire(160);
      stateManager.addXP(correctCount * 15);
    } else {
      audio.playIncorrect();
    }

    containerEl.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto; padding-bottom: 60px;">
        <div style="background: var(--md-sys-color-surface-container); padding: 32px; border-radius: var(--md-sys-shape-corner-xl); text-align: center; margin-bottom: 28px; border: 2px solid ${passed ? 'var(--duo-green)' : 'var(--duo-red)'};">
          <div style="font-size: 64px;">${passed ? '🎉' : '📚'}</div>
          <h2 style="font-size: 1.8rem; font-weight: 900; color: ${passed ? 'var(--duo-green)' : 'var(--duo-red)'};">
            ${passed ? '¡Aprobado! Nivel PMP Alcanzado' : 'Necesitas Más Práctica'}
          </h2>
          <div style="font-size: 3.5rem; font-weight: 900; margin: 12px 0;">${percent}%</div>
          <p style="color: var(--md-sys-color-outline); font-weight: 700;">
            ${correctCount} de ${examQuestions.length} preguntas correctas (Umbral de aprobación: 75%)
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; margin-top: 20px;">
            <button class="quiz-action-btn primary" id="retake-sim-btn">Tomar Otro Simulacro</button>
          </div>
        </div>

        <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 16px;">Revisión Detallada de Preguntas:</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${examQuestions.map((q, i) => {
            const userChoice = userAnswers[i];
            const isQCorrect = userChoice === q.answerIndex;
            return `
              <div style="background: var(--md-sys-color-surface-container); padding: 18px; border-radius: var(--md-sys-shape-corner-m); border-left: 6px solid ${isQCorrect ? 'var(--duo-green)' : 'var(--duo-red)'};">
                <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">
                  <span>Pregunta #${i + 1} • ${q.sectionRef}</span>
                  <span style="color: ${isQCorrect ? 'var(--duo-green)' : 'var(--duo-red)'};">
                    ${isQCorrect ? '✓ Correcta' : '✗ Incorrecta'}
                  </span>
                </div>
                <h4 style="font-size: 1rem; margin-bottom: 8px;">${q.title}</h4>
                <div style="font-size: 0.88rem; margin-bottom: 8px;">
                  <strong>Tu respuesta:</strong> ${userChoice !== undefined ? q.options[userChoice] : '<em>No respondida</em>'}
                </div>
                ${!isQCorrect ? `
                  <div style="font-size: 0.88rem; color: var(--duo-green); margin-bottom: 8px;">
                    <strong>Respuesta correcta:</strong> ${q.options[q.answerIndex]}
                  </div>
                ` : ''}
                <div style="background: var(--md-sys-color-surface-container-low); padding: 10px; border-radius: 8px; font-size: 0.82rem; line-height: 1.4; color: var(--md-sys-color-on-surface-variant);">
                  <strong>Explicación PMBOK 8:</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    containerEl.querySelector("#retake-sim-btn").onclick = () => renderHome();
  };

  renderHome();
}

  


function renderFlashcardsAndGlossary(containerEl) {
  let activeTab = "flashcards"; // 'flashcards' | 'glossary'
  let currentCardIdx = 0;
  let isFlipped = false;
  let searchQuery = "";
  let activeCategory = "all";

  const categories = ["all", ...new Set(glossary.map(g => g.category))];

  const render = () => {
    containerEl.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Glosario Oficial y Flashcards 3D</h2>
        <p style="color: var(--md-sys-color-outline);">
          Memoriza términos críticos para el examen con tarjetas de repetición espaciada o consulta definiciones instantáneas.
        </p>
      </div>

      <div style="display: flex; gap: 8px; margin-bottom: 28px;">
        <button class="quiz-action-btn ${activeTab === 'flashcards' ? 'primary' : ''}" id="tab-flashcards" style="${activeTab !== 'flashcards' ? 'background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface);' : ''}">
          🃏 Modo Flashcards (${glossary.length})
        </button>
        <button class="quiz-action-btn ${activeTab === 'glossary' ? 'primary' : ''}" id="tab-glossary" style="${activeTab !== 'glossary' ? 'background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface);' : ''}">
          📖 Diccionario de Términos
        </button>
      </div>

      <div id="flashcards-content-area"></div>
    `;

    containerEl.querySelector("#tab-flashcards").onclick = () => {
      audio.playPop();
      activeTab = "flashcards";
      render();
    };

    containerEl.querySelector("#tab-glossary").onclick = () => {
      audio.playPop();
      activeTab = "glossary";
      render();
    };

    const area = containerEl.querySelector("#flashcards-content-area");
    if (activeTab === "flashcards") {
      renderFlashcardsMode(area);
    } else {
      renderGlossaryMode(area);
    }
  };

  const renderFlashcardsMode = (area) => {
    const card = glossary[currentCardIdx];

    area.innerHTML = `
      <div class="flashcard-section">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--md-sys-color-outline);">
          TARJETA ${currentCardIdx + 1} DE ${glossary.length}
        </div>

        <div class="flashcard-scene" id="active-card-scene">
          <div class="flashcard-inner ${isFlipped ? 'is-flipped' : ''}" id="active-card-inner">
            <!-- Front -->
            <div class="flashcard-face flashcard-front">
              <span style="background: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; margin-bottom: 16px;">
                ${card.category.toUpperCase()}
              </span>
              <h3>${card.term}</h3>
              <p style="font-size: 0.82rem; color: var(--md-sys-color-outline); margin-top: 16px;">
                🔄 Toca o haz clic para ver la definición
              </p>
            </div>

            <!-- Back -->
            <div class="flashcard-face flashcard-back">
              <span style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 8px;">Definición PMBOK 8:</span>
              <p>${card.def}</p>
              <span style="font-size: 0.8rem; margin-top: 16px; opacity: 0.7;">🔄 Clic para voltear</span>
            </div>
          </div>
        </div>

        <div class="flashcard-actions">
          <button class="rating-btn hard" id="btn-hard">Difícil 🙁</button>
          <button class="rating-btn medium" id="btn-med">Regular 😐</button>
          <button class="rating-btn easy" id="btn-easy">Fácil / Dominado 😊</button>
        </div>
      </div>
    `;

    const scene = area.querySelector("#active-card-scene");
    scene.onclick = () => {
      audio.playPop();
      isFlipped = !isFlipped;
      area.querySelector("#active-card-inner").classList.toggle("is-flipped", isFlipped);
    };

    const nextCard = () => {
      isFlipped = false;
      currentCardIdx = (currentCardIdx + 1) % glossary.length;
      renderFlashcardsMode(area);
    };

    area.querySelector("#btn-hard").onclick = () => { audio.playIncorrect(); nextCard(); };
    area.querySelector("#btn-med").onclick = () => { audio.playPop(); nextCard(); };
    area.querySelector("#btn-easy").onclick = () => { audio.playCorrect(); nextCard(); };
  };

  const renderGlossaryMode = (area) => {
    const filtered = glossary.filter(g =>
      (activeCategory === "all" || g.category === activeCategory) &&
      (searchQuery === "" ||
       g.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
       g.def.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
        <div class="search-input-box">
          <span class="icon">🔍</span>
          <input type="text" id="glossary-search" placeholder="Buscar término..." value="${searchQuery}">
        </div>

        <div class="filter-chips-row">
          ${categories.map(c => `
            <button class="filter-chip ${activeCategory === c ? 'active' : ''}" data-cat="${c}">
              ${c === 'all' ? 'Todos los términos' : c}
            </button>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${filtered.map(item => `
          <div style="background: var(--md-sys-color-surface-container); padding: 16px 20px; border-radius: var(--md-sys-shape-corner-m); border: 1px solid var(--md-sys-color-outline-variant);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="font-size: 1.05rem; color: var(--md-sys-color-primary);">${item.term}</strong>
              <span style="font-size: 0.75rem; background: var(--md-sys-color-surface-container-high); padding: 2px 8px; border-radius: 99px; font-weight: 700;">
                ${item.category}
              </span>
            </div>
            <p style="font-size: 0.92rem; line-height: 1.45; color: var(--md-sys-color-on-surface-variant);">${item.def}</p>
          </div>
        `).join('')}
      </div>
    `;

    const input = area.querySelector("#glossary-search");
    input.oninput = (e) => {
      searchQuery = e.target.value;
      renderGlossaryMode(area);
      const newInput = area.querySelector("#glossary-search");
      newInput.focus();
      newInput.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    area.querySelectorAll(".filter-chip").forEach(chip => {
      chip.onclick = () => {
        audio.playPop();
        activeCategory = chip.dataset.cat;
        renderGlossaryMode(area);
      };
    });
  };

  render();
}

  


function renderAppendicesView(containerEl) {
  let activeTab = "x3_ai"; // Default to the hottest new topic in PMBOK 8

  const render = () => {
    const appData = appendices[activeTab];

    containerEl.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Nuevas Fronteras y Apéndices del PMBOK 8</h2>
        <p style="color: var(--md-sys-color-outline);">
          Profundiza en los 4 apéndices especializados: Inteligencia Artificial, PMO Moderna, Adquisiciones y Evolución Histórica.
        </p>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px;">
        <button class="filter-chip ${activeTab === 'x3_ai' ? 'active' : ''}" data-tab="x3_ai">🤖 Apéndice X3: Inteligencia Artificial</button>
        <button class="filter-chip ${activeTab === 'x2_pmo' ? 'active' : ''}" data-tab="x2_pmo">🏢 Apéndice X2: Oficinas de Proyectos (PMO)</button>
        <button class="filter-chip ${activeTab === 'x4_procurement' ? 'active' : ''}" data-tab="x4_procurement">📑 Apéndice X4: Adquisiciones (Procurement)</button>
        <button class="filter-chip ${activeTab === 'x5_evolution' ? 'active' : ''}" data-tab="x5_evolution">📜 Apéndice X5: Evolución Histórica PMBOK</button>
      </div>

      <div style="background: var(--md-sys-color-surface-container); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-xl); padding: 28px;">
        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 1.4rem; font-weight: 900; color: var(--md-sys-color-primary); margin-bottom: 8px;">
            ${appData.title}
          </h3>
          <p style="font-size: 1.05rem; line-height: 1.5; color: var(--md-sys-color-on-surface);">
            ${appData.summary}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 18px;">
          ${appData.topics.map((t, idx) => `
            <div style="background: var(--md-sys-color-surface-container-low); padding: 18px 22px; border-radius: var(--md-sys-shape-corner-m); border-left: 5px solid var(--md-sys-color-primary);">
              <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">${t.subtitle}</h4>
              <p style="font-size: 0.95rem; line-height: 1.5; color: var(--md-sys-color-on-surface-variant);">${t.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    containerEl.querySelectorAll(".filter-chip").forEach(chip => {
      chip.onclick = () => {
        audio.playPop();
        activeTab = chip.dataset.tab;
        render();
      };
    });
  };

  render();
}


  









document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State & DOM bindings
  const lessonModal = document.getElementById("lesson-modal");
  const detailModal = document.getElementById("detail-modal");
  const quizEngine = new QuizEngine(lessonModal);

  // Stats header elements
  const heartsVal = document.getElementById("header-hearts-val");
  const streakVal = document.getElementById("header-streak-val");
  const xpVal = document.getElementById("header-xp-val");
  const themeToggle = document.getElementById("theme-toggle-btn");
  const soundToggle = document.getElementById("sound-toggle-btn");
  const refillHeartsBtn = document.getElementById("refill-hearts-btn");

  // Rank in side rail
  const rankTitle = document.getElementById("rail-rank-title");
  const rankLevel = document.getElementById("rail-rank-level");
  const rankXpFill = document.getElementById("rail-xp-fill");
  const rankXpText = document.getElementById("rail-xp-text");

  // Page Views
  const views = {
    learn: document.getElementById("view-learn"),
    matrix: document.getElementById("view-matrix"),
    evm: document.getElementById("view-evm"),
    simulator: document.getElementById("view-simulator"),
    flashcards: document.getElementById("view-flashcards"),
    appendices: document.getElementById("view-appendices")
  };

  const navItems = document.querySelectorAll(".nav-item");

  let currentView = "learn";

  // 2. State update subscription
  const updateHeaderStats = (state) => {
    if (heartsVal) heartsVal.textContent = state.hearts;
    if (streakVal) streakVal.textContent = state.streak;
    if (xpVal) xpVal.textContent = state.xp;

    const rank = stateManager.getRank();
    if (rankTitle) rankTitle.textContent = rank.title;
    if (rankLevel) rankLevel.textContent = `NIVEL ${rank.level}`;
    if (rankXpFill) rankXpFill.style.width = `${rank.progressPercent}%`;
    if (rankXpText) rankXpText.textContent = `${rank.currentXP} / ${rank.nextXP} XP`;

    // Apply theme
    document.documentElement.setAttribute("data-theme", state.theme);
    if (themeToggle) {
      themeToggle.textContent = state.theme === "dark" ? "☀️" : "🌙";
    }

    // Audio state
    audio.enabled = state.soundEnabled;
    if (soundToggle) {
      soundToggle.textContent = state.soundEnabled ? "🔊" : "🔇";
    }
  };

  stateManager.subscribe(updateHeaderStats);

  // 3. Navigation Switcher
  const switchView = (targetView) => {
    currentView = targetView;
    navItems.forEach(item => {
      item.classList.toggle("active", item.dataset.view === targetView);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.toggle("active", key === targetView);
      }
    });

    // Render active view
    if (targetView === "learn") {
      renderSkillTree(views.learn, (lesson, unit, part) => {
        quizEngine.startLesson(lesson, unit, part);
      });
    } else if (targetView === "matrix") {
      renderProcessMatrix(views.matrix, detailModal);
    } else if (targetView === "evm") {
      renderEVMLab(views.evm);
    } else if (targetView === "simulator") {
      renderPMPSimulator(views.simulator);
    } else if (targetView === "flashcards") {
      renderFlashcardsAndGlossary(views.flashcards);
    } else if (targetView === "appendices") {
      renderAppendicesView(views.appendices);
    }
  };

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      audio.playPop();
      switchView(item.dataset.view);
    });
  });

  // 4. Action buttons
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      audio.playPop();
      const newTheme = stateManager.state.theme === "dark" ? "light" : "dark";
      stateManager.state.theme = newTheme;
      stateManager.save();
    });
  }

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      const enabled = audio.toggle();
      stateManager.state.soundEnabled = enabled;
      stateManager.save();
    });
  }

  if (refillHeartsBtn) {
    refillHeartsBtn.addEventListener("click", () => {
      audio.playVictory();
      stateManager.refillHearts();
      alert("❤️ ¡Tus corazones han sido recargados a 5!");
    });
  }

  // 5. Initial Render
  switchView("learn");
  console.log("PMBOK 8th Edition Interactive Learning Platform Initialized Successfully!");
});

})();
