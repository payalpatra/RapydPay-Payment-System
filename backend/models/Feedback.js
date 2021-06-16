const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }

});

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;
