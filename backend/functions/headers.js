module.exports = function (access_key, signature, salt, timestamp) {
  const headers = {
    access_key: access_key,
    signature: signature,
    salt: salt,
    timestamp: timestamp,
    "Content-Type": "application/json",
  };
  return headers;
};
