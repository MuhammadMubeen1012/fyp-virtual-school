const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
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
  eventPassword: {
    type: String,
    required: true,
  },
  eventLink: {
    type: String,
    required: true,
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Lesson",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Course",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "teacher",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Event", eventSchema);
