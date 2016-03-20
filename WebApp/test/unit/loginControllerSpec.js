(function () {
    'use strict';
    describe('test suite for login controller', function () {
        var scope, controller, $httpBackend, $q, deferred, authenticationService;
        beforeEach(module('myWebApp'));
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, _$q_, _authenticationService_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $q = _$q_;
            deferred = $q.defer();
            authenticationService = _authenticationService_;
            //use a jasmine spy to return the deferred promise
            spyOn(authenticationService, 'login').and.returnValue(deferred.promise);
            //initialize the controller
            controller = $controller('loginController', { $scope: scope, authenticationService: authenticationService });
        }));
        it('should have a login controller', function () {
            expect(module.loginController).not.toBeNull();
        });
        it('should have a properly working login controller', inject(function ($rootScope, $controller) {
            var scope, controller;
            expect(controller).not.toBeNull();
        }));
        it('should set the default value of userName mode to "j@we.co"', function () {
            expect(scope.userName).toBe('j@we.co');
        });
        
        it('should resolve promise - call login method of authenticationService when controller login method is called', function () {
            scope.login('j@we.co', 'Hello123');
            expect(authenticationService.login).toHaveBeenCalledWith('j@we.co', 'Hello123');
            //set up the data to return for the .then function in the controller
            deferred.resolve({ userName: "jinesh" });
            scope.$apply();
            expect(scope.authenticated).not.toBeUndefined();
            expect(scope.authenticated).toBe(true);
            expect(scope.error).toBeUndefined();
        });
        it('should reject promise - call login method of authenticationService when controller login method is called', function () {
            scope.login('j@we.co', 'Hello123');
            expect(authenticationService.login).toHaveBeenCalledWith('j@we.co', 'Hello123');
            //set up the data to return for the .then function in the controller
            deferred.reject();
            scope.$apply();
            expect(scope.authenticated).toBeUndefined();
            expect(scope.error).not.toBeUndefined();
            expect(scope.error).toBe('Error');
        });

        //it('should create "phones model" with 2 phones fetched from xhr', function () {
        //    $httpBackend.expectGET('content/phones.json').
        //        respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        //    expect(scope.phones).toBeUndefined();
        //    $httpBackend.flush();
        //    expect(scope.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        //});
        //it('should resolve promise', function () {
        //    //set up the data to return for the .then function in the controller
        //    deferred.resolve({ userName: "jinesh" });
        //    scope.$apply();
        //    expect(scope.authenticated).not.toBeUndefined();
        //    expect(scope.authenticated).toBe(true);
        //    expect(scope.error).toBeUndefined();
        //});
        //it('should reject promise', function () {
        //    deferred.reject();
        //    // We have to call apply for this to work
        //    scope.$apply();
        //    expect(scope.authenticated).toBeUndefined();
        //    expect(scope.error).not.toBeUndefined();
        //    expect(scope.error).toBe('Error');
        //});

    });
})();   