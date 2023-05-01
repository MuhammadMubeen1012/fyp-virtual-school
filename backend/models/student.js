//Story
// Registeration/Admission Form includes:
/*
    
    user-object{
        id, name, email, password, isRegistered[false], role[user]
    }

    academic data{
        id, firstName, lastName, fatherName, phone, age, Father NIC, 
        class selection,  
        photos { b-form , photo} - photos will be stored on cloudinary
    }

    test result object {} 
    to store test data and passing criteria 
    then enrolled in that class 

*/

const mongoose = require("mongoose");
const validator = require("validator");

const studentAdmissionSchema = new mongoose.Schema({
  //properties (firstname,lastname,fathername,age,phonenumber,fatherNIC,classselection,b-formphoto,personalphoto)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    maxlength: [20, "Your name cannot exceed 20 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    maxlength: [20, "Your last name cannot exceed 20 characters"],
  },
  fatherName: {
    type: String,
    required: [true, "Please enter your father name"],
    maxlength: [20, "Your father name cannot exceed 20 characters"],
  },
  age: {
    type: Number,
    required: [true, "Please enter your age"],
    min: [5, "Your age must be greater than or equal to 5"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your phone number"],
    min: [11, "Your phone number must be equal to 11"],
  },
  fatherNIC: {
    type: Number,
    required: [true, "Please enter your father's NIC number"],
    min: [13, "Your NIC number must be equal to 13"],
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please select class you want to enrolled in"],
  },
  bForm: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  photo: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  testResult: {
    type: Number,
  },
  //to be determined
  /**
    id, isWithDrawn, isBlocked, academicYear, dateAdmitted, isPassed, admittedInClass, currentClass, result
   */
});

module.exports = mongoose.model("student", studentAdmissionSchema);
