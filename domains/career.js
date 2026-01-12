/* =====================================================
   DECIFIX — CAREER DOMAIN
   Nature: high impact, long-term, semi-reversible
===================================================== */

window.DOMAIN_DATA = {
  id: "career",
  title: "Career Decision",

  rules: [

    /* ---------- PAST ---------- */

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumne pehle bhi career decisions sirf pressure ya trend ke chalte liye hain?",
      positiveCase: "Past patterns ko samajhna future me wahi galti repeat hone se bachata hai.",
      negativeCase: "Agar pressure-driven pattern ignore hua, to dissatisfaction dobara aa sakti hai."
    },

    {
      time: "past",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum is decision ko kisi purani failure ya regret ko prove karne ke liye le rahe ho?",
      positiveCase: "Neutral mindset me liya gaya decision zyada sustainable hota hai.",
      negativeCase: "Proving mindset career ko emotional battlefield bana sakta hai."
    },

    /* ---------- PRESENT ---------- */

    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tumhe is career path ke day-to-day reality ka clear idea hai?",
      positiveCase: "Reality clarity unrealistic expectations ko tod deti hai.",
      negativeCase: "Assumption-based decisions aage chal kar burnout laa sakte hain."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "no",
      question: "Kya tum sirf package, title, ya social status ke chalte attract ho?",
      positiveCase: "Motives clear hon to career decision zyada grounded hota hai.",
      negativeCase: "Status-driven choice long-term emptiness laa sakti hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumhare paas is decision ke short-term sacrifices clear hain?",
      positiveCase: "Sacrifice awareness regret ko kam karta hai.",
      negativeCase: "Hidden sacrifices baad me resentment create karte hain."
    },

    /* ---------- FUTURE ---------- */

    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tumhe lagta hai ki is path par jaakar future me regret ho sakta hai?",
      positiveCase: "Regret ka honest signal timing ko better banata hai.",
      negativeCase: "Ignored regret career dissatisfaction me badal sakta hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Agar ye path expected growth na de, kya tum mentally handle kar paoge?",
      positiveCase: "Prepared mindset career shocks ko absorb karta hai.",
      negativeCase: "Unprepared expectations frustration create kar sakti hain."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Jo bhi outcome ho, kya tum is career decision ki zimmedari khud lene ke liye ready ho?",
      positiveCase: "Ownership acceptance regret-free mindset deta hai.",
      negativeCase: "Blame-based thinking career confidence tod sakti hai."
    }

  ]
};
