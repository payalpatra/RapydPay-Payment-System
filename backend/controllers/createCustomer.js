const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");

const helpers = getHelpers();

module.exports = function (req, res) {
    let { name, email, ewallet, payment_method } = req.body;
    let body = {
        name: name,
        email: email,
        ewallet: ewallet,
        payment_method: {
            type: "us_visa_card",
            fields: {
                number: payment_method.fields.number,
                expiration_month: payment_method.fields.expiration_month,
                expiration_year: payment_method.fields.expiration_year,
                cvv: payment_method.fields.cvv,
            },
        },
    };

    // Request Data Parameters
    const uri = "https://sandboxapi.rapyd.net/v1/customers";
    const http_method = "post";
    const path = "/v1/customers";

    body = JSON.stringify(body);

    let to_sign =
        http_method +
        path +
        helpers.salt +
        helpers.timestamp +
        helpers.access_key +
        helpers.secret_key +
        body;
    let signature = CryptoJS.enc.Hex.stringify(
        CryptoJS.HmacSHA256(to_sign, helpers.secret_key)
    );
    signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    // Request Details
    const headers = getHeaders(
        helpers.access_key,
        signature,
        helpers.salt,
        helpers.timestamp
    );
    const requestData = getRequestData(headers, uri, http_method, body);

    /// Request Function
    request(requestData, function (err, res, body) {
        let response = JSON.parse(res.body);
        console.log(response);
        let cus_Id = response.data.id;
        let default_payment_method = response.data.default_payment_method
        console.log(cus_Id)

        // // Saving The Customer
        const newCustomer = new Customer({
            name: name,
            email: email,
            customerId: cus_Id,
            default_payment_method: default_payment_method,
            ewallet_id: ewallet,
        })
        newCustomer.save()
        console.log(newCustomer + "Added")
    });

    res.send("Customer Created");
};

/// Customer Of Gopinath Patra with ewallet_8a695b403979fb788f59acf134b7e30b ---------- \\\


// {
//     "name": "Rashmita Rani Patra",
//     "ewallet": "ewallet_8a695b403979fb788f59acf134b7e30b",
// "email": "johndoe@rapyd.net",
//     "payment_method": {
//         "type": "us_visa_card",
//         "fields": {
//             "number": "4111111111111111",
//             "expiration_month": "10",
//             "expiration_year": "23",
//             "cvv": "123"
//         }
//     }
// }

/// Customer Creation Response (For Gopinath Patra's Customer)
// Customer Details -- > Of Rashmita Rani Patra

// data = {
//     id: 'cus_5ef732e26038bf7d4bf6dfa8db7b1db4',
//     delinquent: false,
//     discount: null,
//     name: 'Rashmita Rani Patra',
//     default_payment_method: 'card_88a9d4e1619cc7ef4f386ad785ac259d',
//     description: '',
//     email: '',
//     phone_number: '',
//     invoice_prefix: '',
//     addresses: [],
//     payment_methods: {
//         data: [Array],
//         has_more: false,
//         total_count: 1,
//         url: '/v1/customers/cus_5ef732e26038bf7d4bf6dfa8db7b1db4/payment_methods'
//     }
// }
