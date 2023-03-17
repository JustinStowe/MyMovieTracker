const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Year: { type: Number },
  imdbID: { type: String },
  Type: { type: String },
  Poster: { type: String },
  completed: { type: Boolean, default: false },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
