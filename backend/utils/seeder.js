const admissionTest = require("../models/admissionTest");
const dotenv = require("dotenv");
const connectToDatabase = require("../config/database");

//test to add in the database
const questions = require("../data/admissionTestData.json");

//seeting env file
dotenv.config({ path: "config/config.env" });

connectToDatabase();

const seedTestData = async () => {
  try {
    await admissionTest.deleteMany();
    console.log("Test deleted");

    await admissionTest.insertMany(questions);
    console.log("All questions are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedTestData();
