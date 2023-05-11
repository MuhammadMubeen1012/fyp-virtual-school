const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  createCourse,
  getCourseByCourseID,
  updateCourse,
  deleteCourse,
  getTeacherByID,
  getStudentByID,
  getCourses,
} = require("../../controllers/Classroom/courseController");

//routes
router.route("/course").post(isAuthenticatedUser, createCourse);
router.route("/course/:id").get(isAuthenticatedUser, getCourseByCourseID);
router.route("/course/:id").put(isAuthenticatedUser, updateCourse);

router.route("/course/:id").delete(isAuthenticatedUser, deleteCourse);

router.route("/teacher/:teacherID").get(isAuthenticatedUser, getTeacherByID);
router.route("/student/:studentID").get(isAuthenticatedUser, getStudentByID);

router.route("/courses").get(isAuthenticatedUser, getCourses);

module.exports = router;
