const express = require("express");
const router = express.Router();

const {
  isAuthenticatedUser,
  isAdmin,
  isTeacher,
} = require("../../middlewares/auth");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEventByLessonID,
  getAllEvents,
} = require("../../controllers/Classroom/eventController");

//id > lesson ID
router.route("/event/:id").post(isAuthenticatedUser, isAdmin, createEvent);

router.route("/event/:id").put(isAuthenticatedUser, isAdmin, updateEvent);

router.route("/event/:id").delete(isAuthenticatedUser, isAdmin, deleteEvent);

router
  .route("/event/:lessonID")
  .get(isAuthenticatedUser, isAdmin, getEventByLessonID);

router
  .route("/events/:classID")
  .get(isAuthenticatedUser, isAdmin, getAllEvents);
module.exports = router;
