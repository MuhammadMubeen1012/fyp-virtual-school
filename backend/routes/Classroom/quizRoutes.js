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
router.route("/quiz/:lessonID").post(isAuthenticatedUser, isAdmin, createQuiz);
router
  .route("/quiz/questions/:id")
  .put(isAuthenticatedUser, isAdmin, addQuestionsToTheQuiz);

router
  .route("/quiz/:lessonID")
  .get(isAuthenticatedUser, isAdmin, getQuizByLessonID);

router.route("/quiz/:quizID").delete(isAuthenticatedUser, isAdmin, deleteQuiz);

router.route("/quiz/:id").put(isAuthenticatedUser, isAdmin, updateQuizDetails);
router
  .route("/quiz/questions/:quizID")
  .delete(isAuthenticatedUser, isAdmin, deleteQuizQuestions);

router
  .route("/quiz/questions/update/:quizID")
  .put(isAuthenticatedUser, isAdmin, updateQuizQuestions);
module.exports = router;
