const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");

const helpers = getHelpers();

module.exports = function (req, res) {
    let { amount, customer, ewallets } = req.body;
    let body = {
        amount: amount,
        currency: "USD",
        payment_method: "",
        customer: customer,
        description: "Payment by customer's default payment method",
        ewallets: [
            {
                ewallet: ewallets[0].ewallet,
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

    /// Request Function
    request(requestData, function (err, res, body) {
        let response = JSON.parse(res.body);
        console.log(response);

        // Saving The Payment !!!!!!!
        const newPayment = new Payment({
            paymentId: response.data.id,
            customerId: customer,
            amount: response.data.amount,
            ewallet_id: rewallets[0].ewallet,
            created_at: dateTime
        })
        // Save 
        newPayment.save()

        console.log(newPayment + "Added")
    });

    res.send("Payment Done !!!!");
};



// body = 
// {
//     "amount": "45.00",
//     "customer": "cus_de7882bcdb9efdf08cf3b13f31e97df1",
//     "ewallets": [
//       {
//         "ewallet": "ewallet_8a695b403979fb788f59acf134b7e30b",
//         "percentage": 100
//       }
//     ]
//   }




// data = {
//     id: 'payment_cb4a6be42425c29ea7f7ab718786bb4d',
//     amount: 45,
//     original_amount: 45,
//     is_partial: false,
//     currency_code: 'USD',
//     country_code: 'US',
//     status: 'CLO',
//     description: "Payment by customer's default payment method",
//     merchant_reference_id: '',
//     customer_token: 'cus_5ef732e26038bf7d4bf6dfa8db7b1db4',
//     payment_method: 'card_88a9d4e1619cc7ef4f386ad785ac259d',
// }