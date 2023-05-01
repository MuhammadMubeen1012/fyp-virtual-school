const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  compileResult,
  publishResult,
  getResultByStudent,
  getResultByCourse,
} = require("../../controllers/Classroom/examResultController");

router
  .route("/result/exam/:courseID")
  .post(isAuthenticatedUser, isAdmin, compileResult);

router
  .route("/result/exam/:courseID")
  .put(isAuthenticatedUser, isAdmin, publishResult);

router
  .route("/result/exam/student/:studentID")
  .get(isAuthenticatedUser, isAdmin, getResultByStudent);

router
  .route("/result/exam/course/:courseID")
  .get(isAuthenticatedUser, isAdmin, getResultByCourse);

module.exports = router;
