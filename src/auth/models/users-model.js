"use strict";

require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: {
      type: String,
      require: true,
      default: "user",
      enum: ["user", "editor", "admin"],
    },
  },
  { toJSON: { virtuals: true } }
);

UserSchema.virtual("token").get(function () {
  let tokenObject = {
    username: this.username,
  };
  return jwt.sign(tokenObject, process.env.SECRET);
});

UserSchema.virtual("access").get(function () {
  let acl = {
    user: ["read"],
    editor: ["read", "create", "update"],
    admin: ["read", "create", "update"],
  };
  return acl[this.role];
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.statics.basicAuth = async function (username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
  if (valid) return user;
  throw new Error("Invalid User");
};

UserSchema.statics.bearerAuth = async function (token) {
  try {
    const parsedToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: parsedToken.username });
    if (user) return user;
    throw new Error("User not found");
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = mongoose.model("users", UserSchema);
