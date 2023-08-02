const mongoose = require("mongoose");

const rcSubmissionSchema = new mongoose.Schema({
    rcID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReadingComprehension"
    }, 
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }, 
    answers: {
        type: [String]
    }, 
    marks: {
        //marks for each question
        type: [Number]
    }, 
    obtainedMarks: {
        type: Number, 
        default: 0
    }
});

module.exports = mongoose.model(
  "ReadingComprehensionSubmission",
  rcSubmissionSchema
);
