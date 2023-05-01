const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Course = require("../../models/Classroom/Course");
const Classroom = require("../../models/Classroom/Classroom");
const ExamResult = require("../../models/Classroom/ExamResult");
const ExamSubmission = require("../../models/Classroom/ExamSubmission");
const Exam = require("../../models/Classroom/Exam");

//@def compile result
//@route POST /result/exam/:courseID
exports.compileResult = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.courseID);
  const classroom = await Classroom.findById(course.classroom);
  const students = classroom.students;
  const exam = await Exam.findOne({ course: course._id });
  // console.log(course._id);
  // console.log(exam);

  //console.log(students[0]);
  let result;
  let submission;
  let percentage;
  let resultStatus;

  for (let i = 0; i < students.length; i++) {
    submission = await ExamSubmission.findOne({ studentId: students[i] });
    percentage = (submission.obtainedMarks / exam.totalMarks) * 100;

    if (percentage > 50) {
      resultStatus = "passed";
    } else {
      resultStatus = "failed";
    }

    result = await ExamResult.create({
      student: students[i],
      submission: submission._id,
      course: course._id,
      classroom: classroom._id,
      academicYear: classroom.academicYear,
      percentage: percentage,
      status: resultStatus,
      obtainedMarks: submission.obtainedMarks,
    });

    console.log(result);
  }

  res.status(200).json({
    success: true,
    message: "Successfully compiled exam results of all students",
  });
});

//@def publish result by course
//@route PUT /result/exam/:courseID
exports.publishResult = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.courseID);
  const classroom = await Classroom.findById(course.classroom);
  const students = classroom.students;

  const results = await ExamResult.find({ student: { $in: students } });
  // console.log(results);

  for (let result of results) {
    result.isPublished = true;
    await result.save();
  }

  res.status(200).json({
    success: true,
    message: "Result published successfully",
    results: results,
  });
});

//@def update result by student
//@route PUT /result/exam/:studentID
//exports.updateResult = catchAsyncErrors(async (req, res, next) => {});

//@def get result by student ID
//@route GET /result/exam/:studentID
exports.getResultByStudent = catchAsyncErrors(async (req, res, next) => {
  const result = await ExamResult.findOne({ student: req.params.studentID });

  if (result) {
    res.status(200).json({
      success: true,
      result: result,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Result not found with this student ID",
    });
  }
});

//@def get result by course
//@route GET /result/exam/:courseID
exports.getResultByCourse = catchAsyncErrors(async (req, res, next) => {
  const results = await ExamResult.find({ course: req.params.courseID });

  if (results) {
    res.status(200).json({
      success: true,
      results: results,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Results not found with this course ID",
    });
  }
});
