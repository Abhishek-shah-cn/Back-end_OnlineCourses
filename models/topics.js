const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    topic_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    topic_title: {
        type: String,
        required: true
    },
    topic_description: {
        type: String,
        required: true
    },
   
}, {
    timestamps:true
});

const Topic = mongoose.model('User', topicSchema);

module.exports = Topic;