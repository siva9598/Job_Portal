const db = require("../models");
const authconfig = require("../config/auth.config");
const User = db.user;
const UserProfile = db.user_profile;

exports.createUserProfile = async (req, res) => {
  if (!req.body.current_location || !req.body.resume_link) {
    res.status(400).send({
      msg: "Please send the valid data for creattion",
    });
  } else {
    UserProfile.create({
      userId: req.userId,
      current_location: req.body.current_location,
      current_role: req.body.current_role,
      current_salary: req.body.current_salary,
      total_work_experience_in_years: req.body.total_work_experience_in_years,
      resume_link: req.body.resume_link,
      linkedIn_link: req.body.linkedIn_link,
      github_link: req.body.github_link,
    })
      .then(() => res.status(201).send("User Profile created successfully"))
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }
};

exports.getUserProfile = async (req, res) => {
  const user_id = req.userId;
  console.log("user id: " + user_id);
  await UserProfile.findOne({
    where: {
      userId: user_id,
    },
  })
    .then((user_profile) => {
      return res.json(user_profile);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

exports.changeUserProfile = async (req, res) => {
  if (!req.userId) {
    {
      res.status(400).send({
        msg: "Please send the valid data",
      });
    }
  } else {
    UserProfile.update(
      {
        current_location: req.body.current_location,
        current_role: req.body.current_role,
        current_salary: req.body.current_salary,
        total_work_experience_in_years: req.body.total_work_experience_in_years,
        resume_link: req.body.resume_link,
        linkedIn_link: req.body.linkedIn_link,
        github_link: req.body.github_link,
      },
      {
        where: {
          userId: req.userId,
        },
      }
    )
      .then(() => res.status(200).send("User profile updated successfully"))
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }
};
