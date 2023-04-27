const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  createExam,
  createSubjectiveExam,
  createObjectiveExam,
  updateExam,
  updateSubjectiveExam,
  updateObjectiveExam,
  deleteExam,
  deleteSubjectiveExam,
  deleteObjectiveExam,
  getExam,
  getSubjectiveExam,
  getObjectiveExam,
} = require("../../controllers/Classroom/examController");

router.route("/exam/:courseID").post(isAuthenticatedUser, isAdmin, createExam);
router
  .route("/exam/subjective/:examID")
  .post(isAuthenticatedUser, isAdmin, createSubjectiveExam);

router
  .route("/exam/objective/:examID")
  .post(isAuthenticatedUser, isAdmin, createObjectiveExam);

router
  .route("/exam/update/:examID")
  .put(isAuthenticatedUser, isAdmin, updateExam);

router
  .route("/exam/subjectiveExam/update/:examID")
  .put(isAuthenticatedUser, isAdmin, updateSubjectiveExam);

router
  .route("/exam/objectiveExam/update/:examID/:index")
  .put(isAuthenticatedUser, isAdmin, updateObjectiveExam);

router.route("/exam/:examID").delete(isAuthenticatedUser, isAdmin, deleteExam);

router
  .route("/exam/subjectiveExam/:examID")
  .delete(isAuthenticatedUser, isAdmin, deleteSubjectiveExam);

router
  .route("/exam/objectiveExam/:examID")
  .delete(isAuthenticatedUser, isAdmin, deleteObjectiveExam);

router.route("/exam/:examID").get(isAuthenticatedUser, isAdmin, getExam);

router
  .route("/exam/subjectiveExam/:examID")
  .get(isAuthenticatedUser, isAdmin, getSubjectiveExam);

router
  .route("/exam/objectiveExam/:examID")
  .get(isAuthenticatedUser, isAdmin, getObjectiveExam);

module.exports = router;
