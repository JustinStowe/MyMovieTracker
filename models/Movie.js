const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number },
  imdbID: { type: String },
  type: { type: String },
  poster: { type: String },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
