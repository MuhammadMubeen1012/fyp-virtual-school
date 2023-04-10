const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  //500 is an internal server error
  err.statusCode = err.statusCode || 500;

  //separation of development and production error based on NODE ENV value
  if (process.env.Node_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.Node_ENV === "PRODUCTION") {
    let error = { ...err };

    error.message = err.message;

    //handling wrong moongoose object ID error
    //when we enter wrong value of any key it throws an error with correct path where error occured
    //it is needed in production mode as we are done with stack in dev mode
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid ${err.path}`;
      error = new ErrorHandler(message, 404);
    }

    //handling mongoose validation error when missing multiple required values.
    //it is what missing multiple required values
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    //duplication error handling
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      error = new ErrorHandler(message, 400);
    }

    //wrong json error handling
    if (err.name === "JsonWebTokenError") {
      const message = "JSON Web Token is invalid, Try again";
      error = new ErrorHandler(message, 400);
    }

    //expire json error handling
    if (err.name === "TokenExpiredError") {
      const message = "JSON Web Token is expired, Try again";
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

//import this middleware in app.js becuase we have to use in our application.
