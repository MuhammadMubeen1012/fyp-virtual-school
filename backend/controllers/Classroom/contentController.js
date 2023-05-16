const Content = require("../../models/Classroom/Content");

// @desc create a content of particular lesson
// @route POST /content/:lessonID
exports.createContent = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.lessonID);
  const data = req.body;

  if (lesson) {
    const content = await Content.create({
      lesson: lesson._id,
      name: data.name,
      description: data.description,
      link: data.link,
    });

    res.status(200).json({
      success: true,
      message: "Content created successfully",
      content: content,
    });
  } else {
    res.status(200).json({
      success: false,
      message: `No lesson found with this ID ${req.params.lessonID}`,
    });
  }
});

// @desc update the content
// @route PUT /lesson/content/:contentID
exports.updateContent = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: data.name,
    description: data.description,
    link: data.link,
  };

  const content = await Content.findByIdAndUpdate(
    req.params.contentID,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  if (content) {
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      content,
    });
  }
});

// @desc delete the content
// @route DELETE /lesson/content/:contentID
exports.deleteContent = catchAsyncErrors(async (req, res, next) => {
  const content = await Content.findById(req.params.contentID);

  if (!content) {
    return next(
      new ErrorHandler(`Content does not found with given ID: ${req.params.id}`)
    );
  } else {
    await content.remove();

    res.status(200).json({
      success: true,
      message: "Content removed successfully",
    });
  }
});

// @desc get all contents of lesson.
// @route GET /content/:lessonID
exports.getcontents = catchAsyncErrors(async (req, res, next) => {
  const contents = await Content.find({ lesson: req.params.lessonID });

  if (contents) {
    res.status(200).json({
      success: true,
      content: contents,
    });
  } else {
    return next(
      new ErrorHandler(
        `Content does not found with lesson ID: ${req.params.id}`
      )
    );
  }
});
