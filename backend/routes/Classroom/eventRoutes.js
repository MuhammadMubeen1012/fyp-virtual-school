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
router.route("/event/:id").post(isAuthenticatedUser, createEvent);

router.route("/event/:id").put(isAuthenticatedUser, updateEvent);

router.route("/event/:id").delete(isAuthenticatedUser, deleteEvent);

router.route("/event/:lessonID").get(isAuthenticatedUser, getEventByLessonID);

router.route("/events/:classID").get(isAuthenticatedUser, getAllEvents);
module.exports = router;
