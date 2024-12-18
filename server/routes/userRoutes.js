// server/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
