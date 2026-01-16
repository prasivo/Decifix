/* =====================================================
   DECIFIX — ENGINE V2 (ANIMATED & REFINED)
   CORE + UX + SAFETY + ANTI-DEPENDENCY
   Founder: Prasoon Gupta
===================================================== */

/* 1. EDGE-CASE SAFETY (PRE-CHECK) */
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
    <div style="padding:60px 20px; max-width:600px; margin:auto; text-align:center; animation: fadeIn 1s ease;">
      <h2 style="color:#ff4444; letter-spacing:2px;">PAUSE.</h2>
      <div style="height:1px; width:100px; background:#ff4444; margin:20px auto;"></div>
      <p style="font-size:18px; line-height:1.6; color:#ddd">Ye situation serious lag rahi hai.</p>
      <p style="opacity:.8; margin-top:15px;">Is waqt clarity se zyada safety zaroori hai.</p>
      <p style="opacity:.6; margin-top:20px; font-size:14px;">Agar immediate danger ho, to kisi trusted insaan ya professional tak pahunchna zyada madadgar hota hai.</p>
      <button onclick="location.href='index.html'" style="margin-top:30px; padding:10px 20px; background:none; border:1px solid #444; color:#aaa; cursor:pointer;">Back to Start</button>
    </div>
  `;
  throw new Error("Dangerous intent detected");
}

/* 2. DOMAIN DATA VALIDATION */
if (!window.DOMAIN_DATA || !Array.isArray(DOMAIN_DATA.rules)) {
  document.body.innerHTML = "<div style='padding:40px; text-align:center; color:#6366f1;'>System calibrating... Please refresh.</div>";
  throw new Error("DOMAIN_DATA missing");
}

/* 3. ENGINE CORE STATE */
let currentIndex = 0;
const answers = [];
let evidenceAsked = false;
let locked = false;

/* DOM ELEMENTS */
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

/* 4. RENDER RULE WITH ANIMATION */
function renderRule() {
  const r = DOMAIN_DATA.rules[currentIndex];

  ruleMeta.innerText = `PHASE: ${r.time.toUpperCase()} • STEP ${currentIndex + 1}/${DOMAIN_DATA.rules.length}`;
  ruleQuestion.innerText = r.question;
  positiveEl.innerText   = r.positiveCase;
  negativeEl.innerText   = r.negativeCase;

  // Add a slight entry pulse to the question
  ruleQuestion.style.animation = 'none';
  ruleQuestion.offsetHeight; /* trigger reflow */
  ruleQuestion.style.animation = 'fadeIn 0.5s ease-out';
  
  lockButtons(false);
}

/* 5. USER ACTION */
function choose(userYes) {
  if (locked) return;
  lockButtons(true);

  // Evidence prompt (once, mid-flow)
  if (!evidenceAsked && currentIndex >= 2 && currentIndex <= 4) {
    evidenceAsked = true;
    showEvidencePrompt(() => proceed(userYes));
    return;
  }

  proceed(userYes);
}

// Attach globally for the HTML button
window.engineChoose = choose;

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

  // Smooth UI transition
  ruleSection.style.opacity = '0';
  ruleSection.style.transform = 'translateY(-10px)';

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < DOMAIN_DATA.rules.length) {
      ruleSection.style.transform = 'translateY(10px)';
      renderRule();
      ruleSection.style.opacity = '1';
      ruleSection.style.transform = 'translateY(0)';
    } else {
      finishDecision();
    }
  }, 400);
}

/* 6. FINAL DECISION LOGIC */
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
  let themeColor = "#6366f1"; // Default Indigo

  if (criticalMismatch) {
    verdict = "NOT NOW";
    note = "Kuch aise points hain jahan risk ko lightly liya ja raha hai. Abhi rukna future ke liye behtar lagta hai.";
    themeColor = "#ff4b2b"; // Red
  } else if (safeMatches >= Math.ceil(answers.length * 0.7)) {
    verdict = "GO AHEAD";
    note = "Tumhare answers zameeni reality ke saath align kar rahe hain. Is direction me aage badhna samajhdari lagti hai.";
    themeColor = "#00f2fe"; // Cyan/Blue
  } else {
    verdict = "RECONSIDER";
    note = "Decision galat nahi hai, par picture abhi poori clear nahi lag rahi.";
    themeColor = "#f9d423"; // Yellow
  }

  finalVerdict.innerText = verdict;
  finalVerdict.style.color = themeColor;
  finalNote.innerText = note;

  renderSummary();
  renderConfidence();
  renderActionGate(verdict);
  renderContradictionNote();
  applyAntiDependency();
}

/* 7. UI HELPERS & ADD-ONS */
function renderSummary() {
  summaryTable.innerHTML = "";
  answers.forEach(a => {
    const tr = document.createElement("tr");
    tr.style.animation = `fadeIn 0.5s ease forwards`;
    tr.innerHTML = `
      <td>${a.index}</td>
      <td style="color:#6366f1">${a.question}</td>
      <td style="font-weight:bold">${a.userChoice}</td>
    `;
    summaryTable.appendChild(tr);
  });
}

function renderConfidence() {
  let score = 0;
  answers.forEach(a => {
    if (a.userChoice === a.safeChoice) {
      score += (a.weight === "critical") ? 30 : 7;
    }
  });
  const finalScore = Math.min(100, score);
  
  const c = document.createElement("div");
  c.className = "context";
  c.style.marginTop = "20px";
  c.innerHTML = `Clarity Strength: <strong style="color:#6366f1">${finalScore}%</strong>`;
  resultSection.appendChild(c);
}

function renderActionGate(verdict) {
  const g = document.createElement("div");
  g.style.cssText = "margin-top:20px; padding:20px; border:1px dashed #333; font-size:14px; color:#d1d5db; background:rgba(255,255,255,0.02);";

  let gateText = "";
  if (verdict === "GO AHEAD") gateText = "<strong>NEXT ACTION:</strong> Agle 7 din me kaunsa chhota step test karoge?";
  else if (verdict === "NOT NOW") gateText = "<strong>PAUSE CONDITION:</strong> Kaunsa ek factor clear hote hi tum wapas aoge?";
  else gateText = "<strong>WAIT SIGNALS:</strong> Kaunse 2 signals milne par picture clear hogi?";

  g.innerHTML = gateText;
  resultSection.appendChild(g);
}

function showEvidencePrompt(callback) {
  const o = document.createElement("div");
  o.style.cssText = "position:fixed; inset:0; background:rgba(5,5,9,0.9); display:flex; align-items:center; justify-content:center; z-index:100; backdrop-filter:blur(10px); animation:fadeIn 0.4s ease;";

  o.innerHTML = `
    <div style="background:#0c0c14; padding:40px; border:1px solid #6366f1; text-align:center; max-width:400px; border-radius:4px;">
      <div style="font-size:11px; letter-spacing:3px; color:#6366f1; margin-bottom:15px;">PROMPT CHECK</div>
      <div style="margin-bottom:25px; line-height:1.5; font-size:16px;">Is answer ke peeche koi <strong>real incident</strong> ya strong proof hai?</div>
      <div style="display:flex; gap:10px;">
        <button class="btn ev" style="flex:1">YES, PROVED</button>
        <button class="btn ev" style="flex:1">NO, FEELING</button>
      </div>
    </div>
  `;

  document.body.appendChild(o);
  o.querySelectorAll(".ev").forEach(b => {
    b.onclick = () => {
      o.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(o);
        callback();
      }, 300);
    };
  });
}

function lockButtons(state) {
  locked = state;
  const btns = document.querySelectorAll(".btn");
  btns.forEach(b => {
    b.disabled = state;
    b.style.opacity = state ? "0.3" : "1";
  });
}

function applyAntiDependency() {
  const now = Date.now();
  const last = Number(localStorage.getItem("decifix_last_run") || 0);
  localStorage.setItem("decifix_last_run", now);

  if (now - last < 5 * 60 * 1000) {
    const w = document.createElement("div");
    w.style.cssText = "margin-top:15px; font-size:12px; color:#ff4b2b; text-align:center;";
    w.innerText = "Repeated testing se clarity nahi, confusion badhti hai.";
    resultSection.appendChild(w);
  }
}

function renderContradictionNote() {
  const byTime = { past: [], present: [], future: [] };
  answers.forEach(a => byTime[a.time]?.push(a.userChoice));
  
  const logicJump = (byTime.past.includes("YES") && byTime.present.includes("NO") && byTime.future.includes("YES")) ||
                    (byTime.past.includes("NO") && byTime.present.includes("YES") && byTime.future.includes("NO"));

  if (logicJump) {
    const n = document.createElement("div");
    n.style.cssText = "margin-top:10px; font-size:13px; color:#9ca3af; font-style:italic;";
    n.innerText = "Notice: Kuch answers logic gaps suggest kar rahe hain.";
    resultSection.appendChild(n);
  }
}

// Kickstart
renderRule();
