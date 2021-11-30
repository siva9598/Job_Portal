const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/jobController");

router.post("/job/create", auth.verifyToken, controller.createJob);
router.patch(
  "/job/change_status",
  auth.verifyToken,
  controller.changeJobstatus
);
router.get("/jobs", auth.verifyToken, controller.getAllJobs);
router.post("/job/apply", auth.verifyToken, controller.applyForJob);
router.get("/applicants", auth.verifyToken, controller.getAllApplicants);
module.exports = router;
