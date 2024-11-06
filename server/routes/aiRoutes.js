const express = require('express');
const { askAi } = require('../controllers/aiController');
const router = express.Router();

router.post('/ask', askAi);

module.exports = router;
