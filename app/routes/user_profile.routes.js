const express = require("express");
const app = express();
const router = express.Router();
const auth = require("../middleware/authJWT");
const controller = require("../controllers/profileController");

router.post("/create", auth.verifyToken, controller.createUserProfile);

module.exports = router;
