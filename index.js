// importing modules
const express = require("express");
// to parse req.body into json
const bodyParser = require("body-parser");
// to connect with mongodb
const dataBase = require("./config/database");

// initialising the app
const app = express();
// importing environmen variables
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));

// defining the path
app.use("/", require("./routes/index"));

// listening on port process.enc.port
app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT || 8000}`);
});
