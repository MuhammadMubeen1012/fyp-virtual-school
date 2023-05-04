const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Course = require("../../models/Classroom/Course");
const Classroom = require("../../models/Classroom/Classroom");
const Exam = require("../../models/Classroom/Exam");
const ExamResult = require("../../models/Classroom/ExamResult");
const Submission = require("../../models/Classroom/Submission");
const quizSubmission = require("../../models/Classroom/quizSubmission");
const Assignment = require("../../models/Classroom/Assignment");
const Quiz = require("../../models/Classroom/Quiz");
const ExamSubmission = require("../../models/Classroom/ExamSubmission");
const CourseResult = require("../../models/Result/CourseResult");

// @def compile course Result
// @route POST /result/:courseID
exports.compileCourseResult = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.courseID);
  const classroom = await Classroom.findById(course.classroom);
  const students = classroom.students;

  let exam;
  let assignment;
  let quiz;
  let examSubmission;
  let examResult;
  let assignmentResult;
  let quizResult;

  let courseResult;
  let resultObtainedMarks;
  let resultTotalmarks;
  let resultGrade;

  for (let student of students) {
    //for getting grades
    examResult = await ExamResult.findOne({ student: student._id });
    assignmentResult = await Submission.findOne({ submittedBy: student.user });
    quizResult = await quizSubmission.findOne({ studentID: student._id });
    //for total marks
    examSubmission = await ExamSubmission.findById(examResult.submission);
    exam = await Exam.findById(examSubmission.examId);
    assignment = await Assignment.findById(assignmentResult.assignment);
    quiz = await Quiz.findById(quizResult.quizID);

    //compiling marks?
    resultTotalmarks += exam.totalMarks;
    resultTotalmarks += assignment.totalMarks;
    resultTotalmarks += quiz.totalMarks;

    console.log(resultTotalmarks);

    // courseResult = await CourseResult.create({
    //   course: course._id,
    //   classroom: classroom._id,
    //   student: student._id,
    //   academicYear: classroom.academicYear,
    //   createdBy: req.user._id,
    //   obtainedMarks: resultObtainedMarks,
    //   totalMarks: resultTotalmarks,
    //   grade: resultGrade,
    // });

    // console.log(courseResult);
  }

  res.status(200).json({
    success: true,
    message: "Course Result Compiled Successfully",
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
