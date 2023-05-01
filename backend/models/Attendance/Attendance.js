const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
  attendanceList: [
    {
      studentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
      },
      status: {
        type: String,
        enum: ["Present", "Absent", "Leave"],
        default: "Absent",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
