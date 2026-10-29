
(function() {
  'use strict';
  const LOCALE = 'en';
  const strings = {
  common: {
    close: "Close window",
  },
  hub: {
    partBadge1: "Part 1 · The ANSI/PMI Standard",
    partBadge2: "Part 2 · The PMBOK® Guide",
    partBadge3: "Part 3 · Specialized Appendices",
    partDescFallback: "Core body of official knowledge for project management and PMP preparation.",
    unitDescFallback: "Official foundation of the PMBOK 8th edition for effective project management.",
    heroTitle: "Master Study Path • PMBOK® 8th Edition",
    heroText: "Complete official program aligned to the ANSI/PMI 99-001-2025 standard. Includes the 6 principles, the 7 performance domains, the 40 processes, and the new AI and PMO appendices.",
    unitsMastered: "Units Mastered",
    globalProgress: "Overall Progress",
    durationLessons: "{time} min • {count} lessons",
    moreLessons: "+{count} more lessons",
    mastered: "Mastered",
    pending: "Pending",
    slidesHint: "View the 10 visual slides for this topic",
    slides: "Slides",
    review: "Review",
    study: "Study",
    officialDesc: "Official Topic Description • PMBOK® 8",
    sectionLabel: "Section {section}",
    minutes: "{n} min",
    standardLessons: "Standard Lessons ({count})",
    examTip: "Exam Tip:",
    checkpoint: "PMP Situational Checkpoint",
    validationQ: "Official Validation Question",
    viewSlides: "View 10 slides for this topic",
    unitMastered: "Unit mastered",
    markMastered: "Mark unit as mastered",
    correctAnswer: "Correct Answer:",
    wrongAnswer: "Incorrect Answer:",
  },
  tour: {
    stepCounter: "Step {current} of {total}",
    closeBtnTitle: "Close guide",
    detailsHeading: "What you are seeing on this screen:",
    finishGuideBtn: "Finish guide",
    prevBtn: "Previous",
    nextBtn: "Next",
    startStudyBtn: "Start studying!",
    step1Title: "Step 1: Master Study Path",
    step1Badge: "Curriculum in 18 Units",
    step1Lead: "You are viewing the main study screen, divided into the book's 3 official parts.",
    step1Detail1: "Part 1: The Standard for Project Management (Foundations, Delivery System, and the 6 Principles).",
    step1Detail2: "Part 2: The PMBOK Guide (the 7 Performance Domains, Tailoring, and Model Catalog).",
    step1Detail3: "Part 3: Official Appendices (AI in Projects, Modern PMO, Procurement, and Historical Evolution).",
    step1Detail4: "Click any unit card to expand its theory, PMP exam traps, and checkpoints.",
    step2Title: "Step 2: The 40-Process Matrix",
    step2Badge: "2D Matrix Model",
    step2Lead: "Look at the table on screen: it crosses the 7 Performance Domains (rows) with the 5 Focus Areas (columns).",
    step2Detail1: "Each cell contains the active processes at that intersection (e.g. #01 Initiate Project).",
    step2Detail2: "Click any process to see its full technical sheet of Inputs, Tools, and Outputs (ITTOs).",
    step2Detail3: "Use the buttons at the top to switch between the 2D Matrix View, the Domain View, or the universal ITTO Explorer.",
    step3Title: "Step 3: Official Presentations",
    step3Badge: "18 Decks • 180 Slides",
    step3Lead: "Here you have a visual executive presentation of 10 slides for each point in the official index.",
    step3Detail1: "18 interactive decks in 16:9 format, organized by Part 1, Part 2, and Part 3.",
    step3Detail2: "Each slide includes flow diagrams, agile vs. predictive approach comparisons, and PMP alerts.",
    step3Detail3: "Click 'View Presentation' on any card to open the viewer with keyboard support (arrow keys ← and →) and speaker notes.",
    step4Title: "Step 4: Earned Value Lab (EVM)",
    step4Badge: "Table 5-1 of Official Formulas",
    step4Lead: "This is the financial simulator for mastering the mathematical formulas on the PMP exam.",
    step4Detail1: "Interactive S-curve chart that projects PV, EV, AC, and the BAC budget in real time.",
    step4Detail2: "Move the sliders on the left to simulate cost overrun or delay scenarios.",
    step4Detail3: "Instantly review the CPI, SPI, CV, SV, EAC indicators and the To-Complete Performance Index (TCPI).",
    step5Title: "Step 5: PMP / CAPM Exam Simulator",
    step5Badge: "Situational Judgment Bank",
    step5Lead: "Train with real situational questions calibrated to the difficulty level of the official exam.",
    step5Detail1: "3 practice modes: Quick (10 questions), Standard (20 questions), and Extensive (full bank).",
    step5Detail2: "Includes a countdown timer, question flagging, and detailed review.",
    step5Detail3: "At the end, you will receive your score percentage against the 75% pass threshold, with verbatim PMBOK 8 citations.",
    step6Title: "Step 6: Flashcards & Glossary",
    step6Badge: "Active Recall & Dictionary",
    step6Lead: "Reinforce your conceptual retention with interactive 3D cards and instant search.",
    step6Detail1: "Flashcards Mode: Click the card to flip it and rate your mastery level (Hard, Medium, Mastered).",
    step6Detail2: "Glossary Mode: Quick search of any official glossary term, filtered by topic category.",
    step7Title: "Step 7: Specialized Appendices",
    step7Badge: "New Frontiers in PMBOK 8",
    step7Lead: "In-depth analysis of the 4 modern appendices added in the Guide's 8th edition.",
    step7Detail1: "Appendix X3: Artificial Intelligence in Projects (Automation, Augmentation, Autonomy, and Ethical Governance).",
    step7Detail2: "Appendix X2: The Project Management Office (PMO) and its transformation into a value enabler (VMO).",
    step7Detail3: "Appendix X4: Procurement and commercial contracts (Fixed Price, Cost Reimbursable, and T&M).",
    step7Detail4: "Appendix X5: Historical Evolution of the Guide since its first edition.",
  },
  evm: {
    heroTitle: "Earned Value Interactive Lab (EVM) • PMBOK® 8",
    heroDesc: "Analytical simulator based strictly on <strong>Table 5-1 of Official Formulas</strong> from the 8th edition. Modify the 4 base variables or select a preset scenario to evaluate management decisions in real time.",
    cpiShortLabel: "Cost Efficiency (CPI)",
    spiShortLabel: "Schedule Efficiency (SPI)",
    presetsLabel: "Quick Simulation Scenarios:",
    presetHealthy: "Healthy Project",
    presetOverbudget: "Cost Overrun Alert",
    presetBehind: "Delay Alert",
    presetCrisis: "Full Crisis",
    presetPerfect: "Maximum Efficiency",
    inputsTitle: "Core Project Variables",
    inputsSubtitle: "Adjust the values with the sliders",
    bacTitle: "BAC · Budget at Completion",
    bacDesc: "Total budget authorized by the Sponsor",
    pvTitle: "PV · Planned Value to Date",
    pvDesc: "Budget of the work that, according to the schedule, should be complete",
    evTitle: "EV · Earned Value",
    evDesc: "Budgeted value of the physically completed work",
    acTitle: "AC · Actual Cost",
    acDesc: "Money actually spent and recorded to date",
    costHealthy: "Healthy",
    costCritical: "Critical cost overrun",
    costModerate: "Moderate cost overrun",
    costHealthyMsg: "Under control. For every $1.00 spent, the project delivers ${cpi} of tangible value.",
    costSevereMsg: "Severe cost overrun. For every $1.00 spent, the project delivers only ${cpi} of value. You are losing {cents} cents per dollar.",
    costModerateMsg: "Budget alert. Actual cost exceeds earned value by ${amount}.",
    scheduleOnTime: "On time / ahead",
    scheduleSevere: "Severe delay",
    scheduleModerate: "Moderate delay",
    scheduleOnTimeMsg: "Optimal pace. The team is progressing at {pct}% of the planned baseline speed.",
    scheduleSevereMsg: "Critical delay. The project is progressing at {pct}% of the planned pace (a {delay}% deliverable delay).",
    scheduleModerateMsg: "Schedule deviation of ${amount} in deliverables that should have been completed by now.",
    pmpExcellent: "<strong>Project in Excellent Status:</strong> Both budget and schedule are under control. On the PMP exam, the correct answer is to maintain the management plan, continue periodic monitoring, and record good practices in the organizational process assets (OPAs).",
    pmpSavingsDelay: "<strong>Project with Savings but Delayed:</strong> You have positive financial slack (CPI > 1). On the PMP exam, this is the ideal candidate for <em>Crashing</em> (schedule compression through overtime or additional resources), since you have spare budget to absorb the extra cost of accelerating critical path tasks.",
    pmpOverrunOnTime: "<strong>On Time but Over Budget:</strong> The project is progressing at the scheduled pace but spending more than it should. On the PMP exam, <strong>never</strong> apply <em>Crashing</em> in this scenario. Consider optimizing resources, renegotiating procurement contracts, or applying <em>Fast Tracking</em> if it does not generate additional costs.",
    pmpCrisis: "<strong>Full Crisis (Cost Overrun and Delay):</strong> The most critical situation in project management. On the PMP exam, the project manager's immediate action is to convene the Sponsor and the Change Control Board (CCB), perform a root cause analysis, and evaluate a new baseline or scope reduction.",
    cpiName: "Cost Performance Index",
    spiName: "Schedule Performance Index",
    formulasTitle: "Compendium of Official Formulas • PMBOK 8 Table 5-1",
    cvLabel: "Cost Variance (CV = EV - AC)",
    svLabel: "Schedule Variance (SV = EV - PV)",
    eacLabel: "Estimate at Completion (EAC = BAC / CPI)",
    etcLabel: "Estimate to Complete (ETC = EAC - AC)",
    vacLabel: "Variance at Completion (VAC = BAC - EAC)",
    tcpiLabel: "Required Effort (TCPI at BAC)",
    cvUnder: "Under Budget",
    cvOver: "Accumulated Overrun",
    svAhead: "Ahead",
    svBehind: "Physical Delay",
    eacSub: "Final forecast if this pace is maintained",
    etcSub: "Remaining funds needed to finish",
    vacSurplus: "Final Surplus",
    vacDeficit: "Final budget deficit",
    tcpiFeasible: "Feasible without stress",
    tcpiAccelerate: "Requires efficiency acceleration",
    pmpBadge: "PMP Situational Criteria",
    pmpTitle: "Diagnosis and Decision Making",
  },
  appendices: {
    heroTitle: "New Frontiers and Appendices • PMBOK® 8",
    heroDesc: "In-depth analysis of the 4 specialized appendices: Artificial Intelligence in Projects (X3), The Modern PMO (X2), Procurement Management (X4), and Historical Evolution of the Guide (X5).",
    tabX3: "Appendix X3: AI in Projects",
    tabX2: "Appendix X2: Modern PMO",
    tabX4: "Appendix X4: Procurement",
    tabX5: "Appendix X5: Historical Evolution",
    officialStudy: "Official Specialized Study",
  },
  presentations: {
    catAll: "All Presentations ({count})",
    catPart1: "Part 1: Standard ({count})",
    catPart2: "Part 2: PMBOK Guide ({count})",
    catPart3: "Part 3: Appendices ({count})",
    heroTitle: "Official Presentations by Topic • PMBOK® 8",
    heroText: "Interactive executive slides for each of the {units} units in the official index. Each presentation includes {slides} visual slides with theoretical foundations, flow diagrams, ITTOs, agile comparisons, and PMP exam traps.",
    officialDecks: "Official Decks",
    visualSlides: "Visual Slides",
    searchPlaceholder: "Search presentation or topic...",
    slidesPill: "{count} Slides",
    deckFormat: "16:9 Format • Speaker Notes",
    viewDeck: "View presentation",
    toggleNotes: "Show / Hide speaker notes",
    closeDeck: "Close presentation",
    slideCounter: "Slide {current} of {total}",
    prevSlide: "Previous slide",
    keyboardHint: "Use the ← and → arrow keys on your keyboard",
    finishDeck: "Finish presentation",
    nextSlide: "Next slide",
    speakerNotes: "Speaker Notes / Official Basis:",
    scenario: "Situational Scenario:",
    reference: "Reference:",
  },
  app: {
    progressMastered: "{pct}% Mastered",
    darkModeOn: "Dark Mode on",
    lightModeOn: "Light Mode on",
    audioOn: "Audio on",
    audioOff: "Audio muted",
  },
  exam: {
    heroTitle: "Official PMP / CAPM Exam Simulator",
    heroText: "Comprehensive bank of situational professional judgment questions strictly aligned to the 7 domains and 6 principles of the PMBOK® 8th Edition.",
    passThreshold: "Passing Threshold",
    quickBadge: "Agile mode",
    durationCount: "{minutes} minutes · {count} questions",
    durationAll: "{minutes} minutes · Full bank",
    quickTitle: "Quick Mock Exam",
    quickSummary: "10 random high-frequency situational questions. Ideal for a quick daily practice session and concept calibration.",
    quickStatus: "All domains",
    startExam: "Start exam",
    standardBadge: "Standard mode",
    standardTitle: "Standard Mock Exam",
    standardSummary: "20 situational questions balanced across predictive, agile, and hybrid cycles according to the Exam Content Outline (ECO).",
    standardStatus: "Full coverage",
    extensiveBadge: "Extensive mode",
    extensiveTitle: "Extensive PMP Mock Exam",
    extensiveSummary: "All questions from the official bank without interruptions to measure your mental endurance and concentration under real time pressure.",
    extensiveStatus: "Mental endurance",
    exitExam: "Exit exam",
    submit: "Submit exam ({answered}/{total})",
    questionOf: "Question {current} of {total}",
    markReview: "Mark for review",
    prev: "Previous",
    next: "Next",
    reviewAndSubmit: "Review and submit",
    confirmExit: "Do you want to exit the exam? Your answers will be discarded.",
    verdictPass: "Certification Level: Competent",
    verdictFail: "Insufficient Result",
    scoreSummary: "You answered {correct} of {total} questions correctly. The passing threshold for the official exam is 75%.",
    retake: "Take another mock exam",
    reviewTitle: "Detailed Answer Review:",
    questionHash: "Question #{n}",
    correct: "Correct",
    incorrect: "Incorrect",
    yourAnswer: "Your answer:",
    unanswered: "Unanswered",
    correctAnswer: "Correct answer:",
    basis: "PMBOK 8 Basis:",
  },
  flash: {
    heroTitle: "Glossary and Active Recall Cards",
    heroText: "Train your conceptual retention with interactive spaced-repetition cards or explore the official PMBOK® 8th Edition terminology dictionary.",
    modeFlashcards: "Flashcards Mode ({count})",
    modeGlossary: "Glossary of Terms",
    cardOf: "Card {current} of {total}",
    clickToFlip: "Click the card to flip it",
    officialDef: "PMBOK® 8 Official Definition",
    clickToBack: "Click to return to the term",
    hard: "Hard",
    medium: "Medium",
    mastered: "Mastered",
    searchPlaceholder: "Search by term or definition...",
    allCategories: "All",
  },
  matrix: {
    heroTitle: "Matrix and Architecture of the 40 Processes • PMBOK® 8",
    heroIntro: "In the 8th edition, processes are not waterfall stages but a matrix model of capabilities. Rows represent the 7 Performance Domains and columns represent the 5 Focus Areas.",
    filteredLabel: "Filtered Processes",
    explanationTitle: "Two-Dimensional Matrix Structure:",
    explanationText: "Click any process to open its official technical sheet with {ittos}, tailoring guidelines, and PMP exam traps.",
    ittosLabel: "Inputs, Tools, Outputs (ITTOs)",
    viewMatrix: "2D Matrix View",
    viewByDomain: "View by Domain (7)",
    viewByFocus: "View by Focus Area (5)",
    viewItto: "ITTO Explorer",
    searchPlaceholder: "Search process, input, technique, or output...",
    allDomains: "All Domains (40)",
    domainHeader: "Performance Domain",
    sectionBadge: "Section {section}",
    domainSection: "Section {section} • {count} processes",
    cellTitle: "View ITTOs for #{number}: {name}",
    chapter: "Chapter 2.{number}",
    processesBadge: "{count} Processes",
    keyDeliverable: "Key deliverable: {deliverable}",
    explorerTitle: "Comprehensive Explorer of Inputs, Tools, and Outputs (ITTOs)",
    explorerDesc: "End-to-end audit of the information flow across the 40 PMBOK® 8 processes.",
    inputs: "Inputs",
    tools: "Tools & Techniques",
    outputs: "Outputs",
    processBadge: "Process #{number}",
    closeWindow: "Close window",
    officialPurpose: "PMBOK 8 Official Purpose:",
    domainLabel: "Domain:",
    focusAreaLabel: "Focus Area:",
    tailoringTitle: "Tailoring Guidelines:",
    examTrapTitle: "Common PMP Exam Trap:",
    closeCard: "Close Card",
  },
  shell: {
    brandTitle: "PMBOK 8th Edition Master Studio",
    docTitle: "PMBOK® 8 Master Studio • Official Standard & PMP Preparation",
    navLabel: "Module navigation",
    guide: "Platform Guide",
    guideTitle: "Start the interactive platform tour",
    progressTitle: "Your progress across the 18 units",
    progressZero: "0% Mastered",
    soundTitle: "Turn audio on / off",
    themeTitle: "Toggle dark / light mode",
    langTitle: "Switch language / Cambiar idioma",
    tabCurriculum: "Study Path",
    tabMatrix: "40 Processes (ITTO)",
    tabPresentations: "Presentations (18 topics)",
    tabEvm: "EVM Lab",
    tabSimulator: "PMP Simulator",
    tabFlashcards: "Flashcards & Glossary",
    tabAppendices: "Appendices (AI & PMO)",
  },
};

  // Runtime translation helpers. `strings` and `LOCALE` are provided by the
// locale bundle (see bundle-pro.mjs), so this file has no imports.

function t(key, vars = {}) {
  const value = key.split(".").reduce((node, part) => (node ? node[part] : undefined), strings);
  if (typeof value !== "string") return key;
  return value.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? vars[name] : `{${name}}`));
}

function fmtNumber(n) {
  return n.toLocaleString(LOCALE === "en" ? "en-US" : undefined);
}


  // English localization of js/data/curriculum.js (generated from the Spanish source; keep in sync)
const curriculum = {
  "title": "PMBOK® Guide - 8th Edition (ANSI/PMI 99-001-2025)",
  "subtitle": "Interactive Learning Academy & PMP/CAPM Certification Simulator",
  "parts": [
    {
      "id": "part-1",
      "number": 1,
      "title": "The Standard for Project Management",
      "titleEn": "The Standard for Project Management",
      "description": "Normative ANSI foundations: the value system, the 6 refined principles and the project life cycles with the 5 focus areas.",
      "color": "#006874",
      "icon": "auto_stories",
      "units": [
        {
          "id": "unit-1",
          "number": 1,
          "title": "Introduction and Foundational Elements",
          "sectionRef": "Section 1 (1.1–1.3)",
          "description": "Purpose of the standard, key technical vocabulary of the 8th edition, and project governance.",
          "lessons": [
            {
              "id": "les-1-1",
              "title": "Purpose of the Standard",
              "section": "1.1",
              "xp": 25,
              "timeMin": 5,
              "summary": "The Standard for Project Management establishes a universal foundation for delivering intended outcomes in any industry, size and development approach.",
              "points": [
                "Applies to projects in all sectors (business, government, not-for-profit).",
                "Is neutral with respect to approach: it serves predictive, adaptive and hybrid projects alike.",
                "Aligns project delivery with business strategy and long-term sustainability.",
                "The role of the PM shifts from mere organizer to change strategist and value creator."
              ],
              "examTip": "On the PMP v8 exam, remember that the standard is NO longer prescriptive: it is based on principles and value delivery beyond meeting schedule and budget targets."
            },
            {
              "id": "les-1-2",
              "title": "Key Terms and Concepts of the 8th Edition",
              "section": "1.2",
              "xp": 30,
              "timeMin": 7,
              "summary": "PMI updated the core definitions of Project, Project Management, Output, Outcome and Benefit to reflect a value-driven environment.",
              "points": [
                "Project: A temporary initiative undertaken in a unique context to CREATE VALUE (it goes beyond the old definition of 'a unique product, service or result').",
                "Project Management: Application of knowledge, skills, tools and techniques to meet or exceed intended value without incurring scope corruption or over-optimization (gold plating).",
                "Output: A product, result or service generated by a process.",
                "Outcome: The effect, consequence or long-term impact of the deliverable outputs. It can be positive (benefit) or negative (dis-benefit).",
                "Benefit: A gain or asset perceived by the organization and its stakeholders as a result of the outcomes achieved.",
                "Portfolio vs Program: A portfolio groups programs and projects to maximize strategic value; a program coordinates related projects to obtain synergistic benefits that cannot be achieved individually."
              ],
              "examTip": "Always distinguish: Output (the installed software) -> Outcome (employees operate the new workflow) -> Benefit (a 20% reduction in service times)."
            },
            {
              "id": "les-1-3",
              "title": "Project Characteristics and Governance Connections",
              "section": "1.3.1 - 1.3.2",
              "xp": 30,
              "timeMin": 6,
              "summary": "How the temporary and contextual nature of a project connects with corporate governance and project-specific governance.",
              "points": [
                "The unique context is defined by objectives, environment, stakeholders and development approach.",
                "Organizational Governance: Rules, policies and strategic guidelines of the parent entity.",
                "Project Governance: A structured framework that guides decisions, escalation, review points (phase gates) and accountability within the project.",
                "Alignment: Project governance should fit organically within organizational governance without duplicating unnecessary bureaucracy."
              ],
              "examTip": "When a decision exceeds the project's tolerance threshold, the PM must escalate through the formal governance channel (Sponsor or Steering Committee)."
            },
            {
              "id": "les-1-4",
              "title": "Operations and the Portfolio-Program Ecosystem",
              "section": "1.3.3 - 1.3.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Differentiation between ongoing operational work and temporary initiatives, and their integration into the strategic framework.",
              "points": [
                "Operations: Ongoing, repetitive work that keeps the business running (business as usual).",
                "Projects: Transition of the business toward a new future state of greater value.",
                "Transition: Every project concludes by transferring its deliverables to operations, where long-term benefits are realized.",
                "Synergy in Portfolios: Portfolios ensure the organization does 'the right projects', while project management ensures it does 'projects right'."
              ],
              "examTip": "The project ends when its deliverables are delivered and accepted and transferred to operations; monitoring long-term benefits is usually the job of operations or the sponsor."
            }
          ]
        },
        {
          "id": "unit-2",
          "number": 2,
          "title": "A System for Delivering Value",
          "sectionRef": "Section 2 (2.1–2.5)",
          "description": "Components of value, environmental factors (EEFs/OPAs), product management, and project functions and roles.",
          "lessons": [
            {
              "id": "les-2-1",
              "title": "Value Creation and Success Criteria",
              "section": "2.1 - 2.1.2",
              "xp": 30,
              "timeMin": 6,
              "summary": "Projects exist to generate business or social value. Success is no longer measured solely by time, cost and scope.",
              "points": [
                "Value can be tangible (monetary savings, market share, facilities) or intangible (brand, reputation, team morale).",
                "Multidimensional assessment of success: strategic alignment, stakeholder satisfaction, social impact, user adoption and return on investment.",
                "The triple constraint paradox: A project can perfectly meet its scope, cost and time targets yet fail in the market if it does not generate value."
              ],
              "examTip": "Exam question: If the customer does not use the delivered software on time and on budget, was the project successful? Answer: No, because it failed to realize the intended outcome and its value."
            },
            {
              "id": "les-2-2",
              "title": "Project Environment: EEFs and OPAs",
              "section": "2.2.1 - 2.2.4",
              "xp": 35,
              "timeMin": 8,
              "summary": "Enterprise Environmental Factors (EEFs) and Organizational Process Assets (OPAs): the two forces that shape the project.",
              "points": [
                "Internal EEFs: Organizational culture, existing infrastructure, staff availability and competencies, communication channels.",
                "External EEFs: Market conditions, legal regulations, industry standards, political climate, climate factors.",
                "OPAs: Internal resources the organization has accumulated to help projects. They are divided into two categories:",
                "1) Processes, Policies and Procedures: Predefined templates, quality guidelines, procurement policies.",
                "2) Knowledge Repositories: Lessons learned registers, historical measurement databases, files from past projects."
              ],
              "examTip": "Foolproof rule: EEFs come from the environment and the team usually has NO control over them (it adapts to them). OPAs are organizational assets that the team consults, uses and enriches."
            },
            {
              "id": "les-2-3",
              "title": "Organizational Structures and Product Management",
              "section": "2.2.5 - 2.3",
              "xp": 30,
              "timeMin": 7,
              "summary": "Impact of the company's structure (functional, matrix, projectized) and the relationship between the product life cycle and the project life cycle.",
              "points": [
                "Functional Structure: The PM has almost no authority; the functional manager controls the budget and assigns tasks.",
                "Matrix Structures: Weak (the PM acts as coordinator/expediter), Balanced (the PM shares power with the functional manager), Strong (the PM has high authority and full-time dedication).",
                "Projectized: The PM has maximum authority and the team is 100% dedicated to the project.",
                "Product Management: Covers the entire life cycle of a product (conception, growth, maturity, decline). A single product may require multiple consecutive projects over its life."
              ],
              "examTip": "In a weak matrix structure, the PM cannot make unilateral assignment decisions or change the budget without the approval of the functional managers."
            },
            {
              "id": "les-2-4",
              "title": "Key Functions Associated with Projects",
              "section": "2.4.1 - 2.4.7",
              "xp": 30,
              "timeMin": 6,
              "summary": "The 7 essential functions that must be satisfied in every project, regardless of who formally performs them.",
              "points": [
                "1. Provide supervision and coordination.",
                "2. Request and manage continuous feedback.",
                "3. Facilitate and support team work by removing obstacles.",
                "4. Perform the technical and operational work of the deliverable.",
                "5. Apply specialized technical experience and judgment.",
                "6. Provide strategic direction and organizational perspective.",
                "7. Provide human, financial and material resources."
              ],
              "examTip": "PMBOK 8 emphasizes 'functions' over 'job titles', because in agile or self-organizing teams these functions are distributed across several roles."
            },
            {
              "id": "les-2-5",
              "title": "Roles in Project Management",
              "section": "2.5.1 - 2.5.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Interaction between the Project Management Team, the Sponsor/Product Owner, the Project Team and the End Users.",
              "points": [
                "Project Management Team: Those who participate directly in management activities.",
                "Sponsor: Champions the project, provides funding, approves the Project Charter and removes blockers at the executive level.",
                "Product Owner: The voice of the customer in agile approaches; manages the backlog and maximizes the value of the delivered product.",
                "Project Team: Multidisciplinary professionals who create the deliverables.",
                "End Users: Those who will operate and validate the product in its real environment."
              ],
              "examTip": "The Sponsor owns the business case; if the business case stops being viable, the Sponsor is the one who decides to pause or cancel the project."
            }
          ]
        },
        {
          "id": "unit-3",
          "number": 3,
          "title": "The 6 Principles of Project Management",
          "sectionRef": "Section 3 (3.1–3.8)",
          "description": "The mindset with 3 dimensions and the 6 refined principles that guide the project manager's conduct.",
          "lessons": [
            {
              "id": "les-3-1",
              "title": "The Project Management Mindset",
              "section": "3.1 - 3.2",
              "xp": 30,
              "timeMin": 5,
              "summary": "The 8th edition consolidates the 7th edition's 12 principles into 6 more actionable and direct principles, grouped into 3 mindset dimensions.",
              "points": [
                "Proactive Dimension: Anticipate changes and prevent deviations (Principles: Adopt a Holistic View, Embed Quality Into Processes and Deliverables).",
                "Ownership Dimension: Ethical commitment and accountability (Principles: Be an Accountable Leader, Build an Empowered Culture).",
                "Value-Driven Dimension: Every action must justify a tangible or social return (Principles: Focus on Value, Integrate Sustainability Within All Project Areas).",
                "Interconnection: The principles are not rigid laws; they are judgment guides that interact directly with the 7 performance domains."
              ],
              "examTip": "The principles guide the mindset, while the performance domains and processes guide the mechanics."
            },
            {
              "id": "les-3-2",
              "title": "Principle 1: Adopt a Holistic View",
              "section": "3.3",
              "xp": 35,
              "timeMin": 7,
              "summary": "Adopt a Holistic View: Recognize that the project is a subsystem within a larger, complex, interconnected and dynamic ecosystem.",
              "points": [
                "v7 merger: Combines 'Navigate Complexity' and 'Recognize System Interactions'.",
                "Systems Thinking: A change in one part of the project (e.g., scope or technology) inevitably affects costs, schedule, risks and stakeholders.",
                "Moving away from tunnel vision: The PM must 'zoom out' to understand the impact on the organization, the market and the geographies involved.",
                "Connected Domains: Governance, Scope, Schedule, Finance, Stakeholders, Resources, Risk (all domains)."
              ],
              "examTip": "When a technical problem arises, the holistic PM does not simply solve it within its silo: they assess the domino effect on the other domains and areas of the organization."
            },
            {
              "id": "les-3-3",
              "title": "Principle 2: Focus on Value",
              "section": "3.4",
              "xp": 35,
              "timeMin": 7,
              "summary": "Focus on Value: Value is the engine and the fundamental justification of every project. It requires adaptability and continuous change management.",
              "points": [
                "v7 merger: Integrates 'Focus on Value', 'Adaptability and Resilience' and 'Enable Change Toward the Future State'.",
                "Continuous Alignment: Periodically review whether the business case remains valid as market conditions change.",
                "Benefits Management: Deliverables must translate into real operational capabilities that produce the desired outcomes.",
                "Resilience: The capacity to absorb negative impacts and pivot the strategy to safeguard the value proposition."
              ],
              "examTip": "If requirements change to better reflect what the market needs, the PM promotes agile adaptation instead of blindly rejecting the change."
            },
            {
              "id": "les-3-4",
              "title": "Principle 3: Embed Quality Into Processes and Deliverables",
              "section": "3.5",
              "xp": 35,
              "timeMin": 7,
              "summary": "Embed Quality Into Processes and Deliverables: Quality is planned, designed and built in from the start; it is not inspected at the end.",
              "points": [
                "v7 refinement: Addresses quality in a dual way: the quality of the deliverables and the quality of the processes that produce them.",
                "Cost of Quality (COQ): Investing in prevention and appraisal is always far more cost-effective than paying for internal or external failures.",
                "Zero-Defect Culture and Continuous Improvement: Adopt cycles such as PDCA (Plan-Do-Check-Act) and systematic retrospectives.",
                "Stakeholder Acceptance: Quality is 'fitness for use' and conformance with agreed expectations, not unnecessary luxury."
              ],
              "examTip": "Inspecting at the end only finds defects that have already been made. The modern PMBOK 8 mindset seeks to ensure that processes prevent defects from originating."
            },
            {
              "id": "les-3-5",
              "title": "Principle 4: Be an Accountable Leader",
              "section": "3.6",
              "xp": 35,
              "timeMin": 7,
              "summary": "Be an Accountable Leader: Lead with integrity, empathy and a sense of fiduciary stewardship, taking full responsibility for decisions.",
              "points": [
                "v7 merger: Merges 'Demonstrate Leadership Behaviors' and 'Be a Diligent, Respectful and Caring Steward'.",
                "Servant Leadership: The PM supports team members, removes blockers and fosters their professional development.",
                "Accountability: The leader takes ownership of success or failure, communicating with radical transparency to sponsors and the team.",
                "Professional Ethics: Rigorous compliance with the PMI Code of Ethics and Professional Conduct (Responsibility, Respect, Fairness, Honesty)."
              ],
              "examTip": "An accountable leader never blames the team in front of executives; they take responsibility for the outcome and work internally with the team on the solution."
            },
            {
              "id": "les-3-6",
              "title": "Principle 5: Integrate Sustainability Within All Project Areas",
              "section": "3.7",
              "xp": 35,
              "timeMin": 7,
              "summary": "Integrate Sustainability Within All Project Areas: The central novelty of the 8th edition! Projects must consider their ecological footprint, social impact and long-term economic viability.",
              "points": [
                "New Principle in the 8th Edition: Elevates sustainability to the level of a core principle of the profession.",
                "Triple Bottom Line (ESG): Environmental factors (carbon footprint, scarce resources), Social factors (labor rights, local community) and Economic factors (lasting value creation).",
                "Sustainability Pyramid: Integrate sustainable practices from material selection through to the final decommissioning of the product.",
                "Full Life Cycle Thinking: Assess not only how much it costs to build the deliverable, but how much it costs to maintain and recycle it over the coming decades."
              ],
              "examTip": "8th edition exam question: When choosing between two material suppliers, one is 5% cheaper but generates twice as much toxic waste. According to PMBOK 8, the PM must assess the comprehensive sustainability impact."
            },
            {
              "id": "les-3-7",
              "title": "Principle 6: Build an Empowered Culture",
              "section": "3.8",
              "xp": 35,
              "timeMin": 7,
              "summary": "Build an Empowered Culture: Foster psychological safety, open collaboration, diversity, inclusion and decentralized decision-making.",
              "points": [
                "v7 refinement: Evolves from 'Create a collaborative team' toward systematic cultural empowerment.",
                "Psychological Safety: The team can voice doubts, flag errors or propose innovations without fear of retaliation or humiliation.",
                "Delegation and Autonomy: Those who do the daily work are closest to the problem and must have the authority to decide execution details.",
                "Diversity and Inclusion: Drawing on diverse perspectives in global, multidisciplinary teams enriches problem solving."
              ],
              "examTip": "When the team makes a mistake in a controlled experiment, the PM celebrates the learning gained instead of imposing punitive sanctions."
            }
          ]
        },
        {
          "id": "unit-4",
          "number": 4,
          "title": "Project Life Cycles and Focus Areas",
          "sectionRef": "Section 4 (4.1–4.5)",
          "description": "Phases, approaches (predictive, adaptive, hybrid), delivery cadence and the 5 Focus Areas that reincorporate the Process Groups.",
          "lessons": [
            {
              "id": "les-4-1",
              "title": "Phases and Development Approaches",
              "section": "4.1 - 4.2",
              "xp": 30,
              "timeMin": 7,
              "summary": "The development spectrum: from fully predictive (waterfall) to fully adaptive (agile/iterative), and the predominant hybrid reality.",
              "points": [
                "Predictive (Waterfall): Scope, time and cost are defined at the outset. Changes are strictly controlled. Ideal for well-understood deliverables (e.g., civil construction).",
                "Adaptive (Agile): Scope evolves with frequent feedback. Early, incremental deliveries. Ideal for high uncertainty and innovative software.",
                "Hybrid: A pragmatic combination. Example: adaptive software development with predictive deployment of physical infrastructure.",
                "Project Phases: Logical divisions that conclude with a phase gate (or kill point) where the decision is made to continue or abort."
              ],
              "examTip": "For the exam, no approach is superior to another: the key is tailoring according to technical and requirements uncertainty (Stacey Matrix)."
            },
            {
              "id": "les-4-2",
              "title": "Approach Selection Criteria and Delivery Cadence",
              "section": "4.3 - 4.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Factors that determine the best approach (nature of the deliverable, organizational culture) and the delivery cadence options.",
              "points": [
                "Deliverable Factors: Level of novelty, requirements certainty, ease of change and safety risk.",
                "Organizational Factors: Customer capacity to engage weekly, corporate structure and risk appetite.",
                "Single Delivery: One single release at the end (e.g., a new bridge).",
                "Multiple Deliveries: Deliveries by module at fixed milestones.",
                "Periodic / Continuous Delivery: Frequent releases at the end of each sprint or continuous deployment (DevOps)."
              ],
              "examTip": "If a customer is not available to review deliverables weekly, a purely agile approach will fail for lack of feedback; an adapted or hybrid model is required."
            },
            {
              "id": "les-4-3",
              "title": "The 5 Focus Areas",
              "section": "4.5",
              "xp": 35,
              "timeMin": 8,
              "summary": "The 8th edition reintroduces the historical 'Process Groups', transformed into flexible, non-prescriptive 'Focus Areas'.",
              "points": [
                "Historical reinvention: They were previously called 'Process Groups' (Initiating, Planning, Executing, Monitoring and Controlling, Closing). They are now 'Focus Areas'.",
                "They are not linear chronological phases: they are logical categories of activities that occur concurrently and iteratively.",
                "1. Initiating: Official authorization and initial definition of the project or phase.",
                "2. Planning: Definition of the course of action to achieve the intended value.",
                "3. Executing: Performing the work by coordinating people and resources.",
                "4. Monitoring and Controlling: Measuring performance against the plan and proactively managing change.",
                "5. Closing: Formal conclusion, verification of value, knowledge archiving and release of resources."
              ],
              "examTip": "Classic exam point: the Focus Areas apply in ALL approaches (even in Scrum, where each Sprint has its own mini-initiating, planning, executing, controlling and review/closing)."
            }
          ]
        }
      ]
    },
    {
      "id": "part-2",
      "number": 2,
      "title": "Foundations Guide (PMBOK® Guide)",
      "titleEn": "A Guide to the Project Management Body of Knowledge",
      "description": "The 7 Performance Domains synthesized with the 40 Processes, Inputs, Tools, Outputs, Tailoring and Outcome Checks.",
      "color": "#1976D2",
      "icon": "account_tree",
      "units": [
        {
          "id": "unit-5",
          "number": 5,
          "title": "Introduction and Overview of the 7 Performance Domains",
          "sectionRef": "Chapters 1 and 2 (2.0)",
          "description": "Structure of the Guide, integration of the historical Knowledge Areas into 7 Performance Domains, and map of the 40 processes.",
          "lessons": [
            {
              "id": "les-5-1",
              "title": "Structure of the Guide and the 7 Performance Domains",
              "section": "1.1 - 1.3, 2.0",
              "xp": 30,
              "timeMin": 6,
              "summary": "How the 8th edition synthesizes the 10 traditional Knowledge Areas into 7 Performance Domains integrated with 40 non-prescriptive processes.",
              "points": [
                "The 7 Domains: 1) Governance, 2) Scope, 3) Schedule, 4) Finance, 5) Stakeholders, 6) Resources, 7) Risk.",
                "Synergy: The 10 former Knowledge Areas (Integration, Scope, Schedule, Cost, Quality, Resources, Communications, Risk, Procurement, Stakeholder) were organically redistributed.",
                "Integration and Quality are integrated into the Governance Domain.",
                "Communications is integrated into the Stakeholders Domain.",
                "Procurement has a presence in Governance (Plan Sourcing Strategy) and an exhaustive technical appendix (X4).",
                "40 formal but non-prescriptive processes that adapt to any environment."
              ],
              "examTip": "Understand the matrix: 7 Domains in the rows x 5 Focus Areas in the columns = 40 Project Management Processes."
            }
          ]
        },
        {
          "id": "unit-6",
          "number": 6,
          "title": "Governance Performance Domain",
          "sectionRef": "Chapter 2 (2.1) - 9 Processes",
          "description": "Decision-making, plan integration, sourcing strategy, quality, knowledge, change management and closing.",
          "lessons": [
            {
              "id": "les-6-1",
              "title": "Governance Fundamentals and Models",
              "section": "2.1.1 - 2.1.5",
              "xp": 35,
              "timeMin": 7,
              "summary": "Key governance concepts: ensuring the project creates and protects value, structuring oversight models and setting success metrics.",
              "points": [
                "Governance spans the entire life cycle: from authorizing the start to deciding to cancel a project if it loses viability.",
                "Structured vs self-managed projects: The rigor of the control framework depends on criticality and environment.",
                "Governance Metrics: ROI, NPV, IRR, stakeholder satisfaction, strategic alignment index and regulatory compliance.",
                "Considerations in predictive environments: Formal checkpoints and Change Control Board (CCB) approval meetings."
              ],
              "examTip": "Project governance defines 'who makes which decision' and 'when it is escalated'. If governance is unclear, authority conflicts arise."
            },
            {
              "id": "les-6-2",
              "title": "Governance Initiating and Planning Processes",
              "section": "2.1.6.1 - 2.1.6.3",
              "xp": 40,
              "timeMin": 9,
              "summary": "1. Initiate Project or Phase, 2. Integrate and Align Project Plans, 3. Plan Sourcing Strategy.",
              "points": [
                "Process 1: Initiate Project or Phase [Initiating]. Key outputs: Project Charter and Assumption Log.",
                "The Project Charter formally authorizes the existence of the project and gives the PM the authority to assign organizational resources.",
                "Process 2: Integrate and Align Project Plans [Planning]. Key output: Project Management Plan.",
                "The integrated plan harmonizes all baselines (scope, schedule, cost) and subsidiary plans.",
                "Process 3: Plan Sourcing Strategy [Planning]. Output: Sourcing strategy and make-or-buy decisions."
              ],
              "examTip": "The Project Charter is signed by the Sponsor, NOT the Project Manager. The PM may collaborate on drafting it, but the Sponsor is the one who authorizes it."
            },
            {
              "id": "les-6-3",
              "title": "Governance Executing Processes",
              "section": "2.1.6.4 - 2.1.6.6",
              "xp": 40,
              "timeMin": 8,
              "summary": "4. Manage Project Execution, 5. Manage Quality Assurance, 6. Manage Project Knowledge.",
              "points": [
                "Process 4: Manage Project Execution [Executing]. Directs daily work, assigns tasks and generates Deliverables and Performance Data.",
                "Process 5: Manage Quality Assurance [Executing]. Audits processes to ensure they meet standards and continuously improve. Output: Quality reports and change requests.",
                "Process 6: Manage Project Knowledge [Executing]. Fosters the exchange of explicit and tacit knowledge. Output: Lessons Learned Register."
              ],
              "examTip": "Crucial distinction: Quality Assurance (QA) focuses on PROCESSES (are we working with the right methods?). Quality Control focuses on DELIVERABLES (does the product have defects?)."
            },
            {
              "id": "les-6-4",
              "title": "Monitoring, Change Control and Governance Closing",
              "section": "2.1.6.7 - 2.1.6.9",
              "xp": 40,
              "timeMin": 9,
              "summary": "7. Monitor and Control Project Performance, 8. Assess and Implement Changes, 9. Close Project or Phase.",
              "points": [
                "Process 7: Monitor and Control Project Performance [M&C]. Compares reality against the baseline and generates Work Performance Reports.",
                "Process 8: Assess and Implement Changes [M&C]. The formal integrated change control flow: receive the request, analyze the impact on all variables, submit to the CCB and update the plans.",
                "Process 9: Close Project or Phase [Closing]. Formal transfer of the final deliverable to operations, contract closure, repository archiving and release of resources."
              ],
              "examTip": "Change control flow for the exam: 1) Analyze the overall impact -> 2) Evaluate options with the team -> 3) Present to the CCB/Sponsor -> 4) If approved, update the plan and communicate to stakeholders."
            },
            {
              "id": "les-6-5",
              "title": "Tailoring, Interactions and Outcome Verification",
              "section": "2.1.7 - 2.1.9",
              "xp": 30,
              "timeMin": 6,
              "summary": "How to tailor governance and verify whether the domain achieved its expected outcomes (Table 2-5).",
              "points": [
                "Tailoring in Governance: In agile projects, governance is decentralized to the team and the Product Owner prioritizes the backlog.",
                "Interactions: Connects with Finance (funding authorization), Scope (changes) and Risk (escalation).",
                "Outcome Checks: Were decisions aligned with strategy? Were changes managed in an orderly way? Did closure transfer real value to operations?"
              ],
              "examTip": "Each performance domain concludes with a 'Check Results' section. If stakeholders are not satisfied with decision-making, governance has failed."
            }
          ]
        },
        {
          "id": "unit-7",
          "number": 7,
          "title": "Scope Performance Domain",
          "sectionRef": "Chapter 2 (2.2) - 6 Processes",
          "description": "Plan scope management, elicit requirements, define scope, create the WBS, and monitor and validate scope.",
          "lessons": [
            {
              "id": "les-7-1",
              "title": "Key Scope Concepts",
              "section": "2.2.1",
              "xp": 35,
              "timeMin": 6,
              "summary": "The difference between product scope and project scope, user stories, acceptance criteria and decomposition.",
              "points": [
                "Product Scope: The features and functions that describe the final product, service or result.",
                "Project Scope: The work that must be performed to deliver the product with the specified features.",
                "Scope Creep: Uncontrolled expansion of scope without adjustments to time, cost or resources.",
                "Acceptance Criteria: Measurable, objective conditions that must be met before deliverables are formally accepted."
              ],
              "examTip": "Completion of product scope is measured against the requirements; completion of project scope is measured against the project management plan."
            },
            {
              "id": "les-7-2",
              "title": "Scope Planning Processes",
              "section": "2.2.2.1 - 2.2.2.4",
              "xp": 40,
              "timeMin": 9,
              "summary": "1. Plan Scope Management, 2. Elicit and Analyze Requirements, 3. Define Scope, 4. Develop Scope Structure (WBS).",
              "points": [
                "Process 10: Plan Scope Management. Documents how scope will be defined, validated and controlled.",
                "Process 11: Elicit and Analyze Requirements. Gathering through interviews, surveys and facilitated workshops. Output: Requirements Traceability Matrix.",
                "Process 12: Define Scope. Produces the Project Scope Statement with explicit inclusions and exclusions.",
                "Process 13: Develop Scope Structure (WBS). Creates the WBS by decomposing the work into Work Packages. 100% Rule: The WBS contains 100% of the work and nothing more."
              ],
              "examTip": "The lowest level of the WBS is the 'Work Package'. The WBS Dictionary accompanies the WBS, detailing each package."
            },
            {
              "id": "les-7-3",
              "title": "Scope Monitoring, Validation and Verification",
              "section": "2.2.2.5 - 2.2.5",
              "xp": 40,
              "timeMin": 8,
              "summary": "5. Monitor Scope, 6. Validate Scope, tailoring considerations and outcome checks.",
              "points": [
                "Process 14: Monitor and Control Scope. Measures the status of scope and manages deviations from the baseline.",
                "Process 15: Validate Scope. Formalizes the acceptance of completed deliverables by the CUSTOMER or SPONSOR.",
                "Vital Distinction: Quality Control (internal, with the team) verifies technical accuracy -> then Validate Scope (with the customer) obtains the formal acceptance signature.",
                "Scope Outcome Check (Table 2-6): Deliverables meet expectations, there is no scope creep, and requirements are traced end to end."
              ],
              "examTip": "Classic exam question: In which process does the customer inspect and sign off on the acceptance of a deliverable? Answer: Validate Scope."
            }
          ]
        },
        {
          "id": "unit-8",
          "number": 8,
          "title": "Schedule Performance Domain",
          "sectionRef": "Chapter 2 (2.3) - 3 Processes",
          "description": "Plan schedule management, develop the schedule (CPM critical path, dependencies, compression) and monitor the schedule.",
          "lessons": [
            {
              "id": "les-8-1",
              "title": "Key Schedule Concepts",
              "section": "2.3.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Activities, precedence types (FS, FF, SS, SF), leads and lags, total and free float.",
              "points": [
                "PDM Dependency Types: Finish-to-Start (FS - most common), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF - very rare).",
                "Lead: The time by which a successor activity can start before its predecessor finishes.",
                "Lag: A mandatory delay between activities (e.g., waiting 3 days for concrete to cure).",
                "Critical Path Method (CPM): The sequence of activities with the least float (typically zero) that determines the shortest total duration of the project.",
                "Total Float: The time an activity can be delayed without delaying the project's finish date."
              ],
              "examTip": "If an activity on the critical path falls 2 days behind, the finish date of the entire project slips 2 days automatically."
            },
            {
              "id": "les-8-2",
              "title": "Schedule Planning Processes",
              "section": "2.3.2.1 - 2.3.2.2",
              "xp": 40,
              "timeMin": 9,
              "summary": "16. Plan Schedule Management, 17. Develop Schedule (steps, network methods and baselines).",
              "points": [
                "Process 16: Plan Schedule Management. Defines methodologies, software, units of measure and tolerance levels.",
                "Process 17: Develop Schedule. Integrates the activity list, duration estimates, dependencies and resources to build the scheduling model.",
                "Steps to Develop the Schedule (Figure 2-23): 1) Define activities -> 2) Sequence activities -> 3) Estimate resources and durations -> 4) Analyze the network and critical path -> 5) Adjust with resource leveling.",
                "Key Output: Schedule Baseline and Project Schedule (Gantt charts, milestone charts)."
              ],
              "examTip": "The Schedule Baseline is the formally approved version; it can only be modified through the Assess and Implement Changes process with authorization."
            },
            {
              "id": "les-8-3",
              "title": "Schedule Monitoring, Compression and Verification",
              "section": "2.3.2.3, 2.3.3 - 2.3.5",
              "xp": 40,
              "timeMin": 8,
              "summary": "18. Monitor Schedule, compression techniques (Crashing vs Fast Tracking) and outcome checks.",
              "points": [
                "Process 18: Monitor and Control Schedule. Tracks progress using burndown charts, SPI and milestones.",
                "Compression: Crashing: Adding resources to critical path activities to shorten time. INCREASES COSTS and risks.",
                "Compression: Fast Tracking: Performing sequential activities in parallel. INCREASES RISK and possible rework, but not necessarily direct cost.",
                "Resource Leveling: Resolves over-allocations by moving activity dates; OFTEN LENGTHENS THE CRITICAL PATH.",
                "Resource Smoothing: Adjusts resources within the available float; does NOT modify the critical path."
              ],
              "examTip": "If the sponsor demands an earlier finish but there is NO extra budget: use Fast Tracking. If there is budget but the rework risk cannot be accepted: evaluate Crashing."
            }
          ]
        },
        {
          "id": "unit-9",
          "number": 9,
          "title": "Finance Performance Domain",
          "sectionRef": "Chapter 2 (2.4) - 4 Processes",
          "description": "Plan finances, estimate costs, develop the budget (Cost Baseline), monitor finances and earned value management.",
          "lessons": [
            {
              "id": "les-9-1",
              "title": "Key Financial Management Concepts",
              "section": "2.4.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Direct and indirect costs, fixed and variable costs, opportunity cost, sunk costs and budget structure.",
              "points": [
                "Direct Costs: Attributable exclusively to project work (e.g., team salaries, materials).",
                "Indirect Costs: Shared by multiple projects (e.g., office rent, utilities).",
                "Sunk Cost: Money already spent in the past; it must NOT influence future decisions to continue or cancel the project.",
                "Contingency Reserve: Funds allocated for 'known unknowns' (risks identified in the register). Part of the Cost Baseline.",
                "Management Reserve: Funds allocated for 'unknown unknowns' (unidentified contingencies). Controlled by the Sponsor; NOT part of the Cost Baseline."
              ],
              "examTip": "Total Project Budget = Cost Baseline + Management Reserve. The PM manages the Cost Baseline; using the Management Reserve requires executive authorization."
            },
            {
              "id": "les-9-2",
              "title": "Financial Planning and Budget Development",
              "section": "2.4.2.1 - 2.4.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "19. Plan Financial Management, 20. Estimate Costs, 21. Develop Budget and the creation of the S-Curve.",
              "points": [
                "Process 19: Plan Financial Management. Establishes rounding criteria, monetary units and control thresholds.",
                "Process 20: Estimate Costs. Methods: Analogous Estimating (fast, lower precision), Parametric (statistical, e.g., cost per m2), Bottom-up (built up from work packages, more precise and costly), Three-Point (PERT).",
                "Process 21: Develop Budget. Aggregates activity estimates + work packages + contingency reserves.",
                "Key Output: Cost Baseline, represented graphically as an 'S-Curve' over time."
              ],
              "examTip": "The S-Curve shows the cumulative planned costs over time. It starts with a gentle slope, accelerates during execution and flattens at closure."
            },
            {
              "id": "les-9-3",
              "title": "Financial Monitoring and Outcome Verification",
              "section": "2.4.2.4, 2.4.3 - 2.4.5",
              "xp": 40,
              "timeMin": 8,
              "summary": "22. Monitor Finances, integration with Earned Value Management (EVM) and outcome checks.",
              "points": [
                "Process 22: Monitor and Control Finances. Controls disbursements and supplier payments and calculates cost variances.",
                "Cash Flow Management: Ensuring funds are available on time to pay operational obligations.",
                "Outcome Check (Table 2-8): Was the project completed within the approved funds? Were spending limits respected? Was the intended financial return generated?"
              ],
              "examTip": "Financial monitoring does not only review paid invoices (AC); it must be contrasted with the work actually completed (EV) to determine whether there is a real cost overrun."
            }
          ]
        },
        {
          "id": "unit-10",
          "number": 10,
          "title": "Stakeholders Performance Domain",
          "sectionRef": "Chapter 2 (2.5) - 7 Processes",
          "description": "Identify stakeholders, plan engagement and communications, manage relationships and monitor channels.",
          "lessons": [
            {
              "id": "les-10-1",
              "title": "Key Stakeholder and Communication Concepts",
              "section": "2.5.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Internal and external stakeholders, classification models (Power/Interest, Salience) and communication channels.",
              "points": [
                "Stakeholder: An individual or group that can affect, be affected by, or perceive itself to be affected by a project decision.",
                "Power vs Interest Matrix: 1) High Power/High Interest (Manage Closely), 2) High Power/Low Interest (Keep Satisfied), 3) Low Power/High Interest (Keep Informed), 4) Low Power/Low Interest (Monitor with minimal effort).",
                "Communication Channels Calculation: Formula N * (N - 1) / 2. If a team grows from 5 to 10 people, the channels increase from 10 to 45.",
                "Communication Noise: Cultural barriers, biases, poor technology or incomprehensible technical jargon."
              ],
              "examTip": "When a new member joins the team, the number of communication channels grows exponentially, increasing the complexity the PM must manage."
            },
            {
              "id": "les-10-2",
              "title": "Stakeholder and Communications Identification and Planning",
              "section": "2.5.2.1 - 2.5.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "23. Identify Stakeholders, 24. Plan Stakeholder Engagement, 25. Plan Communications Management.",
              "points": [
                "Process 23: Identify Stakeholders [Initiating]. Performed from day one and continuously. Output: Stakeholder Register.",
                "Process 24: Plan Stakeholder Engagement. Output: Stakeholder Engagement Assessment Matrix (Unaware, Resistant, Neutral, Supportive, Leading).",
                "Process 25: Plan Communications Management. Defines what information is needed, who needs it, how often, through which medium and in what format."
              ],
              "examTip": "The Stakeholder Register contains confidential information about people's perceptions and attitudes; it must be properly protected."
            },
            {
              "id": "les-10-3",
              "title": "Stakeholder and Communications Management and Monitoring",
              "section": "2.5.2.4 - 2.5.5",
              "xp": 40,
              "timeMin": 9,
              "summary": "26. Manage Stakeholder Engagement, 27. Manage Communications, 28. Monitor Stakeholder Engagement, 29. Monitor Communications.",
              "points": [
                "Process 26: Manage Stakeholder Engagement [Executing]. Actively interact to foster commitment, address concerns and manage expectations.",
                "Process 27: Manage Communications [Executing]. Create, collect, distribute, store and retrieve project information according to the plan.",
                "Process 28: Monitor Stakeholder Engagement [M&C]. Assess whether relationships are working or whether engagement strategies need adjustment.",
                "Process 29: Monitor Communications [M&C]. Ensure the right message reaches the right person at the right time.",
                "Outcome Check (Table 2-9): Productive relationships, open communication and shared alignment on objectives."
              ],
              "examTip": "The PM spends up to 90% of their time communicating. If a key stakeholder shows resistance, the answer is always to meet proactively to understand their concern."
            }
          ]
        },
        {
          "id": "unit-11",
          "number": 11,
          "title": "Resources Performance Domain",
          "sectionRef": "Chapter 2 (2.6) - 5 Processes",
          "description": "Plan resources, estimate them, acquire physical and human resources, lead the team and monitor assignments.",
          "lessons": [
            {
              "id": "les-11-1",
              "title": "Key Concepts of Resources and Team Dynamics",
              "section": "2.6.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Human vs physical resources, the Tuckman model, emotional intelligence, situational leadership and the RACI Matrix.",
              "points": [
                "Physical Resources (equipment, materials, licenses) vs Team Resources (people and talents).",
                "Tuckman Stages: Forming, Storming, Norming, Performing, Adjourning.",
                "Emotional Intelligence: Self-awareness, self-regulation, motivation, empathy and social skills.",
                "RACI Matrix: Responsible (does the work), Accountable (the single party who answers for it), Consulted, Informed. Rule: Only ONE 'A' per activity."
              ],
              "examTip": "In the 'Storming' stage (conflict and clashing personalities), the PM should act as a mediator and set clear team norms (Team Charter)."
            },
            {
              "id": "les-11-2",
              "title": "Resource Planning, Estimation and Acquisition",
              "section": "2.6.2.1 - 2.6.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "30. Plan Resource Management, 31. Estimate Resources, 32. Acquire Resources.",
              "points": [
                "Process 30: Plan Resource Management. Defines the acquisition, management and release of personnel and materials. Output: Team Charter.",
                "Process 31: Estimate Resources. Determines the personnel, equipment and supplies required for each activity. Output: Resource Breakdown Structure (RBS).",
                "Process 32: Acquire Resources [Executing]. Obtains the necessary team members, facilities and materials through internal assignment or negotiation."
              ],
              "examTip": "The Team Charter is created and agreed upon by the TEAM ITSELF, establishing shared values, meeting rules and working agreements."
            },
            {
              "id": "les-11-3",
              "title": "Leading the Team, Monitoring and Verifying Resources",
              "section": "2.6.2.4 - 2.6.5",
              "xp": 40,
              "timeMin": 9,
              "summary": "33. Lead the Team, 34. Monitor Resources, conflict resolution and outcome checks.",
              "points": [
                "Process 33: Lead the Team [Executing]. Develop competencies, motivate, provide feedback and resolve conflicts.",
                "Conflict Resolution Techniques: 1) Collaborate / Problem Solve (win-win, considered the best by PMI), 2) Force / Direct (impose a solution), 3) Smooth / Accommodate (emphasize commonalities), 4) Withdraw / Avoid (postpone), 5) Compromise / Reconcile (both parties give something up).",
                "Process 34: Monitor and Control Resourcing [M&C]. Ensures physical resources are available in the right place and at the right time.",
                "Outcome Check (Table 2-10): High team morale and collaboration, optimal use of physical resources without waste."
              ],
              "examTip": "On the PMP exam, the preferred answer to a conflict between two professionals is almost always: 'Collaborate / Problem Solve' through constructive face-to-face dialogue."
            }
          ]
        },
        {
          "id": "unit-12",
          "number": 12,
          "title": "Risk Performance Domain",
          "sectionRef": "Chapter 2 (2.7) - 6 Processes",
          "description": "Plan risk management, identification, qualitative and quantitative analysis, response planning, implementation and monitoring.",
          "lessons": [
            {
              "id": "les-12-1",
              "title": "Key Risk Management Concepts",
              "section": "2.7.1",
              "xp": 35,
              "timeMin": 7,
              "summary": "Uncertainty, individual vs overall risk, threats vs opportunities, risk appetite, tolerance and threshold.",
              "points": [
                "Individual Project Risk: An uncertain event or condition that, if it occurs, has a positive (opportunity) or negative (threat) effect on one or more objectives.",
                "Overall Project Risk: The effect of uncertainty on the project as a whole, arising from all risk sources and their systemic interaction.",
                "Risk Appetite: The degree of uncertainty an organization is willing to accept in pursuit of a reward.",
                "Risk Threshold: A measurable level of acceptable risk; above the threshold, an immediate, mandatory response is required."
              ],
              "examTip": "Remember: in PMBOK 8, risk is NOT only danger. An opportunity is a positive risk that must be exploited, shared or enhanced to maximize value."
            },
            {
              "id": "les-12-2",
              "title": "Risk Planning and Identification",
              "section": "2.7.2.1 - 2.7.2.2",
              "xp": 40,
              "timeMin": 8,
              "summary": "35. Plan Risk Management, 36. Identify Risks and creation of the Risk Register.",
              "points": [
                "Process 35: Plan Risk Management. Defines how risk activities will be performed. Output: Risk Management Plan and Risk Breakdown Structure (RBS).",
                "Process 36: Identify Risks. Identifies individual risks and overall risk sources. Tools: Brainstorming, checklists, SWOT analysis, assumption analysis.",
                "Key Outputs: Risk Register and Risk Report. Updated throughout the project."
              ],
              "examTip": "Risk identification is an iterative process that NEVER ends until the project is formally closed."
            },
            {
              "id": "les-12-3",
              "title": "Risk Analysis (Qualitative and Quantitative)",
              "section": "2.7.2.3",
              "xp": 40,
              "timeMin": 8,
              "summary": "37. Perform Risk Analysis: Probability and Impact Matrix, Tornado Diagram and Monte Carlo Simulation.",
              "points": [
                "Process 37: Perform Risk Analysis [Planning]. Combines qualitative and quantitative assessment.",
                "Qualitative Analysis: Prioritizes risks by assessing their probability of occurrence and impact (P x I) in a Probability and Impact Matrix. Fast and applicable to all projects.",
                "Quantitative Analysis: Mathematically models the overall numerical effect of risks on cost and schedule.",
                "Quantitative Tools: Monte Carlo Simulation (generates probability curves for finishing on date/within cost), Tornado Diagram (sensitivity analysis), Expected Monetary Value (EMV = Probability x Impact)."
              ],
              "examTip": "Qualitative analysis is mandatory for all projects; quantitative analysis is reserved for complex, high-risk or large-scale projects."
            },
            {
              "id": "les-12-4",
              "title": "Response Strategies, Implementation and Monitoring",
              "section": "2.7.2.4 - 2.7.5",
              "xp": 40,
              "timeMin": 9,
              "summary": "38. Plan Risk Responses, 39. Implement Risk Responses, 40. Monitor Risks and outcome checks.",
              "points": [
                "Process 38: Plan Risk Responses. Output: Assign a 'Risk Owner' for each key risk.",
                "Threat Strategies: 1) Escalate, 2) Avoid (eliminate the cause), 3) Transfer (insurance, fixed-price contracts), 4) Mitigate (reduce probability or impact), 5) Accept (active: contingency; passive: assume).",
                "Opportunity Strategies: 1) Escalate, 2) Exploit (ensure it occurs 100%), 3) Share (partnership with an expert third party), 4) Enhance (increase probability or positive impact), 5) Accept.",
                "Process 39: Implement Risk Responses [Executing]. Executes the agreed actions when the triggers are activated.",
                "Process 40: Monitor Risks [M&C]. Monitors effectiveness, tracks residual and secondary risks, and closes expired risks.",
                "Outcome Check (Table 2-11): Risks kept within tolerable thresholds, opportunities successfully captured."
              ],
              "examTip": "Buying an insurance policy is the classic example of TRANSFERRING a risk. Removing the conflicting feature from the scope is AVOIDING the risk."
            }
          ]
        },
        {
          "id": "unit-13",
          "number": 13,
          "title": "Tailoring in PMBOK 8",
          "sectionRef": "Chapter 3 (3.1 - 3.7)",
          "description": "The tailoring framework: why to tailor, what to tailor, the 4-step process, diagnostics and customization of the domains.",
          "lessons": [
            {
              "id": "les-13-1",
              "title": "Tailoring Fundamentals: Why and What to Tailor?",
              "section": "3.1 - 3.3",
              "xp": 35,
              "timeMin": 6,
              "summary": "Every project is unique and no standard should be applied blindly. Tailoring adapts the framework to the actual complexity and environment.",
              "points": [
                "Why Tailor?: To avoid useless bureaucracy on simple projects and ensure rigorous controls on mission-critical projects.",
                "What Is Tailored?: 1) Selection of the life cycle and development approach (predictive, hybrid, agile); 2) Processes (which to use, simplify or combine); 3) Stakeholder engagement and tools.",
                "Avoid two dangerous extremes: Neither over-processing (paralyzing bureaucracy) nor anarchy (removing basic governance and quality controls)."
              ],
              "examTip": "Tailoring is not skipping processes out of laziness; it is a deliberate and justified decision to maximize the value delivered."
            },
            {
              "id": "les-13-2",
              "title": "The 4-Step Tailoring Process",
              "section": "3.4 (3.4.1 - 3.4.4)",
              "xp": 35,
              "timeMin": 7,
              "summary": "The formal PMBOK 8 method for tailoring: 1) Select the initial approach, 2) Tailor for the organization, 3) Tailor for the project, 4) Implement ongoing improvement.",
              "points": [
                "Step 1: Select Initial Approach: Evaluate the type of deliverable and the degree of uncertainty.",
                "Step 2: Tailor for the Organization: Integrate corporate policies, culture, OPAs and regulatory compliance frameworks.",
                "Step 3: Tailor for the Project: Adjust according to team size, geographic dispersion, product criticality and customer availability.",
                "Step 4: Implement Ongoing Improvement: Inspect and adapt through retrospectives and periodic lessons learned."
              ],
              "examTip": "The tailoring process does not end at planning: it continues throughout the project as context is learned."
            },
            {
              "id": "les-13-3",
              "title": "Diagnostics and Tailoring of the Performance Domains",
              "section": "3.5 - 3.7",
              "xp": 35,
              "timeMin": 6,
              "summary": "Suitability diagnostic tools and tailoring examples for each of the 7 domains (Table 3-1).",
              "points": [
                "Diagnostic Tools: Suitability assessment radars for organizational fit.",
                "Tailoring in Scope: Changing requirements -> User Stories and Backlog instead of a 200-page formal Requirements Specification.",
                "Tailoring in Schedule: Frequent deliveries -> Kanban boards and WIP limits instead of a Gantt chart with 5,000 lines.",
                "Tailoring in Finance: Agile contracts with a modular budget per sprint instead of a fixed-price turnkey contract."
              ],
              "examTip": "For the exam, demonstrate the ability to assess when a formal approach is appropriate and when a lightweight agile one fits, based on the diagnostic factors."
            }
          ]
        },
        {
          "id": "unit-14",
          "number": 14,
          "title": "Catalog of Inputs, Outputs, Tools and Techniques",
          "sectionRef": "Chapters 4 and 5",
          "description": "Comprehensive catalog of ITTOs, Earned Value (EVM) formulas, estimation methods, compression and analytical diagrams.",
          "lessons": [
            {
              "id": "les-14-1",
              "title": "Master Catalog of Inputs and Outputs",
              "section": "4",
              "xp": 35,
              "timeMin": 7,
              "summary": "A classified compendium of fundamental documents: Business Case, Project Charter, Project Management Plan, Deliverables, Reports and Lessons Learned.",
              "points": [
                "Business Documents: Business Case and Benefits Management Plan (both precede the project).",
                "Authorization Documents: Project Charter.",
                "Subsidiary Plans: Scope, requirements, schedule, cost, quality, resources, communications, risk, procurement and stakeholder plans.",
                "Baselines: Scope (WBS + Dictionary), Schedule and Cost. Combined, the three form the Performance Measurement Baseline (PMB).",
                "Living Documents: Risk Register, Stakeholder Register, Assumption Log, Issue Log."
              ],
              "examTip": "Always distinguish: 'Assumption Log' (what we believe is true without proof) vs 'Issue Log' (problems that have ALREADY occurred and need immediate resolution)."
            },
            {
              "id": "les-14-2",
              "title": "Master Earned Value Management (EVM) Formulas",
              "section": "5 - Table 5-1",
              "xp": 45,
              "timeMin": 10,
              "summary": "All EVM equations from Table 5-1: PV, EV, AC, BAC, CV, SV, CPI, SPI, EAC, ETC, VAC and TCPI, with interpretation rules.",
              "points": [
                "Base Values: PV (Planned Value), EV (Earned Value - value of the work performed), AC (Actual Cost - actual money spent), BAC (Budget at Completion - total budget).",
                "Variances: CV = EV - AC (Positive = Savings / Negative = Overrun). SV = EV - PV (Positive = Ahead / Negative = Behind).",
                "Indices: CPI = EV / AC (> 1 = Cost efficient / < 1 = Cost inefficient). SPI = EV / PV (> 1 = Ahead / < 1 = Behind).",
                "Estimates at Completion: EAC = BAC / CPI (if the current cost rate continues). EAC = AC + (BAC - EV) (if future work is performed at the budgeted rate).",
                "TCPI (To-Complete Performance Index): (BAC - EV) / (BAC - AC). The efficiency that must be achieved in the remaining work to finish within budget."
              ],
              "examTip": "Foolproof EVM mnemonic: Variances are subtractions (EV - something). Indices are divisions (EV / something). EV always comes first. Greater than 1 or positive = GOOD; less than 1 or negative = BAD."
            },
            {
              "id": "les-14-3",
              "title": "Estimation Methods, Network and Schedule",
              "section": "5",
              "xp": 35,
              "timeMin": 8,
              "summary": "PERT formulas (Beta and Triangular), standard deviation, CPM network analysis, float and scatter diagrams.",
              "points": [
                "Triangular Estimate (simple average): (Optimistic + Most Likely + Pessimistic) / 3.",
                "Beta / PERT Estimate (weighted): (O + 4M + P) / 6. Gives 4 times more weight to the most likely scenario.",
                "PERT Standard Deviation (Sigma): (Pessimistic - Optimistic) / 6. Measures the uncertainty and dispersion of the estimate.",
                "PERT Variance: ((P - O) / 6)^2.",
                "Critical Path and Float: Total Float = LS - ES (or LF - EF). Activities with zero float are on the critical path."
              ],
              "examTip": "On the PMP exam, if the question does not specify whether to use Triangular or Beta, always use the Beta distribution: (O + 4M + P) / 6."
            },
            {
              "id": "les-14-4",
              "title": "Analysis Tools, Quality and Visual Methods",
              "section": "5",
              "xp": 35,
              "timeMin": 8,
              "summary": "Tornado Diagram, Decision Trees, Cost of Quality (COQ), Information Radiators, Kanban Boards and Burndown/Burnup Charts.",
              "points": [
                "Tornado Diagram: Horizontal bar representation for sensitivity analysis showing which variables have the greatest impact on the project.",
                "Decision Trees: Evaluate complex decisions by calculating the Expected Monetary Value (EMV) at each decision branch.",
                "Cost of Quality (COQ): Cost of Conformance (Prevention + Appraisal) vs Cost of Nonconformance (Internal Failures + External Failures).",
                "Information Radiator: A physical or digital display in a shared space that shows project metrics in real time (e.g., a Kanban board, burndown charts).",
                "Burndown vs Burnup: Burndown shows remaining work descending toward zero; Burnup shows completed work rising toward the target."
              ],
              "examTip": "An information radiator lets anyone see the project's status without having to ask the team for a report."
            }
          ]
        }
      ]
    },
    {
      "id": "part-3",
      "number": 3,
      "title": "Appendices and New Frontiers of PMBOK 8",
      "titleEn": "Appendices and Special Topics",
      "description": "Project Management Offices (PMO), Artificial Intelligence in projects, Procurement and historical evolution.",
      "color": "#7B1FA2",
      "icon": "psychology",
      "units": [
        {
          "id": "unit-15",
          "number": 15,
          "title": "Appendix X2: Project Management Offices (PMO)",
          "sectionRef": "Appendix X2 (X2.1 - X2.6)",
          "description": "The value proposition of the modern PMO, client centricity, hybrid models and maturity levels.",
          "lessons": [
            {
              "id": "les-15-1",
              "title": "The Modern, Client-Centered PMO",
              "section": "X2.1 - X2.6",
              "xp": 35,
              "timeMin": 7,
              "summary": "Evolution of the PMO: from a bureaucratic control center to a strategic catalyst for value delivery centered on its internal customers.",
              "points": [
                "PMO Value Proposition: Facilitate strategic execution, standardize good practices without stifling agility, and optimize resource allocation.",
                "Client Centricity: The PMO sees project managers and teams as its customers, designing services tailored to their real needs.",
                "Flexibility and Hybridization: Rigid models (supportive, controlling, directive) no longer exist; successful PMOs combine hybrid characteristics.",
                "PMO Maturity Models: Assess the evolution from a basic operational PMO to a strategic, business-oriented PMO."
              ],
              "examTip": "A high-performing PMO does not impose arbitrary methodologies; it adapts its support according to the maturity and needs of the project."
            }
          ]
        },
        {
          "id": "unit-16",
          "number": 16,
          "title": "Appendix X3: Artificial Intelligence in Projects",
          "sectionRef": "Appendix X3 (X3.1 - X3.4)",
          "description": "The major addition in PMBOK 8: AI adoption strategies, practical use cases, bias mitigation and ethical governance.",
          "lessons": [
            {
              "id": "les-16-1",
              "title": "AI Adoption Strategies in Projects",
              "section": "X3.1 - X3.2",
              "xp": 40,
              "timeMin": 8,
              "summary": "How AI transforms project management: automation levels, augmentation of human capabilities and supervised autonomy.",
              "points": [
                "Adoption Strategies: 1) Automation (repetitive tasks such as meeting minutes and task assignment); 2) Augmentation (assistance with schedule forecasting, risk analysis and plan drafting); 3) Autonomous Systems (with human oversight).",
                "Core Use Cases in PMBOK 8: Predictive estimation based on large historical datasets, resource allocation optimization, early detection of cost anomalies and simulation of complex scenarios.",
                "The Human Factor: AI takes on the mechanical and analytical load, freeing the PM to focus on empathetic leadership, political negotiation, conflict resolution and strategy."
              ],
              "examTip": "PMBOK 8 stresses that AI never replaces accountability: the human remains 100% responsible for ethical and governance decisions."
            },
            {
              "id": "les-16-2",
              "title": "Responsible Use, Bias and AI Ethics",
              "section": "X3.3 - X3.4",
              "xp": 35,
              "timeMin": 7,
              "summary": "Ethical principles for the use of AI: mitigating algorithmic bias, corporate data privacy and accountability.",
              "points": [
                "Algorithmic Bias: AI models inherit the prejudices of the data they were trained on. Mitigation: Diversified datasets and periodic audits.",
                "Privacy and Confidentiality: Protect sensitive customer data, trade secrets and proprietary code from leaking into public models.",
                "Accountability: AI cannot be legally or ethically responsible. Every automated decision must have a clearly identified human owner.",
                "Transparency and Explainability: Being able to explain to executives how the AI arrived at a specific budget or risk recommendation."
              ],
              "examTip": "8th edition exam question: If an AI algorithm screens out candidates for the team based on biased historical data, who is responsible? The Project Manager and the organization, for failing to audit the tool."
            }
          ]
        },
        {
          "id": "unit-17",
          "number": 17,
          "title": "Appendix X4: Procurement Management",
          "sectionRef": "Appendix X4 (X4.1 - X4.9)",
          "description": "Make-or-Buy analysis, bid documents (RFP, RFQ, IFB), contract types (FP, CR, T&M) and claims.",
          "lessons": [
            {
              "id": "les-17-1",
              "title": "Procurement Strategy and Bid Documents",
              "section": "X4.1 - X4.4",
              "xp": 35,
              "timeMin": 7,
              "summary": "When to contract third parties (Make-or-Buy Analysis), how to structure the sourcing strategy and how to prepare solicitation documents.",
              "points": [
                "Make-or-Buy Analysis: Compare the direct and indirect costs of developing in-house versus acquiring from the market, considering confidentiality and technical capacity.",
                "Bid Documents:",
                "- RFI (Request for Information): Explore which solutions exist in the market.",
                "- RFP (Request for Proposal): Request detailed technical and commercial proposals for complex problems.",
                "- RFQ (Request for Quotation) / IFB (Invitation for Bid): Request price quotations for standardized deliverables.",
                "Bidder Conferences: Meetings with all suppliers to answer questions, ensuring equal conditions and transparency."
              ],
              "examTip": "In a bidder conference, all questions and answers must be shared in writing with ALL bidders to avoid unfair advantages."
            },
            {
              "id": "les-17-2",
              "title": "Contract Types, Selection and Claims",
              "section": "X4.5 - X4.9",
              "xp": 40,
              "timeMin": 9,
              "summary": "Contract models (Fixed Price, Cost-Reimbursable, Time and Materials), selection criteria and claims management.",
              "points": [
                "Fixed-Price (FP / FFP): The seller assumes the greatest financial risk. Ideal when the scope is perfectly defined.",
                "Cost-Reimbursable (CPFF, CPIF): The buyer pays actual costs plus a fee and assumes the risk. Ideal for uncertain scope or research.",
                "Time & Materials (T&M): A hybrid billed by hours worked. Ideal for temporary staff augmentation with a not-to-exceed ceiling.",
                "Claims Administration: The process for managing contractual disputes. Preferred order: Direct negotiation -> Mediation -> Arbitration -> Litigation (last resort)."
              ],
              "examTip": "Who assumes the greatest financial risk in a Firm Fixed Price (FFP) contract? The Seller. In Cost Plus Fixed Fee (CPFF)? The Buyer."
            }
          ]
        },
        {
          "id": "unit-18",
          "number": 18,
          "title": "Appendix X5: Historical Evolution of the PMBOK Guide",
          "sectionRef": "Appendix X5 (X5.1 - X5.4)",
          "description": "The empirical research behind the 8th edition, a table of historical transformations, and why 12 principles were synthesized into 6.",
          "lessons": [
            {
              "id": "les-18-1",
              "title": "From the 7th to the 8th Edition: The Great Synthesis",
              "section": "X5.1 - X5.4",
              "xp": 30,
              "timeMin": 6,
              "summary": "Why PMI evolved toward the 8th edition: balancing principle-based orientation with the need for structured processes and integrated domains.",
              "points": [
                "Empirical Basis: 48,000 data points and 12,000 comments from the global community.",
                "Evolution of the Principles: From the 12 principles of the 7th edition to the 6 refined principles of the 8th.",
                "Reincorporation of Processes: The 7th edition eliminated detailed processes; the community requested their structured return. The 8th offers 40 well-balanced, non-prescriptive processes.",
                "Maturity of the Profession: From the mechanistic efficiency of the 20th century to the creation of sustainable, technology-driven value in the 21st century."
              ],
              "examTip": "The 8th edition combines the best of two worlds: the principle-based strategic vision of the 7th edition and the methodological soundness of the 6th edition's processes."
            }
          ]
        }
      ]
    }
  ]
};

  // English localization of js/data/processes.js (generated from the Spanish source; keep in sync)
const processes = [
  {
    "id": "proc-gov-1",
    "number": 1,
    "name": "Initiate Project or Phase",
    "nameEn": "Initiate Project or Phase",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Initiating",
    "focusAreaEn": "Initiating",
    "purpose": "Formally authorize the start of a project or phase and give the project manager the authority to apply organizational resources to project activities.",
    "inputs": [
      "Business documents (Business Case, Benefits Management Plan)",
      "Agreements and contracts",
      "Enterprise environmental factors (EEFs)",
      "Organizational process assets (OPAs)"
    ],
    "tools": [
      "Expert judgment",
      "Data gathering (Brainstorming, Focus groups, Interviews)",
      "Interpersonal and team skills (Conflict management, Facilitation)",
      "Meetings",
      "Project Canvas",
      "Responsibility assignment matrix"
    ],
    "outputs": [
      "Project Charter",
      "Assumption Log"
    ],
    "tailoring": "In agile environments, the Project Charter is usually a shorter agile vision statement focused on purpose and high-level constraints.",
    "examTip": "The Project Charter is signed and authorized by the Sponsor, which gives the PM formal authority."
  },
  {
    "id": "proc-gov-2",
    "number": 2,
    "name": "Integrate and Align Project Plans",
    "nameEn": "Integrate and Align Project Plans",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Consolidate and coordinate all subsidiary plans and baselines into a cohesive, integrated Project Management Plan.",
    "inputs": [
      "Project Charter",
      "Outputs from other planning processes",
      "Enterprise environmental factors",
      "Organizational process assets"
    ],
    "tools": [
      "Expert judgment",
      "Data gathering and analysis",
      "Interpersonal skills (Facilitation, Negotiation)",
      "Planning meetings"
    ],
    "outputs": [
      "Project Management Plan with integrated baselines"
    ],
    "tailoring": "In adaptive projects, the integrated plan is highly dynamic and is updated every iteration through rolling wave planning.",
    "examTip": "Once approved, the Project Management Plan becomes the official baseline and can only be changed through integrated change control."
  },
  {
    "id": "proc-gov-3",
    "number": 3,
    "name": "Plan Sourcing Strategy",
    "nameEn": "Plan Sourcing Strategy",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Determine which goods or services will be acquired externally (make-or-buy), structure the sourcing strategy and select procurement methods.",
    "inputs": [
      "Project management plan",
      "Resource requirements",
      "Business documents",
      "Market conditions (EEFs)"
    ],
    "tools": [
      "Make-or-buy analysis",
      "Market research",
      "Expert judgment",
      "Internal capability assessment"
    ],
    "outputs": [
      "Sourcing Strategy",
      "Make-or-buy decisions",
      "Statement of Work (SOW)"
    ],
    "tailoring": "In agile, contracts with adaptable scope are preferred, such as Target Cost or time and materials contracts with a not-to-exceed cap.",
    "examTip": "The make-or-buy analysis must evaluate long-term maintenance and operating costs, not just the initial acquisition cost."
  },
  {
    "id": "proc-gov-4",
    "number": 4,
    "name": "Manage Project Execution",
    "nameEn": "Manage Project Execution",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Lead and carry out the work defined in the integrated plans to produce deliverables and achieve project objectives.",
    "inputs": [
      "Project management plan",
      "Approved change requests",
      "Enterprise environmental factors"
    ],
    "tools": [
      "Expert judgment",
      "Project management information system (PMIS)",
      "Daily stand-up meetings"
    ],
    "outputs": [
      "Deliverables",
      "Work performance data",
      "Issue Log"
    ],
    "tailoring": "In Scrum/agile, execution is synchronized through short iterations in which the technical team self-manages the execution of the stories in the Sprint.",
    "examTip": "'Work performance data' (raw progress data) originates here in Executing and flows to Monitoring and Controlling to become 'Work performance information'."
  },
  {
    "id": "proc-gov-5",
    "number": 5,
    "name": "Manage Quality Assurance",
    "nameEn": "Manage Quality Assurance",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Ensure that the processes used in the project comply with agreed standards and are continuously improved to prevent defects.",
    "inputs": [
      "Quality management plan",
      "Quality control measurements",
      "Quality metrics"
    ],
    "tools": [
      "Quality audits",
      "Process analysis (Kaizen / Lean)",
      "Cause-and-effect diagrams (Ishikawa)",
      "Root cause analysis"
    ],
    "outputs": [
      "Quality reports",
      "Change requests for process improvement",
      "OPA updates"
    ],
    "tailoring": "In agile frameworks, quality assurance is embedded in the Definition of Done (DoD), automated testing and sprint retrospectives.",
    "examTip": "Quality Assurance = evaluate the PROCESSES. Quality Control = inspect the DELIVERABLES."
  },
  {
    "id": "proc-gov-6",
    "number": 6,
    "name": "Manage Project Knowledge",
    "nameEn": "Manage Project Knowledge",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Use the organization's existing knowledge and create new knowledge to help achieve objectives and contribute to organizational learning.",
    "inputs": [
      "Project management plan",
      "Project documents",
      "Deliverables",
      "OPAs (historical lessons learned)"
    ],
    "tools": [
      "Knowledge management (Communities of practice, knowledge-sharing forums)",
      "Information management (Digital libraries, wikis)",
      "Interpersonal skills (Active listening, empathy)"
    ],
    "outputs": [
      "Lessons Learned Register",
      "OPA updates"
    ],
    "tailoring": "Tacit knowledge (what is in people's minds) is transferred through face-to-face interaction, not just by storing files.",
    "examTip": "The Lessons Learned Register is updated CONTINUOUSLY throughout the life cycle, not only at the end of the project."
  },
  {
    "id": "proc-gov-7",
    "number": 7,
    "name": "Monitor and Control Project Performance",
    "nameEn": "Monitor and Control Project Performance",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Track, review and report on overall project progress to meet performance objectives and anticipate deviations.",
    "inputs": [
      "Project management plan",
      "Work performance data",
      "Cost and schedule forecasts"
    ],
    "tools": [
      "Expert judgment",
      "Data analysis (Variance analysis, Trend analysis, EVM)",
      "Decision making"
    ],
    "outputs": [
      "Work performance reports",
      "Change requests"
    ],
    "tailoring": "On agile boards, monitoring happens in real time through visible information radiators and velocity metrics.",
    "examTip": "This process produces the 'Work Performance Reports' (e.g., executive control dashboards) that are communicated to stakeholders."
  },
  {
    "id": "proc-gov-8",
    "number": 8,
    "name": "Assess and Implement Changes",
    "nameEn": "Assess and Implement Changes",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Review all change requests, assess their overall impact on the value proposition, approve or reject changes and implement the approved ones.",
    "inputs": [
      "Project management plan",
      "Change requests",
      "Work performance reports"
    ],
    "tools": [
      "Change control tools",
      "Expert judgment",
      "Change Control Board (CCB)",
      "Decision-making meetings"
    ],
    "outputs": [
      "Approved/rejected change requests",
      "Updates to the project management plan",
      "Change Log"
    ],
    "tailoring": "In adaptive environments, changes are welcome and are added to the Product Backlog, where the Product Owner prioritizes them.",
    "examTip": "If a stakeholder requests a change, NEVER say yes or no immediately: first analyze the holistic impact on cost, time, risk and value."
  },
  {
    "id": "proc-gov-9",
    "number": 9,
    "name": "Close Project or Phase",
    "nameEn": "Close Project or Phase",
    "domain": "Governance",
    "domainEn": "Governance",
    "focusArea": "Closing",
    "focusAreaEn": "Closing",
    "purpose": "Formally finalize all project or phase activities, archive knowledge, transfer the deliverable to operations and release resources.",
    "inputs": [
      "Project Charter",
      "Project management plan",
      "Accepted deliverables",
      "Business documents"
    ],
    "tools": [
      "Expert judgment",
      "Data analysis (Document analysis)",
      "Closing meetings and final retrospectives"
    ],
    "outputs": [
      "Final product transfer",
      "Final project report",
      "Updates to organizational process assets"
    ],
    "tailoring": "Even if a project is cancelled early, this process MUST be executed to document lessons learned and release resources in an orderly way.",
    "examTip": "To close a project, deliverables must have been formally 'Accepted' in the Validate Scope process."
  },
  {
    "id": "proc-scope-1",
    "number": 10,
    "name": "Plan Scope Management",
    "nameEn": "Plan Scope Management",
    "domain": "Scope",
    "domainEn": "Scope",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Create the scope management plan that documents how the project scope will be defined, validated and controlled.",
    "inputs": [
      "Project Charter",
      "Project management plan",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Expert judgment",
      "Data analysis",
      "Meetings"
    ],
    "outputs": [
      "Scope Management Plan",
      "Requirements Management Plan"
    ],
    "tailoring": "In adaptive projects, the plan defines how the backlog will be managed and refined continuously.",
    "examTip": "The Scope Management Plan does not state what the scope is; it states HOW the scope will be managed and controlled."
  },
  {
    "id": "proc-scope-2",
    "number": 11,
    "name": "Elicit and Analyze Requirements",
    "nameEn": "Elicit and Analyze Requirements",
    "domain": "Scope",
    "domainEn": "Scope",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Determine, document and manage stakeholders' needs and expectations to meet project objectives.",
    "inputs": [
      "Project Charter",
      "Stakeholder register",
      "Business documents"
    ],
    "tools": [
      "Interviews",
      "Focus groups",
      "Facilitated workshops",
      "User stories",
      "Prototypes",
      "Mind maps"
    ],
    "outputs": [
      "Requirements documentation",
      "Requirements Traceability Matrix (RTM)"
    ],
    "tailoring": "In agile environments, requirements are broken down into Epics and User Stories with clear Acceptance Criteria.",
    "examTip": "The Requirements Traceability Matrix (RTM) links each requirement to the business objective that justifies its existence."
  },
  {
    "id": "proc-scope-3",
    "number": 12,
    "name": "Define Scope",
    "nameEn": "Define Scope",
    "domain": "Scope",
    "domainEn": "Scope",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Develop a detailed description of the project and product, clearly stating what is included and what is excluded.",
    "inputs": [
      "Project Charter",
      "Requirements documentation",
      "Assumptions and constraints"
    ],
    "tools": [
      "Expert judgment",
      "Product analysis",
      "Decision making"
    ],
    "outputs": [
      "Project Scope Statement"
    ],
    "tailoring": "The scope statement sets the boundaries of the project and is vital for avoiding ambiguity with the customer.",
    "examTip": "Documenting explicit project 'Exclusions' is as crucial as documenting inclusions to avoid mistaken expectations."
  },
  {
    "id": "proc-scope-4",
    "number": 13,
    "name": "Develop Scope Structure",
    "nameEn": "Develop Scope Structure",
    "domain": "Scope",
    "domainEn": "Scope",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Hierarchically decompose the total scope of work into smaller, more manageable components called work packages.",
    "inputs": [
      "Scope management plan",
      "Project scope statement",
      "Requirements documentation"
    ],
    "tools": [
      "Decomposition",
      "Expert judgment"
    ],
    "outputs": [
      "Scope Baseline: WBS + WBS Dictionary + Scope Statement"
    ],
    "tailoring": "In agile, the scope structure is commonly represented as a tree of themes, epics and features in the product backlog.",
    "examTip": "100% Rule: The WBS covers 100% of the agreed work and nothing more. The lowest level is the Work Package."
  },
  {
    "id": "proc-scope-5",
    "number": 14,
    "name": "Monitor and Control Scope",
    "nameEn": "Monitor and Control Scope",
    "domain": "Scope",
    "domainEn": "Scope",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitor the status of project scope and manage changes to the scope baseline to prevent scope creep.",
    "inputs": [
      "Project management plan",
      "Work performance data",
      "Requirements documentation"
    ],
    "tools": [
      "Variance analysis",
      "Trend analysis"
    ],
    "outputs": [
      "Work performance information",
      "Change requests"
    ],
    "tailoring": "In agile frameworks, scope creep is prevented by fixing the sprint size; new requirements are placed in the backlog to be prioritized.",
    "examTip": "Avoid 'Gold Plating': giving extras the customer did not ask for is not good management; it adds unjustified risks and costs."
  },
  {
    "id": "proc-scope-6",
    "number": 15,
    "name": "Validate Scope",
    "nameEn": "Validate Scope",
    "domain": "Scope",
    "domainEn": "Scope",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Formalize customer or sponsor acceptance of completed project deliverables through formal inspection.",
    "inputs": [
      "Verified deliverables (that have already passed Quality Control)",
      "Scope baseline",
      "Requirements"
    ],
    "tools": [
      "Inspection",
      "Decision making (Voting, Approval)"
    ],
    "outputs": [
      "Accepted deliverables",
      "Change requests (if rejected)",
      "Work performance information"
    ],
    "tailoring": "In Scrum, this happens in the Sprint Review, where stakeholders test the working software increment.",
    "examTip": "Key exam point: Quality Control happens BEFORE (with the team) to verify correctness; Validate Scope happens AFTER (with the customer) to obtain formal acceptance."
  },
  {
    "id": "proc-sched-1",
    "number": 16,
    "name": "Plan Schedule Management",
    "nameEn": "Plan Schedule Management",
    "domain": "Schedule",
    "domainEn": "Schedule",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Establish the policies, procedures and documentation for planning, developing, managing, executing and controlling the project schedule.",
    "inputs": [
      "Project Charter",
      "Project management plan",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Expert judgment",
      "Data analysis",
      "Meetings"
    ],
    "outputs": [
      "Schedule Management Plan"
    ],
    "tailoring": "Defines the duration of cycles or sprints (e.g., fixed 2-week sprints) when adaptive development is used.",
    "examTip": "The Schedule Management Plan establishes units of measure (days, hours), level of precision and permitted variance thresholds."
  },
  {
    "id": "proc-sched-2",
    "number": 17,
    "name": "Develop Schedule",
    "nameEn": "Develop Schedule",
    "domain": "Schedule",
    "domainEn": "Schedule",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Analyze activity sequences, durations, resource requirements and schedule constraints to create the project schedule model.",
    "inputs": [
      "Activity list",
      "Network diagrams",
      "Resource requirements",
      "Duration estimates"
    ],
    "tools": [
      "Critical Path Method (CPM)",
      "Resource leveling",
      "Compression techniques (Crashing / Fast Tracking)",
      "Scheduling software"
    ],
    "outputs": [
      "Schedule Baseline",
      "Project schedule (Gantt chart, Milestones)"
    ],
    "tailoring": "In agile development, the schedule is articulated through the Release Plan and Iteration Burndown.",
    "examTip": "The Critical Path is the longest path in the network and has the least float (usually 0). It determines the earliest possible project finish date."
  },
  {
    "id": "proc-sched-3",
    "number": 18,
    "name": "Monitor and Control Schedule",
    "nameEn": "Monitor and Control Schedule",
    "domain": "Schedule",
    "domainEn": "Schedule",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitor the status of project activities to update the schedule and manage changes to the schedule baseline.",
    "inputs": [
      "Project management plan",
      "Schedule baseline",
      "Work performance data"
    ],
    "tools": [
      "Schedule variance analysis (SV, SPI)",
      "Progress charts (Burndown/Burnup)",
      "Milestone progress"
    ],
    "outputs": [
      "Schedule forecasts",
      "Change requests",
      "Work performance information"
    ],
    "tailoring": "The agile team measures its velocity (story points per sprint) to predict whether it will complete deliveries on time.",
    "examTip": "SPI < 1.0 or negative SV means the project is behind schedule relative to plan."
  },
  {
    "id": "proc-fin-1",
    "number": 19,
    "name": "Plan Financial Management",
    "nameEn": "Plan Financial Management",
    "domain": "Finance",
    "domainEn": "Finance",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Define how the costs and financial aspects of the project will be estimated, budgeted, managed, monitored and controlled.",
    "inputs": [
      "Project Charter",
      "Business documents",
      "Management plan",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Expert judgment",
      "Data analysis",
      "Meetings"
    ],
    "outputs": [
      "Financial / Cost Management Plan"
    ],
    "tailoring": "Defines the rules for Earned Value (EVM) calculation, the reference currency and financial variance thresholds.",
    "examTip": "Determines acceptable variance percentages before a formal corrective action plan is required (e.g., variance > 5%)."
  },
  {
    "id": "proc-fin-2",
    "number": 20,
    "name": "Estimate Costs",
    "nameEn": "Estimate Costs",
    "domain": "Finance",
    "domainEn": "Finance",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Develop an approximation of the monetary value of the resources needed to complete project activities.",
    "inputs": [
      "Cost management plan",
      "Scope baseline",
      "Schedule",
      "Environmental factors"
    ],
    "tools": [
      "Analogous estimating",
      "Parametric estimating",
      "Bottom-up estimating",
      "Three-point estimating (PERT)",
      "Reserve analysis"
    ],
    "outputs": [
      "Activity cost estimates",
      "Basis of estimates"
    ],
    "tailoring": "In agile, costs are estimated using burn rate, multiplying the team cost per sprint.",
    "examTip": "Bottom-up estimating is the most accurate but also the most costly and the most time-consuming."
  },
  {
    "id": "proc-fin-3",
    "number": 21,
    "name": "Develop Budget",
    "nameEn": "Develop Budget",
    "domain": "Finance",
    "domainEn": "Finance",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Aggregate the estimated costs of individual activities or work packages to establish an authorized cost baseline.",
    "inputs": [
      "Cost estimates",
      "Basis of estimates",
      "Scope baseline",
      "Schedule",
      "Contracts"
    ],
    "tools": [
      "Cost aggregation",
      "Funding limit reconciliation",
      "Reserve analysis"
    ],
    "outputs": [
      "Cost Baseline (S-curve)",
      "Project funding requirements"
    ],
    "tailoring": "The Cost Baseline includes Contingency Reserves (known risks). It does NOT include the Management Reserve (unknown risks).",
    "examTip": "Total Budget = Cost Baseline + Management Reserve."
  },
  {
    "id": "proc-fin-4",
    "number": 22,
    "name": "Monitor and Control Finances",
    "nameEn": "Monitor and Control Finances",
    "domain": "Finance",
    "domainEn": "Finance",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitor the project's financial status to update costs and manage changes to the cost baseline.",
    "inputs": [
      "Project management plan",
      "Cost baseline",
      "Work performance data",
      "Funding requirements"
    ],
    "tools": [
      "Earned value analysis (EVM: CV, CPI, EAC, TCPI)",
      "Reserve analysis",
      "To-complete performance index (TCPI)"
    ],
    "outputs": [
      "Cost forecasts (EAC, ETC, VAC)",
      "Change requests",
      "Financial performance information"
    ],
    "tailoring": "The PM must ensure that disbursements do not exceed the authorized periodic funding limits.",
    "examTip": "CPI < 1.0 or negative CV means the project is spending more than planned for the work performed (cost overrun)."
  },
  {
    "id": "proc-stk-1",
    "number": 23,
    "name": "Identify Stakeholders",
    "nameEn": "Identify Stakeholders",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Initiating",
    "focusAreaEn": "Initiating",
    "purpose": "Regularly identify the people, groups or organizations that could affect or be affected by the project, and analyze their levels of interest, influence and impact.",
    "inputs": [
      "Project Charter",
      "Business documents",
      "Agreements",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Expert judgment",
      "Data gathering (Questionnaires, Brainstorming)",
      "Power/Interest Grid",
      "Salience model"
    ],
    "outputs": [
      "Stakeholder Register"
    ],
    "tailoring": "This process runs from the start and continuously; in agile projects, users are involved directly in refinement and review sessions.",
    "examTip": "The Stakeholder Register should contain impact classification, expectations and potential engagement strategies."
  },
  {
    "id": "proc-stk-2",
    "number": 24,
    "name": "Plan Stakeholder Engagement",
    "nameEn": "Plan Stakeholder Engagement",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Develop approaches to engage stakeholders according to their needs, expectations, interests and potential impact on the project.",
    "inputs": [
      "Project Charter",
      "Stakeholder register",
      "Management plan",
      "EEFs"
    ],
    "tools": [
      "Stakeholder engagement assessment matrix (Current vs. Desired)",
      "Expert judgment"
    ],
    "outputs": [
      "Stakeholder Engagement Plan"
    ],
    "tailoring": "Sets specific strategies to move key stakeholders from a 'Resistant' or 'Neutral' position to a 'Supportive' or 'Leading' position.",
    "examTip": "The Stakeholder Engagement Assessment Matrix classifies stakeholders as: Unaware, Resistant, Neutral, Supportive, and Leading."
  },
  {
    "id": "proc-stk-3",
    "number": 25,
    "name": "Plan Communications Management",
    "nameEn": "Plan Communications Management",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Develop an appropriate approach and plan for project communication activities based on each stakeholder's information needs.",
    "inputs": [
      "Project Charter",
      "Stakeholder register",
      "Management plan",
      "EEFs"
    ],
    "tools": [
      "Communication requirements analysis (Channels = N*(N-1)/2)",
      "Communication models",
      "Communication methods (Push, Pull, Interactive)"
    ],
    "outputs": [
      "Communications Management Plan"
    ],
    "tailoring": "In agile or remote teams, interactive communication and transparent information radiators are prioritized.",
    "examTip": "Push communication (emails, sent reports) vs Pull (portals, wikis where users access information on demand) vs Interactive (meetings, video calls)."
  },
  {
    "id": "proc-stk-4",
    "number": 26,
    "name": "Manage Stakeholder Engagement",
    "nameEn": "Manage Stakeholder Engagement",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Actively communicate and work with stakeholders to meet their needs and expectations, address issues and foster constructive engagement.",
    "inputs": [
      "Stakeholder engagement plan",
      "Communications management plan",
      "Issue log"
    ],
    "tools": [
      "Interpersonal skills (Negotiation, Influence, Active listening)",
      "Conflict management",
      "Meetings"
    ],
    "outputs": [
      "Updated issue log",
      "Change requests",
      "Plan updates"
    ],
    "tailoring": "Maintaining honest transparency with sponsors avoids unpleasant surprises in later phases.",
    "examTip": "The PM spends much of their time managing stakeholder expectations and negotiating agreements to mitigate resistance."
  },
  {
    "id": "proc-stk-5",
    "number": 27,
    "name": "Manage Communications",
    "nameEn": "Manage Communications",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Ensure the timely collection, creation, distribution, storage, retrieval, management, monitoring and final disposition of project information.",
    "inputs": [
      "Communications management plan",
      "Work performance reports",
      "EEFs"
    ],
    "tools": [
      "Information systems (PMIS)",
      "Executive presentations",
      "Feedback skills"
    ],
    "outputs": [
      "Project communications",
      "Plan updates"
    ],
    "tailoring": "Adapt the message and channel to the recipient's culture, hierarchy and language.",
    "examTip": "Feedback confirms whether the message was correctly understood by the recipient and whether the desired actions were achieved."
  },
  {
    "id": "proc-stk-6",
    "number": 28,
    "name": "Monitor Stakeholder Engagement",
    "nameEn": "Monitor Stakeholder Engagement",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitor stakeholder relationships and adapt strategies to sustain engagement as the project evolves.",
    "inputs": [
      "Engagement plan",
      "Issue log",
      "Stakeholder register",
      "Performance data"
    ],
    "tools": [
      "Stakeholder analysis",
      "Decision making",
      "Meetings"
    ],
    "outputs": [
      "Work performance information",
      "Change requests"
    ],
    "tailoring": "Allows early detection if a stakeholder who previously supported the project has become resistant due to a change.",
    "examTip": "If a key stakeholder changes attitude or a new executive leader arrives, this process updates the engagement strategies."
  },
  {
    "id": "proc-stk-7",
    "number": 29,
    "name": "Monitor Communications",
    "nameEn": "Monitor Communications",
    "domain": "Stakeholders",
    "domainEn": "Stakeholders",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Ensure that the optimal information flow needs of the project and its stakeholders are met.",
    "inputs": [
      "Communications management plan",
      "Project communications",
      "Issue log",
      "Performance data"
    ],
    "tools": [
      "Communication channel evaluation",
      "Communication satisfaction surveys",
      "Meetings"
    ],
    "outputs": [
      "Work performance information",
      "Change requests"
    ],
    "tailoring": "Eliminates outdated reports that nobody reads and streamlines direct feedback channels.",
    "examTip": "If stakeholders complain about lack of information or email overload, this process adjusts the communications plan."
  },
  {
    "id": "proc-res-1",
    "number": 30,
    "name": "Plan Resource Management",
    "nameEn": "Plan Resource Management",
    "domain": "Resources",
    "domainEn": "Resources",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Define how to estimate, acquire, manage and use physical and team resources throughout the project life cycle.",
    "inputs": [
      "Project Charter",
      "Management plan",
      "Scope baseline",
      "EEFs",
      "OPAs"
    ],
    "tools": [
      "Expert judgment",
      "Organizational breakdown structure (OBS)",
      "RACI matrix",
      "Organizational theory"
    ],
    "outputs": [
      "Resource Management Plan",
      "Team Charter"
    ],
    "tailoring": "In agile teams, the Team Charter (or Working Agreements) is defined autonomously by the team.",
    "examTip": "The Team Charter establishes team values, communication agreements, internal dispute resolution and norms of conduct."
  },
  {
    "id": "proc-res-2",
    "number": 31,
    "name": "Estimate Resources",
    "nameEn": "Estimate Resources",
    "domain": "Resources",
    "domainEn": "Resources",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Estimate the type and quantities of human resources, materials, equipment and supplies needed to perform each activity's work.",
    "inputs": [
      "Resource management plan",
      "Activity list",
      "Activity attributes",
      "Resource calendars"
    ],
    "tools": [
      "Bottom-up estimating",
      "Analogous estimating",
      "Parametric estimating",
      "Resource management software"
    ],
    "outputs": [
      "Resource requirements",
      "Basis of estimates",
      "Resource Breakdown Structure (RBS)"
    ],
    "tailoring": "In Scrum, human resources are usually a stable, cross-functional team of 5 to 9 people dedicated full time.",
    "examTip": "The Resource Breakdown Structure (RBS) is a visual hierarchy that classifies resources by category and type (e.g., personnel, machinery, software)."
  },
  {
    "id": "proc-res-3",
    "number": 32,
    "name": "Acquire Resources",
    "nameEn": "Acquire Resources",
    "domain": "Resources",
    "domainEn": "Resources",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Obtain the team members, facilities, equipment, materials and supplies needed to complete project work.",
    "inputs": [
      "Resource management plan",
      "Resource calendars",
      "Resource requirements",
      "EEFs"
    ],
    "tools": [
      "Multi-criteria decision analysis",
      "Negotiation (with functional managers)",
      "Virtual teams",
      "Pre-assignment"
    ],
    "outputs": [
      "Physical resource assignments",
      "Project team assignments",
      "Updated resource calendars"
    ],
    "tailoring": "In matrix organizations, the PM must actively negotiate with functional managers to secure qualified talent.",
    "examTip": "If a key resource is unavailable, the PM negotiates with the functional manager, evaluates hiring external talent, or reprioritizes."
  },
  {
    "id": "proc-res-4",
    "number": 33,
    "name": "Lead the Team",
    "nameEn": "Lead the Team",
    "domain": "Resources",
    "domainEn": "Resources",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Enhance team members' competencies, interaction and overall team environment to achieve high performance and motivate excellence.",
    "inputs": [
      "Team assignments",
      "Resource plan",
      "Team charter"
    ],
    "tools": [
      "Training",
      "Team-building activities",
      "Recognition and rewards",
      "Emotional intelligence",
      "Constructive conflict resolution"
    ],
    "outputs": [
      "Team performance assessments",
      "Change requests",
      "Plan updates"
    ],
    "tailoring": "The PM acts as a servant leader who shields the team from external interference and facilitates its self-organization.",
    "examTip": "The PMI's preferred conflict resolution technique: 'Collaborate / Problem solve' (win-win through open dialogue and lasting solutions)."
  },
  {
    "id": "proc-res-5",
    "number": 34,
    "name": "Monitor and Control Resourcing",
    "nameEn": "Monitor and Control Resourcing",
    "domain": "Resources",
    "domainEn": "Resources",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Ensure that assigned physical resources are available on time and in the right place, and release them when no longer required.",
    "inputs": [
      "Management plan",
      "Physical resource assignments",
      "Work performance data",
      "Agreements"
    ],
    "tools": [
      "Data analysis (Resource utilization analysis)",
      "Problem solving",
      "Negotiation"
    ],
    "outputs": [
      "Work performance information",
      "Change requests"
    ],
    "tailoring": "Avoids cost overruns from prolonged equipment rental or penalties for idle materials.",
    "examTip": "This process focuses mainly on PHYSICAL resources (materials, equipment). People management is covered in 'Lead the Team'."
  },
  {
    "id": "proc-risk-1",
    "number": 35,
    "name": "Plan Risk Management",
    "nameEn": "Plan Risk Management",
    "domain": "Risk",
    "domainEn": "Risk",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Define how risk management activities for a project will be conducted, establishing categories, thresholds and methodologies.",
    "inputs": [
      "Project Charter",
      "Management plan",
      "Stakeholder register",
      "Risk appetite (EEFs)"
    ],
    "tools": [
      "Expert judgment",
      "Data analysis (Stakeholder analysis)",
      "Risk planning meetings"
    ],
    "outputs": [
      "Risk Management Plan",
      "Risk Breakdown Structure (RBS)"
    ],
    "tailoring": "Scales the level of rigor: innovative projects or those involving human lives require much more thorough processes.",
    "examTip": "The Risk Management Plan defines probability and impact scales (e.g., 1 to 5) and the organization's tolerance thresholds."
  },
  {
    "id": "proc-risk-2",
    "number": 36,
    "name": "Identify Risks",
    "nameEn": "Identify Risks",
    "domain": "Risk",
    "domainEn": "Risk",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Identify both individual project risks and sources of overall project risk, documenting their detailed characteristics.",
    "inputs": [
      "Risk management plan",
      "Baselines",
      "Project documents",
      "Agreements",
      "EEFs and OPAs"
    ],
    "tools": [
      "Brainstorming",
      "Checklists",
      "Interviews",
      "Assumptions and constraints analysis",
      "SWOT analysis"
    ],
    "outputs": [
      "Risk Register",
      "Risk Report"
    ],
    "tailoring": "Risk identification is an iterative process repeated in each iteration, retrospective and status meeting.",
    "examTip": "A well-formulated risk includes: Cause -> Uncertain event -> Consequence/Impact."
  },
  {
    "id": "proc-risk-3",
    "number": 37,
    "name": "Perform Risk Analysis",
    "nameEn": "Perform Risk Analysis",
    "domain": "Risk",
    "domainEn": "Risk",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Prioritize individual risks by assessing probability and impact (qualitative), and numerically model their combined effect on the project (quantitative).",
    "inputs": [
      "Risk register",
      "Risk management plan",
      "Scope and schedule baselines"
    ],
    "tools": [
      "Probability and Impact Matrix",
      "Risk data quality assessment",
      "Monte Carlo simulation",
      "Tornado diagram (Sensitivity)",
      "Decision trees (EMV)"
    ],
    "outputs": [
      "Updated risk register with scoring and prioritization",
      "Risk report with overall probability of project success"
    ],
    "tailoring": "Qualitative analysis is mandatory for every project; quantitative analysis is reserved for complex or high-investment projects.",
    "examTip": "Expected Monetary Value (EMV) = Probability x Financial impact. It is frequently used with decision trees on the exam."
  },
  {
    "id": "proc-risk-4",
    "number": 38,
    "name": "Plan Risk Responses",
    "nameEn": "Plan Risk Responses",
    "domain": "Risk",
    "domainEn": "Risk",
    "focusArea": "Planning",
    "focusAreaEn": "Planning",
    "purpose": "Develop options, select strategies and agree on actions to address individual and overall risk exposure.",
    "inputs": [
      "Risk register",
      "Risk report",
      "Resource plan",
      "Calendars"
    ],
    "tools": [
      "Threat strategies (Escalate, Avoid, Transfer, Mitigate, Accept)",
      "Opportunity strategies (Escalate, Exploit, Share, Enhance, Accept)",
      "Contingency plans and reserves"
    ],
    "outputs": [
      "Assigned risk owners",
      "Change requests (to add response activities to the plan)",
      "Agreed contingency plans"
    ],
    "tailoring": "Each response must be cost-effective relative to the severity of the risk; do not spend $10,000 mitigating a $2,000 risk.",
    "examTip": "Residual risk: the risk that remains after applying the response. Secondary risk: a new risk arising as a direct result of applying a response."
  },
  {
    "id": "proc-risk-5",
    "number": 39,
    "name": "Implement Risk Responses",
    "nameEn": "Implement Risk Responses",
    "domain": "Risk",
    "domainEn": "Risk",
    "focusArea": "Executing",
    "focusAreaEn": "Executing",
    "purpose": "Ensure that agreed risk responses are effectively executed as planned when trigger conditions occur.",
    "inputs": [
      "Project management plan",
      "Risk register",
      "OPAs"
    ],
    "tools": [
      "Influence and leadership skills",
      "Project management information system (PMIS)"
    ],
    "outputs": [
      "Change requests",
      "Updates to the issue log and risk register"
    ],
    "tailoring": "The risk owner is responsible for monitoring triggers and leading the execution of the response action.",
    "examTip": "Planning responses is pointless if the team does not execute them proactively before the risk becomes an issue."
  },
  {
    "id": "proc-risk-6",
    "number": 40,
    "name": "Monitor Risks",
    "nameEn": "Monitor Risks",
    "domain": "Risk",
    "domainEn": "Risk",
    "focusArea": "Monitoring and Controlling",
    "focusAreaEn": "Monitoring and Controlling",
    "purpose": "Monitor the implementation of responses, track identified risks, evaluate new risks and audit the effectiveness of the risk process.",
    "inputs": [
      "Risk register",
      "Work performance data",
      "Risk reports"
    ],
    "tools": [
      "Risk audits",
      "Reserve analysis (contingency 'burn' analysis)",
      "Periodic risk review meetings"
    ],
    "outputs": [
      "Work performance information",
      "Updated risk register (closing outdated risks)",
      "Change requests"
    ],
    "tailoring": "If an identified risk can no longer occur, it is formally closed and its contingency reserve may be reallocated.",
    "examTip": "Reserve analysis compares the remaining contingency reserve against the amount of residual risk still present in the project."
  }
];

  // English localization of js/data/principles.js (generated from the Spanish source; keep in sync)
const principles = [
  {
    "id": "prin-1",
    "number": 1,
    "name": "Adopt a Holistic View",
    "nameEn": "Adopt a Holistic View",
    "dimension": "Proactive",
    "dimensionEn": "Proactive",
    "section": "3.3",
    "summary": "Recognize that the project is an interactive, interdependent system within an organization and a broader global environment.",
    "impact": "Avoids 'tunnel vision' and functional silos. Allows the team to anticipate side effects and capture cross-departmental synergies.",
    "inAction": [
      "Assess the impact of technical changes on finance, risk and customer relationships.",
      "Actively coordinate with other projects and programs in the portfolio that share resources.",
      "Monitor external factors such as regulations, geopolitical changes and technology trends."
    ],
    "connectedDomains": [
      "Governance",
      "Scope",
      "Schedule",
      "Finance",
      "Stakeholders",
      "Resources",
      "Risk"
    ],
    "evolution": "Merges the 7th edition principles 'Navigate Complexity' and 'Recognize System Interactions'."
  },
  {
    "id": "prin-2",
    "number": 2,
    "name": "Focus on Value",
    "nameEn": "Focus on Value",
    "dimension": "Value-Driven",
    "dimensionEn": "Value-Driven",
    "section": "3.4",
    "summary": "Value is the primary justification for every project. Success is defined by the real benefits achieved, not only by delivering outputs on time.",
    "impact": "Keeps the team oriented toward the project's 'why', adapting plans as needed to safeguard the business case.",
    "inAction": [
      "Continuously validate the business case as the market changes.",
      "Prioritize features by return on investment or customer impact over cosmetic requirements.",
      "Be willing to pause or rethink the project if the projected value disappears."
    ],
    "connectedDomains": [
      "Governance",
      "Scope",
      "Finance",
      "Stakeholders"
    ],
    "evolution": "Merges 'Focus on Value', 'Embrace Adaptability and Resilience' and 'Enable Change to the Future State'."
  },
  {
    "id": "prin-3",
    "number": 3,
    "name": "Embed Quality Into Processes and Deliverables",
    "nameEn": "Embed Quality Into Processes and Deliverables",
    "dimension": "Proactive",
    "dimensionEn": "Proactive",
    "section": "3.5",
    "summary": "Quality is designed and built into every activity; it is not added as a superficial inspection at the end.",
    "impact": "Drastically reduces rework, waste and non-conformance costs, increasing the confidence of customers and users.",
    "inAction": [
      "Proactively invest in prevention and in the team's technical training.",
      "Implement continuous improvement cycles (PDCA, retrospectives) and automated testing.",
      "Define measurable acceptance criteria agreed with stakeholders before starting the work."
    ],
    "connectedDomains": [
      "Governance",
      "Scope",
      "Resources"
    ],
    "evolution": "Direct refinement of 'Incorporate Quality into Processes and Deliverables' from the 7th edition."
  },
  {
    "id": "prin-4",
    "number": 4,
    "name": "Be an Accountable Leader",
    "nameEn": "Be an Accountable Leader",
    "dimension": "Ownership",
    "dimensionEn": "Ownership",
    "section": "3.6",
    "summary": "Lead with ethical integrity, empathy and a sense of fiduciary stewardship, taking full accountability for outcomes.",
    "impact": "Builds institutional credibility, generates mutual trust with sponsors and motivates the team during periods of high uncertainty.",
    "inAction": [
      "Demonstrate servant leadership by supporting the team and removing impediments from its path.",
      "Report deviations transparently without concealing problems or seeking to assign blame.",
      "Act in strict adherence to ethical conduct standards and protect the organization's assets."
    ],
    "connectedDomains": [
      "Governance",
      "Resources",
      "Stakeholders"
    ],
    "evolution": "Merges 'Demonstrate Leadership Behaviors' and 'Be a Diligent, Respectful and Caring Steward'."
  },
  {
    "id": "prin-5",
    "number": 5,
    "name": "Integrate Sustainability Within All Project Areas",
    "nameEn": "Integrate Sustainability Within All Project Areas",
    "dimension": "Value-Driven",
    "dimensionEn": "Value-Driven",
    "section": "3.7",
    "summary": "New flagship principle of the 8th edition: consider environmental, social and economic impact (ESG criteria) across the entire life cycle.",
    "impact": "Protects the planet, supports local communities and ensures the solutions created remain economically viable for decades.",
    "inAction": [
      "Assess the carbon footprint and efficient use of materials in product design.",
      "Consider the full life cycle, from raw material sourcing to recycling or decommissioning.",
      "Prioritize ethical suppliers with fair labor policies and low emissions."
    ],
    "connectedDomains": [
      "Governance",
      "Scope",
      "Finance",
      "Resources",
      "Risk"
    ],
    "evolution": "A 100% NEW principle in the 8th Edition! Elevates sustainability to the strategic core of the discipline."
  },
  {
    "id": "prin-6",
    "number": 6,
    "name": "Build an Empowered Culture",
    "nameEn": "Build an Empowered Culture",
    "dimension": "Ownership",
    "dimensionEn": "Ownership",
    "section": "3.8",
    "summary": "Foster an environment of psychological safety, diversity, active collaboration and autonomy so that people can make decisions with confidence.",
    "impact": "Unleashes innovation, increases team engagement, retains talent and speeds up response times to problems.",
    "inAction": [
      "Create a safe space where admitting mistakes is an opportunity to learn, not a reason for punishment.",
      "Delegate authority to technical professionals to decide implementation details.",
      "Actively encourage the inclusion of multidisciplinary and culturally diverse perspectives."
    ],
    "connectedDomains": [
      "Resources",
      "Stakeholders",
      "Governance"
    ],
    "evolution": "Evolution and refinement of 'Create a Collaborative Environment for the Project Team' from the 7th edition."
  }
];

  // English localization of js/data/focusAreas.js (generated from the Spanish source; keep in sync)
const focusAreas = [
  {
    "id": "fa-init",
    "name": "Initiating Focus Area",
    "nameEn": "Initiating Focus Area",
    "section": "4.5.1",
    "processesCount": 2,
    "summary": "Formally authorizes the start of the project or phase and identifies the key stakeholders who will influence the outcome.",
    "processes": [
      "Initiate Project or Phase",
      "Identify Stakeholders"
    ],
    "keyDeliverable": "Project Charter and Stakeholder Register.",
    "adaptivePerspective": "In adaptive projects, it is performed at the start to set the strategic vision and is lightly revisited in each cycle or release."
  },
  {
    "id": "fa-plan",
    "name": "Planning Focus Area",
    "nameEn": "Planning Focus Area",
    "section": "4.5.2",
    "processesCount": 21,
    "summary": "Establishes the total scope of the effort, defines and refines objectives, and develops the comprehensive course of action to achieve them.",
    "processes": [
      "Integrate and Align Project Plans",
      "Plan Sourcing Strategy",
      "Plan Scope Management",
      "Elicit and Analyze Requirements",
      "Define Scope",
      "Develop Scope Structure",
      "Plan Schedule Management",
      "Develop Schedule",
      "Plan Financial Management",
      "Estimate Costs",
      "Develop Budget",
      "Plan Stakeholder Engagement",
      "Plan Communications Management",
      "Plan Resource Management",
      "Estimate Resources",
      "Plan Risk Management",
      "Identify Risks",
      "Perform Risk Analysis",
      "Plan Risk Responses"
    ],
    "keyDeliverable": "Project Management Plan and the three baselines (Scope, Schedule, Cost).",
    "adaptivePerspective": "Rolling Wave Planning: high-level planning for the long term and detailed planning only for the next iteration."
  },
  {
    "id": "fa-exec",
    "name": "Executing Focus Area",
    "nameEn": "Executing Focus Area",
    "section": "4.5.3",
    "processesCount": 8,
    "summary": "Coordinates people and resources to carry out the project management plan and produce the planned deliverables.",
    "processes": [
      "Manage Project Execution",
      "Manage Quality Assurance",
      "Manage Project Knowledge",
      "Manage Stakeholder Engagement",
      "Manage Communications",
      "Acquire Resources",
      "Lead the Team",
      "Implement Risk Responses"
    ],
    "keyDeliverable": "Completed deliverables, raw performance data and the Lessons Learned Register.",
    "adaptivePerspective": "This is where the agile team self-manages the day-to-day sprint work through boards and daily stand-ups."
  },
  {
    "id": "fa-mon",
    "name": "Monitoring and Controlling Focus Area",
    "nameEn": "Monitoring and Controlling Focus Area",
    "section": "4.5.4",
    "processesCount": 8,
    "summary": "Tracks, reviews and regulates project progress, identifies variances from the plan and initiates the changes needed.",
    "processes": [
      "Monitor and Control Project Performance",
      "Assess and Implement Changes",
      "Monitor and Control Scope",
      "Validate Scope",
      "Monitor and Control Schedule",
      "Monitor and Control Finances",
      "Monitor Stakeholder Engagement",
      "Monitor Communications",
      "Monitor and Control Resourcing",
      "Monitor Risks"
    ],
    "keyDeliverable": "Work performance reports, cost/schedule forecasts and approved change requests.",
    "adaptivePerspective": "Continuous monitoring through information radiators, burndown charts and periodic retrospectives."
  },
  {
    "id": "fa-close",
    "name": "Closing Focus Area",
    "nameEn": "Closing Focus Area",
    "section": "4.5.5",
    "processesCount": 1,
    "summary": "Formally finalizes all activities across all areas to close the project or a specific phase.",
    "processes": [
      "Close Project or Phase"
    ],
    "keyDeliverable": "Transfer of the product to operations, formal archiving of knowledge and release of resources.",
    "adaptivePerspective": "In agile, each release ends with a transfer or deployment and a formal closing retrospective."
  }
];

  // English localization of js/data/domains.js (generated from the Spanish source; keep in sync)
const performanceDomains = [
  {
    "id": "dom-gov",
    "name": "Governance Performance Domain",
    "nameEn": "Governance Performance Domain",
    "section": "2.1",
    "processesCount": 9,
    "color": "#006874",
    "icon": "policy",
    "summary": "Covers the processes needed to make decisions that protect and increase the project's value proposition in a holistic way.",
    "keyConcepts": [
      "Continuous creation and protection of value",
      "Governance models: structured vs. self-managed projects",
      "Phase gates and project cancellation authority",
      "Integration of quality management and knowledge management"
    ],
    "checkResults": [
      "Constant alignment with organizational strategic objectives",
      "Transparent decision-making and effective escalation of problems",
      "Orderly and successful transition to business operations"
    ]
  },
  {
    "id": "dom-scope",
    "name": "Scope Performance Domain",
    "nameEn": "Scope Performance Domain",
    "section": "2.2",
    "processesCount": 6,
    "color": "#1B5E20",
    "icon": "architecture",
    "summary": "Defines, develops and validates all the work required, and only the work required, to meet the project requirements.",
    "keyConcepts": [
      "Distinction between product scope and project scope",
      "Hierarchical decomposition through the WBS and the 100% rule",
      "Active prevention of Scope Creep and Gold Plating",
      "Formal validation and acceptance of deliverables by the customer"
    ],
    "checkResults": [
      "Deliverables meet all agreed acceptance criteria",
      "Scope is completed without omissions or unauthorized work",
      "Complete traceability exists from the business need to the final product"
    ]
  },
  {
    "id": "dom-sched",
    "name": "Schedule Performance Domain",
    "nameEn": "Schedule Performance Domain",
    "section": "2.3",
    "processesCount": 3,
    "color": "#E65100",
    "icon": "calendar_month",
    "summary": "Structures the logical sequence, durations and dependencies of activities to deliver results on the planned timeline.",
    "keyConcepts": [
      "Critical Path Method (CPM) and float management",
      "PDM precedence relationships (FS, FF, SS, SF) and use of leads and lags",
      "Compression techniques: Crashing (higher cost) vs. Fast Tracking (higher risk)",
      "Agile and iterative delivery cadence"
    ],
    "checkResults": [
      "Key project milestones are met by the committed dates",
      "Activities on the critical path are managed proactively",
      "Resources are balanced, with no bottlenecks from over-allocation"
    ]
  },
  {
    "id": "dom-fin",
    "name": "Finance Performance Domain",
    "nameEn": "Finance Performance Domain",
    "section": "2.4",
    "processesCount": 4,
    "color": "#2E7D32",
    "icon": "monetization_on",
    "summary": "Plans, estimates, budgets and controls costs and financial flows to ensure economic viability and return on investment.",
    "keyConcepts": [
      "Cost Baseline (S-Curve) and funding reconciliation",
      "Contingency Reserves (known risks) vs. Management Reserves (unknown risks)",
      "Earned Value Management (EVM) to measure cost efficiency (CPI, CV)",
      "Assessment of direct costs, indirect costs and sunk costs"
    ],
    "checkResults": [
      "The project is completed within the total authorized budget",
      "Positive cash flow is maintained to support execution of activities",
      "Financial variances are detected early and corrected precisely"
    ]
  },
  {
    "id": "dom-stk",
    "name": "Stakeholders Performance Domain",
    "nameEn": "Stakeholders Performance Domain",
    "section": "2.5",
    "processesCount": 7,
    "color": "#6A1B9A",
    "icon": "groups",
    "summary": "Identifies stakeholders, understands their needs and designs communication strategies to build lasting, collaborative relationships.",
    "keyConcepts": [
      "Power vs. Interest Grid and the Salience Model",
      "Communication planning (channel formula N*(N-1)/2)",
      "Moving stakeholders from resistant to supportive and to leaders",
      "Transparent communication through information radiators"
    ],
    "checkResults": [
      "Productive, trust-based working relationships with all stakeholders",
      "Customer and sponsor expectations are aligned and managed",
      "Information reaches the right person in the appropriate format"
    ]
  },
  {
    "id": "dom-res",
    "name": "Resources Performance Domain",
    "nameEn": "Resources Performance Domain",
    "section": "2.6",
    "processesCount": 5,
    "color": "#0277BD",
    "icon": "engineering",
    "summary": "Organizes, acquires, leads and optimizes the human and physical resources needed to successfully execute the project work.",
    "keyConcepts": [
      "Servant leadership and fostering Emotional Intelligence",
      "Tuckman's team development model (Forming, Storming, Norming, Performing)",
      "RACI responsibility assignment matrix (a single Accountable party)",
      "Conflict resolution techniques: Collaborate/Problem Solve as the standard"
    ],
    "checkResults": [
      "Cohesive, highly motivated team with psychological safety",
      "Timely availability of supplies, equipment and physical infrastructure",
      "Constructive resolution of disputes without harming the work climate"
    ]
  },
  {
    "id": "dom-risk",
    "name": "Risk Performance Domain",
    "nameEn": "Risk Performance Domain",
    "section": "2.7",
    "processesCount": 6,
    "color": "#C62828",
    "icon": "warning",
    "summary": "Identifies, assesses and proactively responds to uncertainty, mitigating threats and exploiting opportunities to protect value.",
    "keyConcepts": [
      "Individual risk vs. overall project risk",
      "Probability and impact assessment (qualitative) and quantitative modeling (Monte Carlo, Tornado)",
      "Strategies for threats (Avoid, Mitigate, Transfer, Accept, Escalate)",
      "Strategies for opportunities (Exploit, Enhance, Share, Accept, Escalate)",
      "Trigger monitoring and management of residual and secondary risks"
    ],
    "checkResults": [
      "Threats are anticipated and neutralized before they become serious problems",
      "Opportunities are identified and captured to increase benefits",
      "Financial and schedule contingency reserves remain under control"
    ]
  }
];

  // English localization of js/data/tools.js (generated from the Spanish source; keep in sync)
const toolsAndTechniques = {
  "evm": [
    {
      "abbr": "PV",
      "name": "Planned Value",
      "definition": "The authorized budget assigned to scheduled work to be completed by a specific date.",
      "formula": "PV = Planned budget for the activity as of the status date",
      "interpretation": "Shows how much work should have been completed, in monetary terms."
    },
    {
      "abbr": "EV",
      "name": "Earned Value",
      "definition": "The measure of work actually completed, expressed in terms of the authorized budget for that work.",
      "formula": "EV = Sum of the planned value of work actually completed",
      "interpretation": "Shows the real monetary value produced by the team, regardless of how much it cost to produce."
    },
    {
      "abbr": "AC",
      "name": "Actual Cost",
      "definition": "The actual cost incurred for the work performed on an activity during a specific period of time.",
      "formula": "AC = Sum of all actual costs disbursed to date",
      "interpretation": "Shows how much money was actually spent to achieve the EV completed."
    },
    {
      "abbr": "BAC",
      "name": "Budget at Completion",
      "definition": "The sum of all budgets established for the work to be performed (Cost Baseline).",
      "formula": "BAC = Total approved project budget (excluding management reserve)",
      "interpretation": "The value of the total planned work at 100% completion."
    },
    {
      "abbr": "CV",
      "name": "Cost Variance",
      "definition": "The amount of budget deficit or surplus at a given point in time.",
      "formula": "CV = EV - AC",
      "interpretation": "Positive (> 0): Under planned cost (Savings / Excellent). Zero (= 0): On exact cost. Negative (< 0): Over planned cost (Overrun / Alert)."
    },
    {
      "abbr": "SV",
      "name": "Schedule Variance",
      "definition": "The measure of schedule performance expressed as the difference between earned value and planned value.",
      "formula": "SV = EV - PV",
      "interpretation": "Positive (> 0): Ahead of schedule. Zero (= 0): On exact schedule. Negative (< 0): Behind schedule."
    },
    {
      "abbr": "CPI",
      "name": "Cost Performance Index",
      "definition": "The measure of the cost efficiency of budgeted resources, expressed as the ratio of EV to AC.",
      "formula": "CPI = EV / AC",
      "interpretation": "> 1.0: High efficiency (we obtain more than $1 of work for every $1 spent). = 1.0: On exact budget. < 1.0: Inefficiency (we obtain less than $1 of work for every $1 spent)."
    },
    {
      "abbr": "SPI",
      "name": "Schedule Performance Index",
      "definition": "The measure of schedule efficiency, expressed as the ratio of EV to PV.",
      "formula": "SPI = EV / PV",
      "interpretation": "> 1.0: Progressing faster than planned. = 1.0: Exactly on the planned pace. < 1.0: Progressing slower than planned."
    },
    {
      "abbr": "EAC",
      "name": "Estimate at Completion",
      "definition": "The total expected cost to complete all project work.",
      "formula": "EAC = BAC / CPI (if the current cost rate continues)\nEAC = AC + (BAC - EV) (if future work is performed at the original planned rate)\nEAC = AC + [(BAC - EV) / (CPI * SPI)] (if both cost and schedule affect future work)",
      "interpretation": "The most realistic forecast of what the project will cost at completion."
    },
    {
      "abbr": "ETC",
      "name": "Estimate to Complete",
      "definition": "The expected cost to finish all remaining project work.",
      "formula": "ETC = EAC - AC",
      "interpretation": "How much additional money is needed from today to finish."
    },
    {
      "abbr": "VAC",
      "name": "Variance at Completion",
      "definition": "The projection of the project's final budget deficit or surplus.",
      "formula": "VAC = BAC - EAC",
      "interpretation": "Positive: The project will finish with money left over. Negative: The project will finish requiring more than the authorized budget."
    },
    {
      "abbr": "TCPI",
      "name": "To-Complete Performance Index",
      "definition": "The measure of the cost efficiency that must be achieved on the remaining work to meet a specified management objective (BAC or EAC).",
      "formula": "TCPI (to meet BAC) = (BAC - EV) / (BAC - AC)\nTCPI (to meet EAC) = (BAC - EV) / (EAC - AC)",
      "interpretation": "> 1.0: Difficult to achieve (must be more efficient than the original plan). < 1.0: Easy to achieve (there is room for lower efficiency)."
    }
  ],
  "estimation": [
    {
      "name": "Triangular Estimate (Simple)",
      "formula": "E = (O + M + P) / 3",
      "description": "Direct arithmetic average of the Optimistic (O), Most Likely (M) and Pessimistic (P) scenarios."
    },
    {
      "name": "Beta / PERT Estimate (Weighted)",
      "formula": "E = (O + 4M + P) / 6",
      "description": "Weighted Beta distribution that gives 4 times more weight to the most likely scenario."
    },
    {
      "name": "PERT Standard Deviation (Sigma)",
      "formula": "σ = (P - O) / 6",
      "description": "Measure of the variability or uncertainty of the duration or cost estimate."
    },
    {
      "name": "PERT Variance",
      "formula": "Var = ((P - O) / 6)^2",
      "description": "Square of the standard deviation. Variances are summed to calculate the total variance of the critical path."
    }
  ],
  "communications": [
    {
      "name": "Potential Communication Channels",
      "formula": "Channels = N * (N - 1) / 2",
      "description": "Calculates the number of two-way communication paths among N participants."
    }
  ],
  "scheduleCompression": [
    {
      "name": "Crashing",
      "impact": "Shortens the schedule by adding resources to critical path activities at the lowest incremental cost.",
      "tradeOff": "Increases cost and management risk."
    },
    {
      "name": "Fast Tracking",
      "impact": "Performs in parallel activities that would normally be carried out sequentially.",
      "tradeOff": "Increases risk and the likelihood of significant rework, without necessarily raising the initial direct cost."
    }
  ]
};

  // English localization of js/data/appendices.js (generated from the Spanish source; keep in sync)
const appendices = {
  "x2_pmo": {
    "title": "Appendix X2: Project Management Offices (PMO)",
    "summary": "Evolution toward agile, customer-centric PMOs designed as centers of strategic enablement rather than mere bureaucratic audits.",
    "topics": [
      {
        "subtitle": "The PMO's Value Proposition",
        "text": "The PMO must actively demonstrate its value to the organization by optimizing the return on project investments, developing staff capabilities and aligning efforts with corporate strategic objectives."
      },
      {
        "subtitle": "The Importance of Customer Centricity",
        "text": "The PMO's customers include Project Managers, Development Teams and Business Executives. A customer-centric PMO adapts its frameworks to serve its users instead of imposing rigid rules."
      },
      {
        "subtitle": "PMO Models and Structures",
        "text": "It moves away from the static classifications of the past. Modern PMOs combine supporting, controlling and directing functions in a hybrid and flexible way, depending on the area of the organization."
      },
      {
        "subtitle": "PMO Maturity Models",
        "text": "They make it possible to diagnose current governance capabilities, define a progressive roadmap and quantitatively measure continuous improvement in project delivery."
      }
    ]
  },
  "x3_ai": {
    "title": "Appendix X3: Artificial Intelligence in Project Management",
    "summary": "Official PMI guidance on the adoption, practical use cases, ethical challenges and governance of AI in project initiatives and teams.",
    "topics": [
      {
        "subtitle": "AI Adoption Strategies",
        "text": "They are divided into three evolutionary levels: 1) Automation of repetitive tasks (meeting minutes, basic scheduling); 2) Augmentation of the project manager's analytical capabilities (assistance with risk analysis, probabilistic estimates, plan drafting); and 3) Supervised autonomy (intelligent agents with human governance)."
      },
      {
        "subtitle": "Key Use Cases (Table X3-1)",
        "text": "Deviation prediction based on historical big data, intelligent resource allocation optimization, real-time risk modeling, assistance with requirements writing and conversational support for stakeholders."
      },
      {
        "subtitle": "Responsible Use and Ethical Concerns",
        "text": "Mitigation of algorithmic bias in decision-making, absolute preservation of business data privacy and assurance of human accountability (a human must always be responsible for every final decision)."
      }
    ]
  },
  "x4_procurement": {
    "title": "Appendix X4: Procurement Management",
    "summary": "A comprehensive framework for planning, contracting, overseeing and closing out commercial agreements with external suppliers.",
    "topics": [
      {
        "subtitle": "Make-or-Buy Analysis",
        "text": "Rigorous evaluation of direct costs, future operating costs, internal technical capabilities, confidentiality and risks to decide whether to build a solution internally or acquire it from third parties."
      },
      {
        "subtitle": "Bid Documents and Bidder Conferences",
        "text": "RFI is used to explore capabilities, RFP for complex, comprehensive proposals, and RFQ/IFB for standardized purchases. Bidder conferences ensure transparency and equal treatment among bidders."
      },
      {
        "subtitle": "Fundamental Contract Models",
        "text": "Fixed Price (the seller assumes the financial risk), Cost Reimbursable (the buyer assumes the financial risk), and Time and Materials (T&M, a hybrid model based on units of work)."
      },
      {
        "subtitle": "Claims Administration",
        "text": "Escalating protocols for resolving disputes: Amicable negotiation -> Mediation with a neutral third party -> Binding arbitration -> Litigation (last resort, to be avoided)."
      }
    ]
  },
  "x5_evolution": {
    "title": "Appendix X5: Evolution of the PMBOK Guide",
    "summary": "The empirical foundation behind the 8th edition and a detailed analysis of the methodological shift from previous editions.",
    "topics": [
      {
        "subtitle": "Evidence-Based Approach",
        "text": "Developed after analyzing more than 48,000 qualitative and quantitative data points and receiving 12,000 comments from the international project management community."
      },
      {
        "subtitle": "Refinement of the Principles (Table X5-2)",
        "text": "Consolidation of the 12 principles of the 7th edition into 6 more direct principles, eliminating overlaps and adding the core principle of sustainability integration."
      },
      {
        "subtitle": "Process Groups Reintroduced as Focus Areas",
        "text": "The former 'Process Groups' return as 5 flexible 'Focus Areas', non-prescriptively linked to the 7 Performance Domains through 40 key processes."
      }
    ]
  }
};

  // English localization of js/data/glossary.js (generated from the Spanish source; keep in sync)
const glossary = [
  {
    "term": "Project Charter",
    "def": "Document issued by the sponsor that formally authorizes the existence of a project and grants the project manager authority to assign organizational resources.",
    "category": "Governance"
  },
  {
    "term": "Organizational Process Assets (OPAs)",
    "def": "Plans, processes, policies, procedures and knowledge bases specific to, and used by, the performing organization.",
    "category": "Environment"
  },
  {
    "term": "Enterprise Environmental Factors (EEFs)",
    "def": "Conditions not under the immediate control of the project team that influence, constrain or direct the project (culture, regulations, market).",
    "category": "Environment"
  },
  {
    "term": "Scope Baseline",
    "def": "The approved version of the project scope statement, the work breakdown structure (WBS) and its associated WBS dictionary.",
    "category": "Scope"
  },
  {
    "term": "Schedule Baseline",
    "def": "The approved version of the schedule model that is used as the basis for comparison with actual results.",
    "category": "Schedule"
  },
  {
    "term": "Cost Baseline",
    "def": "The approved version of the project budget broken down into time periods (S-Curve), which excludes any management reserve.",
    "category": "Finance"
  },
  {
    "term": "Earned Value (EV)",
    "def": "The measure of work performed, expressed in terms of the authorized budget for that work.",
    "category": "Finance"
  },
  {
    "term": "Planned Value (PV)",
    "def": "The authorized budget assigned to scheduled work that should have been completed by a specific date.",
    "category": "Finance"
  },
  {
    "term": "Actual Cost (AC)",
    "def": "The actual cost incurred to perform the work completed to date.",
    "category": "Finance"
  },
  {
    "term": "Cost Performance Index (CPI)",
    "def": "Measure of the cost efficiency of budgeted resources: EV / AC. Greater than 1.0 indicates savings.",
    "category": "Finance"
  },
  {
    "term": "Schedule Performance Index (SPI)",
    "def": "Measure of schedule progress efficiency: EV / PV. Greater than 1.0 indicates the project is ahead of schedule.",
    "category": "Schedule"
  },
  {
    "term": "Critical Path",
    "def": "The sequence of activities that represents the longest path through a project, which determines the shortest possible duration of the project.",
    "category": "Schedule"
  },
  {
    "term": "Total Float",
    "def": "The amount of time a schedule activity can be delayed or extended without delaying the project finish date.",
    "category": "Schedule"
  },
  {
    "term": "Contingency Reserve",
    "def": "Funds or time allocated within the baseline to respond to identified risks ('known-unknowns').",
    "category": "Risk"
  },
  {
    "term": "Management Reserve",
    "def": "Funds or time held by management for management control and to address unpredictable contingencies ('unknown-unknowns'). It is not part of the baseline.",
    "category": "Finance"
  },
  {
    "term": "Scope Creep",
    "def": "The uncontrolled or unauthorized addition of products, services or features to the project scope without adjustments to time, cost or resources.",
    "category": "Scope"
  },
  {
    "term": "Gold Plating",
    "def": "The practice of giving the customer additional features or functionality that were not requested in the requirements.",
    "category": "Quality"
  },
  {
    "term": "RACI Matrix",
    "def": "Chart that shows the resources assigned to activities, indicating who is Responsible (R), Accountable (A), Consulted (C) or Informed (I).",
    "category": "Resources"
  },
  {
    "term": "Product Owner",
    "def": "Role in agile frameworks responsible for maximizing the value of the product and for managing and prioritizing the Product Backlog.",
    "category": "Roles"
  },
  {
    "term": "Sponsor",
    "def": "Person or group that provides financial resources and political and strategic support for the project and is accountable for the business case.",
    "category": "Roles"
  },
  {
    "term": "Crashing",
    "def": "Schedule compression technique that shortens the project duration by adding resources to the critical path at the lowest possible cost.",
    "category": "Schedule"
  },
  {
    "term": "Fast Tracking",
    "def": "Schedule compression technique in which activities or phases that would normally be performed sequentially are executed in parallel.",
    "category": "Schedule"
  },
  {
    "term": "Monte Carlo Analysis",
    "def": "Quantitative technique that repeatedly simulates the project model to calculate the probability distribution of possible costs and completion dates.",
    "category": "Risk"
  },
  {
    "term": "Tornado Diagram",
    "def": "Special bar chart used in sensitivity analysis that shows which risks or variables have the greatest relative impact on results.",
    "category": "Risk"
  },
  {
    "term": "Cost of Quality (COQ)",
    "def": "The total cost incurred to ensure conformance (prevention and appraisal) plus the costs resulting from non-conformance (internal and external failures).",
    "category": "Quality"
  },
  {
    "term": "Psychological Safety",
    "def": "Shared belief among team members that the environment is safe for interpersonal risk-taking, speaking up and admitting mistakes without fear of retaliation.",
    "category": "Principles"
  },
  {
    "term": "Tailoring",
    "def": "The deliberate and thoughtful adaptation of the development approach, governance, processes and tools to the specific context of the organization and the project.",
    "category": "Tailoring"
  }
];

  // English localization of js/data/questions.js (generated from the Spanish source; keep in sync)
const questions = [
  {
    "id": "q-1-1",
    "unitId": "unit-1",
    "lessonId": "les-1-1",
    "type": "single_choice",
    "title": "What is the primary purpose of The Standard for Project Management in its 8th edition?",
    "context": "A project manager newly joined a technology company reviews the new version of the PMBOK to understand how to structure their projects.",
    "options": [
      "Establish a fixed, prescriptive methodology that every project must follow strictly.",
      "Provide a fundamental foundation for understanding project management and facilitate the intended outcomes and value delivery.",
      "Define the mandatory software that must be used to schedule the timeline and costs.",
      "Completely replace agile practices with sequential governance models."
    ],
    "answerIndex": 1,
    "explanation": "The Standard for Project Management (PMBOK 8, Section 1.1) is not prescriptive; it provides a common, flexible foundation applicable to any industry and approach (predictive, agile, or hybrid) to facilitate intended outcomes and value creation.",
    "sectionRef": "Section 1.1"
  },
  {
    "id": "q-1-2",
    "unitId": "unit-1",
    "lessonId": "les-1-2",
    "type": "single_choice",
    "title": "Differentiating Output, Outcome, and Benefit",
    "context": "Your team implemented a new cloud-based CRM system within the agreed budget. Three months later, customer service response time decreased by 30% and satisfaction increased.",
    "options": [
      "The CRM system is the Benefit, the reduction in time is the Output, and satisfaction is the Outcome.",
      "The CRM system is the Output, the reduction in time is the Outcome, and the resulting satisfaction and gains are the Benefits.",
      "The reduction in time is the Output and the CRM system is the Outcome.",
      "In the 8th edition of the PMBOK, Output, Outcome, and Benefit are interchangeable synonyms."
    ],
    "answerIndex": 1,
    "explanation": "In the PMBOK 8 (Section 1.2), the Output is the direct deliverable produced by the process (the CRM system); the Outcome is the consequence or operational change it generates (faster service); and the Benefit is the value gain captured by the organization.",
    "sectionRef": "Section 1.2"
  },
  {
    "id": "q-1-3",
    "unitId": "unit-1",
    "lessonId": "les-1-2",
    "type": "match_pairs",
    "title": "Match each key concept with its official PMBOK 8 definition",
    "pairs": [
      {
        "left": "Project",
        "right": "A temporary initiative in a unique context to create value"
      },
      {
        "left": "Project Management",
        "right": "Application of knowledge and techniques to meet or exceed the intended value"
      },
      {
        "left": "Portfolio",
        "right": "Collection of programs, projects, and operations to maximize strategic value"
      },
      {
        "left": "Program",
        "right": "Group of related projects coordinated to obtain synergistic benefits"
      }
    ],
    "explanation": "Key definitions taken from Section 1.2 of The Standard for Project Management (ANSI/PMI 99-001-2025).",
    "sectionRef": "Section 1.2"
  },
  {
    "id": "q-1-4",
    "unitId": "unit-1",
    "lessonId": "les-1-3",
    "type": "single_choice",
    "title": "Project Governance vs. Organizational Governance",
    "context": "During the execution of a port modernization project, a disagreement arises over whether to suspend a phase due to serious environmental delays. The PM must escalate the decision.",
    "options": [
      "The PM should cancel the project unilaterally without consulting anyone.",
      "The PM should use the project governance framework to formally escalate to the Sponsor or Steering Committee.",
      "The development team should vote democratically on whether to continue or not.",
      "The disagreement should be ignored and the next activities on the schedule continued."
    ],
    "answerIndex": 1,
    "explanation": "Project Governance (Section 1.3.2) defines the authority thresholds and escalation channels to organizational governance when events exceed the project's tolerance.",
    "sectionRef": "Section 1.3.2"
  },
  {
    "id": "q-2-1",
    "unitId": "unit-2",
    "lessonId": "les-2-1",
    "type": "single_choice",
    "title": "Evaluating Project Success in the 8th Edition",
    "context": "A project finishes exactly on the budgeted schedule and cost, but the mobile app it developed has zero downloads because user needs changed during development.",
    "options": [
      "The project was 100% successful because it met the traditional triple constraint.",
      "The project did not achieve overall success because it failed to create and realize value for the organization and its users.",
      "Project success is solely the responsibility of the marketing team, not the Project Manager.",
      "The project manager should receive a bonus because they did not overspend."
    ],
    "answerIndex": 1,
    "explanation": "In the PMBOK 8 (Section 2.1.2), success is evaluated through the effective delivery of value, sustainable benefits, and stakeholder satisfaction, not solely through mechanical adherence to time and cost.",
    "sectionRef": "Section 2.1.2"
  },
  {
    "id": "q-2-2",
    "unitId": "unit-2",
    "lessonId": "les-2-2",
    "type": "match_pairs",
    "title": "Classify each item as an EEF (Enterprise Environmental Factor) or an OPA (Organizational Process Asset)",
    "pairs": [
      {
        "left": "Labor laws and government regulations",
        "right": "External EEF"
      },
      {
        "left": "Corporate culture and hierarchical structure",
        "right": "Internal EEF"
      },
      {
        "left": "Standard Project Charter templates",
        "right": "OPA (Processes and Procedures)"
      },
      {
        "left": "Historical repository of lessons learned",
        "right": "OPA (Knowledge Base)"
      }
    ],
    "explanation": "EEFs are environmental factors that the team does not directly control. OPAs are internal assets the organization contributes to facilitate the project.",
    "sectionRef": "Section 2.2.1 - 2.2.4"
  },
  {
    "id": "q-2-3",
    "unitId": "unit-2",
    "lessonId": "les-2-3",
    "type": "single_choice",
    "title": "Organizational Structures and PM Authority",
    "context": "You work in an organization where your team members formally report to functional department managers, who control the budgets. Your role is limited to coordinating meetings and issuing reports.",
    "options": [
      "Projectized Organizational Structure.",
      "Strong Matrix Structure.",
      "Weak Matrix / Functional Structure.",
      "Autonomous Holocratic Structure."
    ],
    "answerIndex": 2,
    "explanation": "In a functional or weak matrix structure (Section 2.2.5, Table 2-1), the project manager has minimal or no authority and acts primarily as a coordinator or project expeditor.",
    "sectionRef": "Section 2.2.5"
  },
  {
    "id": "q-3-1",
    "unitId": "unit-3",
    "lessonId": "les-3-1",
    "type": "match_pairs",
    "title": "Match each Refined Principle with its Mindset Dimension",
    "pairs": [
      {
        "left": "Adopt a Holistic View",
        "right": "Proactive Dimension"
      },
      {
        "left": "Embed Quality Into Processes and Deliverables",
        "right": "Proactive Dimension"
      },
      {
        "left": "Be an Accountable Leader",
        "right": "Sense of Ownership Dimension"
      },
      {
        "left": "Build an Empowered Culture",
        "right": "Sense of Ownership Dimension"
      },
      {
        "left": "Focus on Value",
        "right": "Value-Oriented Dimension"
      },
      {
        "left": "Integrate Sustainability Within All Project Areas",
        "right": "Value-Oriented Dimension"
      }
    ],
    "explanation": "Figure 3-1 of the PMBOK 8 classifies the 6 principles into three mindset dimensions: Proactive, Sense of Ownership, and Value-Oriented.",
    "sectionRef": "Section 3.1, Figure 3-1"
  },
  {
    "id": "q-3-2",
    "unitId": "unit-3",
    "lessonId": "les-3-2",
    "type": "single_choice",
    "title": "Principle in Action: Adopt a Holistic View",
    "context": "A key server supplier notifies that it will delay delivery by 3 weeks. The technical lead suggests switching suppliers immediately without consulting anyone.",
    "options": [
      "The PM should accept the supplier change immediately so as not to lose a single day.",
      "The PM should adopt a holistic view: assess the impact on costs, warranties, architecture compatibility, risks, and contracts before deciding.",
      "The PM should ask the team to work weekends without evaluating alternatives.",
      "The PM should suspend the project indefinitely."
    ],
    "answerIndex": 1,
    "explanation": "Principle 1 (Adopt a Holistic View, Section 3.3) requires 'zooming out' and evaluating how a technical decision alters the entire system: contracts, risks, costs, and governance.",
    "sectionRef": "Section 3.3"
  },
  {
    "id": "q-3-3",
    "unitId": "unit-3",
    "lessonId": "les-3-6",
    "type": "single_choice",
    "title": "Principle 5: Integrate Sustainability Within All Project Areas",
    "context": "Why did the 8th edition of the PMBOK incorporate Sustainability as a core principle, independent of the profession?",
    "options": [
      "Because it was a secondary requirement that needed no attention in commercial projects.",
      "Because modern projects must consider their environmental, social, and economic (ESG) impact across the entire product lifecycle.",
      "To force all organizations to plant trees at the end of each sprint.",
      "To replace financial value analysis with purely ecological metrics."
    ],
    "answerIndex": 1,
    "explanation": "Principle 5 (Section 3.7) recognizes that decisions made in projects have long-term impacts on the environment, social equity, and lasting economic viability (ESG criteria).",
    "sectionRef": "Section 3.7"
  },
  {
    "id": "q-3-4",
    "unitId": "unit-3",
    "lessonId": "les-3-7",
    "type": "single_choice",
    "title": "Principle 6: Build an Empowered Culture and Psychological Safety",
    "context": "During a sprint, a developer makes an error in the database configuration that brings down the test environment for 2 hours. Which attitude reflects the PMBOK 8 mindset?",
    "options": [
      "Publicly reprimand the developer so the rest of the team does not make mistakes again.",
      "Prohibit developers from touching server configurations from now on.",
      "Address the error in a constructive retrospective to identify root causes, improve deployment processes, and strengthen psychological safety.",
      "Hide the incident from the other team members."
    ],
    "answerIndex": 2,
    "explanation": "Principle 6 (Build an Empowered Culture, Section 3.8) promotes psychological safety, where errors are analyzed without blame as sources of learning and process strengthening.",
    "sectionRef": "Section 3.8"
  },
  {
    "id": "q-4-1",
    "unitId": "unit-4",
    "lessonId": "les-4-1",
    "type": "single_choice",
    "title": "Selecting the Development Approach",
    "context": "A pharmaceutical company is developing a drug that requires strict, sequential regulatory clinical validations, but the complementary software for patient registration can evolve with continuous feedback.",
    "options": [
      "The project should be managed 100% adaptively.",
      "The project should be managed with a Hybrid approach, combining predictability for the clinical phases with adaptability for the software development.",
      "This project cannot be managed with the guidelines of the PMBOK.",
      "The software should be discarded until the drug is on the market."
    ],
    "answerIndex": 1,
    "explanation": "The PMBOK 8 (Section 4.2.3) highlights that hybrid approaches are ideal when different components of the same project present different levels of uncertainty and regulatory rigidity.",
    "sectionRef": "Section 4.2.3"
  },
  {
    "id": "q-4-2",
    "unitId": "unit-4",
    "lessonId": "les-4-3",
    "type": "sequence_flow",
    "title": "Logically order the 5 Focus Areas of the 8th edition",
    "steps": [
      "Initiating Focus Area",
      "Planning Focus Area",
      "Executing Focus Area",
      "Monitoring and Controlling Focus Area",
      "Closing Focus Area"
    ],
    "explanation": "The 5 Focus Areas (Section 4.5) flexibly reincorporate the former process groups throughout the project lifecycle.",
    "sectionRef": "Section 4.5"
  },
  {
    "id": "q-6-1",
    "unitId": "unit-6",
    "lessonId": "les-6-2",
    "type": "single_choice",
    "title": "Initiate Project or Phase Process: Project Charter",
    "context": "What is the main function of the Project Charter?",
    "options": [
      "Describe the detailed schedule with all activities at the hour level.",
      "Formally authorize the project and give the Project Manager authority to apply organizational resources.",
      "Serve as the exclusive binding contract between the technical members of the team.",
      "Replace the company's Business Case."
    ],
    "answerIndex": 1,
    "explanation": "The Initiate Project or Phase process (Section 2.1.6.1) concludes with the Project Charter, a document issued by the Sponsor that formally grants authority to the PM and links the project to strategic objectives.",
    "sectionRef": "Section 2.1.6.1"
  },
  {
    "id": "q-6-2",
    "unitId": "unit-6",
    "lessonId": "les-6-4",
    "type": "sequence_flow",
    "title": "Order the steps of the formal workflow for managing a change in the project",
    "steps": [
      "Formally receive the change request and log it in the Change Log",
      "Analyze the integrated impact of the change on scope, schedule, cost, risk, and value",
      "Evaluate alternatives and agree on recommendations with the team",
      "Present the evaluation to the Change Control Board (CCB) or Sponsor for a decision",
      "Update the Project Management Plan and communicate the decision to stakeholders"
    ],
    "explanation": "The integrated change control flow (Section 2.1.6.8, Figure 2-11) ensures that no modification is approved without understanding its systemic impact.",
    "sectionRef": "Section 2.1.6.8, Figure 2-11"
  },
  {
    "id": "q-7-1",
    "unitId": "unit-7",
    "lessonId": "les-7-3",
    "type": "single_choice",
    "title": "Quality Control vs. Validate Scope",
    "context": "The team has just finished a software module. The internal testing team checks that it has no errors. Afterward, the client attends a demonstration and signs the acceptance document.",
    "options": [
      "Internal testing is Validate Scope; the client demonstration is Quality Control.",
      "Internal testing is Quality Control (verifies technical accuracy); the client demonstration and formal acceptance is Validate Scope.",
      "Both actions correspond to the Define Scope process.",
      "In the PMBOK 8, testing and validation are no longer distinguished."
    ],
    "answerIndex": 1,
    "explanation": "Quality Control (Sections 2.1.6.5/2.2.2.6) focuses on technical correctness and produces 'verified deliverables'; whereas Validate Scope (Section 2.2.2.6) is performed WITH THE CLIENT to obtain 'formal acceptance'.",
    "sectionRef": "Section 2.2.2.6"
  },
  {
    "id": "q-7-2",
    "unitId": "unit-7",
    "lessonId": "les-7-2",
    "type": "single_choice",
    "title": "The 100% Rule in the Work Breakdown Structure (WBS)",
    "context": "What does the 100% rule state in developing the WBS?",
    "options": [
      "That each task must take 100% longer than estimated as a safety margin.",
      "That the WBS covers the entirety (100%) of the work defined by the project scope and nothing more.",
      "That 100% of the budget must be consumed before the phase closes.",
      "That all stakeholders must be 100% in agreement on every task."
    ],
    "answerIndex": 1,
    "explanation": "The 100% rule (Section 2.2.2.4) states that the sum of child components at any level of the WBS must equal 100% of the parent component, ensuring that no work is missing or extra.",
    "sectionRef": "Section 2.2.2.4"
  },
  {
    "id": "q-8-1",
    "unitId": "unit-8",
    "lessonId": "les-8-1",
    "type": "single_choice",
    "title": "Understanding the Critical Path and Float",
    "context": "In an activity network diagram, path A-B-E has a duration of 18 days, path A-C-E lasts 22 days, and path A-D-E lasts 15 days. What is the critical path, and what is the float of path A-B-E?",
    "options": [
      "The critical path is A-B-E at 18 days; its float is zero.",
      "The critical path is A-C-E (22 days); the float of path A-B-E is 4 days (22 - 18 = 4).",
      "The critical path is A-D-E (15 days); its float is 7 days.",
      "All paths have the same float."
    ],
    "answerIndex": 1,
    "explanation": "The critical path is the longest sequence (A-C-E = 22 days) and determines the minimum project duration. The float of A-B-E is the difference from the critical path: 22 - 18 = 4 days.",
    "sectionRef": "Section 2.3.1, Figure 5-4"
  },
  {
    "id": "q-8-2",
    "unitId": "unit-8",
    "lessonId": "les-8-3",
    "type": "single_choice",
    "title": "Compression Techniques: Crashing vs. Fast Tracking",
    "context": "Your project is 1 week behind schedule. The sponsor requires you to recover the time without increasing costs under any circumstances. What technique should you analyze?",
    "options": [
      "Crashing, by hiring 3 external consultants immediately.",
      "Fast Tracking, overlapping activities that were scheduled sequentially.",
      "Eliminating all quality tests.",
      "Declaring the project finished ahead of time."
    ],
    "answerIndex": 1,
    "explanation": "Crashing adds resources and almost always INCREASES COSTS. If no extra budget is allowed, the option to evaluate is Fast Tracking (performing activities in parallel), accepting the risk of possible rework (Section 2.3.3).",
    "sectionRef": "Section 2.3.3, Figure 5-20"
  },
  {
    "id": "q-9-1",
    "unitId": "unit-9",
    "lessonId": "les-9-3",
    "type": "calculation",
    "title": "EVM Calculation: Project Status",
    "context": "As of the cut-off date, your project has a Budget at Completion BAC = $100,000. According to the schedule, you should have completed a PV = $50,000. However, the work actually completed has an Earned Value EV = $40,000 and the actual cost incurred is AC = $45,000. What are the CPI and SPI, and what do they mean?",
    "options": [
      "CPI = 1.12 (Under budget) and SPI = 1.25 (Ahead of schedule).",
      "CPI = 0.89 (Cost overrun) and SPI = 0.80 (Behind schedule). The project is spending more than planned and progressing slower than scheduled.",
      "CPI = 0.80 (Ahead of schedule) and SPI = 0.89 (Under budget).",
      "The project is exactly on the baseline."
    ],
    "answerIndex": 1,
    "explanation": "CPI = EV / AC = 40,000 / 45,000 = 0.888 (~0.89). Since it is less than 1.0, there is a cost overrun. SPI = EV / PV = 40,000 / 50,000 = 0.80. Since it is less than 1.0, the project is behind schedule (Table 5-1).",
    "sectionRef": "Section 2.4.2.4, Table 5-1"
  },
  {
    "id": "q-9-2",
    "unitId": "unit-9",
    "lessonId": "les-9-1",
    "type": "single_choice",
    "title": "Contingency Reserve vs. Management Reserve",
    "context": "Who has the authority to approve the use of the Management Reserve?",
    "options": [
      "The Project Manager unilaterally, without informing anyone.",
      "The Sponsor or senior executive management, after evaluating the unforeseen event.",
      "Any member of the development team when they run out of money.",
      "The external financial auditor."
    ],
    "answerIndex": 1,
    "explanation": "The Management Reserve is intended for 'unknown-unknowns' (unforeseen events outside the planned scope) and is not part of the Cost Baseline; it requires executive authorization from the Sponsor for its use (Section 2.4.1).",
    "sectionRef": "Section 2.4.1"
  },
  {
    "id": "q-10-1",
    "unitId": "unit-10",
    "lessonId": "les-10-1",
    "type": "calculation",
    "title": "Communication Channels Calculation",
    "context": "Your initial project team had 6 people. Due to an increase in workload, 4 new members join, raising the team to 10 people. By how many potential communication channels did the paths increase?",
    "options": [
      "They increased by 4 channels.",
      "The original channels were 15 [6*(5)/2] and are now 45 [10*(9)/2]; therefore, they increased by 30 channels.",
      "They increased by 60 channels.",
      "The number of channels remained the same."
    ],
    "answerIndex": 1,
    "explanation": "Formula: N * (N - 1) / 2. Initial: 6 * 5 / 2 = 15 channels. New: 10 * 9 / 2 = 45 channels. Increase = 45 - 15 = 30 new potential communication channels.",
    "sectionRef": "Section 2.5.1"
  },
  {
    "id": "q-11-1",
    "unitId": "unit-11",
    "lessonId": "les-11-3",
    "type": "single_choice",
    "title": "Resolving Conflict in the Team",
    "context": "Two senior software architects are in a heated technical discussion about which database framework to use. The disagreement is delaying the team. According to PMI, what is the best resolution method?",
    "options": [
      "Force the decision by imposing the opinion of the architect with more seniority in the company.",
      "Avoid the problem, waiting for it to resolve itself over the coming weeks.",
      "Collaborate / Problem Solve: bring both together, analyze objective pros and cons based on the requirements, and reach a consensus win-win solution.",
      "Fire one of the two architects to restore peace."
    ],
    "answerIndex": 2,
    "explanation": "The 'Collaborate / Problem Solve' method (Confronting / Problem Solving) is the most effective conflict resolution technique in project management according to the PMBOK (Section 2.6.2.4), because it addresses the root cause and generates mutual commitment.",
    "sectionRef": "Section 2.6.2.4"
  },
  {
    "id": "q-12-1",
    "unitId": "unit-12",
    "lessonId": "les-12-4",
    "type": "match_pairs",
    "title": "Match each situation with the appropriate risk response strategy",
    "pairs": [
      {
        "left": "Purchase an insurance policy against weather damage",
        "right": "Transfer (Threat)"
      },
      {
        "left": "Remove an immature technology module from scope",
        "right": "Avoid (Threat)"
      },
      {
        "left": "Assign the best engineers to secure an innovative patent",
        "right": "Exploit (Opportunity)"
      },
      {
        "left": "Create a temporary joint venture with an expert partner",
        "right": "Share (Opportunity)"
      }
    ],
    "explanation": "Threat strategies include Avoid, Transfer, Mitigate, Accept, and Escalate. Opportunity strategies include Exploit, Share, Enhance, Accept, and Escalate (Section 2.7.2.4).",
    "sectionRef": "Section 2.7.2.4"
  },
  {
    "id": "q-13-1",
    "unitId": "unit-13",
    "lessonId": "les-13-2",
    "type": "sequence_flow",
    "title": "Order the 4 steps of the PMBOK 8 Tailoring Process",
    "steps": [
      "Step 1: Select Initial Approach",
      "Step 2: Tailor for the Organization",
      "Step 3: Tailor for the Project",
      "Step 4: Implement Ongoing Improvement"
    ],
    "explanation": "Section 3.4 of the PMBOK 8 formally establishes these 4 sequential steps for tailoring processes and domains to the actual context.",
    "sectionRef": "Section 3.4, Figure 3-3"
  },
  {
    "id": "q-16-1",
    "unitId": "unit-16",
    "lessonId": "les-16-1",
    "type": "single_choice",
    "title": "Use of Artificial Intelligence in Project Management (Appendix X3)",
    "context": "Your organization implements a generative AI model to predict cost overruns and generate contract drafts. What is the ethical principle of accountability according to the PMBOK 8?",
    "options": [
      "The AI is solely legally responsible if the contracts contain illegal clauses.",
      "The human being (the Project Manager and the organization) must always remain responsible for every final decision made.",
      "No human review is needed once the algorithm reaches 90% accuracy.",
      "AI will replace the Project Manager in all leadership functions."
    ],
    "answerIndex": 1,
    "explanation": "Appendix X3 (Section X3.3) emphasizes that, regardless of how sophisticated the AI model is, ethical and fiduciary accountability always rests non-delegably with humans.",
    "sectionRef": "Appendix X3, Section X3.3"
  },
  {
    "id": "q-17-1",
    "unitId": "unit-17",
    "lessonId": "les-17-2",
    "type": "single_choice",
    "title": "Contract Types and Distribution of Financial Risk (Appendix X4)",
    "context": "A buyer and a seller sign a Firm Fixed Price (FFP) contract to build an electrical substation. Inflation increases material costs by 25%. Who bears this cost overrun?",
    "options": [
      "The Buyer must pay the additional 25%.",
      "The Seller bears the cost overrun because in FFP contracts the seller assumes the financial risk arising from cost fluctuations.",
      "The contract is automatically canceled without compensation.",
      "The government must subsidize the difference."
    ],
    "answerIndex": 1,
    "explanation": "In a Firm Fixed Price (FFP) contract, the seller assumes the maximum financial risk; the agreed final price does not change due to unforeseen increases in material costs (Appendix X4, Section X4.8.1).",
    "sectionRef": "Appendix X4, Section X4.8.1"
  }
];

  // English localization of js/data/presentations.js (generated from the Spanish source; keep in sync)
const presentationDecks = [
  {
    "id": "deck-unit-1",
    "unitId": "unit-1",
    "title": "Unit 01: Introduction and Foundational Elements",
    "sectionRef": "Section 1 (1.1 - 1.3)",
    "category": "Part 1 • Standard",
    "summary": "Purpose of the Guide, audience, project, program and portfolio concepts, and professional ethics.",
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • The Standard",
        "title": "Introduction and Foundational Elements",
        "subtitle": "General structure of the 8th edition, official definitions and the role of projects in society.",
        "speakerNotes": "PMBOK 8 reaffirms that projects are the main means by which organizations introduce change and innovation."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Core Definition",
        "title": "What Is a Project According to PMBOK 8?",
        "leftTitle": "Immutable Characteristics",
        "leftItems": [
          "Temporary effort: It has a defined start and end.",
          "Creates a unique and differentiated product, service or result.",
          "Drives change from a current state to a desired future state."
        ],
        "rightTitle": "Projects vs Operations",
        "rightItems": [
          "Projects: Non-repetitive, temporary and transformative work.",
          "Operations: Ongoing, repetitive work focused on sustaining the business.",
          "Interaction: Projects transfer their results to business operations."
        ],
        "speakerNotes": "The boundary between project and operations is critical for determining success criteria and transition."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Strategic Structure",
        "title": "The Hierarchy: Strategy, Portfolios, Programs and Projects",
        "steps": [
          {
            "step": "01",
            "name": "Strategic Vision",
            "desc": "Corporate goals and high-level guidance."
          },
          {
            "step": "02",
            "name": "Portfolios",
            "desc": "Collection of programs and projects grouped to achieve strategic goals."
          },
          {
            "step": "03",
            "name": "Programs",
            "desc": "Group of interconnected projects managed in a coordinated way."
          },
          {
            "step": "04",
            "name": "Projects",
            "desc": "Tangible deliverables that create new capabilities."
          },
          {
            "step": "05",
            "name": "Realized Value",
            "desc": "Financial return, social benefit and competitive advantage."
          }
        ],
        "speakerNotes": "A portfolio prioritizes investments; a program manages interdependencies; a project manages scope."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Organizational Factors",
        "title": "Enterprise Environmental Factors (EEFs) vs Organizational Process Assets (OPAs)",
        "cards": [
          {
            "title": "Internal EEFs",
            "desc": "Infrastructure, culture, hierarchy and availability of qualified talent."
          },
          {
            "title": "External EEFs",
            "desc": "Legislation, interest rates, weather conditions and market trends."
          },
          {
            "title": "OPAs (Processes)",
            "desc": "Procurement policies, work methodologies, templates and quality standards."
          },
          {
            "title": "OPAs (Repository)",
            "desc": "Database of historical estimates, lessons learned and contract files."
          }
        ],
        "speakerNotes": "EEFs constrain or influence the PM's options; OPAs provide guidance for planning."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Organizational Typology",
        "title": "Comparison of Organizational Structures",
        "headers": [
          "Structure",
          "PM Authority",
          "Budget",
          "PM Role"
        ],
        "rows": [
          [
            "Functional",
            "Little or none",
            "Functional Manager",
            "Part-time"
          ],
          [
            "Weak Matrix",
            "Limited",
            "Functional Manager",
            "Coordinator / Expediter"
          ],
          [
            "Balanced Matrix",
            "Shared",
            "Shared",
            "Full-time dedicated"
          ],
          [
            "Strong Matrix",
            "High / Primary",
            "Project Manager",
            "Full-time leader"
          ],
          [
            "Projectized",
            "Total / Full",
            "Project Manager",
            "Absolute authority"
          ]
        ],
        "speakerNotes": "In exam questions that do not indicate a structure, always consider the Balanced Matrix."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Foundational Governance",
        "title": "Components of the Business Case",
        "inputsTitle": "Foundations",
        "inputs": [
          "Business Need",
          "Gap Analysis",
          "Feasibility Study",
          "Strategic Alignment"
        ],
        "toolsTitle": "Evaluation",
        "tools": [
          "Cost-Benefit Analysis",
          "NPV and IRR Calculation",
          "Payback Period",
          "Initial Risk Assessment"
        ],
        "outputsTitle": "Decision",
        "outputs": [
          "Approved Business Case",
          "Benefits Management Plan",
          "Investment Recommendation"
        ],
        "speakerNotes": "The Business Case justifies the investment before the Project Charter is issued."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Code of Ethics",
        "title": "The 4 Values of the PMI Code of Ethics and Professional Conduct",
        "leftTitle": "Mandatory and Aspirational Values",
        "leftItems": [
          "1. Responsibility: Taking ownership of the decisions made or not made.",
          "2. Respect: Showing esteem for oneself, for others and for the resources assigned."
        ],
        "rightTitle": "Fairness and Honesty",
        "rightItems": [
          "3. Fairness: Making decisions free of personal interests or bias.",
          "4. Honesty: Understanding the truth and acting truthfully in communication."
        ],
        "speakerNotes": "The code of ethics is binding for all applicants and certified PMPs."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Starting Metrics",
        "title": "Financial Viability Criteria",
        "metrics": [
          {
            "name": "Net Present Value (NPV)",
            "val": "> 0",
            "status": "Mandatory",
            "desc": "Present value of future discounted cash flows minus the initial investment."
          },
          {
            "name": "Internal Rate of Return (IRR)",
            "val": "> Cost of Capital",
            "status": "Favorable",
            "desc": "Percentage return generated by the invested capital."
          },
          {
            "name": "Payback Period",
            "val": "< 2 years",
            "status": "Desirable",
            "desc": "Months required to recover the money invested."
          },
          {
            "name": "B/C Ratio",
            "val": "> 1.5",
            "status": "Excellent",
            "desc": "Total benefit divided by the total cost of the project."
          }
        ],
        "speakerNotes": "Between mutually exclusive projects, the one with the highest NPV is always the best choice."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Undisclosed Conflict of Interest",
        "trapScenario": "A close relative of the Project Director submits a proposal for a project tender at a very competitive price.",
        "wrongAction": "Incorrect action: The PM evaluates the proposal in secret and approves it, arguing that it is the cheapest option for the company.",
        "correctAction": "PMI correct action: The PM must immediately disclose the conflict of interest to the sponsor or the ethics committee and fully abstain from the selection process.",
        "citation": "PMI Code of Ethics and Professional Conduct • Value of Fairness and Transparency."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Mastery Checklist: Foundations",
        "items": [
          "I can accurately distinguish between projects, programs and portfolios.",
          "I can differentiate between EEFs (internal/external) and OPAs (processes/knowledge).",
          "I know the 5 organizational structures and the PM's level of authority.",
          "I have mastered the financial selection criteria (NPV, IRR, Payback, B/C).",
          "I apply the 4 values of the Code of Ethics to any situational dilemma."
        ],
        "speakerNotes": "Excellent! You have mastered the Foundations of Unit 01."
      }
    ]
  },
  {
    "id": "deck-unit-2",
    "unitId": "unit-2",
    "title": "Unit 02: A Value Delivery System",
    "sectionRef": "Section 2 (2.1 - 2.5)",
    "category": "Part 1 • Standard",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Standard",
        "title": "A Value Delivery System",
        "subtitle": "Continuous value flow, organizational governance, project environments and benefits management.",
        "speakerNotes": "Executive presentation on Unit 02: A Value Delivery System according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Value Delivery System",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Section 2 (2.1 - 2.5) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and limits of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Guidelines for team conduct and collaboration.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Value Delivery System",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Base information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about eliminating rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Achievement of Objectives",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Adoption of the Result",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Certification Exam Situational Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Value Delivery System during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and assesses whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Mastery Checklist: A Value Delivery System",
        "items": [
          "I understand the importance of the Value Delivery System within the framework of PMBOK 8.",
          "I can differentiate between predictive and agile approaches for this topic.",
          "I can identify with certainty the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 02: A Value Delivery System."
      }
    ]
  },
  {
    "id": "deck-unit-3",
    "unitId": "unit-3",
    "title": "Unit 03: The 6 Project Management Principles",
    "sectionRef": "Section 3 (3.1 - 3.8)",
    "category": "Part 1 • Standard",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Standard",
        "title": "The 6 Project Management Principles",
        "subtitle": "Holistic View, Focus on Value, Quality, Accountable Leadership, Sustainability and Empowered Culture.",
        "speakerNotes": "Executive presentation on Unit 03: The 6 Project Management Principles according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the 6 Project Management Principles",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Section 3 (3.1 - 3.8) of PMBOK 8.",
          "Direct alignment with the 6 Project Management Principles.",
          "Responsibilities and limits of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Guidelines for team conduct and collaboration.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the 6 Project Management Principles",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Base information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about eliminating rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Achievement of Objectives",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Adoption of the Result",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Certification Exam Situational Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the 6 Project Management Principles during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and assesses whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Mastery Checklist: The 6 Project Management Principles",
        "items": [
          "I understand the importance of the 6 Project Management Principles within the framework of PMBOK 8.",
          "I can differentiate between predictive and agile approaches for this topic.",
          "I can identify with certainty the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 03: The 6 Project Management Principles."
      }
    ]
  },
  {
    "id": "deck-unit-4",
    "unitId": "unit-4",
    "title": "Unit 04: Project Life Cycles and Focus Areas",
    "sectionRef": "Section 4 (4.1 - 4.5)",
    "category": "Part 1 • Standard",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Standard",
        "title": "Project Life Cycles and Focus Areas",
        "subtitle": "The 5 Focus Areas (Initiating to Closing), delivery cadences and adaptive life cycle models.",
        "speakerNotes": "Executive presentation on Unit 04: Project Life Cycles and Focus Areas according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Project Life Cycles and Focus Areas",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Section 4 (4.1 - 4.5) of PMBOK 8.",
          "Direct alignment with the Project Life Cycles and Focus Areas.",
          "Responsibilities and limits of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Guidelines for team conduct and collaboration.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Project Life Cycles and Focus Areas",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Base information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about eliminating rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Achievement of Objectives",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Adoption of the Result",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Certification Exam Situational Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Project Life Cycles and Focus Areas during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and assesses whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Mastery Checklist: Project Life Cycles and Focus Areas",
        "items": [
          "I understand the importance of the Project Life Cycles and Focus Areas within the framework of PMBOK 8.",
          "I can differentiate between predictive and agile approaches for this topic.",
          "I can identify with certainty the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 04: Project Life Cycles and Focus Areas."
      }
    ]
  },
  {
    "id": "deck-unit-5",
    "unitId": "unit-5",
    "title": "Unit 05: Introduction and Overview of the 7 Performance Domains",
    "sectionRef": "Chapters 1 and 2 (2.0)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Introduction and Overview of the 7 Performance Domains",
        "subtitle": "Non-prescriptive structure of the 7 Performance Domains and their matrix interaction with the 5 focus areas.",
        "speakerNotes": "Executive presentation on Unit 05: Introduction and Overview of the 7 Performance Domains according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Introduction and Overview of the 7 Performance Domains",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapters 1 and 2 (2.0) of PMBOK 8.",
          "Direct alignment with the Introduction and Overview of the 7 Performance Domains.",
          "Responsibilities and limits of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Guidelines for team conduct and collaboration.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Introduction and Overview of the 7 Performance Domains",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Base information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about eliminating rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Achievement of Objectives",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Adoption of the Result",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Certification Exam Situational Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Introduction and Overview of the 7 Performance Domains during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and assesses whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Mastery Checklist: Introduction and Overview of the 7 Performance Domains",
        "items": [
          "I understand the importance of the Introduction and Overview of the 7 Performance Domains within the framework of PMBOK 8.",
          "I can differentiate between predictive and agile approaches for this topic.",
          "I can identify with certainty the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 05: Introduction and Overview of the 7 Performance Domains."
      }
    ]
  },
  {
    "id": "deck-unit-6",
    "unitId": "unit-6",
    "title": "Unit 06: Governance Performance Domain (9 Processes)",
    "sectionRef": "Chapter 2 (2.1)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Governance Performance Domain (9 Processes)",
        "subtitle": "Charter, plan integration, execution, monitoring, change control, closing, knowledge and quality.",
        "speakerNotes": "Executive presentation on Unit 06: Governance Performance Domain (9 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Governance Performance Domain (9 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.1) of PMBOK 8.",
          "Direct alignment with the Governance Performance Domain (9 Processes).",
          "Responsibilities and limits of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Guidelines for team conduct and collaboration.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Governance Performance Domain (9 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Base information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about eliminating rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Achievement of Objectives",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Adoption of the Result",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Certification Exam Situational Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Governance Performance Domain (9 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and assesses whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Mastery Checklist: Governance Performance Domain (9 Processes)",
        "items": [
          "I understand the importance of the Governance Performance Domain (9 Processes) within the framework of PMBOK 8.",
          "I can differentiate between predictive and agile approaches for this topic.",
          "I can identify with certainty the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 06: Governance Performance Domain (9 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-7",
    "unitId": "unit-7",
    "title": "Unit 07: Scope Performance Domain (6 Processes)",
    "sectionRef": "Chapter 2 (2.2)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Scope Performance Domain (6 Processes)",
        "subtitle": "Requirements, scope definition, hierarchical WBS, formal validation and prevention of Scope Creep.",
        "speakerNotes": "Executive presentation on Unit 07: Scope Performance Domain (6 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Scope Performance Domain (6 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.2) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Executing",
            "desc": "Technical coordination and generation of value-driven deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Scope Performance Domain (6 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the situational questions on the PMP exam."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Lifecycle",
          "Adaptive Lifecycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined up front in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling wave planning"
          ],
          [
            "Change Management",
            "Formal process through the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of lifecycle depends on how clear the requirements are and how volatile the environment is."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "The ITTOs connect the 40 processes of PMBOK 8 into a comprehensive information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring does not mean eliminating rigor, but applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Fulfillment",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Scope Performance Domain (6 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "Correct PMI action: The PM schedules a private meeting to actively listen to their concerns, analyzes the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Scope Performance Domain (6 Processes)",
        "items": [
          "I understand the importance of the Scope Performance Domain (6 Processes) within the framework of PMBOK 8.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply the tailoring criterion to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 07: Scope Performance Domain (6 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-8",
    "unitId": "unit-8",
    "title": "Unit 08: Schedule Performance Domain (3 Processes)",
    "sectionRef": "Chapter 2 (2.3)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Schedule Performance Domain (3 Processes)",
        "subtitle": "Critical Path Method (CPM), float, compression (Crashing / Fast Tracking) and sprint cadence.",
        "speakerNotes": "Executive presentation on Unit 08: Schedule Performance Domain (3 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Schedule Performance Domain (3 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.3) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Executing",
            "desc": "Technical coordination and generation of value-driven deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Schedule Performance Domain (3 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the situational questions on the PMP exam."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Lifecycle",
          "Adaptive Lifecycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined up front in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling wave planning"
          ],
          [
            "Change Management",
            "Formal process through the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of lifecycle depends on how clear the requirements are and how volatile the environment is."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "The ITTOs connect the 40 processes of PMBOK 8 into a comprehensive information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring does not mean eliminating rigor, but applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Fulfillment",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Schedule Performance Domain (3 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "Correct PMI action: The PM schedules a private meeting to actively listen to their concerns, analyzes the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Schedule Performance Domain (3 Processes)",
        "items": [
          "I understand the importance of the Schedule Performance Domain (3 Processes) within the framework of PMBOK 8.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply the tailoring criterion to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 08: Schedule Performance Domain (3 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-9",
    "unitId": "unit-9",
    "title": "Unit 09: Finance Performance Domain (4 Processes)",
    "sectionRef": "Chapter 2 (2.4)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Finance Performance Domain (4 Processes)",
        "subtitle": "Cost Baseline (S-Curve), Contingency Reserves and Earned Value Management (EVM Table 5-1).",
        "speakerNotes": "Executive presentation on Unit 09: Finance Performance Domain (4 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Finance Performance Domain (4 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.4) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Executing",
            "desc": "Technical coordination and generation of value-driven deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Finance Performance Domain (4 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the situational questions on the PMP exam."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Lifecycle",
          "Adaptive Lifecycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined up front in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling wave planning"
          ],
          [
            "Change Management",
            "Formal process through the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of lifecycle depends on how clear the requirements are and how volatile the environment is."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "The ITTOs connect the 40 processes of PMBOK 8 into a comprehensive information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring does not mean eliminating rigor, but applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Fulfillment",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Finance Performance Domain (4 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "Correct PMI action: The PM schedules a private meeting to actively listen to their concerns, analyzes the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Finance Performance Domain (4 Processes)",
        "items": [
          "I understand the importance of the Finance Performance Domain (4 Processes) within the framework of PMBOK 8.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply the tailoring criterion to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 09: Finance Performance Domain (4 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-10",
    "unitId": "unit-10",
    "title": "Unit 10: Stakeholders Performance Domain (7 Processes)",
    "sectionRef": "Chapter 2 (2.5)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Stakeholders Performance Domain (7 Processes)",
        "subtitle": "Power vs Interest Matrix, channels N*(N-1)/2, expectation management and information radiators.",
        "speakerNotes": "Executive presentation on Unit 10: Stakeholders Performance Domain (7 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Stakeholders Performance Domain (7 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.5) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Executing",
            "desc": "Technical coordination and generation of value-driven deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Stakeholders Performance Domain (7 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the situational questions on the PMP exam."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Lifecycle",
          "Adaptive Lifecycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined up front in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling wave planning"
          ],
          [
            "Change Management",
            "Formal process through the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of lifecycle depends on how clear the requirements are and how volatile the environment is."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "The ITTOs connect the 40 processes of PMBOK 8 into a comprehensive information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring does not mean eliminating rigor, but applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Fulfillment",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Stakeholders Performance Domain (7 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "Correct PMI action: The PM schedules a private meeting to actively listen to their concerns, analyzes the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Stakeholders Performance Domain (7 Processes)",
        "items": [
          "I understand the importance of the Stakeholders Performance Domain (7 Processes) within the framework of PMBOK 8.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply the tailoring criterion to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 10: Stakeholders Performance Domain (7 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-11",
    "unitId": "unit-11",
    "title": "Unit 11: Resources Performance Domain (5 Processes)",
    "sectionRef": "Chapter 2 (2.6)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Resources Performance Domain (5 Processes)",
        "subtitle": "Servant Leadership, Tuckman's development curve, RACI Matrix and conflict resolution.",
        "speakerNotes": "Executive presentation on Unit 11: Resources Performance Domain (5 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Resources Performance Domain (5 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.6) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Executing",
            "desc": "Technical coordination and generation of value-driven deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Resources Performance Domain (5 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the situational questions on the PMP exam."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Lifecycle",
          "Adaptive Lifecycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined up front in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling wave planning"
          ],
          [
            "Change Management",
            "Formal process through the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of lifecycle depends on how clear the requirements are and how volatile the environment is."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "The ITTOs connect the 40 processes of PMBOK 8 into a comprehensive information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring does not mean eliminating rigor, but applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Fulfillment",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Resources Performance Domain (5 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "Correct PMI action: The PM schedules a private meeting to actively listen to their concerns, analyzes the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Resources Performance Domain (5 Processes)",
        "items": [
          "I understand the importance of the Resources Performance Domain (5 Processes) within the framework of PMBOK 8.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply the tailoring criterion to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 11: Resources Performance Domain (5 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-12",
    "unitId": "unit-12",
    "title": "Unit 12: Risk Performance Domain (6 Processes)",
    "sectionRef": "Chapter 2 (2.7)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Risk Performance Domain (6 Processes)",
        "subtitle": "Qualitative and quantitative analysis (Monte Carlo), response strategies and trigger management.",
        "speakerNotes": "Executive presentation on Unit 12: Risk Performance Domain (6 Processes) according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of the Risk Performance Domain (6 Processes)",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 2 (2.7) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is assessed by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Executing",
            "desc": "Technical coordination and generation of value-driven deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, archiving of lessons learned and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is traversed in short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in the Risk Performance Domain (6 Processes)",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the situational questions on the PMP exam."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Lifecycle",
          "Adaptive Lifecycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined up front in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling wave planning"
          ],
          [
            "Change Management",
            "Formal process through the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of lifecycle depends on how clear the requirements are and how volatile the environment is."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Commercial Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Meetings",
          "Management Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "The ITTOs connect the 40 processes of PMBOK 8 into a comprehensive information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring does not mean eliminating rigor, but applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Fulfillment",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Controlled",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of the Risk Performance Domain (6 Processes) during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "Correct PMI action: The PM schedules a private meeting to actively listen to their concerns, analyzes the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Risk Performance Domain (6 Processes)",
        "items": [
          "I understand the importance of the Risk Performance Domain (6 Processes) within the framework of PMBOK 8.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply the tailoring criterion to avoid excessive bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 12: Risk Performance Domain (6 Processes)."
      }
    ]
  },
  {
    "id": "deck-unit-13",
    "unitId": "unit-13",
    "title": "Unit 13: Tailoring in PMBOK 8",
    "sectionRef": "Chapter 3 (3.1 - 3.7)",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "Tailoring in PMBOK 8",
        "subtitle": "A 4-step methodological framework for tailoring methods, governance and artifacts to each project.",
        "speakerNotes": "Executive presentation on Unit 13: Tailoring in PMBOK 8 according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of Tailoring in PMBOK 8",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapter 3 (3.1 - 3.7) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is evaluated by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value-adding deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, lessons learned archive and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is run through short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in Tailoring in PMBOK 8",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of the requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Workshops",
          "Project Management Information Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about removing rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Achievement",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Under Control",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of Tailoring in PMBOK 8 during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Tailoring in PMBOK 8",
        "items": [
          "I understand the importance of Tailoring in PMBOK 8 within the PMBOK 8 framework.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excess bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 13: Tailoring in PMBOK 8."
      }
    ]
  },
  {
    "id": "deck-unit-14",
    "unitId": "unit-14",
    "title": "Unit 14: ITTO and Artifact Catalog",
    "sectionRef": "Chapters 4 and 5",
    "category": "Part 2 • PMBOK Guide",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • PMBOK Guide",
        "title": "ITTO and Artifact Catalog",
        "subtitle": "Official compendium of inputs, outputs, analytical models, plans and visual radiators.",
        "speakerNotes": "Executive presentation on Unit 14: ITTO and Artifact Catalog according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of ITTO and Artifact Catalog",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Chapters 4 and 5 of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is evaluated by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value-adding deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, lessons learned archive and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is run through short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in ITTO and Artifact Catalog",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of the requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Workshops",
          "Project Management Information Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about removing rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Achievement",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Under Control",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of ITTO and Artifact Catalog during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: ITTO and Artifact Catalog",
        "items": [
          "I understand the importance of the ITTO and Artifact Catalog within the PMBOK 8 framework.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excess bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 14: ITTO and Artifact Catalog."
      }
    ]
  },
  {
    "id": "deck-unit-15",
    "unitId": "unit-15",
    "title": "Unit 15: Appendix X2 - The Modern PMO",
    "sectionRef": "Appendix X2 (X2.1 - X2.6)",
    "category": "Part 3 • Appendices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Appendices",
        "title": "Appendix X2 - The Modern PMO",
        "subtitle": "Value Enablement Offices (VMO), agile support models and strategic success metrics.",
        "speakerNotes": "Executive presentation on Unit 15: Appendix X2 - The Modern PMO according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of Appendix X2 - The Modern PMO",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Appendix X2 (X2.1 - X2.6) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is evaluated by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value-adding deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, lessons learned archive and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is run through short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in Appendix X2 - The Modern PMO",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of the requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Workshops",
          "Project Management Information Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about removing rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Achievement",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Under Control",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of Appendix X2 - The Modern PMO during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Appendix X2 - The Modern PMO",
        "items": [
          "I understand the importance of Appendix X2 - The Modern PMO within the PMBOK 8 framework.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excess bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 15: Appendix X2 - The Modern PMO."
      }
    ]
  },
  {
    "id": "deck-unit-16",
    "unitId": "unit-16",
    "title": "Unit 16: Appendix X3 - AI in Projects",
    "sectionRef": "Appendix X3 (X3.1 - X3.4)",
    "category": "Part 3 • Appendices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Appendices",
        "title": "Appendix X3 - AI in Projects",
        "subtitle": "Automation, Augmentation, Autonomy, Ethical Governance, Bias and Human Accountability.",
        "speakerNotes": "Executive presentation on Unit 16: Appendix X3 - AI in Projects according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of Appendix X3 - AI in Projects",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Appendix X3 (X3.1 - X3.4) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is evaluated by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value-adding deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, lessons learned archive and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is run through short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in Appendix X3 - AI in Projects",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of the requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Workshops",
          "Project Management Information Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about removing rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Achievement",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Under Control",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of Appendix X3 - AI in Projects during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Appendix X3 - AI in Projects",
        "items": [
          "I understand the importance of Appendix X3 - AI in Projects within the PMBOK 8 framework.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excess bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 16: Appendix X3 - AI in Projects."
      }
    ]
  },
  {
    "id": "deck-unit-17",
    "unitId": "unit-17",
    "title": "Unit 17: Appendix X4 - Procurement",
    "sectionRef": "Appendix X4 (X4.1 - X4.9)",
    "category": "Part 3 • Appendices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Appendices",
        "title": "Appendix X4 - Procurement",
        "subtitle": "Make-or-Buy analysis, FFP contracts, Cost-Reimbursable, T&M and claims administration.",
        "speakerNotes": "Executive presentation on Unit 17: Appendix X4 - Procurement according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of Appendix X4 - Procurement",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Appendix X4 (X4.1 - X4.9) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is evaluated by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value-adding deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, lessons learned archive and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is run through short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in Appendix X4 - Procurement",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of the requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Workshops",
          "Project Management Information Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about removing rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Achievement",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Under Control",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of Appendix X4 - Procurement during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Appendix X4 - Procurement",
        "items": [
          "I understand the importance of Appendix X4 - Procurement within the PMBOK 8 framework.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excess bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 17: Appendix X4 - Procurement."
      }
    ]
  },
  {
    "id": "deck-unit-18",
    "unitId": "unit-18",
    "title": "Unit 18: Appendix X5 - Historical Evolution",
    "sectionRef": "Appendix X5 (X5.1 - X5.4)",
    "category": "Part 3 • Appendices",
    "slidesCount": 10,
    "slides": [
      {
        "slideNumber": 1,
        "type": "cover",
        "tag": "PMBOK® 8th Edition • Appendices",
        "title": "Appendix X5 - Historical Evolution",
        "subtitle": "Global empirical research, evolution from the 1st to the 8th edition of the PMBOK and future trends.",
        "speakerNotes": "Executive presentation on Unit 18: Appendix X5 - Historical Evolution according to the ANSI/PMI 99-001-2025 standard."
      },
      {
        "slideNumber": 2,
        "type": "split_concept",
        "tag": "Theoretical Foundation",
        "title": "Conceptual Foundations of Appendix X5 - Historical Evolution",
        "leftTitle": "Scope and Purpose",
        "leftItems": [
          "Official definition according to Appendix X5 (X5.1 - X5.4) of PMBOK 8.",
          "Direct alignment with the Value Delivery System.",
          "Responsibilities and boundaries of the PM's actions."
        ],
        "rightTitle": "Impact on Performance",
        "rightItems": [
          "Team conduct and collaboration guidelines.",
          "Interaction with the other performance domains.",
          "Early and continuous delivery of value to the customer."
        ],
        "speakerNotes": "Every process or principle in PMBOK 8 is evaluated by its net contribution to business value."
      },
      {
        "slideNumber": 3,
        "type": "flow_diagram",
        "tag": "Operational Flow",
        "title": "Work Sequence and Information Flow",
        "steps": [
          {
            "step": "01",
            "name": "Conception",
            "desc": "Needs assessment and definition of key objectives."
          },
          {
            "step": "02",
            "name": "Planning",
            "desc": "Selection of tools and structuring of agreements."
          },
          {
            "step": "03",
            "name": "Execution",
            "desc": "Technical coordination and generation of value-adding deliverables."
          },
          {
            "step": "04",
            "name": "Monitoring",
            "desc": "Measurement of variances against the initial expectations."
          },
          {
            "step": "05",
            "name": "Closing",
            "desc": "Formal acceptance, lessons learned archive and operational transition."
          }
        ],
        "speakerNotes": "In adaptive projects this flow is run through short, iterative cycles."
      },
      {
        "slideNumber": 4,
        "type": "grid_cards",
        "tag": "Structural Components",
        "title": "Key Tools and Practices in Appendix X5 - Historical Evolution",
        "cards": [
          {
            "title": "Mandatory Inputs",
            "desc": "Baseline information, agreements, EEFs and organizational process assets (OPAs)."
          },
          {
            "title": "Analytical Techniques",
            "desc": "Expert judgment, probabilistic models and participatory facilitation."
          },
          {
            "title": "Formal Outputs",
            "desc": "Verified deliverables, performance reports and change requests."
          },
          {
            "title": "Quality Criteria",
            "desc": "Rigorous acceptance standards agreed with the customer."
          }
        ],
        "speakerNotes": "Identifying the right techniques is essential for the PMP situational questions."
      },
      {
        "slideNumber": 5,
        "type": "matrix_comparison",
        "tag": "Methodological Comparison",
        "title": "Tailoring: Predictive vs Adaptive vs Hybrid",
        "headers": [
          "Dimension",
          "Predictive Cycle",
          "Adaptive Cycle (Agile)"
        ],
        "rows": [
          [
            "Requirements",
            "Defined upfront in the baseline",
            "Emergent and prioritized by value"
          ],
          [
            "Planning",
            "Detailed in advance (WBS)",
            "Rolling Wave planning"
          ],
          [
            "Change Management",
            "Formal process before the CCB",
            "Agile acceptance in the Product Backlog"
          ],
          [
            "Deliveries",
            "Major deliverable at the end of the cycle",
            "Functional increments every sprint"
          ]
        ],
        "speakerNotes": "The choice of cycle depends on the clarity of the requirements and the volatility of the environment."
      },
      {
        "slideNumber": 6,
        "type": "itto_breakdown",
        "tag": "Key ITTOs",
        "title": "Architecture of Inputs, Tools and Outputs",
        "inputsTitle": "Inputs",
        "inputs": [
          "Project Management Plan",
          "Business Documents",
          "Agreements",
          "OPAs and EEFs"
        ],
        "toolsTitle": "Tools",
        "tools": [
          "Expert Judgment",
          "Facilitation Workshops",
          "Project Management Information Systems (PMIS)",
          "Data Analysis"
        ],
        "outputsTitle": "Outputs",
        "outputs": [
          "Validated Deliverables",
          "Performance Reports",
          "Change Requests",
          "Plan Updates"
        ],
        "speakerNotes": "ITTOs connect the 40 PMBOK 8 processes into an integrated information network."
      },
      {
        "slideNumber": 7,
        "type": "split_concept",
        "tag": "Practical Tailoring",
        "title": "Tailoring Criteria",
        "leftTitle": "Diagnostic Questions",
        "leftItems": [
          "What is the level of technological uncertainty in the project?",
          "Which contractual or legal requirements must be audited?",
          "What is the risk tolerance of the sponsors?"
        ],
        "rightTitle": "Decision Guidelines",
        "rightItems": [
          "Eliminate bureaucratic documentation that adds no value.",
          "Establish the optimal cadence of retrospectives and reviews.",
          "Define the governance balance between the PMO and the team."
        ],
        "speakerNotes": "Tailoring is not about removing rigor, but about applying the right level of control."
      },
      {
        "slideNumber": 8,
        "type": "metrics_dashboard",
        "tag": "Success Indicators",
        "title": "Performance Metrics and Results Measurement",
        "metrics": [
          {
            "name": "Objective Achievement",
            "val": "> 95%",
            "status": "Excellent",
            "desc": "Degree of achievement of the acceptance criteria and agreed goals."
          },
          {
            "name": "Financial / Time Variance",
            "val": "< 5%",
            "status": "Under Control",
            "desc": "Deviation from the baseline authorized by the committee."
          },
          {
            "name": "Stakeholder Satisfaction",
            "val": "> 90%",
            "status": "Optimal",
            "desc": "Satisfaction level measured through periodic surveys."
          },
          {
            "name": "Result Adoption",
            "val": "Immediate",
            "status": "Successful",
            "desc": "Speed at which the customer incorporates the product into its operations."
          }
        ],
        "speakerNotes": "Modern success is measured by the effective adoption of the product, not by hours worked."
      },
      {
        "slideNumber": 9,
        "type": "exam_trap",
        "tag": "PMP Exam Alert",
        "title": "Situational Certification Exam Scenario",
        "trapScenario": "A high-power stakeholder expresses dissatisfaction with the progress of Appendix X5 - Historical Evolution during an informal hallway conversation.",
        "wrongAction": "Incorrect action: The PM ignores the comment because it is not a formal channel, or promises immediate scope changes without consulting the team.",
        "correctAction": "PMI correct action: The PM schedules a private meeting to actively listen to their concerns, reviews the stakeholder register and evaluates whether the engagement strategy or a formal change request needs to be updated.",
        "citation": "PMBOK® 8th Edition • Principle of Transparent Communication and Servant Leadership."
      },
      {
        "slideNumber": 10,
        "type": "checklist",
        "tag": "Closing Checklist",
        "title": "Domain Checklist: Appendix X5 - Historical Evolution",
        "items": [
          "I understand the importance of Appendix X5 - Historical Evolution within the PMBOK 8 framework.",
          "I can differentiate predictive and agile approaches for this topic.",
          "I can confidently identify the key inputs, tools and outputs (ITTOs).",
          "I apply tailoring criteria to avoid excess bureaucracy.",
          "I am prepared to answer situational exam questions with the PMI mindset."
        ],
        "speakerNotes": "Congratulations! You have completed the 10 master slides of Unit 18: Appendix X5 - Historical Evolution."
      }
    ]
  }
];


  // Ultra-sharp SVG Icon System (No Emojis)
const icons = {
  book: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  calculator: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  cpu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  help: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  volume: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  volumeX: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  flag: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
};

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


  






class LearningHub {
  constructor(containerEl, modalBackdropEl, onProgressUpdate) {
    this.container = containerEl;
    this.modalBackdrop = modalBackdropEl;
    this.onProgressUpdate = onProgressUpdate;
    this.completedUnits = new Set(JSON.parse(localStorage.getItem("pmbok8_completed_units") || "[]"));
    this.filterPart = "all";
  }

  saveProgress() {
    localStorage.setItem("pmbok8_completed_units", JSON.stringify([...this.completedUnits]));
    if (this.onProgressUpdate) {
      let total = 0;
      curriculum.parts.forEach(p => total += p.units.length);
      this.onProgressUpdate(this.completedUnits.size, total);
    }
  }

  render() {
    let totalUnits = 0;
    curriculum.parts.forEach(p => totalUnits += p.units.length);
    const completedCount = this.completedUnits.size;
    const progressPercent = Math.round((completedCount / totalUnits) * 100);

    const partBadges = [
      t("hub.partBadge1"),
      t("hub.partBadge2"),
      t("hub.partBadge3")
    ];

    this.container.innerHTML = `
      <!-- Hero Header -->
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("hub.heroTitle")}</h1>
          <p>
            ${t("hub.heroText")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${completedCount}/${totalUnits}</span>
            <span class="stat-label">${t("hub.unitsMastered")}</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-teal);">${progressPercent}%</span>
            <span class="stat-label">${t("hub.globalProgress")}</span>
          </div>
        </div>
      </div>

      <!-- Parts Container -->
      <div style="display: flex; flex-direction: column; gap: 36px;">
        ${curriculum.parts.map((part, pIdx) => `
          <section class="part-section-group">
            <div class="part-section-header">
              <span class="part-badge part-badge-${pIdx + 1}">
                ${partBadges[pIdx]}
              </span>
              <h2 class="part-title">${part.title}</h2>
              <p class="part-description">${part.description || t("hub.partDescFallback")}</p>
            </div>

            <div class="units-grid">
              ${part.units.map(unit => {
                const isDone = this.completedUnits.has(unit.id);
                const lessonsCount = unit.lessons ? unit.lessons.length : 0;
                const estTime = unit.lessons ? unit.lessons.reduce((acc, l) => acc + (l.timeMin || 5), 0) : 15;
                const descText = unit.description || t("hub.unitDescFallback");

                return `
                  <div class="unit-card-pro ${isDone ? 'is-done' : ''}" data-unit-id="${unit.id}">
                    <div>
                      <div class="unit-card-top">
                        <span class="unit-ref-badge">${unit.sectionRef}</span>
                        <span class="unit-duration-pill">${t("hub.durationLessons", { time: estTime, count: lessonsCount })}</span>
                      </div>

                      <h3 class="unit-title">${unit.title}</h3>
                      <p class="unit-summary">${descText}</p>

                      <!-- Key topics bullet preview -->
                      ${unit.lessons && unit.lessons.length > 0 ? `
                        <div class="unit-lessons-preview">
                          ${unit.lessons.slice(0, 3).map(l => `
                            <div class="lesson-bullet-item">
                              <span class="bullet-dot"></span>
                              <span>${l.title}</span>
                            </div>
                          `).join('')}
                          ${unit.lessons.length > 3 ? `
                            <div class="lesson-bullet-more">${t("hub.moreLessons", { count: unit.lessons.length - 3 })}</div>
                          ` : ''}
                        </div>
                      ` : ''}
                    </div>

                    <div class="unit-card-footer">
                      <span class="unit-status-indicator ${isDone ? 'done' : ''}">
                        ${isDone ? '<span class="status-icon-done">' + icons.check + '</span> ' + t("hub.mastered") : '<span class="status-icon-pending"></span> ' + t("hub.pending")}
                      </span>

                      <div style="display: flex; gap: 8px;">
                        <button class="unit-slides-btn" data-unit-id="${unit.id}" title="${t("hub.slidesHint")}">
                          ${t("hub.slides")}
                        </button>
                        <button class="btn-primary-pro unit-study-btn" data-unit-id="${unit.id}">
                          ${isDone ? t("hub.review") : t("hub.study")} ${icons.arrowRight}
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `;

    // Click events on Study Buttons
    this.container.querySelectorAll(".unit-study-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const uId = btn.dataset.unitId;
        this.openUnitModal(uId);
      };
    });

    // Click on entire card
    this.container.querySelectorAll(".unit-card-pro").forEach(card => {
      card.onclick = (e) => {
        if (e.target.closest(".unit-slides-btn")) return;
        audio.playPop();
        const uId = card.dataset.unitId;
        this.openUnitModal(uId);
      };
    });

    // Click on Direct Slides Button
    this.container.querySelectorAll(".unit-slides-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const uId = btn.dataset.unitId;
        // Trigger presentation tab and open deck
        const presTabBtn = document.querySelector('.nav-tab-btn[data-tab="presentations"]');
        if (presTabBtn) {
          presTabBtn.click();
          // Give view a brief tick to mount, then click the matching deck
          setTimeout(() => {
            const deckCard = document.querySelector(`.unit-card-pro[data-deck-id="deck-${uId}"] .start-deck-btn`);
            if (deckCard) deckCard.click();
          }, 60);
        }
      };
    });
  }

  openUnitModal(unitId) {
    let targetUnit = null;
    curriculum.parts.forEach(p => {
      const u = p.units.find(item => item.id === unitId);
      if (u) targetUnit = u;
    });

    if (!targetUnit) return;
    const q = questions.find(item => item.unitId === unitId) || questions[0];
    const isDone = this.completedUnits.has(unitId);

    this.modalBackdrop.innerHTML = `
      <div class="modal-window-card" style="max-width: 860px;">
        <div class="modal-window-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="brand-tag">${targetUnit.sectionRef}</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">${targetUnit.title}</h3>
          </div>
          <button class="icon-square-btn" id="close-lesson-x" title="${t("common.close")}">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <!-- Unit Overview -->
          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px 20px; margin-bottom: 20px;">
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${t("hub.officialDesc")}
            </span>
            <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-primary);">
              ${targetUnit.description}
            </p>
          </div>

          <!-- Lessons List -->
          ${targetUnit.lessons && targetUnit.lessons.length > 0 ? `
            <div style="margin-bottom: 24px;">
              <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--text-tertiary); margin-bottom: 12px;">
                ${t("hub.standardLessons", { count: targetUnit.lessons.length })}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${targetUnit.lessons.map((les, lIdx) => `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); padding: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <span style="font-size: 0.75rem; font-family: var(--font-mono); font-weight: 700; color: var(--c-blue); background: var(--c-blue-subtle); padding: 2px 7px; border-radius: var(--radius-xs);">
                        ${t("hub.sectionLabel", { section: les.section })}
                      </span>
                      <strong style="font-size: 0.96rem; color: var(--text-primary); flex: 1; margin-left: 10px;">${les.title}</strong>
                      <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 600;">${t("hub.minutes", { n: les.timeMin || 5 })}</span>
                    </div>

                    <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 10px;">
                      ${les.summary}
                    </p>

                    ${les.points && les.points.length > 0 ? `
                      <ul style="display: flex; flex-direction: column; gap: 6px; padding-left: 18px; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.45; margin-bottom: 10px;">
                        ${les.points.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    ` : ''}

                    ${les.examTip ? `
                      <div style="background: var(--c-amber-subtle); border-left: 3px solid var(--c-amber); padding: 8px 12px; border-radius: var(--radius-xs); font-size: 0.8rem; color: #78350F; line-height: 1.4;">
                        <strong>${t("hub.examTip")}</strong> ${les.examTip}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Practice Question Checkpoint -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--c-blue); ">
                ${t("hub.checkpoint")}
              </span>
              <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 600;">
                ${t("hub.validationQ")}
              </span>
            </div>

            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 10px; line-height: 1.35; color: var(--text-primary);">
              ${q.title}
            </h4>
            ${q.context ? `<p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px; background: var(--bg-surface-subtle); padding: 12px 14px; border-radius: var(--radius-s); line-height: 1.5;">${q.context}</p>` : ''}

            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${q.options.map((opt, i) => `
                <div class="quiz-option-row" data-idx="${i}" style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 12px 16px; border-radius: var(--radius-s); cursor: pointer; display: flex; align-items: center; gap: 12px; font-size: 0.88rem; transition: all 0.15s ease;">
                  <span style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;">
                    ${['A', 'B', 'C', 'D'][i]}
                  </span>
                  <span>${opt}</span>
                </div>
              `).join('')}
            </div>

            <div id="checkpoint-feedback" style="margin-top: 14px; display: none;"></div>
          </div>
        </div>

        <div class="modal-window-footer" style="justify-content: space-between;">
          <button class="btn-flat-soft-indigo" id="open-slides-from-modal-btn">
            ${t("hub.viewSlides")} ${icons.arrowRight}
          </button>

          <button class="${isDone ? 'btn-teal-pro' : 'btn-primary-pro'}" id="finish-lesson-btn">
            ${isDone ? t("hub.unitMastered") : t("hub.markMastered")}
          </button>
        </div>
      </div>
    `;

    this.modalBackdrop.classList.add("active");

    this.modalBackdrop.querySelector("#close-lesson-x").onclick = () => {
      this.modalBackdrop.classList.remove("active");
    };

    // Open slides from inside modal
    this.modalBackdrop.querySelector("#open-slides-from-modal-btn").onclick = () => {
      this.modalBackdrop.classList.remove("active");
      const presTabBtn = document.querySelector('.nav-tab-btn[data-tab="presentations"]');
      if (presTabBtn) {
        presTabBtn.click();
        setTimeout(() => {
          const deckCard = document.querySelector(`.unit-card-pro[data-deck-id="deck-${unitId}"] .start-deck-btn`);
          if (deckCard) deckCard.click();
        }, 60);
      }
    };

    // Quiz evaluation
    const optRows = this.modalBackdrop.querySelectorAll(".quiz-option-row");
    const fbBox = this.modalBackdrop.querySelector("#checkpoint-feedback");

    optRows.forEach(row => {
      row.onclick = () => {
        const choice = parseInt(row.dataset.idx, 10);
        const isCorrect = choice === q.answerIndex;

        optRows.forEach(r => {
          r.style.borderColor = "var(--border-medium)";
          r.style.background = "var(--bg-surface)";
        });

        if (isCorrect) {
          audio.playCorrect();
          row.style.borderColor = "var(--c-teal)";
          row.style.background = "var(--c-teal-subtle)";
          fbBox.innerHTML = `
            <div style="background: var(--c-teal-subtle); border-left: 3px solid var(--c-teal); padding: 12px 16px; border-radius: var(--radius-s); font-size: 0.85rem; color: var(--text-primary); line-height: 1.45;">
              <strong style="color: var(--c-teal); display: block; margin-bottom: 2px;">${t("hub.correctAnswer")}</strong>
              ${q.explanation}
            </div>
          `;
        } else {
          audio.playIncorrect();
          row.style.borderColor = "var(--c-rose)";
          row.style.background = "var(--c-rose-subtle)";
          fbBox.innerHTML = `
            <div style="background: var(--c-rose-subtle); border-left: 3px solid var(--c-rose); padding: 12px 16px; border-radius: var(--radius-s); font-size: 0.85rem; color: var(--text-primary); line-height: 1.45;">
              <strong style="color: var(--c-rose); display: block; margin-bottom: 2px;">${t("hub.wrongAnswer")}</strong>
              ${q.explanation}
            </div>
          `;
        }
        fbBox.style.display = "block";
      };
    });

    this.modalBackdrop.querySelector("#finish-lesson-btn").onclick = () => {
      audio.playVictory();
      this.completedUnits.add(unitId);
      this.saveProgress();
      this.modalBackdrop.classList.remove("active");
      this.render();
    };
  }
}

  
// Keyed by the English domain name (domainEn / nameEn), so colors do not depend on the display language.
const domainColorPalette = {
  governance: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  scope: { color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  schedule: { color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  finance: { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  stakeholders: { color: "#E11D48", bg: "#FFF1F2", border: "#FECDD3" },
  resources: { color: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD" },
  risk: { color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" }
};

function getDomColor(nameEn) {
  const n = (nameEn || "").toLowerCase();
  for (const k of Object.keys(domainColorPalette)) {
    if (n.includes(k)) return domainColorPalette[k];
  }
  return { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" };
}








function renderProcessMatrixPro(containerEl, modalBackdropEl) {
  let viewMode = "matrix"; // "matrix" | "by-domain" | "by-focus" | "ittos"
  let searchQuery = "";
  // Language-independent domain key: "all" or the domain's index in performanceDomains (as a string).
  let activeDomain = "all";

  // All matching uses English keys (p.domainEn / p.focusAreaEn vs d.nameEn / fa.nameEn), never localized labels.
  const matchDomain = (pDomainEn, dNameEn) => dNameEn.toLowerCase().includes(pDomainEn.toLowerCase());
  const matchFocusArea = (pFocusEn, faNameEn) => faNameEn.toLowerCase().includes(pFocusEn.toLowerCase());

  // Display-only helper (Spanish label for the UI). Not used for matching.
  const shortDomainName = (d) => d.name.replace("Dominio de ", "");
  // Key of the domain a process belongs to (index in performanceDomains). Never uses a display label.
  const domainKeyOfProcess = (p) =>
    String(performanceDomains.findIndex(d => matchDomain(p.domainEn, d.nameEn)));
  const isDomainSelected = (d) =>
    activeDomain === "all" || activeDomain === String(performanceDomains.indexOf(d));

  const render = () => {
    const filteredProcesses = processes.filter(p =>
      (activeDomain === "all" || domainKeyOfProcess(p) === activeDomain) &&
      (searchQuery === "" ||
       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       p.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (p.inputs || []).some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.tools || []).some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (p.outputs || []).some(o => o.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("matrix.heroTitle")}</h1>
          <p>
            ${t("matrix.heroIntro")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${fmtNumber(filteredProcesses.length)}/40</span>
            <span class="stat-label">${t("matrix.filteredLabel")}</span>
          </div>
        </div>
      </div>

      <!-- Explanation Banner -->
      <div class="matrix-explanation-banner">
        <strong>${t("matrix.explanationTitle")}</strong> ${t("matrix.explanationText", { ittos: `<strong>${t("matrix.ittosLabel")}</strong>` })}
      </div>

      <!-- View Switcher & Toolbar -->
      <div class="matrix-toolbar-row">
        <div class="matrix-view-switcher">
          <button class="matrix-view-btn ${viewMode === 'matrix' ? 'active' : ''}" data-view="matrix">
            ${t("matrix.viewMatrix")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-domain' ? 'active' : ''}" data-view="by-domain">
            ${t("matrix.viewByDomain")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'by-focus' ? 'active' : ''}" data-view="by-focus">
            ${t("matrix.viewByFocus")}
          </button>
          <button class="matrix-view-btn ${viewMode === 'ittos' ? 'active' : ''}" data-view="ittos">
            ${t("matrix.viewItto")}
          </button>
        </div>

        <div class="matrix-search-box">
          <input type="text" id="matrix-search-input" placeholder="${t("matrix.searchPlaceholder")}" value="${searchQuery}">
          <span class="matrix-search-icon">${icons.search}</span>
        </div>
      </div>

      <!-- Domain filter chips -->
      <div class="domain-chips-row">
        <button class="action-chip-btn ${activeDomain === 'all' ? 'active' : ''}" data-domain="all">
          ${t("matrix.allDomains")}
        </button>
        ${performanceDomains.map((d, i) => {
          const shortName = shortDomainName(d);
          const isAct = activeDomain === String(i);
          const dCol = getDomColor(d.nameEn);
          return `
            <button class="action-chip-btn ${isAct ? 'active' : ''}" data-domain="${i}" style="${isAct ? `background: ${dCol.color}; color: #ffffff; border-color: ${dCol.color};` : `border-color: ${dCol.border};`}">
              <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${isAct ? '#ffffff' : dCol.color}; flex-shrink:0;"></span>
              ${shortName} (${d.processesCount})
            </button>
          `;
        }).join('')}
      </div>

      <!-- Dynamic View Container -->
      <div id="matrix-content-viewport" style="margin-top: 18px;"></div>
    `;

    // Render corresponding subview
    const viewport = containerEl.querySelector("#matrix-content-viewport");
    if (viewMode === "matrix") {
      render2DMatrix(viewport, filteredProcesses);
    } else if (viewMode === "by-domain") {
      renderByDomain(viewport, filteredProcesses);
    } else if (viewMode === "by-focus") {
      renderByFocusArea(viewport, filteredProcesses);
    } else if (viewMode === "ittos") {
      renderITTOExplorer(viewport, filteredProcesses);
    }

    // Attach search event
    const searchInp = containerEl.querySelector("#matrix-search-input");
    searchInp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
      const newInp = containerEl.querySelector("#matrix-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    // View buttons
    containerEl.querySelectorAll(".matrix-view-btn").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        viewMode = btn.dataset.view;
        render();
      };
    });

    // Domain filter chips
    containerEl.querySelectorAll("[data-domain]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeDomain = btn.dataset.domain;
        render();
      };
    });

    // Attach process card click listeners
    containerEl.querySelectorAll(".process-cell-card").forEach(card => {
      card.onclick = () => {
        audio.playPop();
        const pId = card.dataset.pid;
        const p = processes.find(item => item.id === pId);
        if (p) openProcessModal(p);
      };
    });
  };

  // Subview 1: 2D Matrix Grid
  const render2DMatrix = (area, pList) => {
    const visibleDomains = performanceDomains.filter(isDomainSelected);

    area.innerHTML = `
      <div class="matrix-table-card">
        <table class="matrix-grid-table">
          <thead>
            <tr>
              <th class="matrix-corner-th">${t("matrix.domainHeader")}</th>
              ${focusAreas.map(fa => `
                <th class="matrix-col-th">
                  <span class="fa-sec-badge">${t("matrix.sectionBadge", { section: fa.section })}</span>
                  <span class="fa-name-title">${fa.name.replace("Área de Enfoque de ", "")}</span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${visibleDomains.map(d => `
              <tr>
                <td class="domain-header-cell" style="border-left: 4px solid ${getDomColor(d.nameEn).color};">
                  <span class="domain-name-tag" style="color: ${getDomColor(d.nameEn).color};">${shortDomainName(d)}</span>
                  <span class="domain-section-tag">${t("matrix.domainSection", { section: d.section, count: d.processesCount })}</span>
                </td>
                ${focusAreas.map(fa => {
                  const cellProcs = pList.filter(p =>
                    matchDomain(p.domainEn, d.nameEn) &&
                    matchFocusArea(p.focusAreaEn, fa.nameEn)
                  );

                  return `
                    <td class="matrix-body-td">
                      ${cellProcs.length > 0 ? `
                        <div class="matrix-cell-procs-stack">
                          ${cellProcs.map(p => `
                            <div class="process-cell-card" data-pid="${p.id}" style="border-left: 3px solid ${getDomColor(p.domainEn).color};" title="${t("matrix.cellTitle", { number: p.number, name: p.name })}">
                              <span class="process-cell-num" style="color: ${getDomColor(p.domainEn).color};">#${p.number.toString().padStart(2, '0')}</span>
                              <span class="process-cell-title">${p.name}</span>
                            </div>
                          `).join('')}
                        </div>
                      ` : '<span class="cell-empty-placeholder">—</span>'}
                    </td>
                  `;
                }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  // Subview 2: Grouped by Performance Domain
  const renderByDomain = (area, pList) => {
    const visibleDomains = performanceDomains.filter(isDomainSelected);

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${visibleDomains.map(d => {
          const dProcs = pList.filter(p => matchDomain(p.domainEn, d.nameEn));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-blue); font-weight: 700;">${t("matrix.chapter", { number: d.number })}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${d.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${d.summary}</p>
                </div>
                <span class="action-chip-btn">${t("matrix.processesBadge", { count: dProcs.length })}</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${dProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); ">${p.focusArea}</span>
                    </div>
                    <span class="process-cell-title" style="font-size: 0.9rem;">${p.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Subview 3: Grouped by Focus Area
  const renderByFocusArea = (area, pList) => {
    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${focusAreas.map(fa => {
          const faProcs = pList.filter(p => matchFocusArea(p.focusAreaEn, fa.nameEn));
          return `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 22px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-teal); font-weight: 700;">${t("matrix.sectionBadge", { section: fa.section })}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${fa.name}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px; max-width: 800px;">${fa.summary}</p>
                  <div style="font-size: 0.82rem; color: var(--c-teal); font-weight: 600; margin-top: 6px;">${t("matrix.keyDeliverable", { deliverable: fa.keyDeliverable })}</div>
                </div>
                <span class="action-chip-btn">${t("matrix.processesBadge", { count: faProcs.length })}</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; margin-top: 14px;">
                ${faProcs.map(p => `
                  <div class="process-cell-card" data-pid="${p.id}" style="padding: 14px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                      <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                      <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); ">${p.domain}</span>
                    </div>
                    <span class="process-cell-title" style="font-size: 0.9rem;">${p.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Subview 4: ITTO Universal Search & Explorer
  const renderITTOExplorer = (area, pList) => {
    area.innerHTML = `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 24px;">
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 6px;">${t("matrix.explorerTitle")}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
          ${t("matrix.explorerDesc")}
        </p>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${pList.map(p => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="process-cell-num">#${p.number.toString().padStart(2, '0')}</span>
                  <strong style="font-size: 0.96rem; color: var(--text-primary);">${p.name}</strong>
                </div>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${p.domain} • ${p.focusArea}</span>
              </div>

              <div class="itto-grid">
                <div class="itto-col">
                  <h5 style="color: var(--c-blue);">${t("matrix.inputs")}</h5>
                  <ul>
                    ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-purple);">${t("matrix.tools")}</h5>
                  <ul>
                    ${(p.tools || []).map(tool => `<li>${tool}</li>`).join('')}
                  </ul>
                </div>

                <div class="itto-col">
                  <h5 style="color: var(--c-teal);">${t("matrix.outputs")}</h5>
                  <ul>
                    ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  };

  // Process Modal Deep Dive
  const openProcessModal = (p) => {
    modalBackdropEl.innerHTML = `
      <div class="modal-window-card">
        <div class="modal-window-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="brand-tag">${t("matrix.processBadge", { number: p.number.toString().padStart(2, '0') })}</span>
            <h3 style="font-size: 1.15rem; font-weight: 800;">${p.name}</h3>
          </div>
          <button class="icon-square-btn" id="close-proc-modal-btn" title="${t("matrix.closeWindow")}">
            ${icons.x}
          </button>
        </div>

        <div class="modal-window-body">
          <div style="background: var(--bg-surface-subtle); padding: 18px 20px; border-radius: var(--radius-s); border-left: 3px solid var(--c-blue); margin-bottom: 16px;">
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--c-blue); ">${t("matrix.officialPurpose")}</span>
            <p style="font-size: 0.98rem; line-height: 1.55; margin-top: 4px; color: var(--text-primary);">
              ${p.purpose}
            </p>
          </div>

          <div style="display: flex; gap: 12px; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 16px;">
            <span>${t("matrix.domainLabel")} <strong style="color: var(--text-primary);">${p.domain}</strong></span>
            <span>•</span>
            <span>${t("matrix.focusAreaLabel")} <strong style="color: var(--text-primary);">${p.focusArea}</strong></span>
          </div>

          <!-- ITTOs Grid -->
          <div class="itto-grid">
            <div class="itto-col">
              <h5 style="color: var(--c-blue);">${t("matrix.inputs")}</h5>
              <ul>
                ${(p.inputs || []).map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-purple);">${t("matrix.tools")}</h5>
              <ul>
                ${(p.tools || []).map(tool => `<li>${tool}</li>`).join('')}
              </ul>
            </div>

            <div class="itto-col">
              <h5 style="color: var(--c-teal);">${t("matrix.outputs")}</h5>
              <ul>
                ${(p.outputs || []).map(o => `<li>${o}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 16px; margin-top: 16px;">
            <strong style="font-size: 0.84rem; color: var(--text-primary); display: block; margin-bottom: 4px;">${t("matrix.tailoringTitle")}</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-secondary);">${p.tailoring}</p>
          </div>

          <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 16px; margin-top: 14px;">
            <strong style="font-size: 0.84rem; color: #B45309; display: block; margin-bottom: 4px;">${t("matrix.examTrapTitle")}</strong>
            <p style="font-size: 0.86rem; line-height: 1.5; color: var(--text-primary);">${p.examTip}</p>
          </div>
        </div>

        <div class="modal-window-footer">
          <button class="action-chip-btn" id="modal-close-bottom-btn">${t("matrix.closeCard")}</button>
        </div>
      </div>
    `;

    modalBackdropEl.classList.add("active");

    const closeHandler = () => modalBackdropEl.classList.remove("active");
    modalBackdropEl.querySelector("#close-proc-modal-btn").onclick = closeHandler;
    modalBackdropEl.querySelector("#modal-close-bottom-btn").onclick = closeHandler;
  };

  render();
}

  




// Stable part key derived from the deck's unitId (unit-1..unit-18), so the
// filter does not depend on the translated `category` label.
const partIdOf = (deck) => {
  const n = parseInt(deck.unitId.split("-")[1], 10);
  if (n <= 4) return "part1";
  if (n <= 14) return "part2";
  return "part3";
};

function renderPresentationsPro(containerEl, modalBackdropEl) {
  let activeCategory = "all";
  let searchQuery = "";
  let activeDeck = null;
  let currentSlideIdx = 0;
  let showNotes = true;

  const categories = [
    { id: "all", label: t("presentations.catAll", { count: fmtNumber(18) }) },
    { id: "part1", label: t("presentations.catPart1", { count: fmtNumber(4) }) },
    { id: "part2", label: t("presentations.catPart2", { count: fmtNumber(10) }) },
    { id: "part3", label: t("presentations.catPart3", { count: fmtNumber(4) }) }
  ];

  const render = () => {
    const filteredDecks = presentationDecks.filter(d =>
      (activeCategory === "all" || partIdOf(d) === activeCategory) &&
      (searchQuery === "" ||
       d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.sectionRef.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("presentations.heroTitle")}</h1>
          <p>
            ${t("presentations.heroText", { units: fmtNumber(18), slides: fmtNumber(10) })}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num">${fmtNumber(presentationDecks.length)}</span>
            <span class="stat-label">${t("presentations.officialDecks")}</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-purple);">${fmtNumber(180)}</span>
            <span class="stat-label">${t("presentations.visualSlides")}</span>
          </div>
        </div>
      </div>

      <!-- Toolbar & Category Filter -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${categories.map(c => `
            <button class="action-chip-btn ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}" style="${activeCategory === c.id ? 'background: var(--c-blue); color: white; border-color: var(--c-blue);' : ''}">
              ${c.label}
            </button>
          `).join('')}
        </div>

        <div style="position: relative; width: 320px;">
          <input type="text" id="deck-search-input" placeholder="${t("presentations.searchPlaceholder")}" value="${searchQuery}" style="width: 100%; padding: 8px 12px 8px 34px; border-radius: var(--radius-s); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-size: 0.82rem; outline: none;">
          <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-muted); display: flex;">${icons.search}</span>
        </div>
      </div>

      <!-- Decks Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 18px;">
        ${filteredDecks.map(deck => `
          <div class="unit-card-pro" data-deck-id="${deck.id}" style="border: 1px solid var(--border-medium);">
            <div>
              <div class="unit-card-top">
                <span class="unit-ref-badge">${deck.sectionRef}</span>
                <span class="unit-duration-pill">${t("presentations.slidesPill", { count: fmtNumber(10) })}</span>
              </div>

              <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-tertiary); display: block; margin-bottom: 4px;">
                ${deck.category}
              </span>

              <h3 class="unit-title" style="font-size: 1.1rem; line-height: 1.3;">${deck.title}</h3>
              <p class="unit-summary" style="margin-bottom: 16px;">${deck.summary}</p>
            </div>

            <div class="unit-card-footer">
              <span class="unit-status-indicator">
                ${t("presentations.deckFormat")}
              </span>
              <button class="btn-primary-pro start-deck-btn" data-deck-id="${deck.id}">
                ${t("presentations.viewDeck")} ${icons.arrowRight}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Search event
    const searchInp = containerEl.querySelector("#deck-search-input");
    searchInp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
      const newInp = containerEl.querySelector("#deck-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    // Category buttons
    containerEl.querySelectorAll("[data-cat]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeCategory = btn.dataset.cat;
        render();
      };
    });

    // Start presentation buttons
    containerEl.querySelectorAll(".start-deck-btn").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        audio.playPop();
        const dId = btn.dataset.deckId;
        const target = presentationDecks.find(d => d.id === dId);
        if (target) openPresentationPlayer(target);
      };
    });

    containerEl.querySelectorAll(".unit-card-pro").forEach(card => {
      card.onclick = () => {
        audio.playPop();
        const dId = card.dataset.deckId;
        const target = presentationDecks.find(d => d.id === dId);
        if (target) openPresentationPlayer(target);
      };
    });
  };

  // Presentation Player Modal
  const openPresentationPlayer = (deck) => {
    activeDeck = deck;
    currentSlideIdx = 0;

    const renderPlayer = () => {
      const slide = activeDeck.slides[currentSlideIdx];

      modalBackdropEl.innerHTML = `
        <div class="modal-window-card" style="max-width: 1060px; max-height: 94vh; height: 90vh;">
          <!-- Player Header -->
          <div class="modal-window-header" style="padding: 12px 20px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="brand-tag">${activeDeck.sectionRef}</span>
              <h3 style="font-size: 1rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 520px;">
                ${activeDeck.title}
              </h3>
            </div>

            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--c-blue); background: var(--bg-surface-subtle); padding: 4px 10px; border-radius: var(--radius-xs);">
                ${t("presentations.slideCounter", { current: fmtNumber(currentSlideIdx + 1), total: fmtNumber(activeDeck.slides.length) })}
              </span>
              <button class="icon-square-btn" id="toggle-notes-btn" title="${t("presentations.toggleNotes")}">
                ${icons.book}
              </button>
              <button class="icon-square-btn" id="close-deck-btn" title="${t("presentations.closeDeck")}">
                ${icons.x}
              </button>
            </div>
          </div>

          <!-- Slide Stage Canvas -->
          <div class="modal-window-body" style="padding: 24px 32px; flex: 1; display: flex; flex-direction: column; justify-content: center; overflow-y: auto;">
            ${renderSlideBody(slide)}

            <!-- Speaker Notes Callout -->
            ${showNotes && slide.speakerNotes ? `
              <div style="margin-top: 24px; padding: 12px 16px; border-radius: var(--radius-s); background: var(--bg-surface-subtle); border-left: 3px solid var(--c-purple); font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">
                <strong style="color: var(--text-primary); font-size: 0.72rem; display: block; margin-bottom: 2px;">
                  ${t("presentations.speakerNotes")}
                </strong>
                ${slide.speakerNotes}
              </div>
            ` : ''}
          </div>

          <!-- Player Controls & Thumbnails Strip -->
          <div class="modal-window-footer" style="padding: 12px 20px; flex-direction: column; gap: 10px;">
            <!-- Thumbnails Strip -->
            <div style="display: flex; gap: 6px; width: 100%; justify-content: center;">
              ${activeDeck.slides.map((s, i) => `
                <button class="action-chip-btn ${i === currentSlideIdx ? 'active' : ''}" data-goto-slide="${i}" style="width: 28px; height: 28px; padding: 0; justify-content: center; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; ${i === currentSlideIdx ? 'background: var(--c-blue); color: white; border-color: var(--c-blue);' : ''}">
                  ${i + 1}
                </button>
              `).join('')}
            </div>

            <!-- Navigation Buttons -->
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <button class="action-chip-btn" id="prev-slide-btn" ${currentSlideIdx === 0 ? 'disabled style="opacity: 0.4; pointer-events: none;"' : ''}>
                ${icons.arrowLeft} ${t("presentations.prevSlide")}
              </button>

              <span style="font-size: 0.76rem; color: var(--text-muted);">
                ${t("presentations.keyboardHint")}
              </span>

              <button class="btn-primary-pro" id="next-slide-btn">
                ${currentSlideIdx === activeDeck.slides.length - 1 ? t("presentations.finishDeck") : t("presentations.nextSlide") + ' ' + icons.arrowRight}
              </button>
            </div>
          </div>
        </div>
      `;

      // Attach player events
      modalBackdropEl.querySelector("#close-deck-btn").onclick = () => {
        modalBackdropEl.classList.remove("active");
        document.removeEventListener("keydown", keyHandler);
      };

      modalBackdropEl.querySelector("#toggle-notes-btn").onclick = () => {
        showNotes = !showNotes;
        renderPlayer();
      };

      const prevBtn = modalBackdropEl.querySelector("#prev-slide-btn");
      if (prevBtn) {
        prevBtn.onclick = () => {
          if (currentSlideIdx > 0) {
            audio.playPop();
            currentSlideIdx -= 1;
            renderPlayer();
          }
        };
      }

      const nextBtn = modalBackdropEl.querySelector("#next-slide-btn");
      if (nextBtn) {
        nextBtn.onclick = () => {
          if (currentSlideIdx < activeDeck.slides.length - 1) {
            audio.playPop();
            currentSlideIdx += 1;
            renderPlayer();
          } else {
            audio.playVictory();
            modalBackdropEl.classList.remove("active");
            document.removeEventListener("keydown", keyHandler);
          }
        };
      }

      modalBackdropEl.querySelectorAll("[data-goto-slide]").forEach(btn => {
        btn.onclick = () => {
          audio.playPop();
          currentSlideIdx = parseInt(btn.dataset.gotoSlide, 10);
          renderPlayer();
        };
      });
    };

    // Keyboard navigation
    const keyHandler = (e) => {
      if (e.key === "ArrowLeft" && currentSlideIdx > 0) {
        currentSlideIdx -= 1;
        renderPlayer();
      } else if (e.key === "ArrowRight" && currentSlideIdx < activeDeck.slides.length - 1) {
        currentSlideIdx += 1;
        renderPlayer();
      } else if (e.key === "Escape") {
        modalBackdropEl.classList.remove("active");
        document.removeEventListener("keydown", keyHandler);
      }
    };

    document.addEventListener("keydown", keyHandler);
    modalBackdropEl.classList.add("active");
    renderPlayer();
  };

  // Helper renderer for different slide layouts
  const renderSlideBody = (slide) => {
    switch (slide.type) {
      case "cover":
        return `
          <div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 30px 0;">
            <span style="display: inline-block; padding: 4px 12px; border-radius: var(--radius-xs); background: var(--c-blue-subtle); color: var(--c-blue); font-size: 0.8rem; font-weight: 700; margin-bottom: 16px;">
              ${slide.tag}
            </span>
            <h1 style="font-size: 2.3rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 16px; color: var(--text-primary);">
              ${slide.title}
            </h1>
            <p style="font-size: 1.15rem; line-height: 1.6; color: var(--text-secondary); max-width: 700px; margin: 0 auto;">
              ${slide.subtitle}
            </p>
          </div>
        `;

      case "split_concept":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 20px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 22px;">
                <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">${slide.leftTitle}</h4>
                <ul style="padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
                  ${slide.leftItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>

              <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 22px; border-left: 3px solid var(--c-blue);">
                <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">${slide.rightTitle}</h4>
                <ul style="padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
                  ${slide.rightItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;

      case "flow_diagram":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-teal); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 20px;">${slide.title}</h2>

            <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;">
              ${slide.steps.map(st => `
                <div style="flex: 1; min-width: 160px; background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px; display: flex; flex-direction: column;">
                  <span style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 800; color: var(--c-teal); line-height: 1; margin-bottom: 8px;">
                    ${st.step}
                  </span>
                  <h4 style="font-size: 0.94rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${st.name}</h4>
                  <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">${st.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "grid_cards":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-purple); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 20px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
              ${slide.cards.map(card => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
                  <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${card.title}</h4>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${card.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "matrix_comparison":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 16px;">${slide.title}</h2>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); overflow: hidden;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                <thead>
                  <tr style="background: var(--bg-surface-subtle); border-bottom: 1px solid var(--border-medium);">
                    ${slide.headers.map(h => `<th style="padding: 10px 14px; text-align: left; font-size: 0.76rem; font-weight: 700; color: var(--text-secondary);">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${slide.rows.map(row => `
                    <tr style="border-bottom: 1px solid var(--border-subtle);">
                      ${row.map((cell, idx) => `
                        <td style="padding: 10px 14px; ${idx === 0 ? 'font-weight: 700;' : 'color: var(--text-secondary);'}">${cell}</td>
                      `).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;

      case "itto_breakdown":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div class="itto-grid">
              <div class="itto-col">
                <h5 style="color: var(--c-blue);">${slide.inputsTitle}</h5>
                <ul>
                  ${slide.inputs.map(i => `<li>${i}</li>`).join('')}
                </ul>
              </div>

              <div class="itto-col">
                <h5 style="color: var(--c-purple);">${slide.toolsTitle}</h5>
                <ul>
                  ${slide.tools.map(tool => `<li>${tool}</li>`).join('')}
                </ul>
              </div>

              <div class="itto-col">
                <h5 style="color: var(--c-teal);">${slide.outputsTitle}</h5>
                <ul>
                  ${slide.outputs.map(o => `<li>${o}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;

      case "metrics_dashboard":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-teal); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
              ${slide.metrics.map(m => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-tertiary); ">${m.name}</span>
                    <span style="padding: 2px 8px; border-radius: var(--radius-xs); background: var(--c-teal-subtle); color: var(--c-teal); font-size: 0.7rem; font-weight: 700;">${m.status}</span>
                  </div>
                  <div style="font-size: 1.8rem; font-weight: 900; font-family: var(--font-mono); color: var(--c-teal); margin-bottom: 4px;">${m.val}</div>
                  <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">${m.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "exam_trap":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: #B45309; display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 16px;">${slide.title}</h2>

            <div style="background: var(--c-amber-subtle); border: 1px solid var(--c-amber-border); border-radius: var(--radius-s); padding: 18px; margin-bottom: 14px;">
              <strong style="font-size: 0.84rem; color: #B45309; display: block; margin-bottom: 4px;">${t("presentations.scenario")}</strong>
              <p style="font-size: 0.94rem; line-height: 1.5; color: var(--text-primary);">${slide.trapScenario}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
              <div style="background: var(--c-rose-subtle); border-left: 3px solid var(--c-rose); padding: 14px 18px; border-radius: var(--radius-s);">
                <p style="font-size: 0.86rem; line-height: 1.45; color: var(--text-primary);">${slide.wrongAction}</p>
              </div>

              <div style="background: var(--c-teal-subtle); border-left: 3px solid var(--c-teal); padding: 14px 18px; border-radius: var(--radius-s);">
                <p style="font-size: 0.86rem; line-height: 1.45; color: var(--text-primary);">${slide.correctAction}</p>
              </div>
            </div>

            <div style="font-size: 0.8rem; font-style: italic; color: var(--text-tertiary);">
              ${t("presentations.reference")} ${slide.citation}
            </div>
          </div>
        `;

      case "checklist":
        return `
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--c-blue); display: block; margin-bottom: 6px;">
              ${slide.tag}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 18px;">${slide.title}</h2>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${slide.items.map(item => `
                <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); padding: 12px 16px; border-radius: var(--radius-s); display: flex; align-items: center; gap: 12px; font-size: 0.9rem;">
                  <span style="color: var(--c-teal); display: flex;">${icons.check}</span>
                  <span style="color: var(--text-primary); font-weight: 500;">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      default:
        return `<p>${slide.title}</p>`;
    }
  };

  render();
}

  



function renderEVMLabPro(containerEl) {
  // Base State Variables
  let BAC = 100000; // Presupuesto Total Autorizado
  let PV = 50000;   // Valor Planificado a la fecha
  let EV = 45000;   // Valor Ganado físico real
  let AC = 48000;   // Costo Real contable

  const calculateEVM = () => {
    const CV = EV - AC;
    const SV = EV - PV;
    const CPI = AC > 0 ? EV / AC : 1;
    const SPI = PV > 0 ? EV / PV : 1;
    const EAC = CPI > 0 ? BAC / CPI : BAC;
    const ETC = EAC - AC;
    const VAC = BAC - EAC;
    const TCPI = (BAC - AC) > 0 ? (BAC - EV) / (BAC - AC) : 1;

    // Health interpretation
    let costHealth = {
      status: t("evm.costHealthy"),
      badgeColor: "var(--c-teal)",
      badgeBg: "var(--c-teal-subtle)",
      message: t("evm.costHealthyMsg", { cpi: CPI.toFixed(2) })
    };
    if (CPI < 0.90) {
      costHealth = {
        status: t("evm.costCritical"),
        badgeColor: "var(--c-rose)",
        badgeBg: "var(--c-rose-subtle)",
        message: t("evm.costSevereMsg", { cpi: CPI.toFixed(2), cents: (100 - CPI * 100).toFixed(0) })
      };
    } else if (CPI < 1.0) {
      costHealth = {
        status: t("evm.costModerate"),
        badgeColor: "var(--c-amber)",
        badgeBg: "var(--c-amber-subtle)",
        message: t("evm.costModerateMsg", { amount: fmtNumber(Math.abs(CV)) })
      };
    }

    let scheduleHealth = {
      status: t("evm.scheduleOnTime"),
      badgeColor: "var(--c-teal)",
      badgeBg: "var(--c-teal-subtle)",
      message: t("evm.scheduleOnTimeMsg", { pct: (SPI * 100).toFixed(0) })
    };
    if (SPI < 0.90) {
      scheduleHealth = {
        status: t("evm.scheduleSevere"),
        badgeColor: "var(--c-rose)",
        badgeBg: "var(--c-rose-subtle)",
        message: t("evm.scheduleSevereMsg", { pct: (SPI * 100).toFixed(0), delay: (100 - SPI * 100).toFixed(0) })
      };
    } else if (SPI < 1.0) {
      scheduleHealth = {
        status: t("evm.scheduleModerate"),
        badgeColor: "var(--c-amber)",
        badgeBg: "var(--c-amber-subtle)",
        message: t("evm.scheduleModerateMsg", { amount: fmtNumber(Math.abs(SV)) })
      };
    }

    // PMP Strategic Decision recommendation
    let pmpAdvice = "";
    if (CPI >= 1 && SPI >= 1) {
      pmpAdvice = t("evm.pmpExcellent");
    } else if (CPI >= 1 && SPI < 1) {
      pmpAdvice = t("evm.pmpSavingsDelay");
    } else if (CPI < 1 && SPI >= 1) {
      pmpAdvice = t("evm.pmpOverrunOnTime");
    } else {
      pmpAdvice = t("evm.pmpCrisis");
    }

    return { CV, SV, CPI, SPI, EAC, ETC, VAC, TCPI, costHealth, scheduleHealth, pmpAdvice };
  };

  const render = () => {
    const r = calculateEVM();

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("evm.heroTitle")}</h1>
          <p>
            ${t("evm.heroDesc")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: ${r.costHealth.badgeColor};">${r.CPI.toFixed(2)}</span>
            <span class="stat-label">${t("evm.cpiShortLabel")}</span>
          </div>
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: ${r.scheduleHealth.badgeColor};">${r.SPI.toFixed(2)}</span>
            <span class="stat-label">${t("evm.spiShortLabel")}</span>
          </div>
        </div>
      </div>

      <!-- Presets Toolbar -->
      <div class="evm-presets-bar">
        <span class="evm-presets-label">${t("evm.presetsLabel")}</span>
        <div class="evm-presets-group">
          <button class="action-chip-btn" id="evm-btn-healthy">${t("evm.presetHealthy")}</button>
          <button class="action-chip-btn" id="evm-btn-overbudget">${t("evm.presetOverbudget")}</button>
          <button class="action-chip-btn" id="evm-btn-behind">${t("evm.presetBehind")}</button>
          <button class="action-chip-btn" id="evm-btn-crisis">${t("evm.presetCrisis")}</button>
          <button class="action-chip-btn" id="evm-btn-perfect">${t("evm.presetPerfect")}</button>
        </div>
      </div>

      <!-- Main Interactive Grid: Controls (Left) & KPIs (Right) -->
      <div class="evm-dashboard-grid">
        <!-- Left: 4 Fundamental Parameter Sliders -->
        <div class="evm-inputs-panel">
          <div class="evm-panel-header">
            <h3>${t("evm.inputsTitle")}</h3>
            <span class="evm-panel-subtitle">${t("evm.inputsSubtitle")}</span>
          </div>

          <div class="evm-sliders-stack">
            <!-- BAC -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">${t("evm.bacTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.bacDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-blue);">$${fmtNumber(BAC)}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-bac" min="20000" max="300000" step="5000" value="${BAC}">
              <div class="evm-slider-ticks">
                <span>$20k</span>
                <span>$150k</span>
                <span>$300k</span>
              </div>
            </div>

            <!-- PV -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">${t("evm.pvTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.pvDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-blue);">$${fmtNumber(PV)}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-pv" min="5000" max="${BAC}" step="2000" value="${PV}">
              <div class="evm-slider-ticks">
                <span>$5k</span>
                <span>$${Math.round(BAC/2000)}k</span>
                <span>$${Math.round(BAC/1000)}k</span>
              </div>
            </div>

            <!-- EV -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">${t("evm.evTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.evDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-teal);">$${fmtNumber(EV)}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-ev" min="2000" max="${BAC}" step="2000" value="${EV}">
              <div class="evm-slider-ticks">
                <span>$2k</span>
                <span>$${Math.round(BAC/2000)}k</span>
                <span>$${Math.round(BAC/1000)}k</span>
              </div>
            </div>

            <!-- AC -->
            <div class="evm-input-card">
              <div class="evm-card-top-row">
                <div>
                  <strong class="evm-card-param-title">${t("evm.acTitle")}</strong>
                  <span class="evm-card-param-desc">${t("evm.acDesc")}</span>
                </div>
                <div class="evm-val-display" style="color: var(--c-rose);">$${fmtNumber(AC)}</div>
              </div>
              <input type="range" class="evm-slider-control" id="sl-ac" min="2000" max="${Math.round(BAC * 1.4)}" step="2000" value="${AC}">
              <div class="evm-slider-ticks">
                <span>$2k</span>
                <span>$${Math.round(BAC/1000)}k</span>
                <span>$${Math.round(BAC * 1.4 / 1000)}k</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Diagnostic Performance Gauges & Table 5-1 Breakdown -->
        <div class="evm-results-panel">
          <!-- Primary Indices: CPI & SPI Cards -->
          <div class="evm-gauges-cards-row">
            <!-- CPI Card -->
            <div class="evm-metric-hero-card" style="border-top: 3px solid ${r.costHealth.badgeColor};">
              <div class="metric-hero-top">
                <span class="metric-hero-code">CPI = EV / AC</span>
                <span class="metric-status-chip" style="background: ${r.costHealth.badgeBg}; color: ${r.costHealth.badgeColor};">
                  ${r.costHealth.status}
                </span>
              </div>
              <div class="metric-hero-value" style="color: ${r.costHealth.badgeColor};">
                ${r.CPI.toFixed(2)}
              </div>
              <span class="metric-hero-name">${t("evm.cpiName")}</span>
              <p class="metric-hero-desc">${r.costHealth.message}</p>
            </div>

            <!-- SPI Card -->
            <div class="evm-metric-hero-card" style="border-top: 3px solid ${r.scheduleHealth.badgeColor};">
              <div class="metric-hero-top">
                <span class="metric-hero-code">SPI = EV / PV</span>
                <span class="metric-status-chip" style="background: ${r.scheduleHealth.badgeBg}; color: ${r.scheduleHealth.badgeColor};">
                  ${r.scheduleHealth.status}
                </span>
              </div>
              <div class="metric-hero-value" style="color: ${r.scheduleHealth.badgeColor};">
                ${r.SPI.toFixed(2)}
              </div>
              <span class="metric-hero-name">${t("evm.spiName")}</span>
              <p class="metric-hero-desc">${r.scheduleHealth.message}</p>
            </div>
          </div>

          <!-- Variances & Forecast Grid (Table 5-1 PMBOK 8) -->
          <div class="evm-formulas-matrix-card">
            <h4 class="evm-matrix-title">${t("evm.formulasTitle")}</h4>

            <div class="evm-matrix-grid">
              <!-- CV -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.cvLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.CV >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.CV >= 0 ? '+' : ''}$${fmtNumber(Math.round(r.CV))}
                </div>
                <span class="formula-cell-sub">${r.CV >= 0 ? t("evm.cvUnder") : t("evm.cvOver")}</span>
              </div>

              <!-- SV -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.svLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.SV >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.SV >= 0 ? '+' : ''}$${fmtNumber(Math.round(r.SV))}
                </div>
                <span class="formula-cell-sub">${r.SV >= 0 ? t("evm.svAhead") : t("evm.svBehind")}</span>
              </div>

              <!-- EAC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.eacLabel")}</span>
                <div class="formula-cell-val" style="color: var(--text-primary);">
                  $${fmtNumber(Math.round(r.EAC))}
                </div>
                <span class="formula-cell-sub">${t("evm.eacSub")}</span>
              </div>

              <!-- ETC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.etcLabel")}</span>
                <div class="formula-cell-val" style="color: var(--text-primary);">
                  $${fmtNumber(Math.round(r.ETC))}
                </div>
                <span class="formula-cell-sub">${t("evm.etcSub")}</span>
              </div>

              <!-- VAC -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.vacLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.VAC >= 0 ? 'var(--c-teal)' : 'var(--c-rose)'};">
                  ${r.VAC >= 0 ? '+' : ''}$${fmtNumber(Math.round(r.VAC))}
                </div>
                <span class="formula-cell-sub">${r.VAC >= 0 ? t("evm.vacSurplus") : t("evm.vacDeficit")}</span>
              </div>

              <!-- TCPI -->
              <div class="evm-formula-cell">
                <span class="formula-cell-label">${t("evm.tcpiLabel")}</span>
                <div class="formula-cell-val" style="color: ${r.TCPI <= 1.05 ? 'var(--c-teal)' : r.TCPI <= 1.2 ? 'var(--c-amber)' : 'var(--c-rose)'};">
                  ${r.TCPI.toFixed(2)}
                </div>
                <span class="formula-cell-sub">${r.TCPI <= 1 ? t("evm.tcpiFeasible") : t("evm.tcpiAccelerate")}</span>
              </div>
            </div>
          </div>

          <!-- Strategic Advice & PMP Exam Trap -->
          <div class="evm-strategic-decision-card">
            <div class="strategic-card-header">
              <span class="brand-tag">${t("evm.pmpBadge")}</span>
              <strong style="font-size: 0.95rem; color: var(--text-primary);">${t("evm.pmpTitle")}</strong>
            </div>
            <p class="strategic-card-text">
              ${r.pmpAdvice}
            </p>
          </div>
        </div>
      </div>
    `;

    // Sliders event listeners
    const slBac = containerEl.querySelector("#sl-bac");
    const slPv = containerEl.querySelector("#sl-pv");
    const slEv = containerEl.querySelector("#sl-ev");
    const slAc = containerEl.querySelector("#sl-ac");

    if (slBac) slBac.oninput = (e) => {
      BAC = parseInt(e.target.value, 10);
      if (PV > BAC) PV = BAC;
      if (EV > BAC) EV = BAC;
      render();
    };

    if (slPv) slPv.oninput = (e) => {
      PV = parseInt(e.target.value, 10);
      render();
    };

    if (slEv) slEv.oninput = (e) => {
      EV = parseInt(e.target.value, 10);
      render();
    };

    if (slAc) slAc.oninput = (e) => {
      AC = parseInt(e.target.value, 10);
      render();
    };

    // Presets event listeners
    const btnHealthy = containerEl.querySelector("#evm-btn-healthy");
    if (btnHealthy) btnHealthy.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 50000; EV = 55000; AC = 48000;
      render();
    };

    const btnOverbudget = containerEl.querySelector("#evm-btn-overbudget");
    if (btnOverbudget) btnOverbudget.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 50000; EV = 46000; AC = 58000;
      render();
    };

    const btnBehind = containerEl.querySelector("#evm-btn-behind");
    if (btnBehind) btnBehind.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 60000; EV = 45000; AC = 42000;
      render();
    };

    const btnCrisis = containerEl.querySelector("#evm-btn-crisis");
    if (btnCrisis) btnCrisis.onclick = () => {
      audio.playPop();
      BAC = 100000; PV = 65000; EV = 40000; AC = 56000;
      render();
    };

    const btnPerfect = containerEl.querySelector("#evm-btn-perfect");
    if (btnPerfect) btnPerfect.onclick = () => {
      audio.playPop();
      BAC = 120000; PV = 60000; EV = 75000; AC = 60000;
      render();
    };
  };

  render();
}

  




function renderExamSimulatorPro(containerEl) {
  let examActive = false;
  let examPool = [];
  let userAnswers = {};
  let flagged = new Set();
  let currentIdx = 0;
  let remainingSeconds = 0;
  let timerId = null;

  const startExam = (qCount, durationMin) => {
    audio.playPop();
    const pool = questions.filter(q => q.type === "single_choice" || q.type === "calculation");
    examPool = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(qCount, pool.length));
    userAnswers = {};
    flagged = new Set();
    currentIdx = 0;
    remainingSeconds = durationMin * 60;
    examActive = true;

    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      remainingSeconds -= 1;
      const tEl = containerEl.querySelector("#exam-timer-clock");
      if (tEl) {
        const m = Math.floor(remainingSeconds / 60);
        const s = remainingSeconds % 60;
        tEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (remainingSeconds <= 120) {
          tEl.style.color = "var(--c-rose)";
        }
      }
      if (remainingSeconds <= 0) {
        clearInterval(timerId);
        finishExam();
      }
    }, 1000);

    renderExamView();
  };

  const renderHome = () => {
    examActive = false;
    if (timerId) clearInterval(timerId);

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("exam.heroTitle")}</h1>
          <p>
            ${t("exam.heroText")}
          </p>
        </div>

        <div class="hero-stats-row">
          <div class="stat-metric-pill">
            <span class="stat-num" style="color: var(--c-purple);">75%</span>
            <span class="stat-label">${t("exam.passThreshold")}</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <div class="unit-card-pro">
          <div>
            <div class="unit-card-top">
              <span class="unit-ref-badge">${t("exam.quickBadge")}</span>
              <span class="unit-duration-pill">${t("exam.durationCount", { minutes: fmtNumber(15), count: fmtNumber(10) })}</span>
            </div>
            <h3 class="unit-title">${t("exam.quickTitle")}</h3>
            <p class="unit-summary">${t("exam.quickSummary")}</p>
          </div>
          <div class="unit-card-footer">
            <span class="unit-status-indicator">${t("exam.quickStatus")}</span>
            <button class="btn-primary-pro" id="start-sim-10">
              ${t("exam.startExam")} ${icons.arrowRight}
            </button>
          </div>
        </div>

        <div class="unit-card-pro">
          <div>
            <div class="unit-card-top">
              <span class="unit-ref-badge" style="color: var(--c-teal); background: var(--c-teal-subtle);">${t("exam.standardBadge")}</span>
              <span class="unit-duration-pill">${t("exam.durationCount", { minutes: fmtNumber(30), count: fmtNumber(20) })}</span>
            </div>
            <h3 class="unit-title">${t("exam.standardTitle")}</h3>
            <p class="unit-summary">${t("exam.standardSummary")}</p>
          </div>
          <div class="unit-card-footer">
            <span class="unit-status-indicator">${t("exam.standardStatus")}</span>
            <button class="btn-teal-pro" id="start-sim-20">
              ${t("exam.startExam")} ${icons.arrowRight}
            </button>
          </div>
        </div>

        <div class="unit-card-pro">
          <div>
            <div class="unit-card-top">
              <span class="unit-ref-badge" style="color: var(--c-purple); background: var(--c-purple-subtle);">${t("exam.extensiveBadge")}</span>
              <span class="unit-duration-pill">${t("exam.durationAll", { minutes: fmtNumber(45) })}</span>
            </div>
            <h3 class="unit-title">${t("exam.extensiveTitle")}</h3>
            <p class="unit-summary">${t("exam.extensiveSummary")}</p>
          </div>
          <div class="unit-card-footer">
            <span class="unit-status-indicator">${t("exam.extensiveStatus")}</span>
            <button class="btn-purple-pro" id="start-sim-all">
              ${t("exam.startExam")} ${icons.arrowRight}
            </button>
          </div>
        </div>
      </div>
    `;

    containerEl.querySelector("#start-sim-10").onclick = () => startExam(10, 15);
    containerEl.querySelector("#start-sim-20").onclick = () => startExam(20, 30);
    containerEl.querySelector("#start-sim-all").onclick = () => startExam(27, 45);
  };

  const renderExamView = () => {
    const q = examPool[currentIdx];
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    const isFlagged = flagged.has(currentIdx);
    const answeredCount = Object.keys(userAnswers).length;

    containerEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <button class="action-chip-btn" id="exit-exam-btn">${icons.x} ${t("exam.exitExam")}</button>

        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 6px 14px; border-radius: var(--radius-s); font-weight: 700; font-family: var(--font-mono); font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            ${icons.clock} <span id="exam-timer-clock">${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}</span>
          </div>

          <button class="btn-primary-pro" id="submit-exam-btn">
            ${t("exam.submit", { answered: fmtNumber(answeredCount), total: fmtNumber(examPool.length) })}
          </button>
        </div>
      </div>

      <!-- Question Strip -->
      <div style="display: flex; gap: 6px; flex-wrap: wrap; padding: 10px; background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); margin-bottom: 16px;">
        ${examPool.map((_, i) => {
          let bg = "var(--bg-surface-subtle)";
          let col = "var(--text-primary)";
          let bdr = "var(--border-subtle)";

          if (i === currentIdx) {
            bg = "var(--c-blue)";
            col = "white";
            bdr = "var(--c-blue)";
          } else if (flagged.has(i)) {
            bg = "var(--c-amber-subtle)";
            col = "#B45309";
            bdr = "var(--c-amber-border)";
          } else if (userAnswers[i] !== undefined) {
            bg = "var(--c-teal-subtle)";
            col = "var(--c-teal)";
            bdr = "var(--c-teal-border)";
          }

          return `
            <button class="action-chip-btn" data-qidx="${i}" style="width: 32px; height: 32px; padding: 0; justify-content: center; font-family: var(--font-mono); font-weight: 700; background: ${bg}; color: ${col}; border-color: ${bdr};">
              ${i + 1}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Question Card -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 28px; box-shadow: var(--shadow-xs);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <span style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--c-blue);">
            ${t("exam.questionOf", { current: fmtNumber(currentIdx + 1), total: fmtNumber(examPool.length) })} • ${q.sectionRef}
          </span>
          <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">
            <input type="checkbox" id="flag-toggle-check" ${isFlagged ? 'checked' : ''}>
            ${icons.flag} ${t("exam.markReview")}
          </label>
        </div>

        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; line-height: 1.35;">${q.title}</h3>
        ${q.context ? `<p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 20px; background: var(--bg-surface-subtle); padding: 12px 16px; border-radius: var(--radius-s);">${q.context}</p>` : ''}

        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${q.options.map((opt, i) => `
            <div class="quiz-option-row" data-choice="${i}" style="background: var(--bg-surface); border: 1px solid ${userAnswers[currentIdx] === i ? 'var(--c-blue)' : 'var(--border-medium)'}; ${userAnswers[currentIdx] === i ? 'background: var(--c-blue-subtle);' : ''} padding: 14px 18px; border-radius: var(--radius-s); cursor: pointer; display: flex; align-items: center; gap: 12px; font-size: 0.9rem;">
              <span style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.76rem; font-weight: 700; flex-shrink: 0;">
                ${['A', 'B', 'C', 'D'][i]}
              </span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
          <button class="action-chip-btn" id="prev-btn" ${currentIdx === 0 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''}>
            ${icons.arrowLeft} ${t("exam.prev")}
          </button>
          <button class="btn-primary-pro" id="next-btn">
            ${currentIdx === examPool.length - 1 ? t("exam.reviewAndSubmit") : t("exam.next") + ' ' + icons.arrowRight}
          </button>
        </div>
      </div>
    `;

    containerEl.querySelector("#exit-exam-btn").onclick = () => {
      if (confirm(t("exam.confirmExit"))) renderHome();
    };

    containerEl.querySelector("#submit-exam-btn").onclick = () => finishExam();

    containerEl.querySelectorAll("[data-qidx]").forEach(btn => {
      btn.onclick = () => {
        currentIdx = parseInt(btn.dataset.qidx, 10);
        renderExamView();
      };
    });

    containerEl.querySelector("#flag-toggle-check").onchange = (e) => {
      if (e.target.checked) flagged.add(currentIdx);
      else flagged.delete(currentIdx);
      renderExamView();
    };

    containerEl.querySelectorAll(".quiz-option-row").forEach(row => {
      row.onclick = () => {
        audio.playPop();
        const ch = parseInt(row.dataset.choice, 10);
        userAnswers[currentIdx] = ch;
        renderExamView();
      };
    });

    const prevBtn = containerEl.querySelector("#prev-btn");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (currentIdx > 0) { currentIdx -= 1; renderExamView(); }
      };
    }

    const nextBtn = containerEl.querySelector("#next-btn");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (currentIdx < examPool.length - 1) {
          currentIdx += 1;
          renderExamView();
        } else {
          finishExam();
        }
      };
    }
  };

  const finishExam = () => {
    if (timerId) clearInterval(timerId);

    let correctCount = 0;
    examPool.forEach((q, i) => {
      if (userAnswers[i] === q.answerIndex) correctCount += 1;
    });

    const percent = Math.round((correctCount / examPool.length) * 100);
    const passed = percent >= 75;

    if (passed) audio.playVictory();
    else audio.playIncorrect();

    containerEl.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="background: var(--bg-surface); border: 1px solid ${passed ? 'var(--c-teal)' : 'var(--c-rose)'}; border-radius: var(--radius-m); padding: 32px; text-align: center; margin-bottom: 24px; box-shadow: var(--shadow-xs);">
          <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: ${passed ? 'var(--c-teal)' : 'var(--c-rose)'};">
            ${passed ? t("exam.verdictPass") : t("exam.verdictFail")}
          </span>
          <div style="font-size: 3.5rem; font-weight: 900; font-family: var(--font-mono); letter-spacing: -0.04em; margin: 10px 0; color: ${passed ? 'var(--c-teal)' : 'var(--c-rose)'};">
            ${fmtNumber(percent)}%
          </div>
          <p style="color: var(--text-secondary); font-size: 0.94rem; max-width: 520px; margin: 0 auto 20px auto;">
            ${t("exam.scoreSummary", { correct: `<strong>${fmtNumber(correctCount)}</strong>`, total: `<strong>${fmtNumber(examPool.length)}</strong>` })}
          </p>
          <button class="btn-primary-pro" id="retake-exam-pro-btn">${t("exam.retake")} ${icons.arrowRight}</button>
        </div>

        <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 16px;">${t("exam.reviewTitle")}</h3>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${examPool.map((q, i) => {
            const userChoice = userAnswers[i];
            const isQCorrect = userChoice === q.answerIndex;

            return `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-left: 4px solid ${isQCorrect ? 'var(--c-teal)' : 'var(--c-rose)'}; border-radius: var(--radius-s); padding: 18px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; margin-bottom: 6px;">
                  <span style="font-family: var(--font-mono); color: var(--c-blue);">${t("exam.questionHash", { n: fmtNumber(i + 1) })} • ${q.sectionRef}</span>
                  <span style="color: ${isQCorrect ? 'var(--c-teal)' : 'var(--c-rose)'};">
                    ${isQCorrect ? t("exam.correct") : t("exam.incorrect")}
                  </span>
                </div>
                <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 8px;">${q.title}</h4>
                <div style="font-size: 0.85rem; margin-bottom: 4px;">
                  <strong>${t("exam.yourAnswer")}</strong> ${userChoice !== undefined ? q.options[userChoice] : `<em>${t("exam.unanswered")}</em>`}
                </div>
                ${!isQCorrect ? `
                  <div style="font-size: 0.85rem; color: var(--c-teal); margin-bottom: 6px;">
                    <strong>${t("exam.correctAnswer")}</strong> ${q.options[q.answerIndex]}
                  </div>
                ` : ''}
                <div style="background: var(--bg-surface-subtle); padding: 10px 14px; border-radius: var(--radius-xs); font-size: 0.82rem; line-height: 1.45; color: var(--text-secondary); margin-top: 8px;">
                  <strong>${t("exam.basis")}</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    containerEl.querySelector("#retake-exam-pro-btn").onclick = () => renderHome();
  };

  renderHome();
}

  




function renderFlashcardsPro(containerEl) {
  let activeTab = "flashcards";
  let currentCardIdx = 0;
  let isFlipped = false;
  let searchQuery = "";
  let activeCat = "all";

  // "all" is a stable internal key (never equal to a glossary category value),
  // so filtering stays language-independent; only the visible label is translated.
  const categories = ["all", ...new Set(glossary.map(g => g.category))];

  const render = () => {
    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("flash.heroTitle")}</h1>
          <p>
            ${t("flash.heroText")}
          </p>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="action-chip-btn ${activeTab === 'flashcards' ? 'active' : ''}" id="mode-flashcards" style="${activeTab === 'flashcards' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("flash.modeFlashcards", { count: fmtNumber(glossary.length) })}
          </button>
          <button class="action-chip-btn ${activeTab === 'glossary' ? 'active' : ''}" id="mode-glossary" style="${activeTab === 'glossary' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("flash.modeGlossary")}
          </button>
        </div>
      </div>

      <div id="fc-dynamic-container"></div>
    `;

    containerEl.querySelector("#mode-flashcards").onclick = () => {
      audio.playPop();
      activeTab = "flashcards";
      render();
    };

    containerEl.querySelector("#mode-glossary").onclick = () => {
      audio.playPop();
      activeTab = "glossary";
      render();
    };

    const targetArea = containerEl.querySelector("#fc-dynamic-container");
    if (activeTab === "flashcards") {
      renderFlashcardsCard(targetArea);
    } else {
      renderGlossaryTable(targetArea);
    }
  };

  const renderFlashcardsCard = (area) => {
    const card = glossary[currentCardIdx];

    area.innerHTML = `
      <div style="max-width: 620px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--text-tertiary); ">
          ${t("flash.cardOf", { current: fmtNumber(currentCardIdx + 1), total: fmtNumber(glossary.length) })}
        </span>

        <!-- 3D Card Scene -->
        <div style="perspective: 1000px; width: 100%; height: 300px; cursor: pointer;" id="fc-scene">
          <div id="fc-card-inner" style="position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); transform-style: preserve-3d; ${isFlipped ? 'transform: rotateY(180deg);' : ''}">
            <!-- Front Face -->
            <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 28px; box-shadow: var(--shadow-s);">
              <span style="padding: 3px 10px; border-radius: var(--radius-xs); background: var(--c-blue-subtle); color: var(--c-blue); font-size: 0.72rem; font-weight: 700; margin-bottom: 16px;">
                ${card.category}
              </span>
              <h3 style="font-size: 1.6rem; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin-bottom: 14px;">
                ${card.term}
              </h3>
              <span style="font-size: 0.8rem; color: var(--text-muted);">
                ${t("flash.clickToFlip")}
              </span>
            </div>

            <!-- Back Face -->
            <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background: var(--bg-surface); border: 2px solid var(--c-blue); border-radius: var(--radius-m); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; box-shadow: var(--shadow-s); transform: rotateY(180deg);">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--c-blue); margin-bottom: 10px;">
                ${t("flash.officialDef")}
              </span>
              <p style="font-size: 1.05rem; line-height: 1.55; color: var(--text-primary);">
                ${card.def}
              </p>
              <span style="font-size: 0.76rem; color: var(--text-muted); margin-top: 16px;">
                ${t("flash.clickToBack")}
              </span>
            </div>
          </div>
        </div>

        <!-- Rating Buttons for Spaced Repetition -->
        <div style="display: flex; gap: 10px; margin-top: 8px;">
          <button class="btn-flat-soft-rose" id="fc-btn-hard">
            ${t("flash.hard")}
          </button>
          <button class="btn-flat-soft-amber" id="fc-btn-med">
            ${t("flash.medium")}
          </button>
          <button class="btn-flat-soft-teal" id="fc-btn-easy">
            ${t("flash.mastered")}
          </button>
        </div>
      </div>
    `;

    const scene = area.querySelector("#fc-scene");
    const inner = area.querySelector("#fc-card-inner");

    scene.onclick = () => {
      audio.playPop();
      isFlipped = !isFlipped;
      inner.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
    };

    const nextCard = () => {
      isFlipped = false;
      currentCardIdx = (currentCardIdx + 1) % glossary.length;
      renderFlashcardsCard(area);
    };

    area.querySelector("#fc-btn-hard").onclick = () => { audio.playIncorrect(); nextCard(); };
    area.querySelector("#fc-btn-med").onclick = () => { audio.playPop(); nextCard(); };
    area.querySelector("#fc-btn-easy").onclick = () => { audio.playCorrect(); nextCard(); };
  };

  const renderGlossaryTable = (area) => {
    const filtered = glossary.filter(g =>
      (activeCat === "all" || g.category === activeCat) &&
      (searchQuery === "" ||
       g.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
       g.def.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    area.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="position: relative; width: 340px;">
            <input type="text" id="gloss-search-input" placeholder="${t("flash.searchPlaceholder")}" value="${searchQuery}" style="width: 100%; padding: 8px 12px 8px 34px; border-radius: var(--radius-s); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-size: 0.82rem; outline: none;">
            <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-muted); display: flex;">${icons.search}</span>
          </div>

          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${categories.map(c => `
              <button class="action-chip-btn ${activeCat === c ? 'active' : ''}" data-cat="${c}" style="${activeCat === c ? 'background: var(--c-blue); color: white;' : ''}">
                ${c === 'all' ? t("flash.allCategories") : c}
              </button>
            `).join('')}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
          ${filtered.map(item => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-s); padding: 18px; box-shadow: var(--shadow-xs);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${item.term}</h4>
                <span style="padding: 2px 8px; border-radius: var(--radius-xs); background: var(--bg-surface-subtle); color: var(--c-blue); font-size: 0.68rem; font-weight: 700; font-family: var(--font-mono);">
                  ${item.category}
                </span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">${item.def}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const inp = area.querySelector("#gloss-search-input");
    inp.oninput = (e) => {
      searchQuery = e.target.value;
      renderGlossaryTable(area);
      const newInp = area.querySelector("#gloss-search-input");
      newInp.focus();
      newInp.setSelectionRange(searchQuery.length, searchQuery.length);
    };

    area.querySelectorAll("[data-cat]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeCat = btn.dataset.cat;
        renderGlossaryTable(area);
      };
    });
  };

  render();
}

  



function renderAppendicesPro(containerEl) {
  let activeKey = "x3_ai";

  const render = () => {
    const cur = appendices[activeKey];

    containerEl.innerHTML = `
      <div class="pro-hero-header">
        <div class="hero-title-group">
          <h1>${t("appendices.heroTitle")}</h1>
          <p>
            ${t("appendices.heroDesc")}
          </p>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="action-chip-btn ${activeKey === 'x3_ai' ? 'active' : ''}" data-key="x3_ai" style="${activeKey === 'x3_ai' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX3")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x2_pmo' ? 'active' : ''}" data-key="x2_pmo" style="${activeKey === 'x2_pmo' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX2")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x4_procurement' ? 'active' : ''}" data-key="x4_procurement" style="${activeKey === 'x4_procurement' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX4")}
          </button>
          <button class="action-chip-btn ${activeKey === 'x5_evolution' ? 'active' : ''}" data-key="x5_evolution" style="${activeKey === 'x5_evolution' ? 'background: var(--c-blue); color: white;' : ''}">
            ${t("appendices.tabX5")}
          </button>
        </div>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-m); padding: 32px; box-shadow: var(--shadow-xs);">
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--c-blue); ">
            ${t("appendices.officialStudy")}
          </span>
          <h2 style="font-size: 1.65rem; font-weight: 800; letter-spacing: -0.02em; margin: 4px 0 10px 0;">
            ${cur.title}
          </h2>
          <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary); max-width: 900px;">
            ${cur.summary}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${cur.topics.map(tp => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 20px; border-left: 4px solid var(--c-blue);">
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">${tp.subtitle}</h4>
              <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${tp.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    containerEl.querySelectorAll("[data-key]").forEach(btn => {
      btn.onclick = () => {
        audio.playPop();
        activeKey = btn.dataset.key;
        render();
      };
    });
  };

  render();
}

  



class OnboardingTour {
  constructor(modalBackdropEl, onNavigateTab) {
    this.modalBackdrop = modalBackdropEl;
    this.onNavigateTab = onNavigateTab;
    this.currentStep = 0;
    this.dockEl = null;

    this.steps = [
      {
        title: t("tour.step1Title"),
        badge: t("tour.step1Badge"),
        tabId: "curriculum",
        lead: t("tour.step1Lead"),
        details: [
          t("tour.step1Detail1"),
          t("tour.step1Detail2"),
          t("tour.step1Detail3"),
          t("tour.step1Detail4")
        ]
      },
      {
        title: t("tour.step2Title"),
        badge: t("tour.step2Badge"),
        tabId: "matrix",
        lead: t("tour.step2Lead"),
        details: [
          t("tour.step2Detail1"),
          t("tour.step2Detail2"),
          t("tour.step2Detail3")
        ]
      },
      {
        title: t("tour.step3Title"),
        badge: t("tour.step3Badge"),
        tabId: "presentations",
        lead: t("tour.step3Lead"),
        details: [
          t("tour.step3Detail1"),
          t("tour.step3Detail2"),
          t("tour.step3Detail3")
        ]
      },
      {
        title: t("tour.step4Title"),
        badge: t("tour.step4Badge"),
        tabId: "evm",
        lead: t("tour.step4Lead"),
        details: [
          t("tour.step4Detail1"),
          t("tour.step4Detail2"),
          t("tour.step4Detail3")
        ]
      },
      {
        title: t("tour.step5Title"),
        badge: t("tour.step5Badge"),
        tabId: "simulator",
        lead: t("tour.step5Lead"),
        details: [
          t("tour.step5Detail1"),
          t("tour.step5Detail2"),
          t("tour.step5Detail3")
        ]
      },
      {
        title: t("tour.step6Title"),
        badge: t("tour.step6Badge"),
        tabId: "flashcards",
        lead: t("tour.step6Lead"),
        details: [
          t("tour.step6Detail1"),
          t("tour.step6Detail2")
        ]
      },
      {
        title: t("tour.step7Title"),
        badge: t("tour.step7Badge"),
        tabId: "appendices",
        lead: t("tour.step7Lead"),
        details: [
          t("tour.step7Detail1"),
          t("tour.step7Detail2"),
          t("tour.step7Detail3"),
          t("tour.step7Detail4")
        ]
      }
    ];
  }

  start() {
    this.currentStep = 0;
    this.renderStep();
  }

  clearSpotlights() {
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.classList.remove("tab-spotlight-active");
    });
  }

  renderStep() {
    const s = this.steps[this.currentStep];
    const isFirst = this.currentStep === 0;
    const isLast = this.currentStep === this.steps.length - 1;

    // Clear previous highlights
    this.clearSpotlights();

    // 1. Switch tab automatically in the background
    if (this.onNavigateTab && s.tabId) {
      this.onNavigateTab(s.tabId);
    }

    // 2. Highlight target tab in the header
    const targetTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${s.tabId}"]`);
    if (targetTabBtn) {
      targetTabBtn.classList.add("tab-spotlight-active");
      targetTabBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // 3. Create or update floating companion dock
    let dock = document.getElementById("tour-floating-dock");
    if (!dock) {
      dock = document.createElement("div");
      dock.id = "tour-floating-dock";
      dock.className = "tour-companion-dock";
      document.body.appendChild(dock);
    }

    dock.innerHTML = `
      <div class="tour-companion-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--c-blue); background: var(--c-blue-subtle); padding: 2px 7px; border-radius: var(--radius-xs);">
            ${t("tour.stepCounter", { current: this.currentStep + 1, total: this.steps.length })}
          </span>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-secondary); ">
            ${s.badge}
          </span>
        </div>

        <button class="icon-square-btn" id="tour-dock-close" title="${t("tour.closeBtnTitle")}" style="width: 26px; height: 26px;">
          ${icons.x}
        </button>
      </div>

      <div class="tour-companion-body">
        <h3 style="font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); line-height: 1.3;">
          ${s.title}
        </h3>

        <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
          ${s.lead}
        </p>

        <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-s); padding: 12px 14px;">
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-tertiary); display: block; margin-bottom: 8px;">
            ${t("tour.detailsHeading")}
          </span>
          <ul style="display: flex; flex-direction: column; gap: 7px; padding-left: 14px; font-size: 0.82rem; color: var(--text-primary); line-height: 1.45;">
            ${s.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="tour-companion-footer">
        <button class="action-chip-btn" id="tour-dock-skip" style="font-size: 0.76rem; padding: 5px 10px;">
          ${t("tour.finishGuideBtn")}
        </button>

        <div style="display: flex; gap: 6px;">
          <button class="action-chip-btn" id="tour-dock-prev" ${isFirst ? 'disabled style="opacity: 0.4; pointer-events: none;"' : ''} style="font-size: 0.78rem; padding: 5px 10px;">
            ${icons.arrowLeft} ${t("tour.prevBtn")}
          </button>
          <button class="btn-primary-pro" id="tour-dock-next" style="font-size: 0.78rem; padding: 5px 12px;">
            ${isLast ? t("tour.startStudyBtn") : t("tour.nextBtn") + ' ' + icons.arrowRight}
          </button>
        </div>
      </div>
    `;

    // Event listeners
    const closeDock = () => {
      this.clearSpotlights();
      const el = document.getElementById("tour-floating-dock");
      if (el) el.remove();
    };

    dock.querySelector("#tour-dock-close").onclick = () => {
      audio.playPop();
      closeDock();
    };

    dock.querySelector("#tour-dock-skip").onclick = () => {
      audio.playPop();
      closeDock();
    };

    const prevBtn = dock.querySelector("#tour-dock-prev");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.currentStep > 0) {
          audio.playPop();
          this.currentStep -= 1;
          this.renderStep();
        }
      };
    }

    const nextBtn = dock.querySelector("#tour-dock-next");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.currentStep < this.steps.length - 1) {
          audio.playPop();
          this.currentStep += 1;
          this.renderStep();
        } else {
          audio.playVictory();
          closeDock();
        }
      };
    }
  }
}


  











function showSeniorToast(msg) {
  let toast = document.querySelector(".toast-pill-pro");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-pill-pro";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="display:flex;">${icons.check}</span> <span>${msg}</span>`;
  toast.classList.add("active");
  setTimeout(() => toast.classList.remove("active"), 2400);
}

document.addEventListener("DOMContentLoaded", () => {
  const views = {
    curriculum: document.getElementById("view-curriculum"),
    matrix: document.getElementById("view-matrix"),
    presentations: document.getElementById("view-presentations"),
    evm: document.getElementById("view-evm"),
    simulator: document.getElementById("view-simulator"),
    flashcards: document.getElementById("view-flashcards"),
    appendices: document.getElementById("view-appendices")
  };

  const navTabBtns = document.querySelectorAll(".nav-tab-btn[data-tab]");
  const modalBackdrop = document.getElementById("senior-modal-backdrop");
  const themeBtn = document.getElementById("theme-toggle-senior-btn");
  const soundBtn = document.getElementById("sound-toggle-senior-btn");
  const guideBtn = document.getElementById("platform-guide-btn");
  const headerProgBadge = document.getElementById("header-progress-text");

  // Localize static shell text (data-i18n attributes in index.html)
  document.title = t("shell.docTitle");
  document.documentElement.lang = LOCALE;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  let currentTab = "curriculum";

  // Tab switcher
  const switchTab = (tab) => {
    currentTab = tab;

    navTabBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.toggle("active", key === tab);
      }
    });

    if (tab === "curriculum") {
      learningHub.render();
    } else if (tab === "matrix") {
      renderProcessMatrixPro(views.matrix, modalBackdrop);
    } else if (tab === "presentations") {
      renderPresentationsPro(views.presentations, modalBackdrop);
    } else if (tab === "evm") {
      renderEVMLabPro(views.evm);
    } else if (tab === "simulator") {
      renderExamSimulatorPro(views.simulator);
    } else if (tab === "flashcards") {
      renderFlashcardsPro(views.flashcards);
    } else if (tab === "appendices") {
      renderAppendicesPro(views.appendices);
    }
  };

  const updateProgressHeader = (done, total) => {
    if (headerProgBadge) {
      const pct = Math.round((done / total) * 100);
      headerProgBadge.textContent = t("app.progressMastered", { pct });
    }
  };

  const learningHub = new LearningHub(views.curriculum, modalBackdrop, updateProgressHeader);

  // Initialize Onboarding Tour
  const tour = new OnboardingTour(modalBackdrop, (targetTab) => {
    switchTab(targetTab);
  });

  if (guideBtn) {
    guideBtn.onclick = () => {
      audio.playPop();
      tour.start();
    };
  }

  // Auto trigger tour on first visit
  const tourSeen = localStorage.getItem("pmbok8_tour_seen");
  if (!tourSeen) {
    localStorage.setItem("pmbok8_tour_seen", "true");
    setTimeout(() => {
      tour.start();
    }, 400);
  }

  navTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audio.playPop();
      switchTab(btn.dataset.tab);
    });
  });

  // Theme Toggle
  if (themeBtn) {
    let savedTheme = localStorage.getItem("pmbok8_pro_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeBtn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;

    themeBtn.addEventListener("click", () => {
      audio.playPop();
      savedTheme = savedTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
      localStorage.setItem("pmbok8_pro_theme", savedTheme);
      themeBtn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;
      showSeniorToast(savedTheme === 'dark' ? t("app.darkModeOn") : t("app.lightModeOn"));
    });
  }

  // Sound Toggle
  if (soundBtn) {
    soundBtn.innerHTML = audio.enabled ? icons.volume : icons.volumeX;
    soundBtn.addEventListener("click", () => {
      const en = audio.toggle();
      soundBtn.innerHTML = en ? icons.volume : icons.volumeX;
      showSeniorToast(en ? t("app.audioOn") : t("app.audioOff"));
    });
  }

  // Initial tab
  switchTab("curriculum");
});

})();
