const db = require("../models");
const Job = db.job;
const Application = db.application;

exports.createJob = async (req, res) => {
  if (
    !req.body.recuiter_id ||
    !req.body.location ||
    !req.body.position ||
    !req.body.requirements
  ) {
    res.status(400).send({
      msg: "Please send the valid data for creattion",
    });
  } else {
    Job.create({
      recuiterId: req.body.recuiter_id,
      status: "Open",
      location: req.body.location,
      position: req.body.position,
      requirements: req.body.requirements,
      no_of_applicants: 0,
    })
      .then(() => res.status(201).send("Job created successfully"))
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }
};
exports.changeJobstatus = async (req, res) => {
  if (!req.body.job_id || !req.body.status) {
    {
      res.status(400).send({
        msg: "Please send the valid data for creattion",
      });
    }
  } else {
    await Job.update(
      { status: req.body.status },
      {
        where: {
          id: req.body.job_id,
        },
      }
    );
  }
};

exports.getAllJobs = async (req, res) => {
  const jobs = await Jobs.findAll();
  return res.json(jobs);
};
exports.applyForJob = async (req, res) => {
  if (!req.body.job_id || !req.body.user_id) {
    {
      res.status(400).send({
        msg: "Invalid request",
      });
    }
  } else {
    Application.create({
      status: "Applied",
      userId: req.body.user_id,
      jobId: req.body.job_id,
    });
  }
};
exports.getAllApplicants = async (req, res) => {
  if (!req.body.job_id) {
    res.status(400).send({
      msg: "Invalid request",
    });
  } else {
    const applicants = await Application.findOne({
      where: { jobId: req.body.job_id },
    });
    return res.json(applicants);
  }
};
