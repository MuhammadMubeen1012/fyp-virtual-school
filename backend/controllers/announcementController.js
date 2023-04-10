const catchAsyncError = require("../middlewares/catchAsyncErrors");
const Announcement = require("../models/Announcement/Announcement");

// @desc creating a new Announcement
// @route POST /announcements

exports.createAnnouncement = catchAsyncError(async (req, res, next) => {
  const { subject, description, attachment, announcementFor, isChecked } =
    req.body;

  const userID = req.user._id;

  const announcement = await Announcement.create({
    subject,
    description,
    attachment,
    userID,
    announcementFor,
    isChecked,
  });

  res.status(200).json({
    success: true,
    message: "Announcement created successfully",
  });
});

// @desc get all announcements
// route GET /announcements

exports.getAnnouncements = catchAsyncError(async (req, res, next) => {
  const announcements = await Announcement.find();

  if (!announcements) {
    res.status(200).json({
      success: true,
      message: "No announcements created",
    });
  } else {
    res.status(200).json({
      success: true,
      announcements: announcements,
    });
  }
});

// @desc updating announcement
// @route PUT /announcements/:announcement
exports.updateAnnouncement = catchAsyncError(async (req, res, next) => {
  //updating the name,email, and role of the user
  const updatedAnnouncement = {
    subject: req.body.subject,
    description: req.body.description,
    attachment: req.body.attachment,
    announcementFor: req.body.announcementFor,
    isChecked: req.body.isChecked,
  };

  const announcement = await Announcement.findByIdAndUpdate(
    req.params.id,
    updatedAnnouncement,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// @desc deleting announcement
// @route DELETE /announcements/:announcement
exports.deleteAnnouncement = catchAsyncError(async (req, res, next) => {
  const deletedAnnouncement = await Announcement.findById(req.params.id);
  if (!deletedAnnouncement) {
    return next(
      new ErrorHandler(`Announcement does not found with id: ${req.params.id}`)
    );
  } else {
    await deletedAnnouncement.remove();
  }

  res.status(200).json({
    success: true,
    deletedAnnouncement,
  });
});

// @desc get one announcement and update isChecked
// @route GET /announcements/:announcement
exports.getSingleAnnouncement = catchAsyncError(async (req, res, next) => {
  const announcement = await Announcement.findById(req.params.id);

  if (!announcement) {
    return next(
      new ErrorHandler(`Announcement does not found with id: ${req.params.id}`)
    );
  } else {
    announcement.isChecked = true;
    await announcement.save();

    res.status(200).json({
      success: true,
      announcement,
    });
  }
});
