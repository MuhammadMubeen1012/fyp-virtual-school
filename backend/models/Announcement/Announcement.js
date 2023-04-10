const mongoose = require("mongoose");
const validator = require("validator");

const announcementSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Please enter a announcement subject"],
    default: "No announcement subject",
  },
  description: {
    type: String,
    required: [true, "Please enter a announcement description"],
  },
  attachment: {
    type: String,
    required: [true, "Please attach any link for reference"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    // ref: { type: [mongoose.Schema.Types.ObjectId], refPath: "model_type" },
    // model_type: {
    //   type: String,
    //   enum: ["teacher", "admin"],
    //   required: true,
    // },
  },
  announcementFor: {
    type: String,
    required: true,
    enum: ["teacher", "student", "all"],
    default: "all",
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Announcement", announcementSchema);
