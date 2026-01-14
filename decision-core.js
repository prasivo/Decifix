/* =====================================================
   DECIFIX — DECISION CORE v1
   ONE SYSTEM · ALL DOMAINS · PURE LOGIC
===================================================== */

/*
RULE FORMAT EXPECTED (per rule):

{
  time: "past" | "present" | "future",
  question: "...",

  weight: 0.05 → 0.25,          // importance of rule
  critical: true | false,       // irreversible risk?

  yes: {
    probability: 0.0 → 1.0,     // likelihood
    impact: -10 → +10           // damage or gain
  },

  no: {
    probability: 0.0 → 1.0,
    impact: -10 → +10
  }
}

USER ANSWER:
true  = YES
false = NO
*/

/* =====================================================
   CORE DECISION FUNCTION (THE ONLY ONE)
===================================================== */

function calculateDecision(rules, userAnswers) {
  let totalEV = 0;          // Expected Value
  let riskFlags = 0;        // serious negatives
  let criticalFail = false;

  const breakdown = [];

  rules.forEach((rule, i) => {
    const userYes = userAnswers[i] === true;
    const path = userYes ? rule.yes : rule.no;

    const probability = clamp(path.probability, 0, 1);
    const impact = clamp(path.impact, -10, 10);
    const weight = clamp(rule.weight || 0.1, 0.01, 1);

    const ev = probability * impact * weight;
    totalEV += ev;

    // Track risky decisions
    if (impact <= -7 && probability >= 0.4) {
      riskFlags++;
    }

    // Irreversible failure
    if (rule.critical && impact <= -6 && probability >= 0.3) {
      criticalFail = true;
    }

    breakdown.push({
      step: i + 1,
      choice: userYes ? "YES" : "NO",
      ev: round(ev)
    });
  });

  /* =====================================================
     FINAL VERDICT LOGIC (NO EMOTION)
  ===================================================== */

  let verdict = "RECONSIDER";

  if (criticalFail) {
    verdict = "NOT NOW";
  } else if (totalEV >= 1.8 && riskFlags === 0) {
    verdict = "GO AHEAD";
  } else if (totalEV <= -1) {
    verdict = "STOP";
  } else if (riskFlags >= 2) {
    verdict = "NOT NOW";
  }

  return {
    verdict,                 // GO AHEAD | NOT NOW | RECONSIDER | STOP
    score: round(totalEV),   // numeric justification
    riskFlags,
    breakdown                // optional debug / audit
  };
}

/* =====================================================
   HELPERS
===================================================== */

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function round(n) {
  return Math.round(n * 100) / 100;
}

/* =====================================================
   PHILOSOPHY (DO NOT CHANGE)
--------------------------------------------------------
- This file NEVER gives advice
- It only outputs optimal action under constraints
- Same math for career, money, marriage, life
- Domains supply data, not logic
- Change rules, not the brain
===================================================== */
