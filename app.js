/**
 * DECIFIX PRO ENGINE - Sync with HTML & Data
 */

const DECIFIX = {
    currentCategory: null,
    answers: [],
    
    // HTML ke IDs ke sath match kiya gaya
    cacheDOM() {
        this.searchInput = document.getElementById('userInput');
        this.searchContainer = document.getElementById('phase-input');
        this.quizContainer = document.getElementById('phase-audit');
        this.loadingScreen = document.getElementById('phase-loading');
    },

    handleSearch() {
        this.cacheDOM();
        const query = this.searchInput.value.toUpperCase().trim();
        if (!query) return alert("Bhai, kuch topic toh dalo!");

        // Loading Phase dikhana
        this.searchContainer.classList.add('hidden');
        this.loadingScreen.classList.remove('hidden');

        let bestMatch = null;
        let maxScore = 0;

        // data.js ke DECIFIX_DATABASE se match karna
        for (const key in DECIFIX_DATABASE) {
            let score = 0;
            const category = DECIFIX_DATABASE[key];

            if (key.includes(query)) score += 100;
            category.keywords.forEach(kw => {
                if (query.includes(kw.toUpperCase()) || kw.toUpperCase().includes(query)) {
                    score += 50;
                }
            });

            if (score > maxScore) {
                maxScore = score;
                bestMatch = key;
            }
        }

        setTimeout(() => {
            if (bestMatch && maxScore > 0) {
                this.loadingScreen.classList.add('hidden');
                this.quizContainer.classList.remove('hidden');
                this.startFlow(bestMatch);
            } else {
                alert("Bhai, ye topic nahi mila. Kuch aur try karo!");
                location.reload();
            }
        }, 2000); // 2 second ka professional scan delay
    },

    startFlow(key) {
        this.currentCategory = DECIFIX_DATABASE[key];
        this.answers = [];
        this.renderQuestion(0);
    },

    renderQuestion(index) {
        const qData = this.currentCategory.sub.CORE[index];
        document.getElementById('q-header').innerText = `FILTER ${index + 1}/${this.currentCategory.sub.CORE.length}`;
        document.getElementById('q-text').innerText = qData.q;
        
        const optCont = document.getElementById('q-options');
        optCont.innerHTML = '';
        
        qData.o.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = 'option-btn'; // CSS class match
            btn.innerText = opt;
            btn.onclick = () => this.handleAnswer(index, i);
            optCont.appendChild(btn);
        });
    },

    handleAnswer(qIndex, oIndex) {
        this.answers.push(oIndex);
        if (qIndex + 1 < this.currentCategory.sub.CORE.length) {
            this.renderQuestion(qIndex + 1);
        } else {
            this.showFinalResult();
        }
    },

    showFinalResult() {
        const reportPhase = document.getElementById('phase-report');
        const auditResults = document.getElementById('audit-results');
        this.quizContainer.classList.add('hidden');
        reportPhase.classList.remove('hidden');

        const redFlags = this.answers.filter(a => a === 1).length;
        let verdict = "";

        if (redFlags === 0) verdict = "GO AHEAD: HIGH PROBABILITY OF SUCCESS";
        else if (redFlags <= 2) verdict = "PROCEED WITH CAUTION: REVIEW RISKS";
        else verdict = "ABORT: SYSTEM DETECTED CRITICAL FAILURES";

        auditResults.innerHTML = `
            <div style="text-align:center; margin-bottom:40px; border: 1px solid white; padding: 25px;">
                <h2 style="font-size:20px; letter-spacing:4px;">${verdict}</h2>
            </div>
            <button class="btn" onclick="location.reload()">RE-INITIALIZE SYSTEM</button>
        `;
    }
};

// HTML button ke liye globally available function
function startAudit() {
    DECIFIX.handleSearch();
        }
