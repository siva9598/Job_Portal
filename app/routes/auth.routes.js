//const { verifySignUp } = require("../middleware");
const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/authController");
router.post(
  "/signup",
  // [
  //   verifySignUp.checkDuplicateUsernameOrEmail
  // ],
  controller.signUp
);
router.post("/signin", controller.signIn);
module.exports = router;
