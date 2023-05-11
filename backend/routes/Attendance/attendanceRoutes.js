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
  getAttendance,
} = require("../../controllers/Attendance/attendanceController");

router
  .route("/attendance/:courseID")
  .post(isAuthenticatedUser, createAttendance);

// //test routes
// router
//   .route("/student/:classroomID")
//   .put(isAuthenticatedUser, isAdmin, addStudent);

router
  .route("/attendance/:attendanceID")
  .get(isAuthenticatedUser, viewAttendance);

router
  .route("/attendance/:attendanceID")
  .put(isAuthenticatedUser, saveAttendance);

router
  .route("/attendance/course/:courseID")
  .get(isAuthenticatedUser, getAttendanceByCourse);

router
  .route("/attendance/:courseID/:studentID")
  .get(isAuthenticatedUser, getAttendanceByCourseAndStudent);

router
  .route("/attendance/update/:attendanceID")
  .put(isAuthenticatedUser, updateAttendance);

router
  .route("/attendance/:attendanceID")
  .get(isAuthenticatedUser, getAttendance);

module.exports = router;
