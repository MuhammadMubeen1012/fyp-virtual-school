const express = require("express");
const router = express.Router();

const { isAdmin, isAuthenticatedUser } = require("../../middlewares/auth");
const {
  createAcademicYear,
  getAcademicYears,
  updateAcademicYear,
  deleteAcademicYear,
} = require("../../controllers/Classroom/academicYearController");

//routes
router.route("/academicYear").post(isAuthenticatedUser, createAcademicYear);

router.route("/academicYear").get(isAuthenticatedUser, getAcademicYears);

router.route("/academicYear/:id").put(isAuthenticatedUser, updateAcademicYear);

router
  .route("/academicYear/:id")
  .delete(isAuthenticatedUser, deleteAcademicYear);

module.exports = router;
