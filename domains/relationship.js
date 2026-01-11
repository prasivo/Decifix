/* =====================================================
   DECIFIX — Relationship Domain
   Focus: clarity, safety, regret, reality
===================================================== */

window.DOMAIN_DATA = {
  id: "relationship",
  title: "Relationship Decision Filter",

  rules: [

    /* ---------- PAST ---------- */

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tum pehle bhi isi tarah ki relationship situation me phase ho?",
      positiveCase: "Past patterns samajhne se same galti repeat hone ka risk kam hota hai.",
      negativeCase: "Agar past ignore hua, to wahi cycle dobara shuru ho sakti hai."
    },

    {
      time: "past",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum is relationship me pehle emotionally hurt ho chuke ho?",
      positiveCase: "Purana damage heal hua ho to decision zyada stable hota hai.",
      negativeCase: "Unhealed hurt future me trust aur mental peace tod sakta hai."
    },

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumne is relationship ko lekar pehle bhi clarity dhoondhne ki koshish ki hai?",
      positiveCase: "Clarity ki attempt maturity aur responsibility dikhati hai.",
      negativeCase: "Bina clarity ke relationship time ke saath confuse ho jaata hai."
    },

    /* ---------- PRESENT ---------- */

    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya is waqt tum emotionally safe aur respected feel karte ho?",
      positiveCase: "Emotional safety long-term relationship ka foundation hoti hai.",
      negativeCase: "Insecurity aur disrespect anxiety aur self-doubt badha sakte hain."
    },

    {
      time: "present",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum sirf darr, pressure ya loneliness ki wajah se relationship me ho?",
      positiveCase: "Fear-free decision tumhe apni value samajhne me madad karta hai.",
      negativeCase: "Darr ke base par liya gaya decision regret la sakta hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tum apni needs aur boundaries openly express kar paate ho?",
      positiveCase: "Healthy communication trust aur balance banata hai.",
      negativeCase: "Unspoken needs time ke saath frustration ban jaati hain."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tumhe is relationship me support aur understanding mil rahi hai?",
      positiveCase: "Mutual support relationship ko stable banata hai.",
      negativeCase: "One-sided effort emotional exhaustion la sakta hai."
    },

    /* ---------- FUTURE ---------- */

    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tumhe lagta hai ki is decision ke baad future me regret ho sakta hai?",
      positiveCase: "Regret ka awareness better decision lene me madad karta hai.",
      negativeCase: "Ignored regret future me guilt aur self-blame ban sakta hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Worst case scenario hua to kya tum mentally handle kar paoge?",
      positiveCase: "Mental preparedness decision ko strong banata hai.",
      negativeCase: "Unprepared mind sudden breakdown face kar sakta hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Jo bhi result ho, kya tum is decision ki zimmedari khud lene ko ready ho?",
      positiveCase: "Responsibility acceptance regret-free mindset deta hai.",
      negativeCase: "Responsibility na lena future me blame aur confusion laata hai."
    }

  ]
};
