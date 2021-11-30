//const { verifySignUp } = require("../middleware");
const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/authController");
const auth = require("../middleware/authJWT");

router.post(
  "/signup",
  // [
  //   verifySignUp.checkDuplicateUsernameOrEmail
  // ],
  controller.signUp
);
router.post("/signin", controller.signIn);
router.patch("/create_recuiter", auth.verifyToken, controller.createRecuiter);
module.exports = router;
