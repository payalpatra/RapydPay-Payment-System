
const Customer = require("../models/Customer")


module.exports = async function (req, res) {
    try {
        const customer = await Customer.find();
        res.json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

}