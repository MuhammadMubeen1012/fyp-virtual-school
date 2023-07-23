const express = require("express");
const router = express.Router();

const { isAuthenticatedUser} = require("../../middlewares/auth");
const { createRC, getRCByLessonID, updateRC, deleteRC } = require("../../controllers/Classroom/readingComprehensionController");

router.route("/readingcomprehension/:lessonID").post(createRC);
router.route("/readingcomprehension/:lessonID").get(getRCByLessonID);
router.route("/readingcomprehension/:id").put(updateRC);
router.route("/readingcomprehension/:id").delete(deleteRC);


module.exports = router;
