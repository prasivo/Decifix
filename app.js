const ENGINE = {
  category: null,
  answers: [],

  startAudit() {
    const input = document.getElementById("userInput").value
      .toUpperCase()
      .trim();

    if (input.length < 2) {
      alert("Decision likho");
      return;
    }

    // Category detect
    for (const key in DECIFIX_DATABASE) {
      const cat = DECIFIX_DATABASE[key];
      for (const word of cat.keywords) {
        if (input.includes(word)) {
          this.category = cat;
          break;
        }
      }
    }

    if (!this.category) {
      alert("Decision samajh nahi aaya");
      return;
    }

    document.getElementById("phase-input").classList.add("hidden");
    document.getElementById("phase-audit").classList.remove("hidden");

    this.showQuestion(0);
  },

  showQuestion(index) {
    const q = this.category.sub.CORE[index];
    document.getElementById("q-text").innerText = q.q;

    const optBox = document.getElementById("q-options");
    optBox.innerHTML = "";

    q.o.forEach((opt, i) => {
      const btn = document.createElement("div");
      btn.className = "option-btn";
      btn.innerText = opt;
      btn.onclick = () => this.saveAnswer(index, i);
      optBox.appendChild(btn);
    });
  },

  saveAnswer(qIndex, optIndex) {
    this.answers.push(optIndex);

    if (qIndex + 1 < this.category.sub.CORE.length) {
      this.showQuestion(qIndex + 1);
    } else {
      this.showResult();
    }
  },

  showResult() {
    let risk = this.answers.filter(a => a === 1).length;

    let verdict = "GO AHEAD";
    if (risk === 1) verdict = "USE CAUTION";
    if (risk >= 2) verdict = "ABORT";

    document.getElementById("q-text").innerText = verdict;
    document.getElementById("q-options").innerHTML = "";
  }
};

function startEngine() {
  ENGINE.startAudit();
}