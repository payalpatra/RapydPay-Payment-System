const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");
const Payment = require("../models/Payment");

const helpers = getHelpers();

module.exports = function (req, res) {
    let { amount, customer, ewallet } = req.body;
    let body = {
        amount: amount,
        currency: "USD",
        payment_method: "",
        customer: customer,
        description: "Payment by customer's default payment method",
        ewallets: [
            {
                ewallet: ewallet,
                percentage: 100,
            },
        ],
    };

    // Request Data Parameters
    const uri = "https://sandboxapi.rapyd.net/v1/payments";
    const http_method = "post";
    const path = "/v1/payments";

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


     // Getting The Current Date 
     let today = new Date();
     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     let dateTime = date + ' ' + time;

    /// Request Function
    request(requestData, function (err, res, body) {
        let response = JSON.parse(res.body);
        console.log(response);

        // Saving The Payment !!!!!!!
        const newPayment = new Payment({
            paymentId: response.data.id,
            customerId: customer,
            amount: response.data.amount,
            ewallet_id: ewallet,
            created_at: dateTime
        })
        // Save 
        newPayment.save()

        console.log(newPayment + "Added")
    });

    res.send("Payment Done !!!!");
};


