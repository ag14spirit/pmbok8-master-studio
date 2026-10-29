// English localization of js/data/tools.js (generated from the Spanish source; keep in sync)
export const toolsAndTechniques = {
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
