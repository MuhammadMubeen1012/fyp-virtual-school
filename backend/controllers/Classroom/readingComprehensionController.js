const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const ReadingComprehension = require("../../models/Classroom/ReadingComprehension");
const Lesson = require("../../models/Classroom/Lesson");

//features 
// 1. create 2.getRCbyLesson 3. updateRC 4. deleteRC

// @desc creating a new rc of that lesson
// @route POST /readingcomprehension/:lessonID
exports.createRC = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.lessonID);

  const data = req.body;

  const readingComprehension = await ReadingComprehension.create({
    lesson: lesson._id,
    passage: data.passage, 
    questions: data.questions, 
    totalMarks: data.totalMarks
  });

  if (readingComprehension) {
      res.status(200).json({
        success: true,
        message: "Reading Comprehension created successfully",
      });
  } else {
    res.status(400).json({
      success: false,
      message: "Reading Comprehension creation failed! Try Again",
    });
  }
});

// @desc get rc by its lesson ID
// @route GET /readingcomprehension/:lessonID
exports.getRCByLessonID = catchAsyncErrors(async (req, res, next) => {
  const rc = await ReadingComprehension.find({ lesson: req.params.lessonID });

  if (rc) {
    res.status(200).json({
      success: true,
      rc: rc,
    });
  } else {
    return next(
      new ErrorHandler(`Reading Comprehension does not found with id: ${req.params.lessonID}`)
    );
  }
});

// @desc update the rc
// @route PUT /readingComprehension/:id
exports.updateRC = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    passage: req.body.passage,
    questions: req.body.questions,
    totalMarks: req.body.totalMarks,
  };

  const rc = await ReadingComprehension.findByIdAndUpdate(
    req.params.id,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  if (rc) {
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      rc,
    });
  }
});

// @desc delete the rc
// @route DELETE /readingcomprehension/:id
exports.deleteRC = catchAsyncErrors(async (req, res, next) => {
  const rc = await ReadingComprehension.findById(req.params.id);

  if (!rc) {
    return next(
      new ErrorHandler(`RC does not found with given ID: ${req.params.id}`)
    );
  } else {
    await rc.remove();
    
    res.status(200).json({
      success: true,
      message: "Reading Comprehension removed successfully",
    });
  }
});


