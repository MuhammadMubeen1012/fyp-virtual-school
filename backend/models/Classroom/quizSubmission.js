const mongoose = require("mongoose");

const quizSubmissionSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  quizID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please provide Lesson ID"],
    ref: "Quiz",
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  quizAnswers: {
    type: [String],
  },
  obtainedMarks: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("QuizSubmission", quizSubmissionSchema);
