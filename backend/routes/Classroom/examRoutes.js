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

router.route("/exam/:courseID").post(isAuthenticatedUser, createExam);
router
  .route("/exam/subjective/:examID")
  .post(isAuthenticatedUser, createSubjectiveExam);

router
  .route("/exam/objective/:examID")
  .post(isAuthenticatedUser, createObjectiveExam);

router.route("/exam/update/:examID").put(isAuthenticatedUser, updateExam);

router
  .route("/exam/subjectiveExam/update/:examID")
  .put(isAuthenticatedUser, updateSubjectiveExam);

router
  .route("/exam/objectiveExam/update/:examID")
  .put(isAuthenticatedUser, updateObjectiveExam);

router.route("/exam/:examID").delete(isAuthenticatedUser, deleteExam);

router
  .route("/exam/subjectiveExam/:examID")
  .delete(isAuthenticatedUser, deleteSubjectiveExam);

router
  .route("/exam/objectiveExam/:examID")
  .delete(isAuthenticatedUser, deleteObjectiveExam);

router.route("/exam/:examID").get(isAuthenticatedUser, getExam);

router
  .route("/exam/subjectiveExam/:examID")
  .get(isAuthenticatedUser, getSubjectiveExam);

router
  .route("/exam/objectiveExam/:examID")
  .get(isAuthenticatedUser, getObjectiveExam);

module.exports = router;
