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




