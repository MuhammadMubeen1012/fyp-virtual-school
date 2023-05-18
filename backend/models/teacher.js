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
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
    },
    fatherName: {
        type: String,
        required: [true, "Please enter your father name"],
    },
    age: {
        type: Number,
        required: [true, "Please enter your age"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter your phone number"],
    },
    personalNIC: {
        type: Number,
        required: [true, "Please enter your personal NIC number"],
    },

    fatherNIC: {
        type: Number,
        required: [true, "Please enter your father's NIC number"],
    },

    classroom: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, "Please select class you want to teach in"],
    },
    courses: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, "Please select max three courses you want to teach"],
        // enum: {
        //   // predefined courses
        //   values: ["English", "Urdu", "Pakistan Studies", "Computer", "Maths"],
        //   message: "Please select minimum 3 course for teaching",
        // },
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
