// Complete Catalog of Tools, Techniques & Formulas in PMBOK 8
export const toolsAndTechniques = {
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
