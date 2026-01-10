/**
 * DECIFIX ULTIMATE ENGINE
 * Zero Errors - Fully Synced
 */

const ENGINE = {
    currentCategory: null,
    userAnswers: [],

    // 1. Search Logic
    initAudit() {
        const input = document.getElementById('userInput').value.toUpperCase().trim();
        
        if (input.length < 2) {
            alert("Bhai, kuch toh likho analyze karne ke liye!");
            return;
        }

        // Switch to Loading Screen
        document.getElementById('phase-input').classList.add('hidden');
        document.getElementById('phase-loading').classList.remove('hidden');

        let bestMatch = null;
        let highestScore = 0;

        // data.js se 'DECIFIX_DATABASE' dhoondna
        for (const key in DECIFIX_DATABASE) {
            let currentScore = 0;
            const data = DECIFIX_DATABASE[key];

            // Direct Key Match
            if (key.includes(input)) currentScore += 100;

            // Keyword Deep Scan
            data.keywords.forEach(word => {
                if (input.includes(word.toUpperCase())) currentScore += 50;
            });

            if (currentScore > highestScore) {
                highestScore = currentScore;
                bestMatch = key;
            }
        }

        // Professional Scanning Delay
        setTimeout(() => {
            if (bestMatch) {
                this.currentCategory = DECIFIX_DATABASE[bestMatch];
                this.userAnswers = [];
                document.getElementById('phase-loading').classList.add('hidden');
                document.getElementById('phase-audit').classList.remove('hidden');
                this.renderQuestion(0);
            } else {
                alert("Topic not found in 1000 categories. Try 'Love', 'Business', or 'Career'.");
                location.reload();
            }
        }, 2000);
    },

    // 2. Question Rendering
    renderQuestion(index) {
        const qData = this.currentCategory.sub.CORE[index];
        document.getElementById('q-header').innerText = `NODE ANALYSIS: ${index + 1} OF ${this.currentCategory.sub.CORE.length}`;
        document.getElementById('q-text').innerText = qData.q;
        
        const optCont = document.getElementById('q-options');
        optCont.innerHTML = '';
        
        qData.o.forEach((optionText, i) => {
            const div = document.createElement('div');
            div.className = 'option-btn';
            div.innerText = optionText;
            div.onclick = () => this.captureAnswer(index, i);
            optCont.appendChild(div);
        });
    },

    // 3. Answer Capture
    captureAnswer(qIndex, oIndex) {
        this.userAnswers.push(oIndex);
        
        if (qIndex + 1 < this.currentCategory.sub.CORE.length) {
            this.renderQuestion(qIndex + 1);
        } else {
            this.showVerdict();
        }
    },

    // 4. Final Result Calculation
    showVerdict() {
        document.getElementById('phase-audit').classList.add('hidden');
        document.getElementById('phase-report').classList.remove('hidden');

        const redFlags = this.userAnswers.filter(a => a === 1).length;
        let resultHTML = "";

        if (redFlags === 0) {
            resultHTML = `<h1 class="verdict" style="color:#00FF41">GO AHEAD</h1><p>Logic supports this decision 100%.</p>`;
        } else if (redFlags <= 2) {
            resultHTML = `<h1 class="verdict" style="color:#FFD700">CAUTION</h1><p>Minor risks detected. Proceed with care.</p>`;
        } else {
            resultHTML = `<h1 class="verdict" style="color:#FF3131">ABORT</h1><p>Critical failures detected in logic.</p>`;
        }

        document.getElementById('result-box').innerHTML = resultHTML + `<div class="status">RED FLAGS DETECTED: ${redFlags}</div>`;
    }
};

// Global Link for HTML Button
function startEngine() {
    ENGINE.initAudit();
                                                 }
