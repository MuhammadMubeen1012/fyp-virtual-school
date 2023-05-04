const express = require("express");
const router = express.Router();

const {
  addStudent,
  addTeacher,
  getTestQuestions,
  submitAndAssessTeacherTest,
  submitAndAssessStudentTest,
  enrollStudentInClass,
  enrollTeacherInClassAndCourses,
} = require("../controllers/admissionController");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/admission/student/data").post(isAuthenticatedUser, addStudent);
router.route("/admission/teacher/data").post(isAuthenticatedUser, addTeacher);

router
  .route("/admission/studentandteacher/test")
  .get(isAuthenticatedUser, getTestQuestions);

router
  .route("/admission/student/submit/test")
  .post(isAuthenticatedUser, submitAndAssessStudentTest);

router
  .route("/admission/teacher/submit/test")
  .post(isAuthenticatedUser, submitAndAssessTeacherTest);

router
  .route("/enroll/student/:classID")
  .put(isAuthenticatedUser, enrollStudentInClass);

router
  .route("/enroll/teacher/:classID")
  .put(isAuthenticatedUser, enrollTeacherInClassAndCourses);

module.exports = router;
