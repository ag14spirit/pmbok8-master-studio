// The 5 Focus Areas of PMBOK 8th Edition
export const focusAreas = [
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
