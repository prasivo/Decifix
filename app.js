// app.js - THE DECIFIX INTELLIGENCE ENGINE

let step = 0;
let currentQuestions = [];
let history = [];
let score = 0;

// 1. FUZZY SEARCH LOGIC: Spelling mistakes thik karne ke liye
function getSmartMatch(userInput) {
    const input = userInput.toUpperCase();
    let bestMatch = "GENERAL";

    // Har category ke keywords scan karna
    for (let category in DECIFIX_DATABASE) {
        const data = DECIFIX_DATABASE[category];
        
        // Keywords match check
        const match = data.keywords.some(key => input.includes(key));
        
        if (match) {
            bestMatch = category;
            break;
        }
    }
    return bestMatch;
}

// 2. INITIALIZE AUDIT: Jahan se process shuru hota hai
function startAudit() {
    const input = document.getElementById('userInput').value;
    if (!input || input.length < 3) {
        alert("PLEASE STATE A VALID DECISION FOR ANALYSIS.");
        return;
    }

    // Phase Switch
    showPhase('phase-loading');

    setTimeout(() => {
        const categoryKey = getSmartMatch(input);
        const categoryData = DECIFIX_DATABASE[categoryKey];

        // Sabse pehle wali sub-category ko load karna (Default behavior)
        const firstSubKey = Object.keys(categoryData.sub)[0];
        currentQuestions = categoryData.sub[firstSubKey];

        // Reset system for new session
        step = 0;
        history = [];
        score = 0;

        showPhase('phase-audit');
        loadQuestion();
    }, 2000); // 2 seconds delay for "Professional Feel"
}

// 3. LOAD QUESTION: Ek-ek karke sawal dikhana
function loadQuestion() {
    if (!currentQuestions || step >= currentQuestions.length) {
        renderFinal();
        return;
    }

    const qData = currentQuestions[step];
    document.getElementById('q-header').innerText = `FILTER ${step + 1}/${currentQuestions.length}`;
    document.getElementById('q-text').innerText = qData.q;
    
    const optCont = document.getElementById('q-options');
    optCont.innerHTML = '';
    
    qData.o.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option-btn';
        div.innerText = opt;
        div.onclick = () => handleAnswer(index, opt, qData.q);
        optCont.appendChild(div);
    });
}

// 4. HANDLE ANSWER: User ke choice ko process karna
function handleAnswer(index, selectedOpt, questionText) {
    // Scoring Logic: Index 0 hamesha "Positive/Best" maana jata hai
    if (index === 0) score++;

    history.push({
        q: questionText,
        a: selectedOpt,
        status: index === 0 ? "✅ OPTIMAL" : "❌ RISK"
    });

    step++;
    if (step < currentQuestions.length) {
        loadQuestion();
    } else {
        renderFinal();
    }
}

// 5. RENDER FINAL: Result dikhana
function renderFinal() {
    showPhase('phase-report');
    const resDiv = document.getElementById('audit-results');
    
    // Advanced Verdict Logic
    let verdict = "";
    let color = "";
    const finalPercent = (score / currentQuestions.length) * 100;

    if (finalPercent >= 80) {
        verdict = "GO AHEAD: HIGH PROBABILITY OF SUCCESS";
    } else if (finalPercent >= 50) {
        verdict = "PROCEED WITH CAUTION: REVIEW RISKS";
    } else {
        verdict = "ABORT: SYSTEM DETECTED CRITICAL FAILURES";
    }

    resDiv.innerHTML = `
        <div style="text-align:center; margin-bottom:40px; border: 1px solid white; padding: 25px;">
            <p style="font-size:10px; letter-spacing:3px; color:#666;">AUTHORITY VERDICT</p>
            <h2 style="font-size:20px; letter-spacing:4px; margin-top:10px;">${verdict}</h2>
        </div>
        <table>
            <thead>
                <tr>
                    <th>FILTER RULE</th>
                    <th>INPUT</th>
                    <th>RESULT</th>
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
        </table>
    `;

    const tableBody = document.getElementById('table-body');
    history.forEach(item => {
        tableBody.innerHTML += `
            <tr>
                <td>${item.q}</td>
                <td style="color:white; font-weight:bold;">${item.a}</td>
                <td style="font-size:9px; letter-spacing:1px;">${item.status}</td>
            </tr>`;
    });
}

// 6. UI UTILS: Screen badalne ke liye
function showPhase(id) {
    const phases = ['phase-input', 'phase-loading', 'phase-audit', 'phase-report'];
    phases.forEach(p => {
        const el = document.getElementById(p);
        if(el) el.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}
