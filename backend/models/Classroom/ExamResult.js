const mongoose = require("mongoose");
const validator = require("validator");

const examResultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  submission: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExamSubmission",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
    required: true,
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicYear",
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  percentage: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  status: {
    type: String,
    enum: ["passed", "failed"],
    required: true,
  },
  obtainedMarks: {
    type: Number,
    default: 0,
    required: true,
  },
  feedback: {
    type: String,
    default: "No feedback",
  },
});

module.exports = mongoose.model("ExamResult", examResultSchema);
