const DECIFIX = {
    currentCategory: null,
    answers: [],

    startAudit() {
        const input = document.getElementById('userInput').value.toUpperCase().trim();
        if (input.length < 2) return alert("Kuch toh likho bhai!");

        // Switch to Loading
        document.getElementById('phase-input').classList.add('hidden');
        document.getElementById('phase-loading').classList.remove('hidden');

        let bestMatch = null;
        let maxScore = 0;

        // Data search logic (DECIFIX_DATABASE is used from data.js)
        for (const key in DECIFIX_DATABASE) {
            let score = 0;
            const category = DECIFIX_DATABASE[key];
            if (key.includes(input)) score += 100;
            category.keywords.forEach(kw => {
                if (input.includes(kw.toUpperCase())) score += 50;
            });

            if (score > maxScore) {
                maxScore = score;
                bestMatch = key;
            }
        }

        // Fast Scan (1 second delay only)
        setTimeout(() => {
            if (bestMatch) {
                this.currentCategory = DECIFIX_DATABASE[bestMatch];
                document.getElementById('phase-loading').classList.add('hidden');
                document.getElementById('phase-audit').classList.remove('hidden');
                this.showQuestion(0);
            } else {
                alert("Topic nahi mila! 'Relationship' ya 'Startup' jaise keyword try karein.");
                location.reload();
            }
        }, 1000);
    },

    showQuestion(index) {
        const qData = this.currentCategory.sub.CORE[index];
        document.getElementById('q-header').innerText = `RULE ${index + 1}/${this.currentCategory.sub.CORE.length}`;
        document.getElementById('q-text').innerText = qData.q;
        
        const optCont = document.getElementById('q-options');
        optCont.innerHTML = '';
        
        qData.o.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => this.handleAnswer(index, i);
            optCont.appendChild(btn);
        });
    },

    handleAnswer(qIndex, oIndex) {
        this.answers.push(oIndex);
        if (qIndex + 1 < this.currentCategory.sub.CORE.length) {
            this.showQuestion(qIndex + 1);
        } else {
            this.showResult();
        }
    },

    showResult() {
        document.getElementById('phase-audit').classList.add('hidden');
        document.getElementById('phase-report').classList.remove('hidden');

        const redFlags = this.answers.filter(a => a === 1).length;
        let verdict = redFlags === 0 ? "GO AHEAD: SECURE" : (redFlags < 3 ? "CAUTION: RISKY" : "ABORT: DANGER");

        document.getElementById('audit-results').innerHTML = `
            <h1 style="letter-spacing:5px; margin-bottom:20px;">${verdict}</h1>
            <p style="color:#888;">Detected ${redFlags} critical warnings during analysis.</p>
        `;
    }
};

// Global function link
function startAudit() {
    DECIFIX.startAudit();
        }
            
