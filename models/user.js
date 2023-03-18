const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,

      minLength: 3,
      required: true,
    },
    picture: { type: String, required: false },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    watchedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
