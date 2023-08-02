const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const ReadingComprehension = require("../../models/Classroom/ReadingComprehension");
const ReadingComprehensionSubmission = require("../../models/Classroom/ReadingComprehensionSubmission");
const Student = require("../../models/student");
const Lesson = require("../../models/Classroom/Lesson")

//features 
// 1-submitReadingComprehension 
// 2-gradeReadingComprehension
// 3-getSubmissions
// 4-getSubmission 

// @def submit rc
// @route POST /submit/readingcomprehension/:id
exports.submitRC = catchAsyncErrors(async (req, res, next) => {
    const rc = await ReadingComprehension.findById(req.params.id);
    const lesson = await Lesson.findById(rc.lesson);
    const student = await Student.findOne({ user: req.user._id });
  
  const data = req.body;
  let rcSubmission = {};

  if (rc && lesson && student) {
    rcSubmission = await ReadingComprehensionSubmission.create({
      rcID: rc._id,
      student: student._id,
      answers: data.answers,
    });
  } else {
    return next(new ErrorHandler("No data available", 400));
  }

  if (rcSubmission) {
    res.status(200).json({
      success: true,
      message: "Quiz submission successfully",
      submission: rcSubmission,
    });
  }
});

// @def grade RC Submission
// @route put /grade/readingcomprehension/:submissionID
exports.gradeRCSubmission = catchAsyncErrors( async (req,res,next) => {
    const submission = await ReadingComprehensionSubmission.findById(req.params.submissionID);
    console.log(submission);
    let marks = req.body.marks
    let obtainedMarks = 0

    for (let mark in marks) {
        
        obtainedMarks += mark
    }

    submission.marks = marks;
    submission.obtainedMarks = obtainedMarks

    await submission.save()

    res.status(200).json({
      success: true,
      message: "Graded successfully",
      submission: submission,
    });
}) 

// @def get all Submissions
// @route put /submissions/readingcomprehension/:lessonID
exports.getRCSubmissions = catchAsyncErrors( async (req,res,next) => {
    const submissions = await ReadingComprehensionSubmission.find(req.params.lessonID);
    
    if(submissions){
        res.status(200).json({
          success: true,          
          submissions: submissions,
        });
    }
}) 

// @def get Submission
// @route put /submission/readingcomprehension/:submissionID
exports.getRCSubmission = catchAsyncErrors( async (req,res,next) => {
    const submission = await ReadingComprehensionSubmission.findbyID(req.params.submissionID);
    
    if(submission){
        res.status(200).json({
          success: true,          
          submission: submission,
        });
    }
}) 


  
