const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/jobController");
const auth = require("../middleware/authJWT");
const recuiter_middleware = require("../middleware/Recuiter");

router.post(
  "/job/create",
  //auth.verifyToken,
  //recuiter_middleware.verifyRecuiter,
  controller.createJob
);
router.patch(
  "/job/change_status",
  auth.verifyToken,
  //recuiter_middleware.verifyRecuiter,
  controller.changeJobstatus
);
router.get("/jobs", auth.verifyToken, controller.getAllJobs);
router.post("/job/apply", auth.verifyToken, controller.applyForJob);
router.get(
  "/applicants",
  auth.verifyToken,
  //.verifyRecuiter,
  controller.getAllApplicants
);
module.exports = router;
