const express = require("express");
const app = express();
const db = require("./config/mongoose");

const Port = 4000;

app.listen(Port, function (err) {
  if (err) {
    console.log(`Server is not running:${err}`);
  }
  console.log(`Server is Runing :${Port}`);
});

const session = require("express-session");
app.use(express.json())

const courseRouter = require('./routes/course')
app.use('/course',courseRouter)


