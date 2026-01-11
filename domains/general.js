/* =====================================================
   DECIFIX — GENERAL DOMAIN
   Purpose: unclear, mixed, everyday life decisions
===================================================== */

window.DOMAIN_DATA = {
  id: "general",
  title: "General Decision",

  rules: [

    /* ---------- PAST ---------- */

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumne pehle bhi aise hi decision jaldi me liye hain jinka result baad me unclear laga?",
      positiveCase: "Past patterns ko dekhna present decision ko zyada grounded banata hai.",
      negativeCase: "Jaldi me liya gaya faisla aksar baad me confusion laata hai."
    },

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumne is situation ko pehle kisi angle se sochne ki koshish ki hai?",
      positiveCase: "Different angles se sochna decision ko mature banata hai.",
      negativeCase: "Single angle se sochna blind spots create kar sakta hai."
    },

    /* ---------- PRESENT ---------- */

    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tum is decision ko fear, pressure ya emotional overload ke bina dekh pa rahe ho?",
      positiveCase: "Calm mind decision ko realistic rakhta hai.",
      negativeCase: "Pressure ke under liya gaya decision aksar regret laata hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumhare paas is decision ke pros aur cons dono clearly dikh rahe hain?",
      positiveCase: "Clarity se decision stable hota hai.",
      negativeCase: "Half information future issues create kar sakti hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "no",
      question: "Kya tum sirf kisi aur ke kehne par ya comparison me ye decision le rahe ho?",
      positiveCase: "Khud ka decision ownership deta hai.",
      negativeCase: "Comparison based decision self-doubt badhata hai."
    },

    /* ---------- FUTURE ---------- */

    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tumhe lagta hai ki is decision ke baad future me regret ho sakta hai?",
      positiveCase: "Regret ka honest signal better timing ka indicator hota hai.",
      negativeCase: "Ignored regret future me guilt aur confusion laata hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Worst case scenario hua to kya tum usse mentally handle kar paoge?",
      positiveCase: "Prepared mindset decision ko strong banata hai.",
      negativeCase: "Unprepared mind sudden stress face kar sakta hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Jo bhi outcome ho, kya tum is decision ki zimmedari khud lene ke liye ready ho?",
      positiveCase: "Responsibility acceptance regret-free thinking deta hai.",
      negativeCase: "Responsibility se bhaagna blame cycle create karta hai."
    }

  ]
};
