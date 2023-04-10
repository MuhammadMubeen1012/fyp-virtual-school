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

//using api imported routes
app.use("/api/v1", user);
app.use("/api/v1", admission);
app.use("/api/v1", announcement);

//using middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
