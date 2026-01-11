/* ==================================================
   DECIFIX ENGINE V2
   Reality-based Decision Filter
   ================================================== */

/* DOMAIN DATA (must be loaded before this file) */
const DOMAIN = window.DOMAIN_DATA;

/* SAFETY CHECK */
if (!DOMAIN || !DOMAIN.rules || DOMAIN.rules.length !== 10) {
  alert("Domain data missing or invalid.");
}

/* STATE */
let currentRule = 0;
let answers = [];
let decisionSafe = true; // overall safety flag

/* UI ELEMENTS */
const titleEl = document.getElementById("domainTitle");
const ruleMetaEl = document.getElementById("ruleMeta");
const questionEl = document.getElementById("ruleQuestion");
const positiveEl = document.getElementById("positiveCase");
const negativeEl = document.getElementById("negativeCase");

const ruleSection = document.getElementById("ruleSection");
const resultSection = document.getElementById("resultSection");
const verdictEl = document.getElementById("finalVerdict");
const noteEl = document.getElementById("finalNote");
const tableBody = document.getElementById("summaryTable");

/* INIT */
titleEl.innerText = DOMAIN.title;
renderRule();

/* ==================================================
   RENDER RULE
   ================================================== */
function renderRule() {
  const rule = DOMAIN.rules[currentRule];

  ruleMetaEl.innerText =
    `Rule ${currentRule + 1} • ${rule.time.toUpperCase()}`;

  questionEl.innerText = rule.question;
  positiveEl.innerText = rule.positive;
  negativeEl.innerText = rule.negative;
}

/* ==================================================
   USER CHOICE
   ================================================== */
function choose(choice) {
  const rule = DOMAIN.rules[currentRule];

  /* Store answer */
  answers.push({
    index: currentRule + 1,
    time: rule.time,
    question: rule.question,
    choice: choice ? "YES" : "NO",
    weight: rule.weight || "normal",
    safeChoice: rule.safeChoice // expected safe side
  });

  /* CRITICAL RULE CHECK */
  if (rule.weight === "critical") {
    const userSafe =
      (choice === true && rule.safeChoice === "yes") ||
      (choice === false && rule.safeChoice === "no");

    if (!userSafe) {
      decisionSafe = false;
    }
  }

  /* NEXT */
  currentRule++;

  if (currentRule < DOMAIN.rules.length) {
    renderRule();
  } else {
    showResult();
  }
}

/* ==================================================
   RESULT LOGIC
   ================================================== */
function showResult() {
  ruleSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  /* FINAL VERDICT */
  if (decisionSafe) {
    verdictEl.innerText = "GO AHEAD (SAFE ENOUGH)";
    noteEl.innerText =
      "Is situation me koi critical red flag detect nahi hua. " +
      "Decision lene ka control tumhare haath me hai.";
  } else {
    verdictEl.innerText = "NOT SAFE RIGHT NOW";
    noteEl.innerText =
      "Is situation me kuch serious risks clear dikh rahe hain. " +
      "Agar phir bhi decision lete ho, to responsibility tumhari hogi.";
  }

  /* SUMMARY TABLE */
  answers.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.index}</td>
      <td>${a.time}</td>
      <td>${a.question}</td>
      <td>${a.choice}</td>
    `;
    tableBody.appendChild(tr);
  });
}
