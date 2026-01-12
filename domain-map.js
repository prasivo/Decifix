/* =====================================================
   DECIFIX — DOMAIN MAP (INDIA OPTIMIZED)
   Rule:
   - English + Hinglish + Hindi
   - Common spelling mistakes
   - Real spoken phrases
   - Top domains first, generic last
===================================================== */

const DOMAIN_MAP = {

  /* =================================================
     CAREER (India-first)
  ================================================= */

  career: [
    // Core
    "career","job","work","profession","occupation",

    // Hinglish / Hindi
    "naukri","kaam","job nahi lag rahi","job chhod du",
    "job change","job switch","career change","career switch",
    "resign","resignation",

    // Salary / income (career-linked in India)
    "salary","package","ctc","paisa","income","kamai","earning",

    // Growth / office
    "growth","promotion","increment","appraisal",
    "boss","manager","office pressure","toxic office",

    // Job types
    "private job","government job","govt job",
    "sarkari naukri","sarkari job",
    "corporate","startup","freelance","freelancing",

    // Exams (India reality)
    "exam","competitive exam","upsc","ssc",
    "bank exam","railway","government exam",

    // Emotional phrases
    "career ka tension","future ka tension",
    "job ka stress","career confuse",
    "career ka decision","samajh nahi aa raha kya karu",

    // Spelling mistakes
    "carrer","carier","carear"
  ],

  /* =================================================
     LOVE (Pre-relationship)
  ================================================= */

  love: [
    "love","pyar","pyaar","crush","like",
    "attraction","feelings","ishq","mohabbat",
    "infatuation","one sided","situationship"
  ],

  /* =================================================
     RELATIONSHIP (Ongoing)
  ================================================= */

  relationship: [
    "relationship","relation","rishta","bond",
    "partner","dating","boyfriend","girlfriend",
    "bf","gf","couple","together","commitment",
    "breakup","break up","separation",
    "patch up","patchup","toxic relationship",
    "trust issue","cheating"
  ],

  /* =================================================
     MARRIAGE (Irreversible)
  ================================================= */

  marriage: [
    "marriage","marry","shaadi","shadi",
    "shaadi karni","vivah","vivaah","nikah",
    "engagement","engage","wedding","sadi",
    "arranged marriage","love marriage",
    "divorce","separation","married life"
  ],

   money: [
  // Core
  "money","paisa","paise","finance","financial",

  // Indian usage
  "loan","emi","debt","udhaar",
  "investment","invest","sip","mutual fund",
  "share","stock","trading","crypto","bitcoin",
  "saving","savings","bachat",
  "expense","kharcha","budget",

  // Income / stress
  "salary ka paisa","paise ki tension","financial stress",
  "loss","nuksaan","profit","return",

  // Decisions Indians ask
  "loan le lu","invest karu","paise lagau",
  "risk lena sahi hai","paisa dub jayega kya",

  // Spelling mistakes
  "mony","moeny","finence"
],

  /* =================================================
     GENERAL (Fallback – LAST ONLY)
  ================================================= */

  general: [
    "decision","confused","confusion","problem",
    "issue","life","future","choice","faisla",
    "soch","samajh nahi aa raha","kya karu"
  ]

};

/* =====================================================
   NOTES (READ ONCE, THEN IGNORE)
   - Order matters: specific → generic
   - First matched domain is selected
   - Add new domains ABOVE general
===================================================== */
