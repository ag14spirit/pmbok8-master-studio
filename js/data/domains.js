// The 7 Performance Domains of PMBOK 8th Edition
export const performanceDomains = [
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
