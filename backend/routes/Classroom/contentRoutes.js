const express = require("express");
const router = express.Router();

const { isAuthenticatedUser } = require("../../middlewares/auth");
const {
  createContent,
  updateContent,
  getcontents,
  deleteContent,
} = require("../../controllers/Classroom/contentController");

router.route("/content/:lessonID").post(isAuthenticatedUser, createContent);
router.route("/content/:lessonID").get(isAuthenticatedUser, getcontents);
router.route("/content/:contentID").put(isAuthenticatedUser, updateContent);
router.route("/content/:contentID").delete(isAuthenticatedUser, deleteContent);

module.exports = router;
