const mongoose = require("mongoose");
const validator = require("validator");

const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    maxlength: [50, "Assignment name cannot exceed 50 charachters"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [100, "Assignment description cannot exceed 100 charachters"],
  },
  fileName: {
    //file name
    type: String,
    required: [true, "please enter file name"],
  },
  fileLink: {
    type: String,
    required: [true, "please enter File Link"],
  },
  totalMarks: {
    default: 100,
    type: Number,
    required: [true, "please provide Total score"],
  },
  deadLine: {
    type: Date,
    required: [true, "please provide Deadline"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please provide Course ID"],
    ref: "Course",
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please provide Lesson ID"],
    ref: "Lesson",
  },
  submissions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Submission",
  },
  isSubmitted: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please provide teacher Id"],
    ref: "teacher",
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
