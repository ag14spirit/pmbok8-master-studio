import json, os

print("Writing comprehensive PMBOK 8 database...")

# Ensure directories exist
os.makedirs("js/data", exist_ok=True)

# 1. CURRICULUM
curriculum_data = {
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
}

# Write curriculum.js
with open("js/data/curriculum.js", "w", encoding="utf-8") as f:
    f.write("// PMBOK 8th Edition Complete Curriculum Structure\n")
    f.write("export const curriculum = " + json.dumps(curriculum_data, indent=2, ensure_ascii=False) + ";\n")

print("Curriculum data written successfully!")
