const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
