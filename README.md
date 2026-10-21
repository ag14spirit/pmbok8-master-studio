# PMBOK® 8 Master Studio
### Plataforma de Aprendizaje Interactivo, Simulador PMP y Centro de Dominio del Estándar Oficial

[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)
[![Estándar](https://img.shields.io/badge/Estándar-ANSI%2FPMI%2099--001--2025-059669.svg)](https://www.pmi.org)
[![Edición](https://img.shields.io/badge/PMBOK-8va%20Edición-2563EB.svg)](https://www.pmi.org)

Plataforma educativa interactiva de alto rendimiento diseñada bajo los estándares de diseño y experiencia de usuario más avanzados (Apple Pro / Linear Design System), cubriendo de punta a punta la **8va Edición de la Guía del PMBOK®** (*Project Management Body of Knowledge*), estándar oficial ANSI/PMI 99-001-2025.

---

## Módulos Principales de la Plataforma

1. **Ruta Maestra de Estudio (18 Unidades)**
   - Estructurado en las 3 partes oficiales del libro:
     - **Parte 1**: El Estándar para la Dirección de Proyectos (Introducción, Sistema de Entrega de Valor y los 6 Principios Rectores).
     - **Parte 2**: La Guía de los Fundamentos (Áreas de Enfoque, los 7 Dominios de Desempeño y Adaptación / Tailoring).
     - **Parte 3**: Apéndices Oficiales Especializados (X2 PMO, X3 Inteligencia Artificial en Proyectos, X4 Adquisiciones y X5 Evolución Histórica).
   - Fichas técnicas por tema con teoría oficial, consejos situacionales de examen PMP y puntos de control interactivos.

2. **Matriz y Arquitectura de los 40 Procesos**
   - Cuadrícula matricial bidimensional interactiva que cruza los **7 Dominios de Desempeño** con las **5 Áreas de Enfoque**.
   - Ficha detallada de cada uno de los 40 procesos con catálogo completo de Entradas, Herramientas & Técnicas, y Salidas (ITTOs).
   - 4 modos de visualización: *Matriz 2D*, *Por Dominio*, *Por Área de Enfoque* y *Explorador Exhaustivo de ITTOs*.

3. **Colección Oficial de Presentaciones (18 Decks • 180 Slides)**
   - 10 diapositivas ejecutivas 16:9 por cada una de las 18 unidades temáticas.
   - Diagramas de flujo, tablas comparativas Predictivo vs Adaptativo, desgloses visuales de ITTOs y trampas de examen PMP.
   - Navegación interactiva por teclado (`←` / `→`), tira de miniaturas numeradas y notas para el expositor.

4. **Laboratorio Interactivo de Valor Ganado (EVM)**
   - Consola analítica basada estrictamente en la **Tabla 5-1 de Fórmulas Oficiales** del PMBOK® 8.
   - Controles deslizantes para BAC, PV, EV y AC con diagnóstico de salud financiera en tiempo real (CPI y SPI).
   - Cálculo automático de variaciones (CV, SV) y pronósticos a la conclusión (EAC, ETC, VAC, TCPI).
   - Motor de Criterio Situacional PMP con recomendaciones de toma de decisiones (*Crashing*, *Fast Tracking*, reserva de gestión).

5. **Simulador de Examen de Certificación PMP**
   - 3 modalidades: Test Rápido (10 preguntas), Práctica por Dominio (25 preguntas) y Simulación Completa (50 preguntas).
   - Cronómetro de examen regresivo, cálculo de puntaje porcentual y explicaciones razonadas con citas al estándar.

6. **Laboratorio de Flashcards y Glosario Técnico**
   - Tarjetas de memoria activa con efecto 3D flip basadas en repetición espaciada.
   - Diccionario y glosario oficial indexado con búsqueda en tiempo real.

7. **Apéndices Especializados (IA, PMO y Procurement)**
   - Módulos de profundización en el Apéndice X3 (Casos de uso de Inteligencia Artificial generativa y predictiva en gestión de proyectos) y Apéndice X2 (Evolución de modelos de PMO táctica a PMO de valor estratégico).

---

## Pila Tecnológica

- **Frontend**: Vanilla ES Modules / JavaScript Moderno compilado en bundle ultra optimizado sin dependencias de frameworks externos pesados.
- **Estilos**: Vanilla CSS con tokens de diseño semánticos, modo claro/oscuro nativo y escala tipográfica armónica.
- **Diseño**: Sin emojis, iconografía vectorial SVG de alta definición, tipografías del sistema (`-apple-system`, `SF Pro`, `Segoe UI`).
- **Audio**: Web Audio API para síntesis procedural de sonido (sin archivos mp3 externos).

---

## Ejecución Local

Clona el repositorio e inicia un servidor local HTTP:

```bash
# Servidor Python
python3 -m http.server 8080

# O con Node.js
npx serve . -l 8080
```

Abre en tu navegador: `http://localhost:8080`

---

## Autoría y Licencia

Desarrollado como recurso de aprendizaje y preparación para la comunidad de directores de proyectos y aspirantes a la certificación PMP® / CAPM®.

Licencia: [MIT](LICENSE)
