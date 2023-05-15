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
// @route POST /compile/result/:courseID
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
  let resultObtainedMarks = 0;
  let resultTotalmarks = 0;
  let resultGrade = "";

  for (let student of students) {
    //for getting grades
    quizResult = await quizSubmission.findOne({ studentID: student });
    // console.log("Quiz", quizResult.obtainedMarks);
    examResult = await ExamResult.findOne({ student: student });
    // console.log("Exam", examResult.obtainedMarks);
    assignmentResult = await Submission.findOne({ submittedBy: student });
    // console.log("Assignment", assignmentResult.obtainedMarks);

    //till here we can get the obtained marks by the student.

    if (quizResult && examResult && assignmentResult) {
      //for total marks
      examSubmission = await ExamSubmission.findById(examResult.submission);
      // console.log(examSubmission);
      exam = await Exam.findById(examSubmission.examId);
      //console.log(exam);
      assignment = await Assignment.findById(assignmentResult.assignment);
      //console.log(assignment);
      quiz = await Quiz.findById(quizResult.quizID);
      //console.log(quiz);
    } else {
      res.status(200).json({
        success: false,
        message: "Quiz, Assignment or Exam result are not compiled yet",
      });
    }
    // //compiling marks?
    resultObtainedMarks += quizResult.obtainedMarks;
    resultObtainedMarks += examResult.obtainedMarks;
    resultObtainedMarks += assignmentResult.obtainedMarks;

    resultTotalmarks += exam.totalMarks;
    resultTotalmarks += assignment.totalMarks;
    resultTotalmarks += quiz.totalMarks;

    if (resultTotalmarks && resultObtainedMarks) {
      if ((resultObtainedMarks / resultTotalmarks) * 100 > 80) {
        resultGrade = "A";
      } else if ((resultObtainedMarks / resultTotalmarks) * 100 > 70) {
        resultGrade = "B";
      } else if ((resultObtainedMarks / resultTotalmarks) * 100 > 60) {
        resultGrade = "C";
      } else if ((resultObtainedMarks / resultTotalmarks) * 100 > 50) {
        resultGrade = "D";
      } else {
        resultGrade = "F";
      }
    }

    let assignmentGrade = {
      obtainedMarks: assignmentResult.obtainedMarks,
      totalMarks: assignment.totalMarks,
    };

    let quizGrade = {
      obtainedMarks: quizResult.obtainedMarks,
      totalMarks: quiz.totalMarks,
    };

    let examGrade = {
      obtainedMarks: examResult.obtainedMarks,
      totalMarks: exam.totalMarks,
    };

    // console.log("Result Grade", resultGrade);

    if (resultGrade && resultObtainedMarks && resultTotalmarks) {
      courseResult = await CourseResult.create({
        course: course._id,
        classroom: classroom._id,
        student: student,
        academicYear: classroom.academicYear,
        createdBy: course.teacher,
        obtainedMarks: resultObtainedMarks,
        totalMarks: resultTotalmarks,
        assignmentGrade: assignmentGrade,
        quizGrade: quizGrade,
        examGrade: examGrade,
        grade: resultGrade,
      });

      console.log(courseResult);
    }
  }

  res.status(200).json({
    success: true,
    message: "Course Result Compiled Successfully",
  });
});

// @def get results by courses
// @route GET /results/:courseID
exports.getResultsByCourse = catchAsyncErrors(async (req, res, next) => {
  const courseResult = await CourseResult.find({ course: req.params.courseID });

  if (courseResult) {
    res.status(200).json({
      success: true,
      message: "Results retrieved successfully",
      courseResult: courseResult,
    });
  }
});

// @def get result by student and course
// @route GET /result/:courseID/:studentID
exports.getResultByStudentAndCourse = catchAsyncErrors(
  async (req, res, next) => {
    const courseResult = await CourseResult.findOne({
      course: req.params.courseID,
      student: req.params.studentID,
    });

    if (courseResult) {
      res.status(200).json({
        success: true,
        message: "Result retrieved successfully",
        courseResult: courseResult,
      });
    }
  }
);

// @def publish Result
// @route PUT /result/:courseID
exports.publishResult = catchAsyncErrors(async (req, res, next) => {
  const courseResult = await CourseResult.find({ course: req.params.courseID });

  if (courseResult) {
    for (let result of courseResult) {
      result.isLive = true;
      await result.save();
    }

    res.status(200).json({
      success: true,
      message: "Result published successfully",
    });
  }
});
