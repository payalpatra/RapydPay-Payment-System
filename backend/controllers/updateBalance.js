const Wallet = require("../models/Wallet");

module.exports = async function (source_ewallet_id, destination_ewallet_id, amount) {
    const sourceBalance = { ewallet_id: source_ewallet_id };
    const updateBalance = { balance: balance - parseInt(amount) };
    let update = await Wallet.findOneAndUpdate(sourceBalance, updateBalance, {
        returnOriginal: false,
    });
    console.log(update.sourceBalance)

    const destinationBalance = { ewallet_id: destination_ewallet_id };
    const updateDbalance = { balance: balance + parseInt(amount) };
    let dUpdate = await Wallet.findOneAndUpdate(destinationBalance, updateDbalance, {
        returnOriginal: false,
    });
    console.log(dUpdate.destinationBalance)
    console.log("Update Successfull")
};
