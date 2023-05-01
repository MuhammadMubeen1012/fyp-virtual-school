const { default: mongoose } = require("mongoose");
const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const AcademicYear = require("../../models/Classroom/AcademicYear");

/**
 * Features / functions
 * get, update, delete, create the Academic year
 */

// @desc create the academic year
// @route POST /academicYear
exports.createAcademicYear = catchAsyncErrors(async (req, res, next) => {
  //get data from body based on model
  const { name, fromYear, toYear, isOpen, createdBy } = req.body;

  //add data to the DB
  const academicYear = await AcademicYear.create({
    name,
    fromYear,
    toYear,
    isOpen,
    createdBy,
  });

  res.status(200).json({
    success: true,
    message: "Academic Year created successfully",
  });
});

// @desc getting academic years
// @route GET /academicYears
exports.getAcademicYears = catchAsyncErrors(async (req, res, next) => {
  const academicYears = await AcademicYear.find();

  res.status(200).json({
    success: true,
    academicYears: academicYears,
  });
});

// @desc update the Academic year data.
// @route PUT /academicYear/:academicYearID
exports.updateAcademicYear = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    name: req.body.name,
    fromYear: req.body.fromYear,
    toYear: req.body.toYear,
    isOpen: req.body.isOpen,
  };

  const academicYear = await AcademicYear.findByIdAndUpdate(
    req.params.id,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Successfully updated",
    academicYear,
  });
});

// @desc delete the Academic year data.
// @route DELETE /academicYear/:academicYearID
exports.deleteAcademicYear = catchAsyncErrors(async (req, res, next) => {
  const academicYear = await AcademicYear.findById(req.params.id);

  if (!academicYear) {
    return next(
      new ErrorHandler(`Academic does not found with id: ${req.params.id}`)
    );
  }

  await academicYear.remove();

  res.status(200).json({
    success: true,
  });
});
