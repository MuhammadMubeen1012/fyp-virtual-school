const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  createAttendance,
  addStudent,
  viewAttendance,
  saveAttendance,
  getAttendanceByCourse,
  getAttendanceByCourseAndStudent,
  updateAttendance,
} = require("../../controllers/Attendance/attendanceController");

router
  .route("/attendance/:courseID")
  .post(isAuthenticatedUser, isAdmin, createAttendance);

// //test routes
// router
//   .route("/student/:classroomID")
//   .put(isAuthenticatedUser, isAdmin, addStudent);

router
  .route("/attendance/:attendanceID")
  .get(isAuthenticatedUser, isAdmin, viewAttendance);

router
  .route("/attendance/:attendanceID")
  .put(isAuthenticatedUser, isAdmin, saveAttendance);

router
  .route("/attendance/course/:courseID")
  .get(isAuthenticatedUser, isAdmin, getAttendanceByCourse);

router
  .route("/attendance/:courseID/:studentID")
  .get(isAuthenticatedUser, isAdmin, getAttendanceByCourseAndStudent);

router
  .route("/attendance/update/:attendanceID")
  .put(isAuthenticatedUser, isAdmin, updateAttendance);

module.exports = router;
