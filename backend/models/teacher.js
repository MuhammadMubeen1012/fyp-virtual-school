//Story
// Registeration/Admission Form includes:
/*
    
    user-object{
        id, name, email, password, isRegistered[false], role[user]
    }

    academic data{
        id, firstName, lastName, fatherName, phone, age, personal NIC, Father NIC, 
        class selection, course selection minimum 3,  
        photos { b-form , last qualification certificate, photo} - photos will be stored on cloudinary
    }

    test result object {} 
    to store test data and passing criteria 
    then enrolled in that courses of that class 

*/

const mongoose = require("mongoose");
const validator = require("validator");

const teacherAdmissionSchema = new mongoose.Schema({
  //properties (firstname,lastname,fathername,age,phonenumber,fatherNIC, personal NIC, class selection, courseSelection,b-formphoto,personalphoto, LastdegreeCertificates)
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
  personalNIC: {
    type: Number,
    required: [true, "Please enter your personal NIC number"],
    min: [13, "Your NIC number must be equal to 13"],
  },

  fatherNIC: {
    type: Number,
    required: [true, "Please enter your father's NIC number"],
    min: [13, "Your NIC number must be equal to 13"],
  },

  class: {
    type: Number,
    required: [true, "Please select class you want to teach in"],
    enum: {
      // predefined classes
      values: [1, 2, 3, 4, 5],
      message: "Please select class for teaching",
    },
  },
  courses: {
    type: [String],
    required: [true, "Please select max three courses you want to teach"],
    enum: {
      // predefined courses
      values: ["English", "Urdu", "Pakistan Studies", "Computer", "Maths"],
      message: "Please select minimum 3 course for teaching",
    },
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
  degreeProof: {
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
    id, isWithDrawn, isBlocked, dateAdmitted, class and course relationship
   */
});

module.exports = mongoose.model("teacher", teacherAdmissionSchema);
