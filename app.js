// FORCE VERSION — DECIFIX APP.JS
alert("APP JS VERSION 10 RULES LOADED");

const QUESTIONS = [
  "Rule 1: Kya ye faisla gusse ya pressure me liya ja raha hai?",
  "Rule 2: Kya iska worst case aap jhel sakte ho?",
  "Rule 3: Kya ye decision irreversible hai?",
  "Rule 4: Kya ye paison par zyada depend karta hai?",
  "Rule 5: Kya poori information verify ki gayi hai?",
  "Rule 6: Kya kisi aur par dependency ban rahi hai?",
  "Rule 7: Kya ye sirf short-term relief hai?",
  "Rule 8: Kya past me aisa decision fail hua tha?",
  "Rule 9: Kya health ya mental peace kharab hogi?",
  "Rule 10: Kya 6 mahine baad bhi ye decision sahi lagega?"
];

let index = 0;
let risk = 0;

function startFilter() {
  const input = document.getElementById("userInput").value.trim();
  if (input.length < 2) {
    alert("Decision likho pehle");
    return;
  }

  document.getElementById("phaseInput").classList.add("hidden");
  document.getElementById("phaseQuestion").classList.remove("hidden");

  index = 0;
  risk = 0;
  showQuestion();
}

function showQuestion() {
  document.getElementById("question").innerText = QUESTIONS[index];
  const box = document.getElementById("options");
  box.innerHTML = "";

  ["YES", "NO"].forEach((txt, i) => {
    const d = document.createElement("div");
    d.className = "option";
    d.innerText = txt;
    d.onclick = () => answer(i);
    box.appendChild(d);
  });
}

function answer(choice) {
  if (choice === 0) risk++;
  index++;

  if (index < QUESTIONS.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("phaseQuestion").classList.add("hidden");
  document.getElementById("phaseResult").classList.remove("hidden");

  let verdict = "GO AHEAD";
  if (risk >= 3) verdict = "USE CAUTION";
  if (risk >= 5) verdict = "ABORT";

  document.getElementById("finalResult").innerText =
    verdict + " (" + QUESTIONS.length + " RULES CHECKED)";
}