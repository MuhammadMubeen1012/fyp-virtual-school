const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Classroom = require("../../models/Classroom/Classroom");
const Event = require("../../models/Classroom/Event");
const Lesson = require("../../models/Classroom/Lesson");

//features
// create, delete, update, getEventByLessonID

// @desc create a event of particular lesson
// @route POST /event/:lessonID
exports.createEvent = catchAsyncErrors(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id);
  const data = req.body;

  const eventDate = new Date(data.eventDate);
  const dateString = eventDate.toISOString();

  const event = await Event.create({
    name: data.name,
    description: data.description,
    eventDate: dateString,
    duration: data.duration,
    eventPassword: data.eventPassword,
    eventLink: data.eventLink,
    lesson: lesson._id,
    course: lesson.course,
    createdBy: req.user._id,
  });

  if (event) {
    lesson.event.push(event._id);
    await lesson.save();
  }

  res.status(200).json({
    success: true,
    message: "Event created successfully",
    event,
  });
});

// @desc update a event
// @route PUT /event/:eventID
exports.updateEvent = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
    eventDate: req.body.eventDate,
    duration: req.body.duration,
    eventPassword: req.body.eventPassword,
    eventLink: req.body.eventLink,
  };

  const event = await Event.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    event,
  });
});

// @desc delete a event
// @route DELETE /event/:eventID
exports.deleteEvent = catchAsyncErrors(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(
      new ErrorHandler(`Event does not found with id: ${req.params.id}`)
    );
  }

  await event.remove();

  res.status(200).json({
    success: true,
  });
});

// @desc get a event by lesson ID
// @route GET /event/:lessonID
exports.getEventByLessonID = catchAsyncErrors(async (req, res, next) => {
  const event = await Event.find({ lesson: req.params.lessonID });

  if (event) {
    res.status(200).json({
      success: true,
      event: event,
    });
  } else {
    return next(
      new ErrorHandler(`Events does not found with id: ${req.params.id}`)
    );
  }
});

// @desc get all events of all courses of that class related to some student
// @route GET /events/:classID
exports.getAllEvents = catchAsyncErrors(async (req, res, next) => {
  //get the class
  const classroom = await Classroom.findById(req.params.classID);
  //get courses related to that class
  const courses = classroom.courses;

  console.log(courses);

  let events = [];

  // courses.forEach(course => {
  //   console.log(course);
  //   const event = await Event.find({ course: course });
  //   events.push(event);
  // })
  for (let course of courses) {
    //get the events by that course IDs
    console.log(course);
    const event = await Event.find({ course: course });
    events.push(event);
  }

  res.status(200).json({
    success: true,
    events: events,
  });
});
