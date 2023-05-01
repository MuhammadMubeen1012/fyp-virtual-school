const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [20, "You cannot exceed to 20 characters"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
    minLength: [8, "Your password must be longer than 8 characters"],
  },
  role: {
    type: String,
    default: "user",
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  //token is sent to the user by email for password reset purposes,
  //that token is stored there, and when the token is expire.
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//before saving schema encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //10 is an salt value which defines the length of the hash, bigger the value bigger the hash will be
  this.password = await bcrypt.hash(this.password, 10);
});

//return jwt (json web token)
userSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = function () {
  //token is
  const token = crypto.randomBytes(20).toString("hex");

  //creating a hash of that token and set it to the resetPasswordToken property
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  //setting the token expire time, 30min
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return token;
};

module.exports = mongoose.model("User", userSchema);
