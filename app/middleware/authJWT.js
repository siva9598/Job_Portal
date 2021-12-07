const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  //let token = req.headers["x-access-token"];
  let token = req.cookies.user_token;
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  console.log("im in auth ");
  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};
const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
