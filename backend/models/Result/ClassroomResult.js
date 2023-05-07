const mongoose = require("mongoose");

const classroomResultSchema = new mongoose.Schema({
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "academicYear",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  isLive: {
    type: Boolean,
    default: false,
  },
  obtainedMarks: {
    type: Number,
    default: 0,
  },
  totalMarks: {
    type: Number,
    default: 0,
  },
  grade: {
    type: String,
    enum: ["A", "B", "C", "D"],
  },
  coursesResults: [
    {
      courseResult: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseResult",
      },
      obtainedMarks: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
      grade: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("ClassroomResult", classroomResultSchema);
