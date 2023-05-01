// @def compile classroom Result
// @route POST /result/:classroomID
exports.compileClassResult = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Class Result Compiled",
  });
});

// @def get results by classroom
// @route GET /results/:classroomID
exports.getResultsByClassroom = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Classroom Results",
  });
});

// @def get result by student and classroom
// @route GET /result/:classroomID/:studentID
exports.compileCourseResult = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Course Result Compiled",
  });
});

// @def publish Result
// @route GET /result/:classroomID
exports.compileCourseResult = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Course Result Compiled",
  });
});
