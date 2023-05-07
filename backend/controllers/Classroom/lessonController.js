const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Course = require("../../models/Classroom/Course");
const Event = require("../../models/Classroom/Event");
const Lesson = require("../../models/Classroom/Lesson");

//features
// create, update, delete, and getLessonByCourse
// create, update, delete, and getContentByLesson

// @desc create a lesson of particular course
// @route POST /lesson/:courseId
exports.createLesson = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  const data = req.body;

  const lesson = await Lesson.create({
    name: data.name,
    description: data.description,
    course: course._id,
  });

  if (lesson) {
    course.lessons.push(lesson._id);
    await course.save();
  }

  res.status(200).json({
    success: true,
    message: "Lesson created successfully",
  });
});

// @desc create a content of particular lesson
// @route POST /content/:lessonID
exports.createContent = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id);
  const data = req.body;

  console.log(lesson);
  // console.log(lesson.content);

  lesson.content.push(data.content);

  await lesson.save();

  res.status(200).json({
    success: true,
    message: "Content created successfully",
  });
});

// @desc update the lesson
// @route PUT /lesson/:id
exports.updateLesson = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
  };

  const lesson = await Lesson.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    lesson,
  });
});

// @desc update the content
// @route PUT /lesson/content/:lessonID
exports.updateContent = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    content: req.body.content,
  };

  const content = await Lesson.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    content,
  });
});

// @desc delete the lesson
// @route DELETE /lesson/:id
exports.deleteLesson = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id);

  if (!lesson) {
    return next(
      new ErrorHandler(`Lesson does not found with id: ${req.params.id}`)
    );
  }

  await lesson.remove();

  res.status(200).json({
    success: true,
  });
});

// @desc delete the content
// @route DELETE /lesson/content/:lessonID
exports.deleteContent = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id);

  if (!lesson) {
    return next(
      new ErrorHandler(
        `Lesson or content does not found with given parameters: ${req.params.id}`
      )
    );
  } else {
    // lesson.update({ _id: lesson._id }, { $pull: { content: content } });
    console.log(lesson._id);
    // console.log(lesson.content);
    lesson.content = [];
    // console.log(lesson.content);
    await lesson.save();
  }

  res.status(200).json({
    success: true,
    lesson,
  });
});

// @desc get lessons by course ID
// @route GET /lesson/:courseID
exports.getLessonsByCourseID = catchAsyncErrors(async (req, res, next) => {
  const lessons = await Lesson.find({ course: req.params.id });

  if (lessons) {
    res.status(200).json({
      success: true,
      lessons,
    });
  } else {
    return next(
      new ErrorHandler(`Lessons does not found with id: ${req.params.id}`)
    );
  }
});

// @desc get content by lesson ID
// @route GET /content/:lessonID
exports.getcontentByLessonID = catchAsyncErrors(async (req, res, next) => {
  const lessons = await Lesson.findById(req.params.id);

  if (lessons) {
    res.status(200).json({
      success: true,
      content: lessons.content,
    });
  } else {
    return next(
      new ErrorHandler(`Content does not found with id: ${req.params.id}`)
    );
  }
});

// @desc get content by lesson ID
// @route GET /content/:lessonID
exports.getLessonByID = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.lessonID);

  if (lesson) {
    res.status(200).json({
      success: true,
      lesson: lesson,
    });
  } else {
    return next(
      new ErrorHandler(`Lesson does not found with id: ${req.params.id}`)
    );
  }
});
