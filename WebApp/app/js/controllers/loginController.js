(function () {
    'use strict';
    angular.module('myWebApp.controllers', [])
        .controller('loginController', ['$scope', 'authenticationService', function ($scope, authenticationService) {
            $scope.userName = "j@we.co";
            $scope.password = "Hello123";
            $scope.login = function () {
                authenticationService.login($scope.userName, $scope.password)
                .then(function (response) {
                    $scope.user = response;
                    $scope.authenticated = true;
                })
                .catch(function () {
                    $scope.error = "Error";
                });
            };
            //$http.get('content/phones.json').success(function (data) {
            //    $scope.phones = data;
            //});
        }]);
})();