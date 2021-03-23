"use strict";

module.exports = (access) => {
  return (req, res, next) => {
    if (req.user.access.includes(access)) {
      next();
    } else {
      throw new Error("You Do Not Have Access To This Content");
    }
  };
};
