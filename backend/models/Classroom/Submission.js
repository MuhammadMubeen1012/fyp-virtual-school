const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: [
      true,
      "Please Provide id of the course who submitted the assignment",
    ],
    ref: "Course",
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please provide Lesson ID"],
    ref: "Lesson",
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please Provide id the assignment"],
    ref: "Assignment",
  },
  fileName: {
    type: String,
    required: [true, "please enter file name"],
  },
  fileLink: {
    type: String,
    required: [true, "please enter File Link"],
  },
  checked: {
    type: Boolean,
    default: false,
  },
  checkedAt: {
    type: Date,
  },
  submittedByName: {
    type: String,
    required: [true, "please enter name "],
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: [
      true,
      "please Provide id of the Student who submitted the assignment",
    ],
    ref: "student",
  },
  submittedAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Submission", submissionSchema);
