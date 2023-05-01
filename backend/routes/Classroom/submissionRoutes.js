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
  .post(isAuthenticatedUser, isAdmin, submitAssignment);
router
  .route("/submission/:assignmentID")
  .put(isAuthenticatedUser, isAdmin, updateSubmission);

router
  .route("/submission/:assignmentID")
  .get(isAuthenticatedUser, isAdmin, getSubmissionByAssignment);

router
  .route("/submissions/:assignmentID")
  .get(isAuthenticatedUser, isAdmin, getAllSubmissions);

router
  .route("/grade/submission/:assignmentID/:studentID")
  .put(isAuthenticatedUser, isAdmin, gradeSubmission);

module.exports = router;
