const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const course = mongoose.model("Course", courseSchema);

module.exports = course;
