const axios = require('axios');

exports.askAi = async (req, res) => {
    const { question } = req.body;

    try {
        // Call the locally hosted GPT-2 API in Docker
        const response = await axios.post('http://localhost:8000/generate', {
            prompt: `Question: ${question}\n\nAnswer:`,
            max_length: 100,
            temperature: 0.7,
        });

        // Extract the generated text from the response
        let aiResponse = response.data.generated_text.trim();
        console.log(response);


        res.json({ answer: aiResponse });
    } catch (error) {
        console.error('Error with GPT-2 model:', error);
        res.status(500).json({ message: 'Failed to get AI response' });
    }
};