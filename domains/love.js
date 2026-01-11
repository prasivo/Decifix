/* =====================================================
   DECIFIX — LOVE DOMAIN
   Nature: emotion-heavy, commitment-unclear, illusion-prone
===================================================== */

window.DOMAIN_DATA = {
  id: "love",
  title: "Love Decision",

  rules: [

    /* ---------- PAST ---------- */

    {
      time: "past",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya tum pehle bhi aise love situation me phase ho jahan clarity baad me nahi mili?",
      positiveCase: "Past patterns ko samajhna present me better decision lene me madad karta hai.",
      negativeCase: "Agar past ignore hua, to wahi emotional cycle dobara repeat ho sakti hai."
    },

    {
      time: "past",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum is waqt kisi purane heartbreak ka load abhi bhi carry kar rahe ho?",
      positiveCase: "Healed state me love decision zyada stable hota hai.",
      negativeCase: "Unhealed pain naye connection ko bhi damage kar sakta hai."
    },

    /* ---------- PRESENT ---------- */

    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tum is person ke saath apna real self safely express kar paate ho?",
      positiveCase: "Emotional safety love ko real banati hai.",
      negativeCase: "Acting ya pretending long-term me exhaustion laata hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "no",
      question: "Kya tum sirf attention, validation ya loneliness ki wajah se attract ho?",
      positiveCase: "Attraction ke reasons clear hon to decision grounded rehta hai.",
      negativeCase: "Temporary validation future me attachment pain bana sakti hai."
    },

    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya actions aur words dono consistently match kar rahe hain?",
      positiveCase: "Consistency trust build karti hai.",
      negativeCase: "Mixed signals confusion aur overthinking badhate hain."
    },

    {
      time: "present",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tum un red flags ko ignore kar rahe ho jo tum clearly notice kar rahe ho?",
      positiveCase: "Red flags ko acknowledge karna self-respect dikhata hai.",
      negativeCase: "Ignored red flags future me emotional damage create karte hain."
    },

    /* ---------- FUTURE ---------- */

    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya tumhe lagta hai ki is direction me jaakar regret ho sakta hai?",
      positiveCase: "Regret ka honest signal timing ko better banata hai.",
      negativeCase: "Ignored regret future me self-blame me badal sakta hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Agar ye love expected direction me na jaaye, kya tum emotionally handle kar paoge?",
      positiveCase: "Prepared mindset emotional collapse se bachata hai.",
      negativeCase: "Unprepared attachment breakdown ko painful bana sakti hai."
    },

    {
      time: "future",
      weight: "normal",
      safeChoice: "yes",
      question: "Jo bhi outcome ho, kya tum apni emotional responsibility khud lene ko ready ho?",
      positiveCase: "Responsibility acceptance regret-free state deta hai.",
      negativeCase: "Responsibility se bhaagna emotional dependency badhata hai."
    }

  ]
};
