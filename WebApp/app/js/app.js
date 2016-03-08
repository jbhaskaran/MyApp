(function () {
    'use strict';
    angular.module('myWebApp', ['ngRoute'])
           .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
            $routeProvider.when("/home", {
                controller: "indexController",
                templateUrl: "/views/home.html"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        }]);
})();