var express = require('express');
var router = express.Router();
var movieService = require('../services/movieService');

router.get("/", function (req, res) {
    movieService.getMovies(function (data) {
        return res.json(data);
    });
});

router.get("/:id", function (req, res) {
    var promise = movieService.getMovieDetails(req.params.id);
    promise.then(function (response) {
        return res.json(response);
    })
    .catch(function (reason) {
        console.log("Error: " + reason);
    });
});

module.exports = router;