const mongoose = require("mongoose");

// id: '800bfaa6-ca01-11eb-b38b-02240218ee6d',
// {
//     transactionId: response.data.id,
//     amount: response.data.amount,
//     destination_phone_number: response.data.destination_phone_number,
//     destination_ewallet_id: response.data.destination_ewallet_id,
//     source_ewallet_id: response.data.source_ewallet_id,

// }

const transactionSchema = mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    destination_phone_number: {
        type: String,
        required: true,
    },
    destination_ewallet_id: {
        type: String,
        required: true,
    },
    source_ewallet_id: {
        type: String,
        required: true,
    },
    created_at: {
        type: String,
        required: true,
    }

});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;
