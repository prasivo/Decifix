/* =====================================================
   DECIFIX — ENGINE V3
   FLOW + UX + SAFETY
   BRAIN: decision-core.js (SINGLE SOURCE)
   Founder: Prasoon Gupta
===================================================== */

/* =====================================================
   1. EDGE-CASE SAFETY (PRE-CHECK)
===================================================== */

const DANGEROUS_KEYWORDS = [
  "suicide","kill myself","end my life","self harm",
  "mar dunga","marna chahta","khud ko nuksan",
  "abuse","maar peet","violence","rape",
  "illegal","crime","murder",
  "overdose","hospital","bleeding","emergency"
];

function detectDangerousIntent(text) {
  if (!text) return false;
  const t = text.toLowerCase();
  return DANGEROUS_KEYWORDS.some(k => t.includes(k));
}

const userSituation = localStorage.getItem("decifix_situation") || "";

if (detectDangerousIntent(userSituation)) {
  document.body.innerHTML = `
    <div style="padding:60px 20px; max-width:600px; margin:auto; text-align:center;">
      <h2 style="color:#ff4444; letter-spacing:2px;">PAUSE.</h2>
      <p style="margin-top:20px;">Is situation me clarity se pehle safety zaroori hai.</p>
      <button onclick="location.href='index.html'"
        style="margin-top:30px; padding:10px 20px; background:none; border:1px solid #444; color:#aaa;">
        Back to Start
      </button>
    </div>
  `;
  throw new Error("Dangerous intent detected");
}

/* =====================================================
   2. DOMAIN DATA VALIDATION
===================================================== */

if (!window.DOMAIN_DATA || !Array.isArray(DOMAIN_DATA.rules)) {
  document.body.innerHTML =
    "<div style='padding:40px;text-align:center;color:#6366f1;'>System calibrating…</div>";
  throw new Error("DOMAIN_DATA missing");
}

/* =====================================================
   3. ENGINE STATE
===================================================== */

let currentIndex = 0;
const answers = [];          // true = YES, false = NO
let locked = false;

/* DOM */
const domainTitle   = document.getElementById("domainTitle");
const ruleMeta      = document.getElementById("ruleMeta");
const ruleQuestion  = document.getElementById("ruleQuestion");
const positiveEl    = document.getElementById("positive");
const negativeEl    = document.getElementById("negative");
const ruleSection   = document.getElementById("ruleSection");
const resultSection = document.getElementById("resultSection");
const finalVerdict  = document.getElementById("finalVerdict");
const finalNote     = document.getElementById("finalNote");
const summaryTable  = document.getElementById("summaryTable");

domainTitle.innerText = DOMAIN_DATA.title || "DECIFIX";

/* =====================================================
   4. RENDER RULE
===================================================== */

function renderRule() {
  const r = DOMAIN_DATA.rules[currentIndex];

  ruleMeta.innerText =
    `STEP ${currentIndex + 1} / ${DOMAIN_DATA.rules.length}`;

  ruleQuestion.innerText = r.question;

  positiveEl.innerText =
    `Probability: ${Math.round(r.yes.probability * 100)}% · Impact: ${r.yes.impact}`;

  negativeEl.innerText =
    `Probability: ${Math.round(r.no.probability * 100)}% · Impact: ${r.no.impact}`;

  ruleQuestion.style.animation = "none";
  ruleQuestion.offsetHeight;
  ruleQuestion.style.animation = "fadeIn 0.4s ease";

  lockButtons(false);
}

/* =====================================================
   5. USER ACTION
===================================================== */

function choose(userYes) {
  if (locked) return;
  lockButtons(true);

  answers.push(userYes === true);

  ruleSection.style.opacity = "0";
  ruleSection.style.transform = "translateY(-10px)";

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < DOMAIN_DATA.rules.length) {
      ruleSection.style.transform = "translateY(10px)";
      renderRule();
      ruleSection.style.opacity = "1";
      ruleSection.style.transform = "translateY(0)";
    } else {
      finishDecision();
    }
  }, 350);
}

window.engineChoose = choose;

/* =====================================================
   6. FINAL DECISION (🔥 ONLY PLACE USING BRAIN)
===================================================== */

function finishDecision() {
  ruleSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  /* 🔥 SINGLE SOURCE OF TRUTH */
  const result = calculateDecision(
    DOMAIN_DATA.rules,
    answers
  );

  finalVerdict.innerText = result.verdict;
  finalNote.innerText =
    `Decision score: ${result.score}`;

  renderSummary(result.breakdown);
  applyAntiDependency();
}

/* =====================================================
   7. SUMMARY
===================================================== */

function renderSummary(breakdown) {
  summaryTable.innerHTML = "";
  breakdown.forEach((b, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${DOMAIN_DATA.rules[i].question}</td>
      <td>${b.choice}</td>
      <td>${b.ev}</td>
    `;
    summaryTable.appendChild(tr);
  });
}

/* =====================================================
   8. UX HELPERS
===================================================== */

function lockButtons(state) {
  locked = state;
  document.querySelectorAll(".btn").forEach(b => {
    b.disabled = state;
    b.style.opacity = state ? "0.4" : "1";
  });
}

function applyAntiDependency() {
  const now = Date.now();
  const last = Number(localStorage.getItem("decifix_last_run") || 0);
  localStorage.setItem("decifix_last_run", now);

  if (now - last < 5 * 60 * 1000) {
    const w = document.createElement("div");
    w.style.marginTop = "14px";
    w.style.fontSize = "12px";
    w.style.color = "#ff4b2b";
    w.innerText =
      "Same decision ko baar-baar test karna clarity nahi badhata.";
    resultSection.appendChild(w);
  }
}

/* =====================================================
   9. START
===================================================== */

renderRule();
