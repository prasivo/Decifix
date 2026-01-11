// domains/marriage.js
// DECIFIX DOMAIN — MARRIAGE

window.DOMAIN_DATA = {
  id: "marriage",
  title: "Marriage Decision",

  rules: [
    // ===== PAST (1–3) =====
    {
      time: "past",
      question: "Kya past me is relationship ya similar rishton me serious problems hui hain?",
      yes: "Past ka pattern repeat hone ka risk hai",
      no: "Past me koi strong negative signal nahi dikhta"
    },
    {
      time: "past",
      question: "Kya pehle commitment, trust ya responsibility ko lekar issues rahe hain?",
      yes: "Ye issues shaadi ke baad aur heavy ho sakte hain",
      no: "Commitment history stable rahi hai"
    },
    {
      time: "past",
      question: "Kya past me emotional ya mental damage hua hai jo abhi tak heal nahi hua?",
      yes: "Unresolved damage future me daily conflict ban sakta hai",
      no: "Past damage manageable ya resolved lagta hai"
    },

    // ===== PRESENT (4–7) =====
    {
      time: "present",
      question: "Kya aaj ki reality tumhari expectations se match karti hai?",
      yes: "Reality aur expectations aligned lag rahi hain",
      no: "Reality aur expectations ke beech gap hai"
    },
    {
      time: "present",
      question: "Kya ye shaadi ka decision family, society ya age pressure me liya ja raha hai?",
      yes: "Pressure-based decision long-term regret la sakta hai",
      no: "Decision internal clarity se liya ja raha hai"
    },
    {
      time: "present",
      question: "Kya tumhe lagta hai ki is decision par tumhara control hai?",
      yes: "Tum apni marzi se decision le rahe ho",
      no: "Decision par external control zyada hai"
    },
    {
      time: "present",
      question: "Kya is shaadi ke liye emotional aur practical support available hai?",
      yes: "Support system future challenges me madad karega",
      no: "Support ki kami future me stress badha sakti hai"
    },

    // ===== FUTURE (8–10) =====
    {
      time: "future",
      question: "Kya is shaadi ke baad future me regret ho sakta hai?",
      yes: "Regret shaadi ko bojh bana sakta hai",
      no: "Tum outcome ko accept karne ke liye mentally ready ho"
    },
    {
      time: "future",
      question: "Worst case scenario (conflict, adjustment failure) hua to kya tum jhel paoge?",
      yes: "Worst case ko handle karne ki capacity lag rahi hai",
      no: "Worst case unacceptable lag raha hai"
    },
    {
      time: "future",
      question: "Agar sab plan ke hisaab se na bhi ho, to kya tum 'jo hoga dekha jayega' accept kar paoge?",
      yes: "Tum uncertainty aur responsibility accept kar rahe ho",
      no: "Uncertainty accept karna abhi mushkil hai"
    }
  ]
};
