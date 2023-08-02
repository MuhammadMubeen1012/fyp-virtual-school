const express = require("express");
const router = express.Router();

const { isAuthenticatedUser } = require("../../middlewares/auth");
const { submitRC, gradeRCSubmission, getRCSubmissions, getRCSubmission } = require("../../controllers/Classroom/rcSubmissionController");

router.route("/submit/readingcomprehension/:id").post(isAuthenticatedUser,submitRC);
router.route("/grade/readingcomprehension/:submissionID").put(gradeRCSubmission);

router
  .route("/submissions/readingcomprehension/:lessonID")
  .get(getRCSubmissions);

router
  .route("/submission/readingcomprehension/:lessonID")
  .get(getRCSubmission);


module.exports = router;
