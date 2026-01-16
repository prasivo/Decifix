/* =====================================================
   DECIFIX — ENGINE (STABLE CORE)
   Rule-Based • Deterministic • No Advice Illusion
   Founder: Prasoon Gupta
===================================================== */

/* =====================================================
   1. SAFETY PRE-CHECK
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
    <div style="padding:60px 20px;max-width:600px;margin:auto;text-align:center">
      <h2 style="color:#ff4b2b">PAUSE</h2>
      <p style="margin-top:20px">
        Ye situation serious lag rahi hai.<br>
        Is waqt decision lena theek nahi.
      </p>
      <button onclick="location.href='index.html'"
        style="margin-top:30px;padding:10px 20px;background:none;border:1px solid #444;color:#aaa">
        Back
      </button>
    </div>
  `;
  throw new Error("Dangerous intent");
}

/* =====================================================
   2. DOMAIN VALIDATION
===================================================== */

if (!window.DOMAIN_DATA || !Array.isArray(DOMAIN_DATA.rules)) {
  document.body.innerHTML =
    "<div style='padding:40px;text-align:center;color:#6366f1'>System calibrating…</div>";
  throw new Error("DOMAIN_DATA missing");
}

/* =====================================================
   3. ENGINE STATE
===================================================== */

let currentIndex = 0;
const answers = []; // true = YES, false = NO
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

  ruleQuestion.innerText = r.question || "";

  positiveEl.innerText = r.positiveCase || "YES";
  negativeEl.innerText = r.negativeCase || "NO";

  lockButtons(false);
}

/* =====================================================
   5. USER ACTION
===================================================== */

function choose(userYes) {
  if (locked) return;
  lockButtons(true);

  const r = DOMAIN_DATA.rules[currentIndex];

  answers.push({
    index: currentIndex + 1,
    time: r.time || "-",
    question: r.question,
    userChoice: userYes ? "YES" : "NO",
    safeChoice: (r.safeChoice || "").toUpperCase(),
    weight: r.weight || "normal"
  });

  ruleSection.style.opacity = "0";

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < DOMAIN_DATA.rules.length) {
      renderRule();
      ruleSection.style.opacity = "1";
    } else {
      finishDecision();
    }
  }, 300);
}

window.engineChoose = choose;

/* =====================================================
   6. FINAL DECISION (RULE-BASED)
===================================================== */

function finishDecision() {
  ruleSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let criticalFail = false;
  let alignCount = 0;

  answers.forEach(a => {
    if (a.safeChoice && a.userChoice === a.safeChoice) {
      alignCount++;
    } else if (a.weight === "critical" && a.safeChoice) {
      criticalFail = true;
    }
  });

  let verdict = "";
  let note = "";

  if (criticalFail) {
    verdict = "NOT NOW";
    note = "Kuch critical points par risk ignore ho raha hai.";
  } else if (alignCount >= Math.ceil(answers.length * 0.7)) {
    verdict = "GO AHEAD";
    note = "Decision reality ke saath align karta hai.";
  } else {
    verdict = "RECONSIDER";
    note = "Picture abhi clear nahi lag rahi.";
  }

  finalVerdict.innerText = verdict;
  finalNote.innerText = note;

  renderSummary();
  applyAntiDependency();
}

/* =====================================================
   7. SUMMARY
===================================================== */

function renderSummary() {
  summaryTable.innerHTML = "";

  answers.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.index}</td>
      <td>${a.time}</td>
      <td>${a.question}</td>
      <td>${a.userChoice}</td>
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
    w.style.color = "#9ca3af";
    w.innerText =
      "Same decision ko baar-baar repeat karna clarity kam karta hai.";
    resultSection.appendChild(w);
  }
}

/* =====================================================
   9. START
===================================================== */

renderRule();
