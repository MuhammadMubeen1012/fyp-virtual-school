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
router.route("/lesson/:id").post(isAuthenticatedUser, isAdmin, createLesson);
router
  .route("/lesson/create/content/:id")
  .put(isAuthenticatedUser, isAdmin, createContent);

router.route("/lesson/:id").put(isAuthenticatedUser, isAdmin, updateLesson);
router
  .route("/lesson/update/content/:id")
  .put(isAuthenticatedUser, isAdmin, updateContent);

router.route("/lesson/:id").delete(isAuthenticatedUser, isAdmin, deleteLesson);
router
  .route("/lesson/delete/content/:id")
  .delete(isAuthenticatedUser, isAdmin, deleteContent);

router
  .route("/lesson/:id")
  .get(isAuthenticatedUser, isAdmin, getLessonsByCourseID);

router
  .route("/lesson/content/:id")
  .get(isAuthenticatedUser, isAdmin, getcontentByLessonID);

module.exports = router;
