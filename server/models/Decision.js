const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: String, required: true },
    answer: { type: String },             // AI-suggested answer
    feedback: { type: String },           // Optional feedback from user
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Decision', decisionSchema);