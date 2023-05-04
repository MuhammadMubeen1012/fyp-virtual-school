const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
//errors middle wares
const errorMiddleware = require("./middlewares/errors");

//express.json() is a built in middleware function in Express starting
//from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body.
// Without `express.json()`, `req.body` is undefined.
app.use(express.json());
app.use(cookieParser());

//Importing api routes
const user = require("./routes/user");
const admission = require("./routes/admission");
const announcement = require("./routes/announcementRoutes");
const academicYear = require("./routes/Classroom/academicYearRoutes");
const classroom = require("./routes/Classroom/classroomRoutes");
const course = require("./routes/Classroom/courseRoutes");
const lesson = require("./routes/Classroom/lessonRoutes");
const event = require("./routes/Classroom/eventRoutes");
const quiz = require("./routes/Classroom/quizRoutes");
const quizSubmission = require("./routes/Classroom/quizSubmissionRoutes");
const assignment = require("./routes/Classroom/assignmentRoutes");
const assignmentSubmission = require("./routes/Classroom/submissionRoutes");
const exam = require("./routes/Classroom/examRoutes");
const examSubmission = require("./routes/Classroom/examSubmissionRoutes");
const examResult = require("./routes/Classroom/examResultRoutes");
const attendance = require("./routes/Attendance/attendanceRoutes");
const courseResult = require("./routes/Result/courseResultRoutes");
const classroomResult = require("./routes/Result/classroomResultRoutes");

//using api imported routes
app.use("/api/v1", user);
app.use("/api/v1", admission);
app.use("/api/v1", announcement);
app.use("/api/v1", academicYear);
app.use("/api/v1", classroom);
app.use("/api/v1", course);
app.use("/api/v1", lesson);
app.use("/api/v1", event);
app.use("/api/v1", quiz);
app.use("/api/v1", quizSubmission);
app.use("/api/v1", assignment);
app.use("/api/v1", assignmentSubmission);
app.use("/api/v1", exam);
app.use("/api/v1", examSubmission);
app.use("/api/v1", examResult);
app.use("/api/v1", attendance);
app.use("/api/v1", courseResult);
app.use("/api/v1", classroomResult);

//using middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
