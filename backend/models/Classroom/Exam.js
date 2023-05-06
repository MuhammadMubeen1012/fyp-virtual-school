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
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
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

  examStatus: {
    type: String,
    required: true,
    enum: ["pending", "live"],
    default: "pending",
  },
  examSection: {
    isObjective: {
      type: Boolean,
      default: false,
    },
    isSubjective: {
      type: Boolean,
      default: false,
    },
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
    required: true,
  },
});

module.exports = mongoose.model("Exam", examSchema);
