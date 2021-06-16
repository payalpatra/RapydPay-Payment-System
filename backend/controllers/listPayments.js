const Payment = require("../models/Payment");

module.exports = async function (req, res) {


    try {
        const Payments = await Payment.find();
        let sortedPayments = Payments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        res.json(
            sortedPayments
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

};
