const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");

// @def compile course Result
// @route POST /result/:courseID
exports.compileCourseResult = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Course Result Compiled",
  });
});

// @def get results by courses
// @route GET /results/:courseID
exports.getResultsByCourse = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Results retrieved successfully",
  });
});

// @def get result by student and course
// @route GET /result/:courseID/:studentID
exports.getResultByStudentAndCourse = catchAsyncErrors(
  async (req, res, next) => {
    res.status(200).json({
      success: true,
      result: "Result",
    });
  }
);

// @def publish Result
// @route GET /result/:courseID
exports.publishResult = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Result published successfully",
  });
});
