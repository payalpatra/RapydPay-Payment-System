module.exports = function (headers, uri, http_method, body) {
    const data = {
        headers: headers,
        uri: uri,
        method: http_method,
        body: body
    }
    return data;
};
