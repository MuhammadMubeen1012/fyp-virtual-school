const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Assignment = require("../../models/Classroom/Assignment");
const Submission = require("../../models/Classroom/Submission");
const Student = require("../../models/student");

// @def uploadAssignment (submission)
// @route POST /submission/:assignmentID
exports.submitAssignment = catchAsyncErrors(async (req, res, next) => {
  const assignment = await Assignment.findById(req.params.assignmentID);
  //passing hardcoded ID as it is only for student to submit asisgnment when it is login,
  //in production mode, use req.user._id

  const student = await Student.findOne({ user: "64061f80c1d1638f3086c6a7" });
  console.log(Student);
  const data = req.body;
  let isOverDue = false;

  if (Date.now() > assignment.deadLine) {
    isOverDue = true;
  }

  const submission = await Submission.create({
    course: assignment.course,
    lesson: assignment.lesson,
    assignment: assignment._id,
    fileName: data.fileName,
    fileLink: data.fileLink,
    submittedBy: "64061f80c1d1638f3086c6a7",
    submittedByName: "Mubeen",
    isOverDue: isOverDue,
  });

  if (submission) {
    assignment.submissions.push(submission._id);

    res.status(200).json({
      success: true,
      message: "Assignment submitted successfully",
      submission: submission,
    });
  }
});

// @def update submission
// @route PUT /submission/:assignmentID
exports.updateSubmission = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    fileName: req.body.fileName,
    fileLink: req.body.fileLink,
  };

  const updatedSubmission = await Submission.findOneAndUpdate(
    req.params.assignmentID,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  if (updatedSubmission) {
    res.status(200).json({
      message: "Assignment submission updated successfully",
    });
  }
});

// @def get submission by assignmentID
// @route GET /submission/:assignmentID/:studentID
exports.getSubmissionByAssignment = catchAsyncErrors(async (req, res, next) => {
  const submission = await Submission.findOne({
    assignment: req.params.assignmentID,
    submittedBy: "64061f80c1d1638f3086c6a7",
  });

  if (submission) {
    res.status(200).json({
      success: true,
      submission: submission,
    });
  }
});

// @def get all submissions by assignmentID
// @route GET /submission/:assignmentID/
exports.getAllSubmissions = catchAsyncErrors(async (req, res, next) => {
  const submissions = await Submission.find({
    assignment: req.params.assignmentID,
  });

  if (submissions) {
    res.status(200).json({
      success: true,
      submission: submissions,
    });
  }
});

// @def grade submission
// @route /grade/submission/:assignmentID/:studentID
exports.gradeSubmission = catchAsyncErrors(async (req, res, next) => {
  const submission = await Submission.findOne({
    assignment: req.params.assignmentID,
    submittedBy: req.params.studentID,
  });

  const data = req.body;

  if (submission) {
    submission.obtainedMarks = data.obtainedMarks;
    submission.checkedAt = Date.now();
    submission.checked = true;
    await submission.save();
  }

  res.status(200).json({
    success: true,
    message: "Graded Successfully",
    submission: submission,
  });
});
