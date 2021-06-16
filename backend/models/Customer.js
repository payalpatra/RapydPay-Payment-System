const mongoose = require("mongoose");



const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    customerId: {
        type: String,
        required: true,
    },
    default_payment_method: {
        type: String,
        required: true,
    },
    ewallet_id: {
        type: String,
        required: true,
    },
    ewallet_id: {
        type: String,
        required: true,
    },


});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
