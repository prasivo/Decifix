/* =====================================================
   DECIFIX — CAREER DOMAIN (EV-BASED)
   Focus: Job / Switch / Quit / Growth decisions
===================================================== */

window.DOMAIN_DATA = {
  title: "Career Decision",

  rules: [

    {
      id: "financial_runway",
      question: "Agar tum job change / quit karte ho, kya 6–12 mahine ka financial backup hai?",
      weight: 0.20,
      yes: { probability: 0.75, impact: 8 },
      no:  { probability: 0.60, impact: -9 }
    },

    {
      id: "skill_market_fit",
      question: "Kya tumhari skills market me demand me hain (next 12–24 months)?",
      weight: 0.18,
      yes: { probability: 0.70, impact: 9 },
      no:  { probability: 0.55, impact: -8 }
    },

    {
      id: "current_growth",
      question: "Kya current job me realistically growth / learning dikh rahi hai?",
      weight: 0.15,
      yes: { probability: 0.65, impact: 6 },
      no:  { probability: 0.60, impact: -6 }
    },

    {
      id: "mental_health",
      question: "Kya current role tumhari mental health ko actively damage kar raha hai?",
      weight: 0.17,
      yes: { probability: 0.70, impact: -8 },
      no:  { probability: 0.65, impact: 5 }
    },

    {
      id: "salary_delta",
      question: "Kya naya option 25%+ long-term earning potential deta hai?",
      weight: 0.14,
      yes: { probability: 0.60, impact: 8 },
      no:  { probability: 0.55, impact: -5 }
    },

    {
      id: "career_direction",
      question: "Kya ye decision tumhe ek clear long-term career direction deta hai?",
      weight: 0.16,
      yes: { probability: 0.70, impact: 9 },
      no:  { probability: 0.50, impact: -7 }
    }

  ]
};
