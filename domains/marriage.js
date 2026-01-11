// domains/marriage.js
// DECIFIX DOMAIN — MARRIAGE (V2)

window.DOMAIN_DATA = {
  id: "marriage",
  title: "Marriage Decision",

  rules: [
    // ===== PAST (1–3) =====
    {
      time: "past",
      weight: "normal",
      safeChoice: "no",
      question: "Kya past me is relationship ya similar rishton me serious problems hui hain?",
      positive: "Past issues ko clearly samajh kar aage badhne ka matlab hai ki tum repeat risk accept kar rahe ho.",
      negative: "Agar past me serious problems nahi rahi, to repeat risk kam hota hai."
    },
    {
      time: "past",
      weight: "normal",
      safeChoice: "no",
      question: "Kya pehle commitment, trust ya responsibility ko lekar issues rahe hain?",
      positive: "Commitment issues ko ignore karna shaadi ke baad heavy pad sakta hai.",
      negative: "Stable commitment history future stability ko support karti hai."
    },
    {
      time: "past",
      weight: "normal",
      safeChoice: "no",
      question: "Kya past me emotional ya mental damage hua hai jo abhi tak heal nahi hua?",
      positive: "Unhealed damage shaadi ke baad daily conflict ban sakta hai.",
      negative: "Resolved ya minimal damage future pressure kam karta hai."
    },

    // ===== PRESENT (4–7) =====
    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya aaj ki reality tumhari expectations se match karti hai?",
      positive: "Reality–expectation alignment decision ko grounded banata hai.",
      negative: "Expectation–reality gap future disappointment la sakta hai."
    },
    {
      time: "present",
      weight: "critical",
      safeChoice: "no",
      question: "Kya ye shaadi ka faisla family, society ya age pressure me liya ja raha hai?",
      positive: "Pressure ke saath liya gaya decision long-term regret ka risk badhata hai.",
      negative: "Internal clarity se liya gaya decision zyada stable hota hai."
    },
    {
      time: "present",
      weight: "critical",
      safeChoice: "yes",
      question: "Kya tumhe lagta hai ki is decision par tumhara control hai?",
      positive: "Control tumhare haath me hona responsibility accept karne ka sign hai.",
      negative: "External control future me resentment la sakta hai."
    },
    {
      time: "present",
      weight: "normal",
      safeChoice: "yes",
      question: "Kya is shaadi ke liye emotional aur practical support available hai?",
      positive: "Support system future challenges me cushion deta hai.",
      negative: "Support ki kami stress aur isolation badha sakti hai."
    },

    // ===== FUTURE (8–10) =====
    {
      time: "future",
      weight: "critical",
      safeChoice: "no",
      question: "Kya is shaadi ke baad future me regret hone ka strong chance hai?",
      positive: "Agar regret likely hai, to ye decision daily burden ban sakta hai.",
      negative: "Regret ka strong signal nahi hona decision ko safer banata hai."
    },
    {
      time: "future",
      weight: "critical",
      safeChoice: "yes",
      question: "Worst case scenario (conflict, adjustment failure) hua to kya tum jhel paoge?",
      positive: "Worst case ko handle kar pana responsibility accept karne ka sign hai.",
      negative: "Worst case unacceptable hona decision ko unsafe banata hai."
    },
    {
      time: "future",
      weight: "critical",
      safeChoice: "yes",
      question: "Agar sab plan ke hisaab se na bhi ho, to kya tum 'jo hoga dekha jayega' accept kar paoge?",
      positive: "Acceptance mindset regret ko kam karta hai.",
      negative: "Acceptance ki kami future me mental struggle la sakti hai."
    }
  ]
};
