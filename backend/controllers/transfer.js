const request = require("request");
const CryptoJS = require("crypto-js");
const getHeaders = require("../functions/headers");
const getRequestData = require("../functions/requestData");
const getHelpers = require("../functions/helpers");
const Transaction = require("../models/Transaction");
const confirmation = require("../controllers/confirmation");
const Wallet = require("../models/Wallet");
const updateBalance = require("../controllers/updateBalance");

const helpers = getHelpers();

module.exports = function (req, res) {
    let { source_ewallet, amount, destination_ewallet } = req.body;

    let body = {
        "source_ewallet": source_ewallet,
        "amount": amount,
        "currency": "USD",
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

    // Getting The Current Date 
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    // Request Function
    request(requestData, async function (err, res, body) {
        response = JSON.parse(res.body)
        const id = response.data.id

        console.log(id)

        // Confirmation Of the Transaction !!
        confirmation(id)

        // Saving The Transactions
        const newTransaction = new Transaction({
            // id: '800bfaa6-ca01-11eb-b38b-02240218ee6d',
            transactionId: response.data.id,
            amount: response.data.amount,
            destination_phone_number: response.data.destination_phone_number,
            destination_ewallet_id: response.data.destination_ewallet_id,
            source_ewallet_id: response.data.source_ewallet_id,
            created_at: dateTime
        })
        // Save 
        newTransaction.save()

        console.log(newTransaction + "Added")


        // Find the id of source wallet and destination wallet
        try {
            let sourceWalletDetails = await Wallet.findOne({ "ewallet_id": source_ewallet.toString() })
            Wallet.updateOne({ _id: sourceWalletDetails._id }, { balance: sourceWalletDetails.balance - amount })
            console.log("UPDATION SUCCESS")
        } catch (error) {
            console.error(error);
        }


        // Update The source Wallet Balance and
        // try {
        //     let UpdatedDetails = await Wallet.updateOne({ _id: sourceWalletDetails.newBalance }, { balance: newBalance })
        //     console.log("I AM THE UPADTED Details", UpdatedDetails)
        // } catch (error) {
        //     console.log(error);
        // }
        // console.log(ans)
        // To Update Balance !!
        // updateBalance(source_ewallet, destination_ewallet, amount)

    });

    res.send("Transfer Completed ")
}
