const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");
const auth = require("./routes/auth");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const errorHandler = require("./middleware/error");

//const secondrouter = require("./routes/router");
app.use(express.json());
const morgan = require("morgan");
const connectDB = require("./config/db");
const { setUncaughtExceptionCaptureCallback } = require("process");

//Cookie parser
app.use(cookieParser());

//Dev logging middleware
//if (process.env.NODE_ENV === "development") {
app.use(morgan("dev"));
//}

//Load env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

//File uploading
app.use(fileupload());

//Set static folder
//Static public directory

app.use(express.static(path.join(__dirname, "public")));

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);
app.use("/api/v1/auth", auth);
//app.use("/check/test", router);
//app.use("/tests", secondrouter);
app.use(errorHandler);

/* 
app.get("/test", (req, res) => {
  res.status(200).json({ success: true, msg: "Udalo sie" });
});
*/
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close Server & exit process
  server.close(() => process.exit(1));
});

// //Routemap display
// displayRoutes = require("express-routemap");
// displayRoutes(app);
