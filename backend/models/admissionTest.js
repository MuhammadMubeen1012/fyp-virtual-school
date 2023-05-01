const mongoose = require("mongoose");
const validator = require("validator");

const admissionTestSchema = new mongoose.Schema({
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

module.exports = mongoose.model("AdmissionTest", admissionTestSchema);
