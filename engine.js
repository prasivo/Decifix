/* =====================================================
   DECIFIX — ENGINE V2 (FINAL)
   CORE + UX + SAFETY + ANTI-DEPENDENCY
   + Confidence Score
   + Action Gate
   + Contradiction Detector
   + Evidence Prompt
===================================================== */

/* =====================================================
   EDGE-CASE SAFETY (PRE-CHECK)
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
    <div style="padding:32px;max-width:640px;margin:auto;color:#ddd">
      <h2>Pause.</h2>
      <p>Ye situation serious lag rahi hai.</p>
      <p>Is waqt clarity se zyada safety zaroori lagti hai.</p>
      <p style="opacity:.8">
        Agar immediate danger ho, to kisi trusted insaan
        ya professional tak pahunchna zyada madadgar hota hai.
      </p>
      <p style="opacity:.6">Yahan decision lena theek nahi lagta.</p>
    </div>
  `;
  throw new Error("Dangerous intent");
}

/* =====================================================
   DOMAIN SAFETY
===================================================== */

if (!window.DOMAIN_DATA || !Array.isArray(DOMAIN_DATA.rules)) {
  document.body.innerHTML =
    "<div style='padding:24px;color:#aaa'>Clarity unavailable right now.</div>";
  throw new Error("DOMAIN_DATA missing");
}

/* =====================================================
   ENGINE CORE
===================================================== */

let currentIndex = 0;
const answers = [];
let evidenceAsked = false;

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

domainTitle.innerText = DOMAIN_DATA.title || "Decision";

/* ================= RENDER RULE ================= */

function renderRule() {
  const r = DOMAIN_DATA.rules[currentIndex];

  ruleMeta.innerText =
    `Step ${currentIndex + 1} of ${DOMAIN_DATA.rules.length} · ${capitalize(r.time)}`;

  ruleQuestion.innerText = r.question;
  positiveEl.innerText   = r.positiveCase;
  negativeEl.innerText   = r.negativeCase;

  lockButtons(false);
}

/* ================= USER ACTION ================= */

function choose(userYes) {
  if (locked) return;
  lockButtons(true);

  // Evidence prompt (once, mid-flow)
  if (!evidenceAsked && currentIndex >= 2 && currentIndex <= 5) {
    evidenceAsked = true;
    showEvidencePrompt(() => proceed(userYes));
    return;
  }

  proceed(userYes);
}

function proceed(userYes) {
  const r = DOMAIN_DATA.rules[currentIndex];

  answers.push({
    index: currentIndex + 1,
    time: r.time,
    question: r.question,
    userChoice: userYes ? "YES" : "NO",
    safeChoice: r.safeChoice.toUpperCase(),
    weight: r.weight
  });

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < DOMAIN_DATA.rules.length) {
      fadeOutIn(renderRule);
    } else {
      finishDecision();
    }
  }, 300);
}

/* ================= FINAL DECISION ================= */

function finishDecision() {
  ruleSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let criticalMismatch = false;
  let safeMatches = 0;

  answers.forEach(a => {
    if (a.userChoice === a.safeChoice) {
      safeMatches++;
    } else if (a.weight === "critical") {
      criticalMismatch = true;
    }
  });

  let verdict = "";
  let note = "";

  if (criticalMismatch) {
    verdict = "NOT NOW";
    note =
      "Kuch aise points hain jahan risk ko lightly liya ja raha hai.\n" +
      "Abhi rukna future ke liye behtar lagta hai.";
  } else if (safeMatches >= Math.ceil(answers.length * 0.7)) {
    verdict = "GO AHEAD";
    note =
      "Tumhare answers zameeni reality ke saath align kar rahe hain.\n" +
      "Is direction me aage badhna samajhdari lagti hai.";
  } else {
    verdict = "RECONSIDER";
    note =
      "Decision galat nahi hai,\n" +
      "par picture abhi poori clear nahi lag rahi.";
  }

  finalVerdict.innerText = verdict;
  finalNote.innerText = note;

  renderSummary();
  renderConfidence();
  renderActionGate(verdict);
  renderContradictionNote();
  applyAntiDependency();
}

/* ================= SUMMARY ================= */

function renderSummary() {
  summaryTable.innerHTML = "";
  answers.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.index}</td>
      <td>${capitalize(a.time)}</td>
      <td>${a.question}</td>
      <td>${a.userChoice}</td>
    `;
    summaryTable.appendChild(tr);
  });
}

/* =====================================================
   ENGINE UX
===================================================== */

let locked = false;
const yesBtn = document.querySelector(".btn:nth-child(1)");
const noBtn  = document.querySelector(".btn:nth-child(2)");

function lockButtons(state) {
  locked = state;
  yesBtn.disabled = state;
  noBtn.disabled  = state;
  yesBtn.style.opacity = state ? .5 : 1;
  noBtn.style.opacity  = state ? .5 : 1;
}

function fadeOutIn(fn) {
  ruleSection.style.opacity = 0;
  setTimeout(() => {
    fn();
    ruleSection.style.opacity = 1;
  }, 200);
}

/* =====================================================
   ENGINE V2 ADDITIONS
===================================================== */

function computeConfidence() {
  let score = 0;
  answers.forEach(a => {
    if (a.userChoice === a.safeChoice) {
      score += (a.weight === "critical") ? 30 : 7;
    }
  });
  return Math.min(100, score);
}

function renderConfidence() {
  const c = document.createElement("div");
  c.style.marginTop = "10px";
  c.style.fontSize = "14px";
  c.style.color = "#9ca3af";
  c.innerText = `Clarity strength: ${computeConfidence()}/100`;
  resultSection.appendChild(c);
}

function renderActionGate(verdict) {
  const g = document.createElement("div");
  g.style.marginTop = "16px";
  g.style.padding = "12px";
  g.style.border = "1px solid #2a2a2a";
  g.style.borderRadius = "8px";
  g.style.fontSize = "14px";
  g.style.color = "#d1d5db";

  if (verdict === "GO AHEAD") {
    g.innerHTML = "<strong>Next step:</strong> Agle 7 din me kaunsa chhota action test karoge?";
  } else if (verdict === "NOT NOW") {
    g.innerHTML = "<strong>Pause condition:</strong> Kaunsa ek factor clear hote hi tum wapas aoge?";
  } else {
    g.innerHTML = "<strong>Wait signals:</strong> Kaunse 2 signals milne par picture clear hogi?";
  }

  resultSection.appendChild(g);
}

function detectContradiction() {
  const byTime = { past: [], present: [], future: [] };
  answers.forEach(a => byTime[a.time]?.push(a.userChoice));
  if (byTime.past.includes("YES") && byTime.present.includes("NO") && byTime.future.includes("YES")) return true;
  if (byTime.past.includes("NO") && byTime.present.includes("YES") && byTime.future.includes("NO")) return true;
  return false;
}

function renderContradictionNote() {
  if (!detectContradiction()) return;
  const n = document.createElement("div");
  n.style.marginTop = "8px";
  n.style.fontSize = "13px";
  n.style.color = "#9ca3af";
  n.innerText = "Kuch answers aapas me contradict kar rahe hain.";
  resultSection.appendChild(n);
}

function showEvidencePrompt(callback) {
  const o = document.createElement("div");
  o.style.position = "fixed";
  o.style.inset = "0";
  o.style.background = "rgba(0,0,0,.6)";
  o.style.display = "flex";
  o.style.alignItems = "center";
  o.style.justifyContent = "center";

  o.innerHTML = `
    <div style="background:#111;padding:18px;border-radius:10px;max-width:420px">
      <div style="margin-bottom:12px">
        Is answer ke peeche koi real incident ya proof hai?
      </div>
      <button class="btn ev">YES</button>
      <button class="btn ev">NO</button>
    </div>
  `;

  document.body.appendChild(o);
  o.querySelectorAll(".ev").forEach(b => {
    b.onclick = () => {
      document.body.removeChild(o);
      callback();
    };
  });
}

/* =====================================================
   ANTI-DEPENDENCY
===================================================== */

function applyAntiDependency() {
  try { localStorage.removeItem("decifix_last_verdict"); } catch(e){}

  const now = Date.now();
  const last = Number(localStorage.getItem("decifix_last_run") || 0);
  localStorage.setItem("decifix_last_run", now);

  if (now - last < 5 * 60 * 1000) {
    const w = document.createElement("div");
    w.style.marginTop = "14px";
    w.style.fontSize = "13px";
    w.style.color = "#9ca3af";
    w.innerText =
      "Is decision ko baar-baar repeat karna soch ko aur uljha sakta hai.";
    resultSection.appendChild(w);
  }

  const own = document.createElement("div");
  own.style.marginTop = "18px";
  own.style.fontSize = "14px";
  own.style.lineHeight = "1.6";
  own.style.color = "#d1d5db";
  own.innerHTML =
    "Decision tumhara hai.<br>Yeh sirf ek mirror tha.<br><br>" +
    "<strong>Uske baad regret nahi — jo hoga, dekha jayega.</strong>";
  resultSection.appendChild(own);
}

/* =====================================================
   HELPERS
===================================================== */

function capitalize(t) {
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
}

/* =====================================================
   START
===================================================== */

renderRule();
