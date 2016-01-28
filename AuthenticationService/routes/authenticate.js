var express = require('express');
var router = express.Router();

var authenticationServiceFactory = require('../services/authenticationServiceFactory.js');

/* GET home page. */
router.get('/', function (req, res) {
    //res.send("hello Woprld");
    var secretKey = "Hello1234";
    var clientId = "MyAppClientId";
    var resource = "/authenticate";
    var qs = '';
    var body = { user: "jinesh", pwd: "hello" };
    var authFactory = new authenticationServiceFactory();
    var hash = authFactory.createSignature(clientId, resource, qs, body);
    var _obj = { user: "jinesh", admin: "yes", hash: hash };
    res.json(_obj)
});



module.exports = router;