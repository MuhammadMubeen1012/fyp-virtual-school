const express = require("express");
const router = express.Router();

const {
  isAuthenticatedUser,
  isAdmin,
  isTeacher,
} = require("../../middlewares/auth");
const {
  createLesson,
  createContent,
  updateLesson,
  updateContent,
  deleteLesson,
  deleteContent,
  getLessonsByCourseID,
  getcontentByLessonID,
} = require("../../controllers/Classroom/lessonController");

//routes
router.route("/lesson/:id").post(isAuthenticatedUser, createLesson);
router
  .route("/lesson/create/content/:id")
  .put(isAuthenticatedUser, createContent);

router.route("/lesson/:id").put(isAuthenticatedUser, updateLesson);
router
  .route("/lesson/update/content/:id")
  .put(isAuthenticatedUser, updateContent);

router.route("/lesson/:id").delete(isAuthenticatedUser, deleteLesson);
router
  .route("/lesson/delete/content/:id")
  .delete(isAuthenticatedUser, deleteContent);

router.route("/lesson/:id").get(isAuthenticatedUser, getLessonsByCourseID);

router
  .route("/lesson/content/:id")
  .get(isAuthenticatedUser, getcontentByLessonID);

module.exports = router;
