require("dotenv").config();
const CryptoJS = require("crypto-js");

module.exports = function () {

    let salt = CryptoJS.lib.WordArray.random(12);
    let timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();
    let access_key = process.env.ACCESS_KEY;
    let secret_key = process.env.SECRET_KEY;

    return { salt, timestamp, access_key, secret_key };
};


