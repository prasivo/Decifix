/* =====================================================
   DECIFIX — Decision Filter Engine
   Logic: Reality > Count > Emotion
===================================================== */

/*
Expected DOMAIN_DATA structure:

window.DOMAIN_DATA = {
  id: "relationship",
  title: "Relationship Decision",
  rules: [
    {
      time: "past" | "present" | "future",
      weight: "normal" | "critical",
      safeChoice: "yes" | "no",
      question: "",
      positiveCase: "",
      negativeCase: ""
    }
  ]
}
*/

if (!window.DOMAIN_DATA || !DOMAIN_DATA.rules) {
  alert("Domain data missing or invalid.");
  throw new Error("DOMAIN_DATA not found");
}

/* ================= STATE ================= */

let currentIndex = 0;
const answers = [];

/* ================= ELEMENTS ================= */

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

/* ================= INIT ================= */

domainTitle.innerText = DOMAIN_DATA.title || "Decision Filter";

/* ================= RENDER RULE ================= */

function renderRule() {
  const rule = DOMAIN_DATA.rules[currentIndex];

  ruleMeta.innerText =
    `Rule ${currentIndex + 1} / ${DOMAIN_DATA.rules.length} · ${rule.time.toUpperCase()}`;

  ruleQuestion.innerText = rule.question;
  positiveEl.innerText = rule.positiveCase;
  negativeEl.innerText = rule.negativeCase;
}

/* ================= USER CHOICE ================= */

function choose(userYes) {
  const rule = DOMAIN_DATA.rules[currentIndex];

  answers.push({
    index: currentIndex + 1,
    time: rule.time,
    question: rule.question,
    userChoice: userYes ? "YES" : "NO",
    safeChoice: rule.safeChoice.toUpperCase(),
    weight: rule.weight
  });

  currentIndex++;

  if (currentIndex < DOMAIN_DATA.rules.length) {
    renderRule();
  } else {
    finishDecision();
  }
}

/* ================= FINAL DECISION LOGIC ================= */

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

  let verdict;
  let note;

  if (criticalMismatch) {
    verdict = "NOT NOW";
    note =
      "Is decision me kuch aise points hain jahan risk ignore ho raha hai. " +
      "Aage badhne se pehle clarity aur stability zaroori hai.";
  } else if (safeMatches >= Math.ceil(answers.length * 0.7)) {
    verdict = "GO AHEAD";
    note =
      "Tumhare answers overall reality ke saath align kar rahe hain. " +
      "Agar tum mentally ready ho, to aage badhna justified hai.";
  } else {
    verdict = "RECONSIDER";
    note =
      "Decision galat nahi hai, par timing ya clarity incomplete lag rahi hai. " +
      "Thoda rukna better ho sakta hai.";
  }

  finalVerdict.innerText = verdict;
  finalNote.innerText = note;

  renderSummary();
}

/* ================= SUMMARY TABLE ================= */

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

/* ================= START ================= */

renderRule();
