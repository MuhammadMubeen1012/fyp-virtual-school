const Student = require("../models/student");
const Teacher = require("../models/teacher");
const User = require("../models/user");
const Questions = require("../models/admissionTest");
const catchAsyncError = require("../middlewares/catchAsyncErrors");

//route /api/v1/student/admissionData
exports.addStudent = catchAsyncError(async (req, res, next) => {
  const data = req.body;

  const student = await Student.create({
    user: data.user,
    firstName: data.firstName,
    lastName: data.lastName,
    fatherName: data.fatherName,
    age: data.age,
    phoneNumber: data.phoneNumber,
    fatherNIC: data.fatherNIC,
    class: data.class,
    bForm: data.bForm,
    photo: data.photo,
    testResult: data.testResult,
  });

  res.status(200).json({
    success: true,
    data: data,
  });
});

//route /api/v1/teacher/admissionData
exports.addTeacher = catchAsyncError(async (req, res, next) => {
  const data = req.body;

  const teacher = await Teacher.create({
    user: data.user,
    firstName: data.firstName,
    lastName: data.lastName,
    fatherName: data.fatherName,
    age: data.age,
    phoneNumber: data.phoneNumber,
    personalNIC: data.personalNIC,
    fatherNIC: data.fatherNIC,
    class: data.class,
    courses: data.courses,
    bForm: data.bForm,
    photo: data.photo,
    degreeProof: data.degreeProof,
    testResult: data.testResult,
  });

  res.status(200).json({
    success: true,
    data: data,
  });
});

//route - api/v1/admission/studentandteacher/test
exports.getTestQuestions = catchAsyncError(async (req, res, next) => {
  const questions = await Questions.find();

  res.status(200).json({
    success: true,
    questions,
  });
});

exports.submitAndAssessStudentTest = catchAsyncError(async (req, res, next) => {
  const questions = await Questions.find();
  const answers = req.body.answers;

  let correctAnswer = 0;
  let wrongAnswer = 0;
  let marks = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    if (question.questionAnswer === answers[i]) {
      correctAnswer++;
      marks++;
      question.isCorrect = true;
    } else {
      wrongAnswer++;
    }
  }

  if (correctAnswer >= 7) {
    //who is logged in
    const user = await User.findOne(req.user._id);

    //changing role of user
    user.role = "student";
    //changing the registeration status
    user.isRegistered = true;

    await user.save();

    res.status(200).json({
      success: true,
      marks,
      correctAnswer,
      wrongAnswer,
      user,
    });
  } else {
    res.json(400).json({
      success: false,
      message: "You failed! Please try again later",
    });
  }
});

exports.submitAndAssessTeacherTest = catchAsyncError(async (req, res, next) => {
  const questions = await Questions.find();
  const answers = req.body.answers;

  let correctAnswer = 0;
  let wrongAnswer = 0;
  let marks = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    if (question.questionAnswer === answers[i]) {
      correctAnswer++;
      marks++;
      question.isCorrect = true;
    } else {
      wrongAnswer++;
    }
  }

  if (correctAnswer >= 7) {
    //who is logged in
    const user = await User.findOne(req.user._id);

    //changing role of user
    user.role = "teacher";
    //changing the registeration status
    user.isRegistered = true;

    await user.save();

    res.status(200).json({
      success: true,
      marks,
      correctAnswer,
      wrongAnswer,
      user,
    });
  } else {
    res.json(400).json({
      success: false,
      message: "You failed! Please try again later",
    });
  }
});
