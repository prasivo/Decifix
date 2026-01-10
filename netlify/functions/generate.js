const https = require('https');

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

    const { prompt } = JSON.parse(event.body);
    const API_KEY = process.env.GEMINI_API_KEY; // पक्का करें कि Netlify में यह की (Key) सेव है

    const promptText = `You are 'Decifix Authority'. For: "${prompt}", generate 5 ruthless elimination questions in Hinglish. Format strictly as JSON array: [{"q":"question", "o":["opt1", "opt2"]}]`;

    const postData = JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }]
    });

    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'generativelanguage.googleapis.com',
            path: `/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (d) => body += d);
            res.on('end', () => {
                resolve({
                    statusCode: 200,
                    headers: { "Content-Type": "application/json" },
                    body: body
                });
            });
        });

        req.on('error', (e) => {
            resolve({ statusCode: 500, body: JSON.stringify({ error: e.message }) });
        });

        req.write(postData);
        req.end();
    });
};
