const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    paymentId: {
        type: String,
        required: true,
    },
    customerId: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    ewallet_id: {
        type: String,
        required: true,
    },

    created_at: {
        type: String,
        required: true,
    }

});

const Payment = mongoose.model("payment", paymentSchema);

module.exports = Payment;
