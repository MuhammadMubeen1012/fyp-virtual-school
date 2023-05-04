const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  createCourse,
  getCourseByCourseID,
  updateCourse,
  deleteCourse,
  getTeacherByID,
} = require("../../controllers/Classroom/courseController");

//routes
router.route("/course").post(isAuthenticatedUser, createCourse);
router.route("/course/:id").get(isAuthenticatedUser, getCourseByCourseID);
router.route("/course/:id").put(isAuthenticatedUser, updateCourse);

router.route("/course/:id").delete(isAuthenticatedUser, deleteCourse);

router.route("/teacher/:teacherID").get(isAuthenticatedUser, getTeacherByID);

module.exports = router;