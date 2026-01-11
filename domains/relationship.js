// domains/relationship.js
// DECIFIX DOMAIN — RELATIONSHIP

window.DOMAIN_DATA = {
  id: "relationship",
  title: "Relationship Decision",

  rules: [
    // ===== PAST (1–3) =====
    {
      time: "past",
      weight: "normal",
      safeChoice: "no",
      question: "Kya is relationship ya past relationships me trust break hua hai?",
      positive: "Trust break ka history future me repeat hone ka risk dikhata hai.",
      negative: "Trust ka clear history stability ko support karta hai."
    },
    {
      time: "past",
      weight: "normal",
      safeChoice: "no",
      question: "Kya pehle communication issues ya misunderstandings regularly hui hain?",
      positive: "Repeated communication gaps future conflicts ko badha sakte hain.",
      negative: "Clear communication history conflicts ko kam karti hai."
    },
    {
      time: "past",
      weight: "normal",
      safeChoice: "no",
      question: "Kya past me emotional hurt hua hai jo abhi tak heal nahi hua?",
      positive: "Unhealed hurt daily interactions ko toxic bana sakta hai.",
      negative: "Healed past emotional stability deta hai."
    },

    // ===== PRESENT (4–7) =====
    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya aaj ke time me tum is relationship me emotionally safe feel karte ho?",
      positive: "Emotional safety long-term stability ka base hoti hai.",
      negative: "Emotional insecurity anxiety aur overthinking badha sakti hai."
    },
    {
      time: "present",
      weight: "critical",
      safeChoice: "no",
      question: "Kya ye relationship pressure, loneliness ya fear ke wajah se chal rahi hai?",
      positive: "Fear-based relationship regret ka risk badhati hai.",
      negative: "Choice-based relationship zyada healthy hoti hai."
    },
    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tum apni needs aur boundaries clearly rakh pa rahe ho?",
      positive: "Clear boundaries self-respect aur balance dikhati hain.",
      negative: "Boundary issues resentment aur imbalance la sakte hain."
    },
    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya dono taraf effort relatively balanced hai?",
      positive: "Balanced effort relationship ko sustainable banata hai.",
      negative: "One-sided effort burnout la sakta hai."
    },

    // ===== FUTURE (8–10) =====
    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya is relationship ko lekar future me regret ka strong signal lagta hai?",
      positive: "Strong regret signal decision ko emotionally risky banata hai.",
      negative: "Regret ka clear signal na hona decision ko safer banata hai."
    },
    {
      time: "future",
      weight: "critical",
      safeChoice: "yes",
      question: "Worst case (breakup, distance, conflict) hua to kya tum handle kar paoge?",
      positive: "Worst case handle kar pana emotional maturity dikhata hai.",
      negative: "Worst case unacceptable hona decision ko unsafe banata hai."
    },
    {
      time: "future",
      weight: "critical",
      safeChoice: "yes",
      question: "Agar relationship expected way me na chale, to kya tum 'jo hoga dekha jayega' accept kar paoge?",
      positive: "Acceptance mindset regret aur over-attachment ko kam karta hai.",
      negative: "Acceptance ki kami future me mental struggle la sakti hai."
    }
  ]
};
