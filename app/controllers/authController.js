const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signUp = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phone_number: req.body.phone_number
    
  }.then(() => {res.send({ message: "User was registered successfully!" });})
  )   
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
    
  };
  