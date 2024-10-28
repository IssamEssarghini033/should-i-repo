require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const decisionRoutes = require('./routes/decisionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());  // For parsing JSON requests

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/decisions', decisionRoutes);
app.use('/api/users', userRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});