const Transaction = require("../models/Transaction");

module.exports = async function (req, res) {


    try {
        const Transactions = await Transaction.find();
        let sortedTransactions = Transactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        res.json(
            sortedTransactions
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

};
