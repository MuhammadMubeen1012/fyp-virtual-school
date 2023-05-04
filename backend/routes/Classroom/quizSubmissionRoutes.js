const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  submitQuiz,
} = require("../../controllers/Classroom/quizSubmissionController");

router.route("/submit/quiz/:quizID").post(isAuthenticatedUser, submitQuiz);

module.exports = router;
