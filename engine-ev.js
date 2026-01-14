/* =====================================================
   DECIFIX — EV ENGINE (CORE)
===================================================== */

let currentIndex = 0;
const answers = [];

let totalYesScore = 0;
let totalNoScore  = 0;

/* DOM */
const ruleQuestion = document.getElementById("ruleQuestion");
const ruleMeta     = document.getElementById("ruleMeta");
const positiveEl   = document.getElementById("positive");
const negativeEl   = document.getElementById("negative");
const ruleSection  = document.getElementById("ruleSection");
const resultSection= document.getElementById("resultSection");
const finalVerdict = document.getElementById("finalVerdict");
const finalNote    = document.getElementById("finalNote");
const summaryTable = document.getElementById("summaryTable");

/* ================= RENDER ================= */

function renderRule(){
  const r = DOMAIN_DATA.rules[currentIndex];

  ruleMeta.innerText =
    `Rule ${currentIndex + 1} / ${DOMAIN_DATA.rules.length}`;

  ruleQuestion.innerText = r.question;

  positiveEl.innerText =
    `Probability: ${Math.round(r.yes.probability * 100)}% | Impact: ${r.yes.impact}`;

  negativeEl.innerText =
    `Probability: ${Math.round(r.no.probability * 100)}% | Impact: ${r.no.impact}`;
}

/* ================= CHOICE ================= */

function choose(isYes){
  const r = DOMAIN_DATA.rules[currentIndex];

  const evYes =
    r.yes.probability * r.yes.impact * r.weight;

  const evNo  =
    r.no.probability * r.no.impact * r.weight;

  if(isYes) totalYesScore += evYes;
  else totalNoScore += evNo;

  answers.push({
    question: r.question,
    choice: isYes ? "YES" : "NO",
    evYes: evYes.toFixed(2),
    evNo: evNo.toFixed(2)
  });

  currentIndex++;

  if(currentIndex < DOMAIN_DATA.rules.length){
    renderRule();
  } else {
    finishDecision();
  }
}

/* ================= FINAL DECISION ================= */

function finishDecision(){
  ruleSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let action = "";
  let reason = "";

  if(totalYesScore > totalNoScore){
    action = "PROCEED";
    reason = "Expected value positive hai.";
  } else {
    action = "WAIT / DO NOT PROCEED";
    reason = "Risk-weighted loss zyada hai.";
  }

  finalVerdict.innerText = action;
  finalNote.innerText =
    `YES Score: ${totalYesScore.toFixed(2)} | NO Score: ${totalNoScore.toFixed(2)}\n${reason}`;

  renderSummary();
}

/* ================= SUMMARY ================= */

function renderSummary(){
  summaryTable.innerHTML = "";
  answers.forEach((a, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${a.question}</td>
      <td>${a.choice}</td>
      <td>${a.evYes}</td>
      <td>${a.evNo}</td>
    `;
    summaryTable.appendChild(tr);
  });
}

/* ================= START ================= */

renderRule();
