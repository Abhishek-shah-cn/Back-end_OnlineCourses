const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/crud_courses');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to Mongodb"));

db.once("open", function () {
  console.log("Connected to Database");
});

module.exports = db;
