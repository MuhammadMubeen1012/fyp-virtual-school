const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");
const {
  createCourse,
  getCourseByCourseID,
  updateCourse,
  deleteCourse,
} = require("../../controllers/Classroom/courseController");

//routes
router.route("/course").post(isAuthenticatedUser, isAdmin, createCourse);
router
  .route("/course/:id")
  .get(isAuthenticatedUser, isAdmin, getCourseByCourseID);
router.route("/course/:id").put(isAuthenticatedUser, isAdmin, updateCourse);

router.route("/course/:id").delete(isAuthenticatedUser, isAdmin, deleteCourse);

module.exports = router;
