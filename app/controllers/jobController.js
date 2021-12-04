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
  console.log(req.body.job_id);
  console.log(req.body.status);

  if (typeof req.body.job_id === "undefined" || !req.body.status) {
    {
      res.status(400).send({
        msg: "Please send the valid data",
      });
    }
  } else {
    Job.update(
      { status: req.body.status },
      {
        where: {
          id: req.body.job_id,
        },
      }
    )
      .then(() => res.status(200).send("Job updated successfully"))
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }
};

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.findAll();
  return res.json(jobs);
};
exports.applyForJob = async (req, res) => {
  console.log(req.body.job_id);
  console.log(req.userId);
  if (typeof req.body.job_id === "undefined" || !req.userId) {
    {
      res.status(400).send({
        msg: "Invalid request",
      });
    }
  } else {
    // add check if the user has already applied for the same job
    Application.create({
      status: "Applied",
      userId: req.userId,
      jobId: req.body.job_id,
    })
      .then(() => res.status(200).send("Job application created successfully"))
      .catch((err) => {
        console.log(err.errors);
        res.status(400).send(err.message);
      });
  }
};
exports.getAllApplicants = async (req, res) => {
  if (!req.query.job_id) {
    res.status(400).send({
      msg: "Invalid request",
    });
  } else {
    const applicants = await Application.findOne({
      where: { jobId: req.query.job_id },
    });
    return res.json(applicants);
  }
};
