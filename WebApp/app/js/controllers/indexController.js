(function () {
    'use strict';
    angular.module('myWebApp')
        .controller('indexController', ['$scope', function ($scope) {
            $scope.isAuthenticated = false;
            //var secretKey = "Hello1234";
            //var clientId = "MyAppClientId";
            //var resource = "/authenticate";
            //var qs = '';
            //var body = { user: "jinesh", pwd: "hello" };
            //var hash = encodeURIComponent(clientId + '&' + resource + '&' + qs + '&' + 50);
            //hash = CryptoJS.HmacSHA256(hash, secretKey);
            //hash = hash.toString(CryptoJS.enc.Base64);
            //$scope.index = hash;
        }]);
})();