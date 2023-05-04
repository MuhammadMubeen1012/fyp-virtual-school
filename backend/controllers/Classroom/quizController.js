const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Lesson = require("../../models/Classroom/Lesson");
const Quiz = require("../../models/Classroom/Quiz");

// features
// create quiz and add questions, getQuizByLessonID, updateQuizDetails, updateQuizQuestions
// deleteQuiz

// @desc creating a new quiz of that lesson
// @route POST /quiz/:lessonID
exports.createQuiz = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.lessonID);

  const data = req.body;

  const quiz = await Quiz.create({
    name: data.name,
    description: data.description,
    startTime: data.startTime,
    duration: data.duration,
    lesson: lesson._id,
  });

  if (quiz) {
    lesson.quizes.push(quiz._id);
    await lesson.save();
  }

  res.status(200).json({
    success: true,
    message: "Quiz created successfully",
  });
});

// @desc creating a new quiz of that lesson
// @route PUT /questions/:quizID
exports.addQuestionsToTheQuiz = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);

  const data = req.body;

  for (let question of data.questions) {
    quiz.questions.push(question);
  }

  await quiz.save();

  res.status(200).json({
    success: true,
    message: "Questions added successfully",
  });
});

// @desc get quiz by its lesson ID
// @route GET /quiz/:lessonID
exports.getQuizByLessonID = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.find({ lesson: req.params.lessonID });

  if (quiz) {
    res.status(200).json({
      success: true,
      quiz,
    });
  } else {
    return next(
      new ErrorHandler(`Quiz does not found with id: ${req.params.id}`)
    );
  }
});

// @desc deleting the quiz
// @route DELETE /quiz/:quizID
exports.deleteQuiz = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.quizID);

  if (!quiz) {
    return next(
      new ErrorHandler(`Quiz does not found with id: ${req.params.id}`)
    );
  }

  await quiz.remove();

  res.status(200).json({
    success: true,
  });
});

//@desc update the quiz details
// @route PUT /quiz/:quizID
exports.updateQuizDetails = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
    startTime: req.body.startTime,
    duration: req.body.duration,
    isLive: req.body.isLive,
  };

  const quiz = await Quiz.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    quiz,
  });
});

// @desc deleting the question
// @route DELETE /quiz/:quizID
exports.deleteQuizQuestions = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.quizID);

  quiz.questions = [];

  await quiz.save();

  res.status(200).json({
    success: true,
    message: "Successfully deleted",
    quiz,
  });
});

// @desc updating the question
// @route PUT /quiz/question/:quizID
exports.updateQuizQuestions = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.quizID);

  //quiz.questions = [];

  const data = req.body;

  quiz.questions = data.questions;

  // await quiz.save();

  // for (let question in data.questions) {
  //   quiz.questions.push(question);
  // }

  await quiz.save();

  res.status(200).json({
    success: true,
    message: "Questions updated successfully",
  });
});
