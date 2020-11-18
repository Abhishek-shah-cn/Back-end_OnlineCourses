const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    topic_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    topic_title: {
      type: String,
      required: true,
    },
    topic_description: {
      type: String,
      required: true,
    },
    like:{
        type: Boolean,
        required: true,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;
