<<<<<<< HEAD
const { Schema, model } = require("mongoose");
=======
const mongoose = require("mongoose");
>>>>>>> 085bab9be2ec6159bc7c642007801b21491c074d
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

<<<<<<< HEAD
const userSchema = new Schema(
=======
const userSchema = new mongoose.Schema(
>>>>>>> 085bab9be2ec6159bc7c642007801b21491c074d
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
<<<<<<< HEAD
      trim: true,
      minLength: 3,
      required: true,
    },
=======
      minLength: 3,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
>>>>>>> 085bab9be2ec6159bc7c642007801b21491c074d
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
<<<<<<< HEAD
  // 'this' is the user doc
  if (!this.isModified("password")) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});
=======
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});
const User = mongoose.model("User", userSchema);
>>>>>>> 085bab9be2ec6159bc7c642007801b21491c074d

module.exports = model("User", userSchema);
