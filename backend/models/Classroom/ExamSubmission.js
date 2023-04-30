const mongoose = require("mongoose");
const validator = require("validator");

const examSubmissionSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  subjectiveAnswers: [
    {
      answer: { type: String },
    },
  ],
  objectiveAnswers: {
    type: [String],
  },
  subjectiveMarks: {
    type: [Number],
  },
  objectiveMarks: {
    type: [Number],
  },
  obtainedMarks: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("ExamSubmission", examSubmissionSchema);
