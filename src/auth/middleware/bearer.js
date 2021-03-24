"use strict";

const users = require("../models/users-model.js");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(" ").pop();

  users.bearerAuth(token).then((validUser) => {
    req.user = validUser;
    next();
  });
};
