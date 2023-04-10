const mongoose = require("mongoose");
const validator = require("validator");

const objectiveExamSchema = new mongoose.Schema({
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  questionOptions: {
    type: [String],
    required: true,
  },
  questionAnswer: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ObjectiveExam", objectiveExamSchema);
