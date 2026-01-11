/* =====================================================
   DECIFIX — DOMAIN MAP
   Purpose: user input → correct domain detection
===================================================== */

const DOMAIN_MAP = {

  /* ===== RELATIONSHIP (GENERAL) ===== */
  relationship: [
    "relationship",
    "relation",
    "rishta",
    "bond",
    "partner",
    "dating",
    "boyfriend",
    "girlfriend",
    "bf",
    "gf",
    "couple",
    "together",
    "commitment",
    "breakup",
    "break up",
    "separation",
    "patch up",
    "patchup"
  ],

  /* ===== LOVE (PRE-RELATIONSHIP) ===== */
  love: [
    "love",
    "pyar",
    "pyaar",
    "crush",
    "like",
    "attraction",
    "feelings",
    "ishq",
    "mohabbat",
    "infatuation"
  ],

  /* ===== MARRIAGE ===== */
  marriage: [
    "marriage",
    "marry",
    "shaadi",
    "shadi",
    "shaadi karni",
    "vivah",
    "vivaah",
    "nikah",
    "engagement",
    "engage",
    "wedding",
    "sadi"
  ],

  /* ===== GENERAL FALLBACK ===== */
  general: [
    "decision",
    "confused",
    "confusion",
    "problem",
    "issue",
    "life",
    "future",
    "choice",
    "faisla",
    "soch"
  ]

};

/* =====================================================
   NOTE:
   - Order matters: relationship → love → marriage → general
   - First match wins
===================================================== */
