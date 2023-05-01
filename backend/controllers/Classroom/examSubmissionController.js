const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Exam = require("../../models/Classroom/Exam");
const ExamSubmission = require("../../models/Classroom/ExamSubmission");
const ObjectiveExam = require("../../models/Classroom/ObjectiveExam");
const Student = require("../../models/student");

// @def submit exam by student
// @route /submit/exam/:examID
exports.submitExam = catchAsyncErrors(async (req, res, next) => {
  const exam = await Exam.findById(req.params.examID);
  const student = await Student.findOne({ user: "64061f80c1d1638f3086c6a7" });

  const data = req.body;

  if (exam && student) {
    const examSubmission = await ExamSubmission.create({
      studentId: student._id,
      examId: exam._id,
      subjectiveAnswers: data.subjectiveAnswers,
      objectiveAnswers: data.objectiveAnswers,
    });

    if (examSubmission) {
      res.status(200).json({
        success: true,
        message: "Successfully submitted",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "No exam found",
    });
  }
});

// @def submission by that student
// @route GET /submit/exam/:studentID
exports.getSubmissionByStudent = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ user: "64061f80c1d1638f3086c6a7" });
  const submission = await ExamSubmission.findOne({ studentId: student._id });

  if (submission) {
    res.status(200).json({
      success: true,
      submission: submission,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No submission found",
    });
  }
});

// @def get all exam submissions by students
// @route GET /submit/exam/:examID
exports.getSubmissionsByExam = catchAsyncErrors(async (req, res, next) => {
  const submissions = await ExamSubmission.find({ examId: req.params.examID });

  if (submission) {
    res.status(200).json({
      success: true,
      submissions: submissions,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No submissions found",
    });
  }
});

// @def grade exam submission
// @route PUT /grade/exam/:studentID
exports.gradeExamSubmission = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ user: "64061f80c1d1638f3086c6a7" });
  const submission = await ExamSubmission.findOne({ studentId: student._id });
  const objectiveExam = await ObjectiveExam.findOne({
    exam: submission.examId,
  });
  const data = req.body;
  console.log(submission);
  console.log(objectiveExam);

  // res.status(200).json({
  //   success: true,
  // });
  if (submission) {
    // console.log(submission.obtainedMarks);
    submission.objectiveMarks = data.objectiveMarks;
    submission.subjectiveMarks = data.subjectiveMarks;

    for (let i = 0; i < data.subjectiveMarks.length; i++) {
      submission.obtainedMarks += data.subjectiveMarks[i];
    }

    for (let i = 0; i < submission.objectiveAnswers.length; i++) {
      if (
        submission.objectiveAnswers[i] ==
        objectiveExam.questions[i].questionAnswer
      ) {
        submission.objectiveMarks[i] = 1;
        submission.obtainedMarks += 1;
      } else {
        submission.objectiveMarks[i] = 0;
      }
    }

    await submission.save();

    res.status(200).json({
      success: true,
      message: "Successfully graded",
      submission: submission,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No submission found",
    });
  }
});
