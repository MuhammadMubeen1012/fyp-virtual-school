const express = require("express");
const router = express.Router();

const {
  compileClassResult,
  getResultsByClassroom,
  getResultByStudent,
  publishClassroomResult,
} = require("../../controllers/Result/classroomResultController");
const { isAuthenticatedUser, isAdmin } = require("../../middlewares/auth");

router
  .route("/result/classroom/:classroomID")
  .post(isAuthenticatedUser, compileClassResult);

router
  .route("/results/classroom/:classroomID")
  .get(isAuthenticatedUser, getResultsByClassroom);

router
  .route("/result/classroom/:classroomID/:studentID")
  .get(isAuthenticatedUser, getResultByStudent);

router
  .route("/result/classroom/publish/:classroomID")
  .put(isAuthenticatedUser, publishClassroomResult);

module.exports = router;
