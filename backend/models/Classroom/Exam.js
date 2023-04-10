const mongoose = require("mongoose");
const validator = require("validator");

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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
  passMarks: {
    type: Number,
    required: true,
    default: 50,
  },
  totalMarks: {
    type: Number,
    required: true,
    default: 100,
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicYear",
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    default: 60,
  },
  examDate: {
    type: Date,
    required: true,
  },
  examTime: {
    type: String,
    required: true,
  },
  examStatus: {
    type: String,
    required: true,
    enum: ["pending", "live"],
    default: "pending",
  },
  examSection: {
    type: String,
    required: true,
    enum: ["subjective", "objective"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
    required: true,
  },
});

module.exports = mongoose.model("Exam", examSchema);
