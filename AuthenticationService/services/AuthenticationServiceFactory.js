var crypto = require('crypto');
//var buffer = require('buffer').Buffer;

function authenticationServiceFactory() {

    var createSignature = function (clientId, resource, qs, body) {
        var secretKey = "Hello1234";
        var hash = encodeURIComponent(clientId + '&' + resource + '&' + qs + '&' + 50);
        var hmac = crypto.createHmac('sha256', secretKey);
        //base64 encoding
        hmac.setEncoding('base64');
        // write in the text that you want the hmac digest for
        hmac.write(hash);
        // you can't read from the stream until you call end()
        hmac.end();
        // read out hmac digest
        var _hash = hmac.read(); 
        return _hash;
    }

    return {
        createSignature : createSignature
    }

}
module.exports = authenticationServiceFactory;

