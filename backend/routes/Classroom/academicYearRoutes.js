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
router
  .route("/academicYear")
  .post(isAuthenticatedUser, isAdmin, createAcademicYear);

router
  .route("/academicYear")
  .get(isAuthenticatedUser, isAdmin, getAcademicYears);

router
  .route("/academicYear/:id")
  .put(isAuthenticatedUser, isAdmin, updateAcademicYear);

router
  .route("/academicYear/:id")
  .delete(isAuthenticatedUser, isAdmin, deleteAcademicYear);

module.exports = router;
