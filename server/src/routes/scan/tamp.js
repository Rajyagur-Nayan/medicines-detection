const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

const run = async (prompt) => {
    const result = await model.generateContent(prompt);
    console.log(result.response);
}

run("give two funny line");