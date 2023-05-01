//token creation, save it in the http only cookie, where it can't be accessed through frontend and JS
const sendToken = (user, statusCode, res) => {
  //creating the token from the method in user model
  const token = user.getToken();

  //storing the created token into cookie, the cookies options will be
  const options = {
    expires: new Date(
      //from now to 7d of time
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    //to secure the token
    httpOnly: true,
  };

  //response
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
