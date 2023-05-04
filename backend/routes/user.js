const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  loggedInUser,
  forgotPassword,
  resetPassword,
  addAdmin,
  getStudentByUserID,
  getTeacherByUserID,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/me").get(isAuthenticatedUser, loggedInUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/addAdmin").post(addAdmin);
router.route("/student").get(isAuthenticatedUser, getStudentByUserID);
router.route("/teacher").get(isAuthenticatedUser, getTeacherByUserID);

module.exports = router;
