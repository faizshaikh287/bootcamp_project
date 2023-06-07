const express = require('express');
const db = require('./db');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const authMiddleware = require('./middleware/authMiddleware');
