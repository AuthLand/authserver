"use strict";

const base64 = require("base-64");
const users = require("../models/users-model.js");

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) throw new Error("Not Authroized");

  let basicInfo = req.headers.authorization.split(" ").pop();
  let [username, password] = base64.decode(basicInfo).split(":");

  users.basicAuth(username, password).then((validUser) => {
    req.user = validUser;
    next();
  });
};
