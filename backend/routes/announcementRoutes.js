const express = require("express");
const router = express.Router();

const {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
  getSingleAnnouncement,
  updateAnnouncement,
} = require("../controllers/announcementController");

const {
  isAuthenticatedUser,
  isAdmin,
  isTeacher,
} = require("../middlewares/auth");

//routes
// router
//   .route("/admins/announcements")
//   .post(isAuthenticatedUser, createAnnouncement);

router.route("/announcement").post(isAuthenticatedUser, createAnnouncement);

router.route("/announcements").get(isAuthenticatedUser, getAnnouncements);

router
  .route("/announcement/:id")
  .get(isAuthenticatedUser, getSingleAnnouncement);

router
  .route("/delete/announcement/:id")
  .delete(isAuthenticatedUser, deleteAnnouncement);

router
  .route("/update/announcement/:id")
  .put(isAuthenticatedUser, updateAnnouncement);

module.exports = router;
