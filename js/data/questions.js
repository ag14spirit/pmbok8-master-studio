// Rich Interactive Question Bank for PMBOK 8th Edition
export const questions = [
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
