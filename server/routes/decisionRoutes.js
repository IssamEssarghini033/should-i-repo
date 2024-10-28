// server/routes/decisionRoutes.js
const express = require('express');
const { logDecision, getUserDecisions } = require('../controllers/decisionController');
const router = express.Router();

router.post('/log', logDecision);                   // Route to log a decision
router.get('/:userId', getUserDecisions);           // Route to fetch user's decisions

module.exports = router;