/* ========= DECIFIX ENGINE ========= */
/* ONE ENGINE • ALL DOMAINS */

let DOMAIN = {
  title: "Sample Domain",
  rules: [
    {
      time: "past",
      question: "Kya pehle bhi aisi situation ho chuki hai?",
      yes: "Past pattern repeat ho sakta hai",
      no: "Past se koi strong warning nahi"
    },
    {
      time: "past",
      question: "Kya same problem baar-baar aayi hai?",
      yes: "Pattern strong ho chuka hai",
      no: "Pattern stable nahi hai"
    },
    {
      time: "past",
      question: "Kya past me loss ya damage hua hai?",
      yes: "Ignore karna future ko harm karega",
      no: "Past damage limited tha"
    },
    {
      time: "present",
      question: "Kya aaj ki reality clear hai?",
      yes: "Reality visible hai",
      no: "Reality unclear hai"
    },
    {
      time: "present",
      question: "Kya decision darr ya pressure me hai?",
      yes: "Fear-driven decision unstable hota hai",
      no: "Decision conscious lagta hai"
    },
    {
      time: "present",
      question: "Kya tum is situation par control me ho?",
      yes: "Control tumhare haath me hai",
      no: "Control bahar ke factors ke paas hai"
    },
    {
      time: "present",
      question: "Kya tumhe support mil raha hai?",
      yes: "Support system available hai",
      no: "Support ki kami future me issue ban sakti hai"
    },
    {
      time: "future",
      question: "Kya iske baad regret ho sakta hai?",
      yes: "Regret decision ko poison karega",
      no: "Outcome accept kar paoge"
    },
    {
      time: "future",
      question: "Worst case hua to kya jhel paoge?",
      yes: "Worst case manageable hai",
      no: "Worst case unacceptable hai"
    },
    {
      time: "future",
      question: "Jo hoga uske liye mentally ready ho?",
      yes: "Acceptance mode me ho",
      no: "Mental readiness abhi nahi hai"
    }
  ]
};

let index = 0;
let answers = [];

document.getElementById("domainTitle").innerText = DOMAIN.title;
renderRule();

/* ===== FUNCTIONS ===== */

function renderRule(){
  const rule = DOMAIN.rules[index];
  document.getElementById("qText").innerText =
    `Rule ${index + 1} (${rule.time.toUpperCase()})`;

  document.getElementById("explainText").innerText =
    rule.question;
}

function answer(choice){
  const rule = DOMAIN.rules[index];

  answers.push({
    slot: index + 1,
    time: rule.time,
    question: rule.question,
    choice: choice ? "YES" : "NO"
  });

  index++;

  if(index < DOMAIN.rules.length){
    renderRule();
  }else{
    showResult();
  }
}

function showResult(){
  document.getElementById("rulePhase").classList.add("hidden");
  document.getElementById("resultPhase").classList.remove("hidden");

  let yesCount = answers.filter(a => a.choice === "YES").length;

  let verdict = "NOT NOW";
  if(yesCount >= 7) verdict = "KARNA CHAHIYE";
  if(yesCount <= 3) verdict = "ABHI NAHI KARNA CHAHIYE";

  document.getElementById("finalResult").innerText = verdict;

  const table = document.getElementById("summaryTable");
  answers.forEach(a=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.slot}</td>
      <td>${a.time}</td>
      <td>${a.question}</td>
      <td>${a.choice}</td>
    `;
    table.appendChild(tr);
  });
}