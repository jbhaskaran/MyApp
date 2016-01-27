var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('This is the start page');
});

module.exports = router;