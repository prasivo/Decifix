/**
 * DECIFIX PRO ENGINE - Optimized for 1000+ Categories
 */

const DECIFIX = {
    currentCategory: null,
    answers: [],

    init() {
        this.cacheDOM();
        this.bindEvents();
        console.log("DECIFIX Engine Loaded: 1000+ Categories Ready.");
    },

    cacheDOM() {
        this.searchBtn = document.getElementById('search-btn');
        this.searchInput = document.getElementById('search-input');
        this.searchContainer = document.getElementById('search-container');
        this.quizContainer = document.getElementById('quiz-container');
    },

    bindEvents() {
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
    },

    handleSearch() {
        const query = this.searchInput.value.toUpperCase().trim();
        if (!query) return alert("Likho bhai - Abhi Faisla karte hain !");

        let bestMatch = null;
        let maxScore = 0;

        // Advanced Search Algorithm (Direct Match > Keyword Match)
        for (const key in DECIFIX_DATA) {
            let score = 0;
            const category = DECIFIX_DATA[key];

            // 1. Direct Category Key Match
            if (key.includes(query)) score += 100;

            // 2. Keyword Deep Search
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

        if (bestMatch && maxScore > 0) {
            this.startFlow(bestMatch);
        } else {
            alert("Bhai, ye topic filhal database mein nahi hai. Kuch aur try karo!");
        }
    },

    startFlow(key) {
        this.currentCategory = DECIFIX_DATA[key];
        this.answers = [];
        this.searchContainer.classList.add('hidden');
        this.quizContainer.classList.remove('hidden');
        this.renderQuestion(0);
    },

    renderQuestion(index) {
        const qData = this.currentCategory.sub.CORE[index];
        const progress = ((index / this.currentCategory.sub.CORE.length) * 100).toFixed(0);

        this.quizContainer.innerHTML = `
            <div class="progress-bar" style="width: ${progress}%"></div>
            <div class="question-box">
                <p class="category-label">Category: ${this.currentCategory.keywords[0]}</p>
                <h2>${qData.q}</h2>
                <div class="options-grid">
                    ${qData.o.map((opt, i) => `
                        <button class="opt-btn" onclick="DECIFIX.handleAnswer(${index}, ${i})">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;
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
        // Calculation: 0 is Positive (Green), 1 is Negative (Red)
        const redFlags = this.answers.filter(a => a === 1).length;
        const total = this.answers.length;
        
        let title, message, colorClass;

        if (redFlags === 0) {
            title = "FULL GREEN SIGNAL! 🟢";
            message = "Logic ke hisab se ye faisla ekdum sahi hai. Bina darr ke aage badho.";
            colorClass = "res-green";
        } else if (redFlags <= 2) {
            title = "PROCEED WITH CAUTION 🟡";
            message = "Faisla bura nahi hai, par kuch risks hain. Ek baar phir se sochiye.";
            colorClass = "res-yellow";
        } else {
            title = "RED SIGNAL: STOP! 🔴";
            message = "Logic is faisle ke khilaaf hai. Isme nuksan hone ke chances zyada hain.";
            colorClass = "res-red";
        }

        this.quizContainer.innerHTML = `
            <div class="result-screen ${colorClass}">
                <h1>${title}</h1>
                <p>${message}</p>
                <div class="stats">Aapne ${redFlags} warning signs ko acknowledge kiya hai.</div>
                <button class="reload-btn" onclick="location.reload()">Naya Faisla Karein</button>
            </div>
        `;
    }
};

// Start DECIFIX
document.addEventListener('DOMContentLoaded', () => DECIFIX.init());
        
