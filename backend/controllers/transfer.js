const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");

const helpers = getHelpers();

module.exports = function (req, res) {
    let { source_ewallet, amount, currency, destination_ewallet } = req.body;

    let body = {
        "source_ewallet": source_ewallet,
        "amount": amount,
        "currency": currency,
        "destination_ewallet": destination_ewallet,
    }

    // Request Data Parameters
    const uri = 'https://sandboxapi.rapyd.net/v1/account/transfer';
    const http_method = 'post'
    const path = '/v1/account/transfer'

    body = JSON.stringify(body)

    let to_sign = http_method + path + helpers.salt + helpers.timestamp + helpers.access_key + helpers.secret_key + body;
    let signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(to_sign, helpers.secret_key));
    signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    // Request Details
    const headers = getHeaders(helpers.access_key, signature, helpers.salt, helpers.timestamp)
    const requestData = getRequestData(headers, uri, http_method, body)

    // Request Function
    request(requestData, function (err, res, body) {
        response = JSON.parse(res.body)
        const id = response.data.id
        console.log(response)
        console.log(id)
    });
}
