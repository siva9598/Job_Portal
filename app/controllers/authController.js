const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

exports.signUp = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phone_number: req.body.phone_number
    
  }.then(() => {res.send({ message: "User was registered successfully!" });
  res.redirect('/signIn')})
  )   
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
    
  };
  

  exports.signIn = (req,res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email } })
  
    if (!user) {
      return res.json({ status: 'error', error: 'Invalid username/password' })
    }
  
    if (await bcrypt.compare(password, user.password)) {
      // the username, password combination is successful
  
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        JWT_SECRET
      )
  
      return res.json({ status: 'ok', data: token })
    }
  
    res.json({ status: 'error', error: 'Invalid username/password' })
  }