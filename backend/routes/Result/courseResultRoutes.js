const express = require("express");
const router = express.Router();

const {
  compileCourseResult,
  getResultsByCourse,
  getResultByStudentAndCourse,
  publishResult,
} = require("../../controllers/Result/courseResultController");
const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");

router
  .route("/result/:courseID")
  .post(isAuthenticatedUser, compileCourseResult);

router.route("/results/:courseID").get(isAuthenticatedUser, getResultsByCourse);
router
  .route("/result/:courseID/:studentID")
  .get(isAuthenticatedUser, getResultByStudentAndCourse);

router.route("/result/:courseID").put(isAuthenticatedUser, publishResult);

module.exports = router;
