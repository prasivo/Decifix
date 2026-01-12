/* =====================================================
   DECIFIX — DOMAIN MAP (INTENT FIRST)
   Rule:
   1. Intent phrases > Keywords
   2. Specific domains first
   3. General always last
===================================================== */

const DOMAIN_MAP = {

  /* =================================================
     CAREER
  ================================================= */

  career: {
    intent: [
      "job change","job switch","switch karu",
      "naukri","naukri chhod","job chhod",
      "career decision","career ka decision",
      "promotion","increment","growth",
      "office pressure","toxic office",
      "boss","manager",
      "exam","competitive exam","upsc","ssc",
      "govt job","sarkari naukri"
    ],
    keywords: [
      "career","job","work","profession",
      "salary","package","ctc","paisa"
    ]
  },

  /* =================================================
     MONEY
  ================================================= */

  money: {
    intent: [
      "invest","investment","sip","mutual fund",
      "loan","emi","udhaar","debt",
      "share","stock","trading","crypto","bitcoin",
      "saving","bachat","budget",
      "paisa lagau","risk lena",
      "loss","profit","return"
    ],
    keywords: [
      "money","paisa","paise",
      "finance","financial","salary"
    ]
  },

  /* =================================================
     LOVE (Attraction / Feelings)
  ================================================= */

  love: {
    intent: [
      "crush","like someone","attraction",
      "feelings","one sided",
      "pyar ho gaya","pyaar ho gaya",
      "love ho gaya","situationship"
    ],
    keywords: [
      "love","pyar","pyaar","ishq","mohabbat"
    ]
  },

  /* =================================================
     RELATIONSHIP (Ongoing bond)
  ================================================= */

  relationship: {
    intent: [
      "relationship me rehna",
      "breakup","break up","separation",
      "patch up","patchup",
      "trust issue","cheating",
      "toxic relationship",
      "dating problem","commitment issue"
    ],
    keywords: [
      "relationship","partner",
      "boyfriend","girlfriend",
      "bf","gf","couple"
    ]
  },

  /* =================================================
     MARRIAGE (Irreversible)
  ================================================= */

  marriage: {
    intent: [
      "shaadi karni","marriage decision",
      "arranged marriage","love marriage",
      "vivah","nikaah","nikah",
      "engagement","wedding",
      "divorce","married life"
    ],
    keywords: [
      "marriage","marry","shaadi","shadi","sadi"
    ]
  },

  /* =================================================
     GENERAL (Fallback — LAST ONLY)
  ================================================= */

  general: {
    intent: [],
    keywords: [
      "decision","confused","confusion",
      "problem","issue","life","future",
      "choice","faisla",
      "samajh nahi aa raha","kya karu"
    ]
  }

};
