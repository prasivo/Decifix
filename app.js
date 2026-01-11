// app.js — PHONE SAFE DECIFIX ENGINE

// BASIC QUESTIONS (abhi test ke liye)
const QUESTIONS = [
  "Kya ye faisla gusse ya darr mein liya ja raha hai?",
  "Kya iska worst case aap jhel sakte ho?",
  "Kya ye faisla 1 saal baad bhi important rahega?"
];

let currentIndex = 0;
let riskCount = 0;

// BUTTON SE CALL HONE WALA FUNCTION
function startFilter() {
  const inputBox = document.getElementById("userInput");

  if (!inputBox) {
    alert("userInput element nahi mila");
    return;
  }

  const decision = inputBox.value.trim();

  if (decision.length < 2) {
    alert("Pehle decision likho");
    return;
  }

  // UI SWITCH
  document.getElementById("phaseInput").classList.add("hidden");
  document.getElementById("phaseQuestion").classList.remove("hidden");

  currentIndex = 0;
  riskCount = 0;

  showQuestion();
}

// QUESTION DIKHANE KA FUNCTION
function showQuestion() {
  const qBox = document.getElementById("question");
  const optBox = document.getElementById("options");

  qBox.innerText = "RULE " + (currentIndex + 1) + ": " + QUESTIONS[currentIndex];
  optBox.innerHTML = "";

  // YES / NO OPTIONS
  const yes = document.createElement("div");
  yes.className = "option";
  yes.innerText = "YES";
  yes.onclick = function () {
    answerQuestion(true);
  };

  const no = document.createElement("div");
  no.className = "option";
  no.innerText = "NO";
  no.onclick = function () {
    answerQuestion(false);
  };

  optBox.appendChild(yes);
  optBox.appendChild(no);
}

// ANSWER HANDLE
function answerQuestion(isYes) {
  if (isYes) {
    riskCount++;
  }

  currentIndex++;

  if (currentIndex < QUESTIONS.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// FINAL RESULT
function showResult() {
  document.getElementById("phaseQuestion").classList.add("hidden");
  document.getElementById("phaseResult").classList.remove("hidden");

  let verdict = "GO AHEAD";

  if (riskCount === 1) verdict = "USE CAUTION";
  if (riskCount >= 2) verdict = "ABORT";

  document.getElementById("finalResult").innerText = verdict;
}
