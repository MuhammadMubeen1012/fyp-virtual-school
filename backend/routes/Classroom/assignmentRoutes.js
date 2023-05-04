const express = require("express");
const router = express.Router();

const { isAdmin, isAuthenticatedUser } = require("../../middlewares/auth");
const {
  createAssignment,
  updateAssignment,
  deleteAssignment,
  getAssignmentsByLesson,
} = require("../../controllers/Classroom/assignmentController");

router
  .route("/assignment/:lessonID")
  .post(isAuthenticatedUser, createAssignment);

router
  .route("/assignment/update/:assignmentID")
  .put(isAuthenticatedUser, updateAssignment);

router
  .route("/assignment/delete/:assignmentID")
  .delete(isAuthenticatedUser, deleteAssignment);

router
  .route("/assignment/:lessonID")
  .get(isAuthenticatedUser, getAssignmentsByLesson);

module.exports = router;
