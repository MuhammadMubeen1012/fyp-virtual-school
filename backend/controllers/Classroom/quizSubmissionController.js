const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Quiz = require("../../models/Classroom/Quiz");
const Course = require("../../models/Classroom/Course");
const Student = require("../../models/student");
const QuizSubmission = require("../../models/Classroom/quizSubmission");
const ErrorHandler = require("../../utils/errorHandler");

// @def submit quiz
// @route POST /submit/quiz/:quizID
exports.submitQuiz = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.quizID);
  //  console.log("quiz: ", quiz);
  const course = await Course.findOne({ lessons: { $in: quiz.lesson } });
  //  console.log("course: ", course);
  const student = await Student.findOne({ user: req.user._id });
  //  console.log("student: ", student);

  const data = req.body;
  let quizSubmission;

  if (quiz && course && student) {
    quizSubmission = await QuizSubmission.create({
      course: course._id,
      quizID: quiz._id,
      studentID: student._id,
      quizAnswers: data.quizAnswers,
    });
  } else {
    return next(new ErrorHandler("No data available", 400));
  }

  if (quizSubmission) {
    await gradeQuizSubmission(quizSubmission._id);
    res.status(200).json({
      success: true,
      message: "Quiz submission successfully",
      submission: quizSubmission,
    });
  }
});

// @def grade Quiz Submission
async function gradeQuizSubmission(submissionID) {
  const submission = await QuizSubmission.findById(submissionID);
  console.log(submission);
  const quiz = await Quiz.findById(submission.quizID);
  console.log(quiz);

  if (submission && quiz) {
    for (let i = 0; i < submission.quizAnswers.length; i++) {
      if (submission.quizAnswers[i] === quiz.questions[i].questionAnswer) {
        submission.obtainedMarks += 1;
      }
    }
    await submission.save();
  }
}
