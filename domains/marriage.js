/* =====================================================
   DECIFIX — Marriage Domain
   Nature: irreversible, long-term, life-structuring
===================================================== */

window.DOMAIN_DATA = {
  id: "marriage",
  title: "Marriage Decision Filter",

  rules: [

    /* ---------- PAST ---------- */

    {
      time: "past",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum pehle kisi serious relationship ya engagement me emotionally damage ho chuke ho?",
      positiveCase: "Purane wounds heal ho chuke ho to marriage decision zyada stable hota hai.",
      negativeCase: "Unhealed emotional damage shaadi ke baad trust issues bana sakta hai."
    },

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tum shaadi ke matlab aur zimmedariyon ko pehle se samajhne ki koshish kar chuke ho?",
      positiveCase: "Understanding se unrealistic expectations kam hoti hain.",
      negativeCase: "Bina samajh ke shaadi future conflicts la sakti hai."
    },

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumne apni life priorities (career, health, family) pehle se clear kar rakhi hain?",
      positiveCase: "Clear priorities marriage ke baad balance banane me madad karti hain.",
      negativeCase: "Unclear priorities shaadi ke baad confusion laati hain."
    },

    /* ---------- PRESENT ---------- */

    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tum apne partner ke saath emotionally, mentally aur values level par safe feel karte ho?",
      positiveCase: "Safety aur shared values marriage ka foundation hoti hain.",
      negativeCase: "Value mismatch shaadi ke baad daily friction create karta hai."
    },

    {
      time: "present",
      weight: "critical",
      safeChoice: "no",
      question: "Kya ye shaadi sirf family pressure, age pressure ya fear ki wajah se ho rahi hai?",
      positiveCase: "Pressure-free decision long-term peace deta hai.",
      negativeCase: "Pressure-based shaadi regret aur resentment la sakti hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tum dono conflict hone par baat karke solution nikal paate ho?",
      positiveCase: "Conflict handling marriage ko survive karata hai.",
      negativeCase: "Unresolved conflicts shaadi ko emotionally drain kar dete hain."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tum financial expectations aur lifestyle par open discussion kar chuke ho?",
      positiveCase: "Financial clarity future stress kam karti hai.",
      negativeCase: "Money issues shaadi ke baad major conflict ban sakte hain."
    },

    /* ---------- FUTURE ---------- */

    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tumhe lagta hai ki is shaadi ke baad future me regret ho sakta hai?",
      positiveCase: "Regret ka honest assessment better timing ka signal hota hai.",
      negativeCase: "Ignored regret shaadi ke baad guilt aur emotional distance laata hai."
    },

    {
      time: "future",
      weight: "critical",
      safeChoice: "yes",
      question: "Worst case scenario (conflict, compromise, change) me kya tum is marriage ko sambhaal paoge?",
      positiveCase: "Prepared mindset shaadi ko long-term sustain karta hai.",
      negativeCase: "Unprepared expectations future breakdown create kar sakti hain."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Jo bhi outcome ho, kya tum is shaadi ki zimmedari khud lene ke liye ready ho?",
      positiveCase: "Responsibility acceptance regret-free life jeene me madad karta hai.",
      negativeCase: "Responsibility se bhaagna blame aur dissatisfaction laata hai."
    }

  ]
};
