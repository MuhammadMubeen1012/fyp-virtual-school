const mongoose = require("mongoose");
const validator = require("validator");

const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 1,
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicYear",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },
  ],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
  ],
  courses: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model("Classroom", classroomSchema);
