const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");

const helpers = getHelpers();

module.exports = function (req, res) {
    let { ewallet_id } = req.body;
    let body = ""

    // Request Data Parameters
    const uri = `https://sandboxapi.rapyd.net/v1/user/${ewallet_id}/transactions`;
    const http_method = 'get'
    const path = `/v1/user/${ewallet_id}/transactions`

    let to_sign = http_method + path + helpers.salt + helpers.timestamp + helpers.access_key + helpers.secret_key + body;
    let signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(to_sign, helpers.secret_key));
    signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    // Request Details
    const headers = getHeaders(helpers.access_key, signature, helpers.salt, helpers.timestamp)
    const requestData = getRequestData(headers, uri, http_method, body)

    // Request Function
    request(requestData, function (err, res, body) {
        response = JSON.parse(res.body)
        console.log(response.data)
    });
}
