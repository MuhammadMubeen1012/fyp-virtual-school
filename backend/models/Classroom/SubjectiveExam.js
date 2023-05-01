const mongoose = require("mongoose");
const validator = require("validator");

const subjectiveExamSchema = new mongoose.Schema({
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  parts: [
    {
      question: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("SubjectiveExam", subjectiveExamSchema);
