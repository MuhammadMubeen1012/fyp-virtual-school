const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Course = require("../../models/Classroom/Course");
const Classroom = require("../../models/Classroom/Classroom");
const Teacher = require("../../models/teacher");

// @features
// create, updateCourse, deleteCourse, getCourseByID

// @desc creating a new Course
// @route POST /course
exports.createCourse = catchAsyncErrors(async (req, res, next) => {
  //teacher and lessons will be assigned later
  //code will be generated automatically

  const { name, description, classroom, createdBy } = req.body;

  const course = await Course.create({
    name,
    description,
    classroom,
    createdBy,
  });

  //add course to the classroom
  const classRoom = await Classroom.findById(classroom);

  classRoom.courses.push(course._id);

  await classRoom.save();

  res.status(200).json({
    success: true,
    message: "Course created successfully",
  });
});

// @desc getting the course by ID
// @route GET /course/:courseID
exports.getCourseByCourseID = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    res.status(200).json({
      success: true,
      course,
    });
  } else {
    return next(
      new ErrorHandler(`Course does not found with id: ${req.params.id}`)
    );
  }
});

// @desc updating the course
// @route PUT /course/:courseID
exports.updateCourse = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
  };

  const course = await Course.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    course,
  });
});

// @desc delete the course data.
// @route DELETE /course/:classroomID/:courseID
exports.deleteCourse = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    const classRoom = await Classroom.findById(course.classroom);

    if (classRoom) {
      console.log(classRoom._id);
      const courseIndex = classRoom.courses.findIndex(
        (course) => course === req.params.id
      );
      console.log(courseIndex);
      if (courseIndex > -1) {
        // only splice array when course is found
        classRoom.courses.splice(courseIndex, 1); // 2nd parameter means remove one item only
      }
    }
  }

  if (!course) {
    return next(
      new ErrorHandler(`Course does not found with id: ${req.params.id}`)
    );
  }

  await course.remove();

  res.status(200).json({
    success: true,
  });
});

// @def get teacher by id
// @param GET /teacher/:teacherID
exports.getTeacherByID = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.teacherID);

  console.log(teacher);

  if (teacher) {
    res.status(200).json({
      success: true,
      teacher: teacher,
    });
  } else {
    res.status(200).json({
      success: false,
    });
  }
});
