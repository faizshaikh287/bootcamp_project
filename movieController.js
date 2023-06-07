const Movie = require('../models/movie');


const createMovie = async (req, res) => {
  try {
    const { title, description } = req.body;


    if (req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized' });
    }


    const movie = new Movie({ title, description });
    await movie.save();

    res.status(201).json({ message: 'Movie created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating movie' });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
};
