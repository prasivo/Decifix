/* =====================================================
   DECIFIX — MONEY DOMAIN
   Nature: high anxiety, medium reversibility, regret-prone
   Note: NOT financial advice. Decision filtering only.
===================================================== */

window.DOMAIN_DATA = {
  id: "money",
  title: "Money Decision",

  rules: [

    /* ---------- PAST ---------- */

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumne pehle bhi paise se jude decisions jaldi me liye hain jinka impact baad me heavy laga?",
      positiveCase: "Past money patterns samajhne se wahi galti repeat hone se bacha ja sakta hai.",
      negativeCase: "Jaldi me liye gaye financial decisions aksar long-term stress create karte hain."
    },

    {
      time: "past",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum is decision ko kisi purane loss, debt, ya galti ko recover karne ke pressure me le rahe ho?",
      positiveCase: "Neutral mindset me liya gaya money decision zyada stable hota hai.",
      negativeCase: "Recovery pressure me liye gaye decisions aksar aur nuksaan laate hain."
    },

    /* ---------- PRESENT ---------- */

    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tum is decision ke risks ko clearly samajh pa rahe ho, sirf profit ko nahi?",
      positiveCase: "Risk clarity paise ke decision ko realistic banati hai.",
      negativeCase: "Sirf profit dekhna blind financial moves ka reason banta hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "no",
      question: "Kya tum kisi aur ko dekh kar, comparison ya FOMO ki wajah se ye decision le rahe ho?",
      positiveCase: "Independent thinking financial confidence build karti hai.",
      negativeCase: "Comparison-based money decisions regret laa sakte hain."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya worst-case scenario me bhi tumhara basic life stability safe rahega?",
      positiveCase: "Downside safety money stress ko control me rakhti hai.",
      negativeCase: "Basic stability risk par ho to decision dangerous ho sakta hai."
    },

    /* ---------- FUTURE ---------- */

    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tumhe lagta hai ki is decision ke baad future me regret ho sakta hai?",
      positiveCase: "Regret ka honest signal timing ko better banata hai.",
      negativeCase: "Ignored regret financial guilt aur anxiety me badal sakta hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Agar expected returns na aaye, kya tum mentally aur practically handle kar paoge?",
      positiveCase: "Prepared mindset financial shocks ko absorb karta hai.",
      negativeCase: "Unprepared expectations paise ke pressure ko badha sakti hain."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Jo bhi outcome ho, kya tum is money decision ki zimmedari khud lene ke liye ready ho?",
      positiveCase: "Ownership acceptance regret-free thinking deta hai.",
      negativeCase: "Blame-based thinking financial confidence tod sakti hai."
    }

  ]
};
