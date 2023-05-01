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
  .post(isAuthenticatedUser, isAdmin, createAssignment);

router
  .route("/assignment/update/:assignmentID")
  .put(isAuthenticatedUser, isAdmin, updateAssignment);

router
  .route("/assignment/delete/:assignmentID")
  .delete(isAuthenticatedUser, isAdmin, deleteAssignment);

router
  .route("/assignment/:lessonID")
  .get(isAuthenticatedUser, isAdmin, getAssignmentsByLesson);

module.exports = router;
