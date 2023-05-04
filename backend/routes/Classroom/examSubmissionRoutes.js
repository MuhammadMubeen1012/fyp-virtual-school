const express = require("express");
const router = express.Router();

const {
  isAuthenticatedUser,
  isAdmin,
  isTeacher,
} = require("../../middlewares/auth");
const {
  submitExam,
  getSubmissionByStudent,
  getSubmissionsByExam,
  gradeExamSubmission,
} = require("../../controllers/Classroom/examSubmissionController");

router.route("/submit/exam/:examID").post(isAuthenticatedUser, submitExam);

// GET /submit/exam/:studentID
router
  .route("/submit/exam/:studentID")
  .get(isAuthenticatedUser, getSubmissionByStudent);

// @route GET /submit/exam/:examID
router
  .route("/submit/exam/:examID")
  .get(isAuthenticatedUser, getSubmissionsByExam);

// @route PUT /grade/exam/:studentID
router
  .route("/grade/exam/:studentID")
  .put(isAuthenticatedUser, gradeExamSubmission);

module.exports = router;
