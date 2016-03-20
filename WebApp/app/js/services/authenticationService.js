(function () {
    'use strict';
    angular.module('myWebApp.services', [])
        .factory('authenticationService', ['$q', '$http', function ($q, $http) {
            var authService = {};
            var _login = function (userId, password) {
                var deferred = $q.defer();
                $http.get('content/phones.json')
                    .sucess(function (data) {
                    deferred.resolve(data);
                })
                    .failure(function () {
                    deferred.reject();
                });
                return deferred.promise;
            }
            authService.login = _login;
            return authService;
        }]);
})();