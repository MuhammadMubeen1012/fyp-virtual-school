const mongoose = require("mongoose");

const courseResultSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "academicYear",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
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
    enum: ["A", "B", "C", "D", "F"],
  },
  assignmentGrade: {
    obtainedMarks: {
      type: Number,
      default: 0,
    },
    totalMarks: {
      type: Number,
      default: 0,
    },
  },
  quizGrade: {
    obtainedMarks: {
      type: Number,
      default: 0,
    },
    totalMarks: {
      type: Number,
      default: 0,
    },
  },
  examGrade: {
    obtainedMarks: {
      type: Number,
      default: 0,
    },
    totalMarks: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = mongoose.model("CourseResult", courseResultSchema);
