// data.js
const DECIFIX_DATABASE = {
    "RELATIONSHIP": {
        "keywords": ["LOVE", "SHADI", "DIVORCE", "BREAKUP", "FRIEND", "COUPLE"],
        "sub": {
            "SHADI": [
                { q: "Kya aap mansik roop se taiyar hain?", o: ["Haan", "Nahi"] },
                { q: "Kya partner ke sath vision milta hai?", o: ["Haan", "Nahi"] },
                { q: "Kya financial stability hai?", o: ["Haan", "Nahi"] },
                { q: "Kya pariwar ki sahmati hai?", o: ["Haan", "Nahi"] },
                { q: "Kya aap ek dusre ka samman karte hain?", o: ["Haan", "Nahi"] }
            ],
            "DIVORCE": [
                { q: "Kya sulah ki koi gunjayish hai?", o: ["Nahi", "Haan"] },
                { q: "Kya ye faisla gusse mein liya ja raha hai?", o: ["Nahi", "Haan"] },
                { q: "Kya aapne legal consultant se baat ki?", o: ["Haan", "Nahi"] },
                { q: "Kya bacho par asar ka socha hai?", o: ["Haan", "Nahi"] },
                { q: "Kya aap akele rehne ke liye taiyar hain?", o: ["Haan", "Nahi"] }
            ]
        }
    },
    "BUSINESS": {
        "keywords": ["STARTUP", "DUKAN", "INVEST", "PROFITS", "MARKET", "BIZNESS"],
        "sub": {
            "STARTUP": [
                { q: "Kya idea unique hai?", o: ["Haan", "Nahi"] },
                { q: "Kya market demand hai?", o: ["Haan", "Nahi"] },
                { q: "Kya funding ka rasta hai?", o: ["Haan", "Nahi"] },
                { q: "Kya team taiyar hai?", o: ["Haan", "Nahi"] },
                { q: "Kya 3 saal tak survival plan hai?", o: ["Haan", "Nahi"] }
            ]
        }
    }
};

