const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  createQuiz,
  addQuestionsToTheQuiz,
  getQuizByLessonID,
  deleteQuiz,
  updateQuizDetails,
  deleteQuizQuestions,
  updateQuizQuestions,
} = require("../../controllers/Classroom/quizController");

//routes
router.route("/quiz/:lessonID").post(isAuthenticatedUser, createQuiz);
router
  .route("/quiz/questions/:id")
  .put(isAuthenticatedUser, addQuestionsToTheQuiz);

router.route("/quiz/:lessonID").get(isAuthenticatedUser, getQuizByLessonID);

router.route("/quiz/:quizID").delete(isAuthenticatedUser, deleteQuiz);

router.route("/quiz/:id").put(isAuthenticatedUser, updateQuizDetails);
router
  .route("/quiz/questions/:quizID")
  .delete(isAuthenticatedUser, deleteQuizQuestions);

router
  .route("/quiz/questions/update/:quizID")
  .put(isAuthenticatedUser, updateQuizQuestions);
module.exports = router;
