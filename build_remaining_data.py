import json

# 3. THE 6 PRINCIPLES
principles_data = [
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
        "connectedDomains": ["Gobernanza", "Alcance", "Cronograma", "Finanzas", "Interesados", "Recursos", "Riesgo"],
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
        "connectedDomains": ["Gobernanza", "Alcance", "Finanzas", "Interesados"],
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
        "connectedDomains": ["Gobernanza", "Alcance", "Recursos"],
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
        "connectedDomains": ["Gobernanza", "Recursos", "Interesados"],
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
        "connectedDomains": ["Gobernanza", "Alcance", "Finanzas", "Recursos", "Riesgo"],
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
        "connectedDomains": ["Recursos", "Interesados", "Gobernanza"],
        "evolution": "Evolución y refinamiento de 'Crear un Entorno Colaborativo para el Equipo del Proyecto' de la 7ma edición."
    }
]

with open("js/data/principles.js", "w", encoding="utf-8") as f:
    f.write("// The 6 Refined Principles of PMBOK 8th Edition\n")
    f.write("export const principles = " + json.dumps(principles_data, indent=2, ensure_ascii=False) + ";\n")

# 4. THE 5 FOCUS AREAS
focus_areas_data = [
    {
        "id": "fa-init",
        "name": "Área de Enfoque de Iniciación",
        "nameEn": "Initiating Focus Area",
        "section": "4.5.1",
        "processesCount": 2,
        "summary": "Autoriza el inicio formal del proyecto o fase e identifica a las partes interesadas clave que influirán en el resultado.",
        "processes": ["Iniciar el Proyecto o Fase", "Identificar Interesados"],
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
            "Integrar y Alinear Planes del Proyecto", "Planificar la Estrategia de Abastecimiento",
            "Planificar la Gestión del Alcance", "Levantar y Analizar Requisitos", "Definir el Alcance", "Desarrollar la Estructura del Alcance (EDT)",
            "Planificar la Gestión del Cronograma", "Desarrollar el Cronograma",
            "Planificar la Gestión Financiera", "Estimar Costos", "Desarrollar el Presupuesto",
            "Planificar el Involucramiento de Interesados", "Planificar la Gestión de Comunicaciones",
            "Planificar la Gestión de Recursos", "Estimar Recursos",
            "Planificar la Gestión de Riesgos", "Identificar Riesgos", "Realizar el Análisis de Riesgos", "Planificar las Respuestas a los Riesgos"
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
            "Gestionar la Ejecución del Proyecto", "Gestionar el Aseguramiento de la Calidad", "Gestionar el Conocimiento del Proyecto",
            "Gestionar el Involucramiento de Interesados", "Gestionar las Comunicaciones",
            "Adquirir Recursos", "Liderar al Equipo",
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
            "Monitorear y Controlar el Desempeño del Proyecto", "Evaluar e Implementar Cambios",
            "Monitorear y Controlar el Alcance", "Validar el Alcance",
            "Monitorear y Controlar el Cronograma",
            "Monitorear y Controlar las Finanzas",
            "Monitorear el Involucramiento de Interesados", "Monitorear las Comunicaciones",
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
        "processes": ["Cerrar el Proyecto o Fase"],
        "keyDeliverable": "Transferencia del producto a operaciones, archivo formal del conocimiento y liberación de recursos.",
        "adaptivePerspective": "En ágil, cada fin de release concluye con una transferencia o despliegue y una retrospectiva formal de cierre."
    }
]

with open("js/data/focusAreas.js", "w", encoding="utf-8") as f:
    f.write("// The 5 Focus Areas of PMBOK 8th Edition\n")
    f.write("export const focusAreas = " + json.dumps(focus_areas_data, indent=2, ensure_ascii=False) + ";\n")

# 5. THE 7 PERFORMANCE DOMAINS
domains_data = [
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
]

with open("js/data/domains.js", "w", encoding="utf-8") as f:
    f.write("// The 7 Performance Domains of PMBOK 8th Edition\n")
    f.write("export const performanceDomains = " + json.dumps(domains_data, indent=2, ensure_ascii=False) + ";\n")

print("Principles, Focus Areas, and Domains written successfully!")
