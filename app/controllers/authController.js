const db = require("../models");
//const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const JWT_SECRET =
  "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";

exports.signUp = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      msg: "Please enter email and password.",
    });
  } else {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      phone_number: req.body.phone_number,
    })
      .then((user) => res.status(201).send("User created successfully"))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.json({ status: "error", error: `User doesn't exist` });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the username, password combination is successful

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", user_token: token, user_id: user.id });
  }

  res.json({ status: "error", error: "Invalid username/password" });
};

exports.createRecuiter = async (req, res) => {
  const user_id = req.params.user_id;
  const user = await User.findOne({ where: { id: user_id } });
  if (!req.body.company_name || !req.body.company_email) {
    res.status(400).send({
      msg: "Please enter company email and company name.",
    });
  }
  Recuiter.create({
    company_name: req.body.company_name,
    company_email: req.body.company_email,
  })
    .then((recuiter) => res.status(201).send("Recuiter created successfully"))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};
