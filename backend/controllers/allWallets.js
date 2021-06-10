
const Wallet = require("../models/Wallet")


module.exports = async function (req, res) {
    try {
        const wallet = await Wallet.find();
        res.json(wallet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

}