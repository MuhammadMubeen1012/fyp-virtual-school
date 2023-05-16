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
  submitSubjectiveExam,
  submitObjectiveExam,
} = require("../../controllers/Classroom/examSubmissionController");

router
  .route("/submit/subjective/exam/:examID")
  .post(isAuthenticatedUser, submitSubjectiveExam);

router
  .route("/submit/objective/exam/:examID")
  .put(isAuthenticatedUser, submitObjectiveExam);

// GET /submit/exam/:studentID
router
  .route("/submission/exam/:studentID")
  .get(isAuthenticatedUser, getSubmissionByStudent);

// @route GET /submit/exam/:examID
router
  .route("/submissions/exam/:examID")
  .get(isAuthenticatedUser, getSubmissionsByExam);

// @route PUT /grade/exam/:studentID
router
  .route("/grade/exam/:studentID")
  .put(isAuthenticatedUser, gradeExamSubmission);

module.exports = router;
