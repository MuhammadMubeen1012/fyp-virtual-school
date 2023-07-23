const mongoose = require('mongoose')

const readingComprehensionSchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
  passage: {
    type: String,
  },
  questions: {
    type: [String]
  },
  totalMarks: {
    type: Number, 
    default: 0
  }
});

module.exports = mongoose.model("ReadingComprehension", readingComprehensionSchema);
