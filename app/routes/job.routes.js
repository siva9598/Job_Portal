const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/jobController");
const auth = require("../middleware/authJWT");
const verifyRecuiter = require("../middleware/Recuiter");

router.post(
  "/job/create",
  auth.verifyToken,
  verifyRecuiter,
  controller.createJob
);
router.patch(
  "/job/change_status",
  auth.verifyToken,
  // recuiter_middleware.verifyRecuiter,
  verifyRecuiter,
  controller.changeJobstatus
);
router.get("/jobs", auth.verifyToken, controller.getAllJobs);
router.post("/job/apply", auth.verifyToken, controller.applyForJob);
router.get(
  "/applicants",
  auth.verifyToken,
  verifyRecuiter,
  controller.getAllApplicants
);
router.get(
  "/recuiter/jobs",
  auth.verifyToken,
  verifyRecuiter,
  controller.getAllJobsForRecuiter
);
router.get(
  "/user/applications",
  auth.verifyToken,
  controller.getAllApplicationsOfUser
);
router.get(
  "/job/applicant_profiles",
  auth.verifyToken,
  verifyRecuiter,
  controller.getAllUserProfilesThatAppliedForJob
);
router.patch(
  "/application/change_status",
  auth.verifyToken,
  verifyRecuiter,
  controller.changeApplicationstatus
);

module.exports = router;
