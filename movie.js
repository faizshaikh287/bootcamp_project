const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Create a movie (admin only)
router.post('/', authMiddleware, movieController.createMovie);

router.get('/', authMiddleware, movieController.getAllMovies);

module.exports = router;
