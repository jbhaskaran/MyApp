var express = require('express');
var router = express.Router();

var authenticationServiceFactory = require('../services/authenticationServiceFactory.js');

/* GET home page. */
router.get('/', function (req, res) {
    //res.send("hello Woprld");
    var authFactory = new authenticationServiceFactory();
    authFactory.createSignature('', '', '', '');
    var _obj = { user: "jinesh", admin: "yes" };
    res.json(_obj)
});



module.exports = router;