/* =====================================================
   DECIFIX ENGINE — FINAL VERSION
   Reality-based Decision Filter
   ===================================================== */

/* DOMAIN DATA (must be loaded before this file) */
const DOMAIN = window.DOMAIN_DATA;

/* SAFETY CHECK */
if (!DOMAIN || !DOMAIN.rules || DOMAIN.rules.length !== 10) {
  alert("Domain data missing or invalid.");
}

/* STATE */
let currentIndex = 0;
let answers = [];
let decisionSafe = true;
let clickLock = false;

/* ELEMENTS */
const domainTitleEl = document.getElementById("domainTitle");
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
domainTitleEl.innerText = DOMAIN.title;
renderRule();

/* =====================================================
   RENDER CURRENT RULE
   ===================================================== */
function renderRule() {
  const rule = DOMAIN.rules[currentIndex];

  ruleMetaEl.innerText =
    `Rule ${currentIndex + 1} • ${rule.time.toUpperCase()}`;

  questionEl.innerText = rule.question;
  positiveEl.innerText = rule.positive;
  negativeEl.innerText = rule.negative;
}

/* =====================================================
   HANDLE USER CHOICE
   ===================================================== */
function choose(choice) {
  if (clickLock) return;

  clickLock = true;
  setTimeout(() => (clickLock = false), 600);

  const rule = DOMAIN.rules[currentIndex];

  /* Store answer */
  answers.push({
    index: currentIndex + 1,
    time: rule.time,
    question: rule.question,
    choice: choice ? "YES" : "NO",
    weight: rule.weight
  });

  /* CRITICAL RULE CHECK */
  if (rule.weight === "critical") {
    const safe =
      (choice === true && rule.safeChoice === "yes") ||
      (choice === false && rule.safeChoice === "no");

    if (!safe) {
      decisionSafe = false;
    }
  }

  currentIndex++;

  if (currentIndex < DOMAIN.rules.length) {
    renderRule();
  } else {
    showResult();
  }
}

/* =====================================================
   FINAL RESULT
   ===================================================== */
function showResult() {
  ruleSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  if (decisionSafe) {
    verdictEl.innerText = "GO AHEAD (SAFE ENOUGH)";
    noteEl.innerText =
      "Is situation me koi major red flag clear nahi dikhta. " +
      "Risk zero nahi hai, par decision lene layak clarity maujood hai.";
  } else {
    verdictEl.innerText = "NOT SAFE RIGHT NOW";
    noteEl.innerText =
      "Is situation me kuch aise points hain jo decision ko risky bana rahe hain. " +
      "Decision phir bhi tumhara hi rahega.";
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
