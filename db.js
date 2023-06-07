const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movie-booking-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Error connecting to the database:', error));
