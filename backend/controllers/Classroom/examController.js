const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Classroom = require("../../models/Classroom/Classroom");
const Course = require("../../models/Classroom/Course");
const Exam = require("../../models/Classroom/Exam");
const ObjectiveExam = require("../../models/Classroom/ObjectiveExam");
const SubjectiveExam = require("../../models/Classroom/SubjectiveExam");
const user = require("../../models/user");
const ErrorHandler = require("../../utils/errorHandler");

//features
// create exam along with subjective and objective exam
// updates
// delete
// getExam getSubjectiveExam getObjectiveExam

//@desc creating a new exam for course
//@routes POST /exam/:courseID
exports.createExam = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.courseID);
  const classroom = await Classroom.findById(course.classroom);

  const data = req.body;

  const exam = await Exam.create({
    name: data.name,
    description: data.description,
    course: req.params.courseID,
    classroom: course.classroom,
    passMarks: data.passMarks,
    totalMarks: data.totalMarks,
    academicYear: classroom.academicYear,
    duration: data.duration,
    examDate: data.examDate,
    examTime: data.examTime,
    examStatus: data.examStatus,
    examSection: data.examSection,
    createdBy: req.user._id,
  });

  res.status(200).json({
    success: true,
    message: "Exam created successfully",
    exam,
  });
});

//@desc creating a new exam for course
//@routes POST /exam/:examID
exports.createSubjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const exam = await Exam.findById(req.params.examID);

  const data = req.body;

  const subjectiveExam = await SubjectiveExam.create({
    exam: exam._id,
    parts: req.body.parts,
  });

  res.status(200).json({
    success: true,
    message: "Exam created successfully",
    subjectiveExam,
  });
});

//@desc creating a new exam for course
//@routes POST /exam/:examId
exports.createObjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const exam = await Exam.findById(req.params.examID);

  const objectiveExam = await ObjectiveExam.create({
    exam: exam._id,
    questions: req.body.questions,
  });

  res.status(200).json({
    success: true,
    message: "Exam created successfully",
    objectiveExam,
  });
});

//@desc updating the exam
//@route PUT /exam/:examID
exports.updateExam = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
    passMarks: req.body.passMarks,
    totalMarks: req.body.totalMarks,
    duration: req.body.duration,
    examDate: req.body.examDate,
    examTime: req.body.examTime,
    examStatus: req.body.examStatus,
    examSection: req.body.examSection,
  };

  const exam = await Exam.findByIdAndUpdate(req.params.examID, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    exam,
  });
});

//@desc updating the subjective exam
//@route PUT /exam/subjectiveExam/:examID/:index
exports.updateSubjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const subExam = await SubjectiveExam.findOne({ exam: req.params.examID });

  subExam.parts = req.body.parts;

  console.log(subExam);

  await subExam.save();

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    subExam,
  });
});

//@desc updating the objective exam
//@route PUT /exam/objectiveExam/:examID/:index
exports.updateObjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const objExam = await ObjectiveExam.findOne({ exam: req.params.examID });

  console.log(objExam);
  objExam.questions[req.params.index] = req.body.question;

  await objExam.save();

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    objExam,
  });
});

//@desc delete the exam
//@route DELETE /exam/:examID
exports.deleteExam = catchAsyncErrors(async (req, res, next) => {
  const exam = await Exam.findById(req.params.examID);

  if (!exam) {
    return next(
      new ErrorHandler(`Exam does not found with id: ${req.params.examID}`)
    );
  }

  await exam.remove();

  res.status(200).json({
    success: true,
  });
});

//@desc deleting the subjective exam
//@route DELETE /exam/subjectiveExam/:examID
exports.deleteSubjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const subExam = await SubjectiveExam.findById(req.params.examID);

  if (!subExam) {
    return next(
      new ErrorHandler(`Exam does not found with id: ${req.params.examID}`)
    );
  }

  await subExam.remove();

  res.status(200).json({
    success: true,
  });
});

//@desc deleting the objective exam
//@route DELETE /exam/objectiveExam/:examID
exports.deleteObjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const objExam = await ObjectiveExam.findById(req.params.examID);

  if (!objExam) {
    return next(
      new ErrorHandler(`Exam does not found with id: ${req.params.examID}`)
    );
  }

  await objExam.remove();

  res.status(200).json({
    success: true,
  });
});

//@desc get the exam
//@route GET /exam/:examID
exports.getExam = catchAsyncErrors(async (req, res, next) => {
  const exam = await Exam.findById(req.params.examID);

  if (!exam) {
    return next(
      new ErrorHandler(`Exam does not found with id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    exam,
  });
});

//@desc getting the subjective exam
//@route GET /exam/subjectiveExam/:examID
exports.getSubjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const subExam = await SubjectiveExam.findOne({ exam: req.params.examID });

  if (!subExam) {
    return next(
      new ErrorHandler(`Exam does not found with id: ${req.params.examID}`)
    );
  }

  res.status(200).json({
    success: true,
    subExam,
  });
});

//@desc getting the objective exam
//@route GET /exam/objectiveExam/:examID
exports.getObjectiveExam = catchAsyncErrors(async (req, res, next) => {
  const objExam = await ObjectiveExam.findOne({ exam: req.params.examID });

  if (!objExam) {
    return next(
      new ErrorHandler(`Exam does not found with id: ${req.params.examID}`)
    );
  }

  res.status(200).json({
    success: true,
    objExam,
  });
});
