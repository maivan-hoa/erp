const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router.route("/login").post(AuthController.login);

module.exports = router;
