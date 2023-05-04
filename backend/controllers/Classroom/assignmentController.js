const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Lesson = require("../../models/Classroom/Lesson");
const Assignment = require("../../models/Classroom/Assignment");

// features
// create, update, delete Assignment, getAssignmentByLessonID

// @desc creating new assignment for some lesson
// @route POST /assignment/:lessonId
exports.createAssignment = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.lessonID);

  const data = req.body;

  const assignment = await Assignment.create({
    name: data.name,
    description: data.description,
    fileName: data.fileName,
    fileLink: data.fileLink,
    totalMarks: data.totalMarks,
    deadLine: data.deadLine,
    course: lesson.course,
    lesson: lesson._id,
    createdBy: req.user._id,
  });

  if (assignment) {
    lesson.assignments.push(assignment._id);
    await lesson.save();
  }

  res.status(200).json({
    success: true,
    message: "Assignment created successfully",
  });
});

//@desc updating assignment details
//@route PUT /assignment/:lessonID/:assignmentID
exports.updateAssignment = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
    fileName: req.body.fileName,
    fileLink: req.body.fileLink,
    totalMarks: req.body.totalMarks,
    deadLine: req.body.deadLine,
    lastUpdated: Date.now(),
  };

  //const lesson = await Lesson.findById(req.params.lessonID);

  const assignment = await Assignment.findOneAndUpdate(
    req.params.assignmentID,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    assignment,
  });
});

// @desc delete the assignement data.
// @route DELETE /assignment/:assignmentID
exports.deleteAssignment = catchAsyncErrors(async (req, res, next) => {
  const assignment = await Assignment.findById(req.params.assignmentID);

  if (!assignment) {
    return next(
      new ErrorHandler(`Assignment does not found with id: ${req.params.id}`)
    );
  }

  await assignment.remove();

  res.status(200).json({
    success: true,
  });
});

// @desc get assignments by lesson
// @route GET /assignments/:lessonID
exports.getAssignmentsByLesson = catchAsyncErrors(async (req, res, next) => {
  const assignment = await Assignment.find({ lesson: req.params.lessonID });

  if (assignment) {
    res.status(200).json({
      success: true,
      assignments: assignment,
    });
  } else {
    return next(
      new ErrorHandler(`Assignment does not found with id: ${req.params.id}`)
    );
  }
});
