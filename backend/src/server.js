// Import Modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
//import utils
const HttpException = require("../src/utils/HttpException.utils");
//import error middleware
const errorMiddleware = require("../src/middleware/errorMiddleware");

// init express
const app = express();
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());

// routers

app.all("*", (req, res, next) => {
  const error = new HttpException(404, "Endpoint Not Found.");
  next(error);
});
// Error middleware
app.use(errorMiddleware);
// set port, listen for requests
const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
