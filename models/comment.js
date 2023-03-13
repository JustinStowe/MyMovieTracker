const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    private: { type: Boolean, required: true, default: false },
    username: { type: mongoose.Schema.Types.objectId, ref: "User" },
    movie: { type: mongoose.Schema.Types.objectId, ref: "Movie" },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
