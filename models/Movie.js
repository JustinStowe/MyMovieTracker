const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number },
  imdbID: { type: String },
  type: { type: String },
  poster: { type: String },
  completed: { type: Boolean, default: false },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
