// server/controllers/decisionController.js
const Decision = require('../models/Decision');

// Log a new decision
exports.logDecision = async (req, res) => {
    try {
        const { userId, question, answer, feedback } = req.body;
        const newDecision = new Decision({ userId, question, answer, feedback });
        await newDecision.save();
        res.status(201).json(newDecision);
    } catch (error) {
        res.status(500).json({ error: 'Error logging decision' });
    }
};

// Fetch all decisions for a user
exports.getUserDecisions = async (req, res) => {
    try {
        const { userId } = req.params;
        const decisions = await Decision.find({ userId });
        res.status(200).json(decisions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching decisions' });
    }
};