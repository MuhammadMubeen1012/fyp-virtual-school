const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  submitAssignment,
  updateSubmission,
  getSubmissionByAssignment,
  getAllSubmissions,
  gradeSubmission,
} = require("../../controllers/Classroom/submissionController");

router
  .route("/submission/:assignmentID")
  .post(isAuthenticatedUser, submitAssignment);
router
  .route("/submission/:assignmentID")
  .put(isAuthenticatedUser, updateSubmission);

router
  .route("/submission/:assignmentID")
  .get(isAuthenticatedUser, getSubmissionByAssignment);

router
  .route("/submissions/:assignmentID")
  .get(isAuthenticatedUser, getAllSubmissions);

router
  .route("/grade/submission/:assignmentID/:studentID")
  .put(isAuthenticatedUser, gradeSubmission);

module.exports = router;
