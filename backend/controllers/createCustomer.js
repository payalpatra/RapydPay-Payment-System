const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");
const Customer = require("../models/Customer")

const helpers = getHelpers();

module.exports = function (req, res) {
    let { name, email, ewallet, number, expiration_month, expiration_year, cvv } = req.body;
    let body = {
        name: name,
        email: email,
        ewallet: ewallet,
        payment_method: {
            type: "us_visa_card",
            fields: {
                number: number,
                expiration_month: expiration_month,
                expiration_year: expiration_year,
                cvv: cvv,
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



// const RashmitaRaniPatra = {
//     name: 'Rashmita Rani Patra',
//     email: 'rashmitapatra@gmail.com',
//     customerId: 'cus_5ef732e26038bf7d4bf6dfa8db7b1db4',
//     default_payment_method: 'card_88a9d4e1619cc7ef4f386ad785ac259d',
//     ewallet_id: 'ewallet_8a695b403979fb788f59acf134b7e30b'

// }


// const Sameer Saikh = {
//     _id: 60c8cb8df4915439184f4709,
//     name: 'Sameer Saikh',
//     email: 'sameersaikh@gmail.com',
//     customerId: 'cus_1cc1d9ab23da1ab7282dd25b9b354afd',
//     default_payment_method: 'card_e1830d352535afff8263222219a96864',
//     ewallet_id: 'ewallet_16ed8aef3d84d50ca86a2cc7fd576dba'

// }

