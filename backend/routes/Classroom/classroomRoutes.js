const express = require("express");
const router = express.Router();

const { isAdmin, isAuthenticatedUser } = require("../../middlewares/auth");
const {
  createClassroom,
  getClassroomsByAcademicYear,
  getClassroomByID,
  updateClassroom,
  deleteClassroom,
  getStudentsByClass,
  getTeachersByClass,
  getCoursesByClass,
} = require("../../controllers/Classroom/classController");

//routes
router.route("/classroom").post(isAuthenticatedUser, isAdmin, createClassroom);
router
  .route("/academicYear/classrooms/:id")
  .get(isAuthenticatedUser, isAdmin, getClassroomsByAcademicYear);
router
  .route("/classroom/:id")
  .get(isAuthenticatedUser, isAdmin, getClassroomByID);

router
  .route("/classroom/:id")
  .put(isAuthenticatedUser, isAdmin, updateClassroom);

router
  .route("/classroom/:id")
  .delete(isAuthenticatedUser, isAdmin, deleteClassroom);

router
  .route("/classroom/students/:id")
  .get(isAuthenticatedUser, isAdmin, getStudentsByClass);

router
  .route("/classroom/teachers/:id")
  .get(isAuthenticatedUser, isAdmin, getTeachersByClass);

router
  .route("/classroom/courses/:id")
  .get(isAuthenticatedUser, isAdmin, getCoursesByClass);

module.exports = router;
