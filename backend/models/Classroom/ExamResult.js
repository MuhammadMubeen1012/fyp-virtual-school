const mongoose = require("mongoose");
const validator = require("validator");

const examResultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicYear",
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
    default: false,
  },
  position: {
    type: Number,
    required: true,
  },
  percentage: {
    type: NumberDecimal,
    required: true,
  },
  status: {
    type: String,
    enum: ["passed", "failed"],
    required: true,
  },
  passingMarks: {
    type: Number,
    default: 50,
    required: true,
  },
  obtainedMarks: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("ExamResult", examResultSchema);
