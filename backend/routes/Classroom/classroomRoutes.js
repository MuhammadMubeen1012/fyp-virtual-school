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
router.route("/classroom").post(isAuthenticatedUser, createClassroom);
router
  .route("/academicYear/classrooms/:id")
  .get(isAuthenticatedUser, getClassroomsByAcademicYear);
router.route("/classroom/:id").get(isAuthenticatedUser, getClassroomByID);

router.route("/classroom/:id").put(isAuthenticatedUser, updateClassroom);

router.route("/classroom/:id").delete(isAuthenticatedUser, deleteClassroom);

// router
//   .route("/classroom/students/:id")
//   .get(isAuthenticatedUser, getStudentsByClass);

// router
//   .route("/classroom/teachers/:id")
//   .get(isAuthenticatedUser, getTeachersByClass);

// router
//   .route("/classroom/courses/:id")
//   .get(isAuthenticatedUser, getCoursesByClass);

router.route("/students/:classID").get(isAuthenticatedUser, getStudentsByClass);
router.route("/teachers/:classID").get(isAuthenticatedUser, getTeachersByClass);
router.route("/courses/:classID").get(isAuthenticatedUser, getCoursesByClass);

module.exports = router;
