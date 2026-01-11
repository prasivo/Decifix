// app.js — PHONE SAFE DECIFIX ENGINE

const QUESTIONS = [
  "Kya ye faisla gusse, darr ya pressure me liya ja raha hai?",
  "Kya iska worst-case scenario aap jhel sakte ho?",
  "Kya ye decision irreversible hai (wapas lena mushkil)?",
  "Kya ye faisla paison par zyada depend karta hai?",
  "Kya aapne is faisle ke liye poori information verify ki hai?",
  "Kya aap kisi aur ki life/control par over-depend ho rahe ho?",
  "Kya ye decision sirf short-term relief de raha hai?",
  "Kya past me aisa decision lene par nuksan hua tha?",
  "Kya is faisle se aapki health/mental peace kharab hogi?",
  "Kya aap is faisle ko 6 mahine baad bhi justify kar paoge?"
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
