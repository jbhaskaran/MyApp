var fs = require('fs');
//revealing module pattern (closures)
function movieService() {
    var _movieCount = 0;
    var _getMovies = function (callback) {
        //faking asynchrony
        fs.readFile('./data/movies.js', 'utf8', function (err, data) {
            try {
                data = getTestData();
                callback(data);
            }
            catch (e){
                var exp = e;
            }
        });
    }
    var _getMovieDetails = function (movieId) {
        var p = new Promise(function (resolve, reject) {
            fs.readFile('./data/movies.json', 'utf8', function (err, data) {
                if (err) reject();
                data = {
                    Id: 1000,
                    Title: "Titanic",
                    Director: "James Cameron",
                    Actor: ["Leonardo da Vinci", "Kate Winslet", "John Dawqson"],
                    SubTitles: ["English", "Spanish"],
                    Music: "Alan Silvestri"
                };
                resolve(data);
            });
        });
        return p;
    }

    var _count = function () {
        return _movieCount;
    }
    
    var getTestData = function () {
        var movies = [
            {
                Id: 1000,
                Title: "Titanic",
                Director: "James Cameron",
                Actor: ["Leonardo da Vinci", "Kate Winslet", "John Dawqson"],
                SubTitles: ["English", "Spanish"],
                Music: "Alan Silvestri"
            },
            {
                Id: 1001,
                Title: "Avatar",
                Director: "James Cameron",
                Actors: ["Jake", "Sully", "Hello Mia"],
                SubTitles: ["English", "Spanish"],
                Music: "Alan Silvestri"
            },
            {
                Id: 1002,
                Title: "Star Wars",
                Director: "J.J Abrams",
                Actors: ["Actor 1", "Actor 2", "John Dawqson"],
                SubTitle: ["English", "Spanish"],
                Music: "Alan Silvestri"
            }
        ];
        return movies;
    }

    return {
        getMovies : _getMovies,
        getMovieDetails : _getMovieDetails,
        getMovieCount : _count
    }
}
module.exports = movieService();