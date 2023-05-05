const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Classroom = require("../../models/Classroom/Classroom");
const Teacher = require("../../models/teacher");
const Student = require("../../models/student");
const Course = require("../../models/Classroom/Course");

//features:
/**
 * createClass, updateClass, removeClass, getClassByID, getTeachersByClass,
 * getStudentsByClass, getClassByAcademicYear, getCoursesByClass
 *
 */

// @desc create the class
// @route POST /class
exports.createClassroom = catchAsyncErrors(async (req, res, next) => {
  //getting data from req.body
  const { name, description, duration, academicYear, createdBy } = req.body;

  //add to Db
  const classroom = await Classroom.create({
    name,
    description,
    duration,
    academicYear,
    createdBy,
  });

  res.status(200).json({
    success: true,
    message: "Classroom created successfully",
  });
});

//@desc get classroom by ID
//@route GET /classrooms/:classID
exports.getClassroomByID = catchAsyncErrors(async (req, res, next) => {
  const classrooms = await Classroom.findById(req.params.id);

  if (classrooms) {
    res.status(200).json({
      success: true,
      classrooms,
    });
  } else {
    return next(
      new ErrorHandler(`Class does not found with id: ${req.params.id}`)
    );
  }
});

//@desc get classrooms by AcademicYear
//@route GET /academicYear/classrooms/:AcademicYearID
exports.getClassroomsByAcademicYear = catchAsyncErrors(
  async (req, res, next) => {
    const classrooms = await Classroom.find({ academicYear: req.params.id });

    if (classrooms) {
      res.status(200).json({
        success: true,
        classrooms,
      });
    } else {
      return next(
        new ErrorHandler(`Class does not found with id: ${req.params.id}`)
      );
    }
  }
);

//@desc updating classroom details
//@route PUT /classroom/:classroomId
exports.updateClassroom = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
  };

  const classRoom = await Classroom.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    classRoom,
  });
});

// @desc delete the class data.
// @route DELETE /classrooms/:classroomID
exports.deleteClassroom = catchAsyncErrors(async (req, res, next) => {
  const classRoom = await Classroom.findById(req.params.id);

  if (!classRoom) {
    return next(
      new ErrorHandler(`Classroom does not found with id: ${req.params.id}`)
    );
  }

  await classRoom.remove();

  res.status(200).json({
    success: true,
  });
});

// // @desc get Students by class
// // @route GET /classroom/students/:classroomID
// exports.getStudentsByClass = catchAsyncErrors(async (req, res, next) => {
//   const classrooms = await Classroom.findById(req.params.id);

//   if (classrooms) {
//     res.status(200).json({
//       success: true,
//       message: "Students",
//       students: classrooms.students,
//     });
//   } else {
//     return next(
//       new ErrorHandler(`Classroom does not found with id: ${req.params.id}`)
//     );
//   }
// });

// // @desc get teachers by class
// // @route GET /classroom/teachers/:classroomID
// exports.getTeachersByClass = catchAsyncErrors(async (req, res, next) => {
//   const classrooms = await Classroom.findById(req.params.id);

//   if (classrooms) {
//     res.status(200).json({
//       success: true,
//       message: "Teachers",
//       teachers: classrooms.teachers,
//     });
//   } else {
//     return next(
//       new ErrorHandler(`Classroom does not found with id: ${req.params.id}`)
//     );
//   }
// });

// // @desc get teachers by class
// // @route GET /classroom/courses/:classroomID
// exports.getCoursesByClass = catchAsyncErrors(async (req, res, next) => {
//   const classrooms = await Classroom.findById(req.params.id);

//   if (classrooms) {
//     res.status(200).json({
//       success: true,
//       message: "Courses",
//       courses: classrooms.courses,
//     });
//   } else {
//     return next(
//       new ErrorHandler(`Classroom does not found with id: ${req.params.id}`)
//     );
//   }
// });

exports.getStudentsByClass = catchAsyncErrors(async (req, res, next) => {
  const classroom = await Classroom.findById(req.params.classID);
  const students = classroom.students;
  // console.log(students);
  const data = [];

  if (classroom && students) {
    for (let student of students) {
      const std = await Student.findOne({ user: student });
      // console.log(std);
      data.push(std);
    }
  }

  if (data.length > 0) {
    res.status(200).json({
      success: true,
      students: data,
    });
  } else {
    res.status(200).json({
      success: false,
      students: [],
    });
  }
});

exports.getTeachersByClass = catchAsyncErrors(async (req, res, next) => {
  const classroom = await Classroom.findById(req.params.classID);
  const teachers = classroom.teachers;

  const data = [];

  if (classroom && teachers) {
    for (let teacher of teachers) {
      const tchr = await Teacher.findOne({ user: teacher });
      // console.log(std);
      data.push(tchr);
    }
  }

  if (data.length > 0) {
    res.status(200).json({
      success: true,
      teachers: data,
    });
  } else {
    res.status(200).json({
      success: false,
      teachers: [],
    });
  }
});

exports.getCoursesByClass = catchAsyncErrors(async (req, res, next) => {
  const classroom = await Classroom.findById(req.params.classID);
  const courses = classroom.courses;
  const data = [];

  if (classroom && courses) {
    for (let course of courses) {
      const crs = await Course.findById(course);
      // console.log(std);
      data.push(crs);
    }
  }

  if (data.length > 0) {
    res.status(200).json({
      success: true,
      courses: data,
    });
  } else {
    res.status(200).json({
      success: false,
      courses: [],
    });
  }
});
