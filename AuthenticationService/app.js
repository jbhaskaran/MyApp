var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var authenticateRoute = require('./routes/authenticate');
var indexRoute = require('./routes/index');

var app = express();
//var router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//router.get(function (req, res) {
//    console.log("All requests goes thru here");
//    next();
//});
app.use('/', indexRoute);
app.use('/authenticate', authenticateRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});


module.exports = app;
