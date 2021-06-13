const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");
const Wallet = require("../models/Wallet")

const helpers = getHelpers();

module.exports = function (req, res) {
    let { first_name, last_name, ewallet_reference_id, type, phone_number, email, balance } = req.body;
    let body = {
        "first_name": first_name,
        "last_name": last_name,
        "ewallet_reference_id": ewallet_reference_id,
        "type": type,
        "phone_number": phone_number,
        "email": email,
    }

    // Request Data Parameters
    const uri = 'https://sandboxapi.rapyd.net/v1/user';
    const http_method = 'post'
    const path = '/v1/user'

    body = JSON.stringify(body)

    let to_sign = http_method + path + helpers.salt + helpers.timestamp + helpers.access_key + helpers.secret_key + body;
    let signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(to_sign, helpers.secret_key));
    signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    // Request Details
    const headers = getHeaders(helpers.access_key, signature, helpers.salt, helpers.timestamp)
    const requestData = getRequestData(headers, uri, http_method, body)

    /// Request Function
    request(requestData, function (err, res, body) {
        let response = JSON.parse(res.body)
        let ewallet_id = response.data.id;
        console.log(ewallet_id)

        // Get the User Phone Number 
        const userPhoneNumber = ""

        // Saving The Wallet 
        const newWallet = new Wallet({
            fullName: first_name + " " + last_name,
            type: 'person',
            phone_number: phone_number,
            email: email,
            ewallet_id: ewallet_id,
            rapydId: "rapydPay" + phone_number.slice(3, 13),
            balance: balance
        })
        newWallet.save()
        console.log(newWallet + "Added")


    });

    res.send("Wallet Added")
}