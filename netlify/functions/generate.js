const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async (event) => {
    // सिर्फ POST रिक्वेस्ट को अनुमति दें
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { prompt } = JSON.parse(event.body);
        const API_KEY = process.env.GEMINI_API_KEY; // यह Netlify Settings से चाबी उठाएगा

        if (!API_KEY) {
            return { statusCode: 500, body: JSON.stringify({ error: "API Key missing in Netlify" }) };
        }

        // Decifix Strategic Prompt
        const promptText = `You are 'Decifix Authority'. For: "${prompt}", generate 5 ruthless elimination questions in Hinglish. Format strictly as JSON array: [{"q":"question", "o":["opt1", "opt2"]}]`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                contents: [{ parts: [{ text: promptText }] }] 
            })
        });

        const data = await response.json();
        
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
    } catch (e) {
        return { 
            statusCode: 500, 
            body: JSON.stringify({ error: "Server Error", details: e.message }) 
        };
    }
};

