import json

# 6. TOOLS & TECHNIQUES (INCLUDING FULL TABLE 5-1 EVM)
tools_data = {
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
}

with open("js/data/tools.js", "w", encoding="utf-8") as f:
    f.write("// Complete Catalog of Tools, Techniques & Formulas in PMBOK 8\n")
    f.write("export const toolsAndTechniques = " + json.dumps(tools_data, indent=2, ensure_ascii=False) + ";\n")

# 7. APPENDICES DATA
appendices_data = {
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
}

with open("js/data/appendices.js", "w", encoding="utf-8") as f:
    f.write("// Complete Appendices X2, X3, X4, X5 of PMBOK 8th Edition\n")
    f.write("export const appendices = " + json.dumps(appendices_data, indent=2, ensure_ascii=False) + ";\n")

# 8. GLOSSARY DATA
glossary_data = [
    {"term": "Acta de Constitución del Proyecto (Project Charter)", "def": "Documento emitido por el patrocinador que autoriza formalmente la existencia de un proyecto y confiere al director de proyecto la autoridad para asignar recursos organizacionales.", "category": "Gobernanza"},
    {"term": "Activos de los Procesos de la Organización (OPAs)", "def": "Planes, procesos, políticas, procedimientos y bases de conocimiento específicos de la organización ejecutora y utilizados por la misma.", "category": "Entorno"},
    {"term": "Factores Ambientales de la Empresa (EEFs)", "def": "Condiciones que no están bajo el control inmediato del equipo del proyecto y que influyen, restringen o dirigen el proyecto (cultura, regulaciones, mercado).", "category": "Entorno"},
    {"term": "Línea Base del Alcance (Scope Baseline)", "def": "La versión aprobada del enunciado del alcance del proyecto, la estructura de desglose del trabajo (EDT/WBS) y el diccionario de la EDT asociado.", "category": "Alcance"},
    {"term": "Línea Base del Cronograma (Schedule Baseline)", "def": "La versión aprobada del modelo de programación que se utiliza como base para comparar con los resultados reales.", "category": "Cronograma"},
    {"term": "Línea Base de Costos (Cost Baseline)", "def": "La versión aprobada del presupuesto del proyecto dividida en fases temporales (Curva S), que excluye cualquier reserva de gestión.", "category": "Finanzas"},
    {"term": "Valor Ganado (Earned Value - EV)", "def": "La medida del trabajo realizado expresada en términos del presupuesto autorizado para dicho trabajo.", "category": "Finanzas"},
    {"term": "Valor Planificado (Planned Value - PV)", "def": "El presupuesto autorizado asignado al trabajo programado que debió completarse a una fecha específica.", "category": "Finanzas"},
    {"term": "Costo Real (Actual Cost - AC)", "def": "El costo real en el que se ha incurrido para llevar a cabo el trabajo ejecutado hasta la fecha.", "category": "Finanzas"},
    {"term": "Índice de Desempeño del Costo (CPI)", "def": "Medida de la eficiencia del costo de los recursos presupuestados: EV / AC. Mayor a 1.0 indica ahorro.", "category": "Finanzas"},
    {"term": "Índice de Desempeño del Cronograma (SPI)", "def": "Medida de la eficiencia del avance del cronograma: EV / PV. Mayor a 1.0 indica adelanto.", "category": "Cronograma"},
    {"term": "Ruta Crítica (Critical Path)", "def": "La secuencia de actividades que representa el camino más largo a través de un proyecto, la cual determina la menor duración posible del mismo.", "category": "Cronograma"},
    {"term": "Holgura Total (Total Float)", "def": "La cantidad de tiempo que una actividad del cronograma puede demorarse o extenderse sin retrasar la fecha de finalización del proyecto.", "category": "Cronograma"},
    {"term": "Reserva de Contingencia (Contingency Reserve)", "def": "Fondos o tiempo asignados dentro de la línea base para responder a riesgos identificados ('conocidos-desconocidos').", "category": "Riesgo"},
    {"term": "Reserva de Gestión (Management Reserve)", "def": "Fondos o tiempo retenidos por la dirección para el control de la gestión y para abordar imprevistos impredecibles ('desconocidos-desconocidos'). No forma parte de la línea base.", "category": "Finanzas"},
    {"term": "Corrupción del Alcance (Scope Creep)", "def": "La adición no controlada o no autorizada de productos, servicios o características al alcance del proyecto sin ajustes en tiempo, costo o recursos.", "category": "Alcance"},
    {"term": "Sobreoptimización (Gold Plating)", "def": "La práctica de dar al cliente características o funcionalidades adicionales que no fueron solicitadas en los requisitos.", "category": "Calidad"},
    {"term": "Matriz RACI", "def": "Cuadro que muestra los recursos asignados a las actividades indicando quién es Responsable (R), Aprobador (A), Consultado (C) o Informado (I).", "category": "Recursos"},
    {"term": "Product Owner", "def": "Rol en marcos ágiles responsable de maximizar el valor del producto y de gestionar y priorizar el Product Backlog.", "category": "Roles"},
    {"term": "Sponsor (Patrocinador)", "def": "Persona o grupo que provee recursos financieros y apoyo político y estratégico para el proyecto y rinde cuentas por el caso de negocio.", "category": "Roles"},
    {"term": "Intensificación (Crashing)", "def": "Técnica de compresión del cronograma que acorta la duración del proyecto añadiendo recursos a la ruta crítica al menor costo posible.", "category": "Cronograma"},
    {"term": "Ejecución Rápida (Fast Tracking)", "def": "Técnica de compresión del cronograma en la que actividades o fases que normalmente se realizan secuencialmente se ejecutan en paralelo.", "category": "Cronograma"},
    {"term": "Análisis de Monte Carlo", "def": "Técnica cuantitativa que simula repetidamente el modelo del proyecto para calcular la distribución de probabilidades de costos y fechas posibles.", "category": "Riesgo"},
    {"term": "Diagrama de Tornado", "def": "Diagrama de barras especial usado en análisis de sensibilidad que muestra qué riesgos o variables tienen el mayor impacto relativo sobre los resultados.", "category": "Riesgo"},
    {"term": "Costo de la Calidad (COQ)", "def": "El costo total en el que se incurre para asegurar la conformidad (prevención y evaluación) más los costos derivados de no conformidades (fallas internas y externas).", "category": "Calidad"},
    {"term": "Seguridad Psicológica", "def": "Creencia compartida por los miembros del equipo de que el entorno es seguro para tomar riesgos interpersonales, opinar y admitir errores sin temor a represalias.", "category": "Principios"},
    {"term": "Tailoring (Adaptación)", "def": "La adecuación deliberada y reflexiva del enfoque de desarrollo, gobernanza, procesos y herramientas al contexto específico de la organización y del proyecto.", "category": "Adaptación"}
]

with open("js/data/glossary.js", "w", encoding="utf-8") as f:
    f.write("// Complete Glossary of PMBOK 8th Edition\n")
    f.write("export const glossary = " + json.dumps(glossary_data, indent=2, ensure_ascii=False) + ";\n")

print("Tools, Appendices, and Glossary generated successfully!")
