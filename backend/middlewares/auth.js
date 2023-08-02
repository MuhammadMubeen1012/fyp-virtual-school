const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/user");

//checking the authenticated user
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const {token}  = req.cookies;
  // const token = req.headers.authorization;
  console.log(req.headers);

  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }

  //verifying token whether it is correct or not
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});

exports.isAdmin = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne(req.user._id);

  if (user.role === "admin") {
    next();
  } else {
    return next(
      new ErrorHandler(
        "No rights for this resource, teacher or admin only",
        401
      )
    );
  }
});

exports.isTeacher = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne(req.user._id);

  if (user.role === "teacher") {
    next();
  } else {
    return next(
      new ErrorHandler(
        "No rights for this resource, teacher or admin only",
        401
      )
    );
  }
});
