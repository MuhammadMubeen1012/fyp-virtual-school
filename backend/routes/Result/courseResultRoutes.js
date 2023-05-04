const express = require("express");
const router = express.Router();

const {
  compileCourseResult,
} = require("../../controllers/Result/courseResultController");
const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");

router
  .route("/result/:courseID")
  .post(isAuthenticatedUser, compileCourseResult);
module.exports = router;
