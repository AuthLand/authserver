"use strict";

const express = require("express");
const User = require("../models/users-model.js");
const basicAuth = require("../middleware/basic.js");
const bearerAuth = require("../middleware/bearer.js");
const ACL = require("../middleware/acl.js");

const usersRouter = express.Router();

usersRouter.post("/signup", async (req, res) => {
  try {
    let user = new User(req.body);
    const record = await user.save();
    res.status(200).json(record); // This is where we could send the user to a 'welcome page' or 'dashboard' instead of .send(record)
  } catch (e) {
    res.status(403).send("error creating user");
  }
});

usersRouter.post("/signin", basicAuth, (req, res) => {
  try {
    let userInfo = {
      user: req.user,
      token: req.user.token,
    };
    console.log(req.user);
    res.status(200).json(userInfo);
  } catch (e) {
    res.status(403).send("Error Signing in");
  }
});

usersRouter.get("/admin", bearerAuth, ACL("delete"), (req, res) => {
  res.status(200).json({message: "Access Granted"});
});

usersRouter.get('/get-users', async (req, res) => {
  try{
    let users = await User.find({});
    res.status(200).json(users);
  } catch(e) {
    console.log(e.message);
    res.status(403).send('Error getting all users')
  }
});

usersRouter.post('/logout', (req, res) => {
  
  
})

usersRouter.delete('/delete/:id', async (req, res) => {
  let deleted = await User.deleteOne({_id: req.params.id });

  res.status(200).json({message:"User deleted", user: deleted})
})

module.exports = usersRouter;
