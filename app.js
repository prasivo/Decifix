/**
 * DECIFIX CORE ENGINE 
 * FIXED: Home, Loading, & Variable Sync
 */

const ENGINE = {
    currentCategory: null,
    history: [],

    startAudit() {
        const input = document.getElementById('userInput').value.toUpperCase().trim();
        if (input.length < 2) return alert("Please enter a valid decision.");

        // UI Transition
        document.getElementById('phase-input').classList.add('hidden');
        document.getElementById('phase-loading').classList.remove('hidden');

        let bestMatch = null;
        let topScore = 0;

        // Searching through DECIFIX_DATABASE (from data.js)
        for (const key in DECIFIX_DATABASE) {
            let score = 0;
            const category = DECIFIX_DATABASE[key];
            
            if (key.includes(input)) score += 100;
            category.keywords.forEach(word => {
                if (input.includes(word.toUpperCase())) score += 50;
            });

            if (score > topScore) {
                topScore = score;
                bestMatch = key;
            }
        }

        // Animated delay for "Professional Feel"
        setTimeout(() => {
            if (bestMatch) {
                this.currentCategory = DECIFIX_DATABASE[bestMatch];
                this.history = [];
                document.getElementById('phase-loading').classList.add('hidden');
                document.getElementById('phase-audit').classList.remove('hidden');
                this.renderQuestion(0);
            } else {
                alert("Decision node not found. Try keywords like 'Relationship' or 'Business'.");
                location.reload();
            }
        }, 2000);
    },

    renderQuestion(index) {
        const qData = this.currentCategory.sub.CORE[index];
        document.getElementById('q-header').innerText = `FILTERING RULE ${index + 1} / ${this.currentCategory.sub.CORE.length}`;
        document.getElementById('q-text').innerText = qData.q;
        
        const optCont = document.getElementById('q-options');
        optCont.innerHTML = '';
        
        qData.o.forEach((text, i) => {
            const div = document.createElement('div');
            div.className = 'option-btn';
            div.innerText = text;
            div.onclick = () => this.handleAnswer(index, i);
            optCont.appendChild(div);
        });
    },

    handleAnswer(qIndex, oIndex) {
        this.history.push(oIndex);
        if (qIndex + 1 < this.currentCategory.sub.CORE.length) {
            this.renderQuestion(qIndex + 1);
        } else {
            this.showFinalReport();
        }
    },

    showFinalReport() {
        document.getElementById('phase-audit').classList.add('hidden');
        document.getElementById('phase-report').classList.remove('hidden');

        const redFlags = this.history.filter(a => a === 1).length;
        let color = "#00FF41";
        let verdict = "GO AHEAD";

        if (redFlags > 0 && redFlags <= 2) {
            color = "#FFD700";
            verdict = "USE CAUTION";
        } else if (redFlags > 2) {
            color = "#FF3131";
            verdict = "ABORT MISSION";
        }

        document.getElementById('result-display').innerHTML = `
            <h1 style="color: ${color}; letter-spacing: 10px; font-size: 32px; margin-bottom: 10px;">${verdict}</h1>
            <p style="color: #666; font-size: 12px; letter-spacing: 2px;">LOGIC AUDIT COMPLETE // ${redFlags} RISKS DETECTED</p>
        `;
    }
};

// Global listener for the button
function startEngine() {
    ENGINE.startAudit();
}
