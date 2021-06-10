const mongoose = require("mongoose");

// fullName: first_name + last_name,
// type: 'person',
// phone_number: phone_number,
// email: email,
// ewallet_id: ewallet_id

const walletSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ewallet_id: {
        type: String,
        required: true,
    },
    rapydId:{
        type: String,
        required: true,
    },
    balance:{
        type: Number,
    }

});

const Wallet = mongoose.model("wallet", walletSchema);

module.exports = Wallet;
