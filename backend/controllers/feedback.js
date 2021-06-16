
const Feedback = require("../models/Feedback")


module.exports = async function (req, res) {
    let { name, message, email } = req.body;

    try {
        const newFeedback = new Feedback({
            name: name,
            message: message,
            email: email
        })
        newFeedback.save();
        res.json(newFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

}