const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Attendance = require("../../models/Attendance/Attendance");
const Classroom = require("../../models/Classroom/Classroom");
const Course = require("../../models/Classroom/Course");

// @desc create attendance by date, students list of that class and default status of each student. Like roaster
// @route  POST /attendance/:courseID
exports.createAttendance = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.courseID);
  const classroom = await Classroom.findById(course.classroom);

  let attendanceList = [];

  await classroom.students.forEach((id) =>
    attendanceList.push({
      studentID: id,
      status: "Absent",
    })
  );

  //attendance creation needs course,classroom,teacher,attendanceList
  const attendance = await Attendance.create({
    course: course._id,
    classroom: classroom._id,
    teacher: course.teacher,
    attendanceList: attendanceList,
  });

  if (attendance) {
    res.status(200).json({
      attendance: attendance,
    });
  }
});

//test method
exports.addStudent = catchAsyncErrors(async (req, res, next) => {
  const classroom = await Classroom.findById(req.params.classroomID);
  classroom.students.push("6433b73ed47c769ed165ca0d");

  await classroom.save();

  res.status(200).json({
    success: true,
    students: classroom.students,
  });
});

// @desc get single attendance
// @route GET /attendance/:attendanceID
exports.viewAttendance = catchAsyncErrors(async (req, res, next) => {
  const attendance = await Attendance.findById(req.params.attendanceID);

  if (attendance) {
    res.status(200).json({
      success: true,
      attendance: attendance,
    });
  }
});

// @desc save attendance
// @route POST /attendance/:attendanceID
exports.saveAttendance = catchAsyncErrors(async (req, res, next) => {
  const attendance = await Attendance.findById(req.params.attendanceID);
  const markedAttendance = req.body.markedAttendance;
  let count = 0;

  //   console.log(attendance.attendanceList[0].status);
  await attendance.attendanceList.forEach((listItem) => {
    if (markedAttendance[count] == 0) {
      listItem.status = "Absent";
      count++;
    } else if (markedAttendance[count] == 1) {
      listItem.status = "Present";
      count++;
    }
  });

  await attendance.save();

  if (attendance) {
    res.status(200).json({
      success: true,
      attendance: attendance,
    });
  }
});

// @desc get attendance by course
// @route GET /attendance/:courseID
exports.getAttendanceByCourse = catchAsyncErrors(async (req, res, next) => {
  const attendance = await Attendance.find({ course: req.params.courseID });

  console.log(attendance);

  if (attendance) {
    res.status(200).json({
      success: true,
      attendance: attendance,
    });
  }
});

// @desc get attendance by course and student
// @route GET /attendance/:courseID/:studentID
exports.getAttendanceByCourseAndStudent = catchAsyncErrors(
  async (req, res, next) => {
    //   const attendance = await Attendance.find({ course: req.params.courseID });
    const attendance = await Attendance.find(
      { course: req.params.courseID },
      { attendanceList: { $elemMatch: { studentID: req.params.studentID } } }
    );

    if (attendance) {
      res.status(200).json({
        success: true,
        attendance: attendance,
      });
    }
  }
);

// @desc update attendance
// @route PUT /attendance/:courseID
exports.updateAttendance = catchAsyncErrors(async (req, res, next) => {
  const attendance = await Attendance.findById(req.params.attendanceID);

  const markedAttendance = req.body.markedAttendance;
  let count = 0;

  //   console.log(attendance.attendanceList[0].status);
  await attendance.attendanceList.forEach((listItem) => {
    if (markedAttendance[count] == 0) {
      listItem.status = "Absent";
      count++;
    } else if (markedAttendance[count] == 1) {
      listItem.status = "Present";
      count++;
    }
  });

  await attendance.save();

  if (attendance) {
    res.status(200).json({
      success: true,
      attendance: attendance,
    });
  }
});
