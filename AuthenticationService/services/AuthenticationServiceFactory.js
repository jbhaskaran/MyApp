var crypto = require('crypto');
var buffer = require('buffer');

function authenticationServiceFactory() {

    var createSignature = function (clientId, resource, qs, body) {
        var secretKey = "Hello1234";
        var hash = encodeURIComponent(clientId + '&' + resource + '&' + qs + '&' + body.content_length);
        hash = crypto.createHmac('sha256', secretKey);
        hash = new buffer(hash).toString('base64');
        
        //var hash1 = encodeURIComponent(clientId + '&' + resource + '&' + qs + '&' + body.content_length);
        //hash1 = crypto.createHmac('sha256', secretKey);
        //hash1 = new buffer(hash).toString('base64');

        return hash;
    }

    return {
        createSignature : createSignature
    }

}
module.exports = authenticationServiceFactory;

