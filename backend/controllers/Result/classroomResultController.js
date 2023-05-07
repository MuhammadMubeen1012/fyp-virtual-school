const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Classroom = require("../../models/Classroom/Classroom");
const CourseResult = require("../../models/Result/CourseResult");
const ClassroomResult = require("../../models/Result/ClassroomResult.js");

// @def compile classroom Result
// @route POST /result/:classroomID
exports.compileClassResult = catchAsyncErrors(async (req, res, next) => {
  const classroom = await Classroom.findById(req.params.classroomID);
  const courses = classroom.courses;
  const students = classroom.students;

  let classRoomResult;
  let coursesResults = [];

  let resultObtainedMarks = 0;
  let resultTotalmarks = 0;
  let resultGrade = "";

  if (classroom && courses && students) {
    for (let student of students) {
      for (let course of courses) {
        const courseResult = await CourseResult.findOne({
          student: student,
          course: course,
        });

        if (courseResult) {
          resultObtainedMarks += courseResult.obtainedMarks;
          resultTotalmarks += courseResult.totalMarks;

          if (resultTotalmarks && resultObtainedMarks) {
            if ((resultObtainedMarks / resultTotalmarks) * 100 > 80) {
              resultGrade = "A";
            } else if ((resultObtainedMarks / resultTotalmarks) * 100 > 70) {
              resultGrade = "B";
            } else if ((resultObtainedMarks / resultTotalmarks) * 100 > 60) {
              resultGrade = "C";
            } else if ((resultObtainedMarks / resultTotalmarks) * 100 > 50) {
              resultGrade = "D";
            } else {
              resultGrade = "F";
            }
          }

          coursesResults.push({
            courseResult: courseResult._id,
            obtainedMarks: courseResult.obtainedMarks,
            totalMarks: courseResult.totalMarks,
            grade: courseResult.grade,
          });
        }
      }

      classRoomResult = await ClassroomResult.create({
        classroom: req.params.classroomID,
        student: student,
        academicYear: classroom.academicYear,
        createdBy: req.user._id,
        obtainedMarks: resultObtainedMarks,
        totalMarks: resultTotalmarks,
        grade: resultGrade,
        coursesResults: coursesResults,
      });

      if (classRoomResult) {
        res.status(200).json({
          success: true,
          message: `Result compiled of id ${student}`,
        });
      }
    }
  }
});

// @def get results by classroom
// @route GET /results/:classroomID
exports.getResultsByClassroom = catchAsyncErrors(async (req, res, next) => {
  const classroomResult = await ClassroomResult.find({
    classroom: req.params.classroomID,
  });

  if (classroomResult) {
    res.status(200).json({
      success: true,
      message: "Results retrieved successfully",
      classroomResult: classroomResult,
    });
  }
});

// @def get result by student and classroom
// @route GET /result/:classroomID/:studentID
exports.getResultByStudent = catchAsyncErrors(async (req, res, next) => {
  const classroomResult = await ClassroomResult.findOne({
    classroom: req.params.classroomID,
    student: req.params.studentID,
  });

  if (classroomResult) {
    res.status(200).json({
      success: true,
      message: "Result retrieved successfully",
      classroomResult: classroomResult,
    });
  }
});

// @def publish Result
// @route GET /result/:classroomID
exports.publishClassroomResult = catchAsyncErrors(async (req, res, next) => {
  const classroomResult = await ClassroomResult.find({
    classroom: req.params.classroomID,
  });

  if (classroomResult) {
    for (let result of classroomResult) {
      result.isLive = true;
      await result.save();
    }

    res.status(200).json({
      success: true,
      message: "Result published successfully",
    });
  }
});
