const { Groq } = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateUserStories = async (req, res) => {
    const { projectDescription } = req.body;
    const response = await groq.chat.completions.create({
        messages: [{ role: 'user', content: `Generate user stories for: ${projectDescription}` }],
        model: 'mixtral-8x7b-32768'
    });
    res.json(response.choices[0].message.content.split('\n'));
};
module.exports = { generateUserStories };
