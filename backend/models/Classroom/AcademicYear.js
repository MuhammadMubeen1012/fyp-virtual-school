const mongoose = require("mongoose");
const validator = require("validator");

const academicYearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fromYear: {
    type: Date,
    required: true,
  },
  toYear: {
    type: Date,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("AcademicYear", academicYearSchema);
