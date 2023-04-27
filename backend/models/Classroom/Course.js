const mongoose = require("mongoose");
const validator = require("validator");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  code: {
    type: String,
    default: function () {
      return (
        this.name
          .split(" ")
          .map((initial) => initial[0])
          .join("")
          .toUpperCase() +
        Math.floor(10 + Math.random() * 90) +
        Math.floor(10 + Math.random() * 90)
      );
    },
  },
});

module.exports = mongoose.model("Course", courseSchema);
