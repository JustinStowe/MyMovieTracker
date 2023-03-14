const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
