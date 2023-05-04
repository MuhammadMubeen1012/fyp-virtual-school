const User = require("../models/user");
const catchAsyncError = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Teacher = require("../models/teacher");
const Student = require("../models/student");

//function - signup user
//route - /api/v1/signup
exports.signup = catchAsyncError(async (req, res, next) => {
  //getting the signup information
  const { name, email, password } = req.body;

  //creating user
  const user = await User.create({
    name,
    email,
    password,
  });

  //token in response
  sendToken(user, 200, res);
});

// @description add admin
// @route - POST /api/v1/addAdmin

exports.addAdmin = catchAsyncError(async (req, res, next) => {
  //getting the signup information
  const { name, email, password, role } = req.body;

  //creating user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  //token in response
  sendToken(user, 200, res);
});

//function - signin user
//route - /api/v1/signin
exports.signin = catchAsyncError(async (req, res, next) => {
  //getting email and password from req
  const { email, password } = req.body;

  //checking if it is not empty
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email or password", 400));
  }

  //finding/fetch user from DB
  //select is use becuase in our model select is false, we have to use select and +
  const user = await User.findOne({ email }).select("+password");

  //checking if user is not find
  if (!user) {
    return next(new ErrorHandler("Invalid email or password"));
  }

  //on finding user match the password
  const isPasswordMatched = await user.matchPassword(password);

  //matching the password
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid password! Try again", 401));
  }

  sendToken(user, 200, res);
});

//function - signout user
//route - /api/v1/signout
exports.signout = catchAsyncError(async (req, res, next) => {
  //on signout, make token null.
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Sign out Successfully",
  });
});

//get currently logged in user details
//route => /api/v1/me
exports.loggedInUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

//controller for forgot password
//route = /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  //getting user by email for sending password reset email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("No user found with this email", 404));
  }

  //getting token for password reset, token will be sent to email
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //getReset Password URL
  //url will be > http://localhost:7000/api/v1/password/reset/:token
  ///api/v1 is set already
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  //message for sending email
  const message = `
  We heard that you lost your Ek-School password. Sorry about that!
  But don’t worry! You can use the following link to reset your password: \n\n 
  ${resetURL} \n\n 
  If you don’t use this link within 30mins, it will expire. \n\n
  If you did not request this, please ignore this email.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ek-School Password Reset",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent successfull to ${user.email}`,
    });
  } catch (e) {
    //in case error occured, undefined the reset token
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(e.message, 500));
  }
});

//when the reset password link will be sent from the forgotPassword controller,
//following function will be called on directing to the reset link by the user
//route = /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  //creating the hash of the token passed in the param to do comparison with the token stored in the DB
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  //finding that user with the token
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  //checking if user exists
  if (!user) {
    return next(
      new ErrorHandler("Password reset token has been expired or invalid", 400)
    );
  }

  //if user exists

  //checking the passwords
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password not matched", 400));
  }

  //on matched
  user.password = req.body.password;

  //as password is changed, undefine the reset token
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  //save the user with the new password
  await user.save();

  //update the token for the next authentication with the new password
  sendToken(user, 200, res);
});

exports.getStudentByUserID = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ user: req.user._id });

  if (student) {
    res.status(200).json({
      success: true,
      student: student,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No data found with this user",
    });
  }
});

exports.getTeacherByUserID = catchAsyncErrors(async (req, res, next) => {
  // const user = await User.findOne(req.user._id);

  const teacher = await Teacher.findOne({ user: req.user._id });

  if (teacher) {
    res.status(200).json({
      success: true,
      teacher: teacher,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No data found with this user",
    });
  }
});
