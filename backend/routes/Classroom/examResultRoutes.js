const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  compileResult,
  publishResult,
  getResultByStudent,
  getResultByCourse,
} = require("../../controllers/Classroom/examResultController");

router.route("/result/exam/:courseID").post(isAuthenticatedUser, compileResult);

router.route("/result/exam/:courseID").put(isAuthenticatedUser, publishResult);

router
  .route("/result/exam/student/:studentID")
  .get(isAuthenticatedUser, getResultByStudent);

router
  .route("/results/exam/course/:courseID")
  .get(isAuthenticatedUser, getResultByCourse);

module.exports = router;
