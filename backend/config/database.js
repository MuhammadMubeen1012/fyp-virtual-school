const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectToDB = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_LOCAL_URI, {
      dbName: "ekschoolDB",
      useNewUrlParser: true,
    });
    console.log(`Connected to Database with host ${con.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectToDB;
