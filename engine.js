/* =====================================================
   DECIFIX — ENGINE
   CORE + UX + SAFETY + REAL USER TESTS
===================================================== */

/* =====================================================
   ENGINE SAFETY — PRE CHECK (EDGE CASE DETECTION)
===================================================== */

/*
Edge cases we care about:
- self-harm
- suicide
- abuse / violence
- medical emergency
- illegal acts
We DO NOT give advice.
We ONLY pause decision flow and show human message.
*/

const DANGEROUS_KEYWORDS = [
  "suicide","kill myself","end my life","self harm",
  "mar dunga","marna chahta","khud ko nuksan",
  "abuse","maar peet","violence","rape","hit me",
  "illegal","crime","murder",
  "overdose","hospital","bleeding","emergency"
];

function detectDangerousIntent(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return DANGEROUS_KEYWORDS.some(k => lower.includes(k));
}

/* Check user situation BEFORE engine starts */
const userSituation =
  localStorage.getItem("decifix_situation") || "";

if (detectDangerousIntent(userSituation)) {
  document.body.innerHTML = `
    <div style="padding:30px;color:#ddd;max-width:600px;margin:auto;">
      <h2>Pause.</h2>
      <p>
        Ye situation serious lag rahi hai.
        Is type ke decision ko system ke through handle karna sahi nahi hota.
      </p>
      <p>
        Agar immediate danger ho, to please
        kisi trusted insaan, local helpline,
        ya professional se baat karo.
      </p>
      <p style="opacity:0.7">
        Yahan clarity dene ka attempt galat ho sakta hai.
      </p>
    </div>
  `;
  throw new Error("Dangerous intent detected");
}

/* =====================================================
   DOMAIN SAFETY GUARD
===================================================== */

if (!window.DOMAIN_DATA || !Array.isArray(DOMAIN_DATA.rules)) {
  document.body.innerHTML =
    "<div style='padding:20px;color:#aaa'>Clarity unavailable right now.</div>";
  throw new Error("DOMAIN_DATA missing");
}

/* =====================================================
   ENGINE CORE
===================================================== */

let currentIndex = 0;
const answers = [];

/* DOM */
const domainTitle = document.getElementById("domainTitle");
const ruleMeta = document.getElementById("ruleMeta");
const ruleQuestion = document.getElementById("ruleQuestion");
const positiveEl = document.getElementById("positive");
const negativeEl = document.getElementById("negative");
const ruleSection = document.getElementById("ruleSection");
const resultSection = document.getElementById("resultSection");
const finalVerdict = document.getElementById("finalVerdict");
const finalNote = document.getElementById("finalNote");
const summaryTable = document.getElementById("summaryTable");

domainTitle.innerText = DOMAIN_DATA.title || "Decision";

/* ================= RENDER ================= */

function renderRule() {
  const rule = DOMAIN_DATA.rules[currentIndex];
  ruleMeta.innerText =
    `Step ${currentIndex + 1} of ${DOMAIN_DATA.rules.length} · ${rule.time.toUpperCase()}`;
  ruleQuestion.innerText = rule.question;
  positiveEl.innerText = rule.positiveCase;
  negativeEl.innerText = rule.negativeCase;
  lockButtons(false);
}

/* ================= USER ACTION ================= */

function choose(userYes) {
  if (locked) return;
  lockButtons(true);

  const rule = DOMAIN_DATA.rules[currentIndex];

  answers.push({
    index: currentIndex + 1,
    time: rule.time,
    question: rule.question,
    userChoice: userYes ? "YES" : "NO",
    safeChoice: rule.safeChoice.toUpperCase(),
    weight: rule.weight
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

  let verdict, note;

  if (criticalMismatch) {
    verdict = "NOT NOW";
    note =
      "Yahan kuch aise points hain jahan risk ignore ho raha hai. " +
      "Thoda ruk kar clarity lana safer hoga.";
  } else if (safeMatches >= Math.ceil(answers.length * 0.7)) {
    verdict = "GO AHEAD";
    note =
      "Tumhare answers reality ke saath kaafi had tak align kar rahe hain.";
  } else {
    verdict = "RECONSIDER";
    note =
      "Decision galat nahi hai, par kuch cheezein abhi clear nahi lag rahi.";
  }

  finalVerdict.innerText = verdict;
  finalNote.innerText = note;
  renderSummary();
}

/* ================= SUMMARY ================= */

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
   ENGINE UX
===================================================== */

let locked = false;
const yesBtn = document.querySelector(".btn:nth-child(1)");
const noBtn = document.querySelector(".btn:nth-child(2)");

function lockButtons(state) {
  locked = state;
  yesBtn.disabled = state;
  noBtn.disabled = state;
  yesBtn.style.opacity = state ? 0.5 : 1;
  noBtn.style.opacity = state ? 0.5 : 1;
}

function fadeOutIn(fn) {
  ruleSection.style.opacity = 0;
  setTimeout(() => {
    fn();
    ruleSection.style.opacity = 1;
  }, 200);
}

/* =====================================================
   REAL USER TESTS (DEV CONSOLE ONLY)
===================================================== */

function runTestScenario(name, simulatedAnswers) {
  let criticalMismatch = false;
  let safeMatches = 0;

  DOMAIN_DATA.rules.forEach((rule, i) => {
    const userChoice = simulatedAnswers[i] ? "YES" : "NO";
    if (userChoice === rule.safeChoice.toUpperCase()) {
      safeMatches++;
    } else if (rule.weight === "critical") {
      criticalMismatch = true;
    }
  });

  let verdict =
    criticalMismatch
      ? "NOT NOW"
      : safeMatches >= Math.ceil(DOMAIN_DATA.rules.length * 0.7)
        ? "GO AHEAD"
        : "RECONSIDER";

  console.log(`🧪 ${name} → ${verdict}`);
}

console.group("DECIFIX — EDGE-SAFE TESTS");
runTestScenario("Blind YES", Array(10).fill(true));
runTestScenario("Blind NO", Array(10).fill(false));
runTestScenario("Critical Ignored", [true,true,true,false,true,true,true,true,true,true]);
console.groupEnd();

/* =====================================================
   START
===================================================== */

renderRule();
