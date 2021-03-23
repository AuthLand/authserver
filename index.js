"use strict";

require("dotenv").config();

const mongoose = require("mongoose");
const server = require("./src/auth/server.js");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/authserver";

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateindex: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions).then(() => {
  server.start(3030);
});
