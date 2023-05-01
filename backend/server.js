const app = require("./app");
const dotenv = require("dotenv");
const connectToDB = require("./config/database");

//setting the configuration file
dotenv.config({ path: "./config/config.env" });
//connect to database
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
