//Handling global errors
//catching async errors
//that occurs in controllers
//then we create middlewares

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    //Error class has function captureStackTrace that create a stack property on the passing object
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
