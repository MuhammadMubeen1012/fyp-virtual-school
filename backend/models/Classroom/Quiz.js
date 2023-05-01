const mongoose = require("mongoose");
const validator = require("validator");

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [100, "Quiz description cannot exceed 100 charachters"],
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
  questions: [
    {
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
    },
  ],
  startTime: {
    hours: {
      type: Number,
      default: 0,
    },

    minutes: {
      type: Number,
      default: 0,
    },

    seconds: {
      type: Number,
      default: 0,
    },
  },
  duration: {
    hours: {
      type: Number,
      default: 0,
    },

    minutes: {
      type: Number,
      default: 0,
    },

    seconds: {
      type: Number,
      default: 0,
    },
  },
  isLive: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
