(function () {
    'use strict';
    describe('Midway: Testing Modules', function () {
        describe('myWebApp Module: ', function () {
            var module;
            beforeEach(function () {
                module = angular.module('myWebApp');
            });
            it('should be registered', function () {
                expect(module).not.toBeNull();
            });
            describe('dependencies: ', function () {
                var deps;
                var hasModule = function (m) {
                    return deps.indexOf(m) >= 0;
                };
                beforeEach(function () {
                    deps = module.value('appName').requires;
                });
                it('should have myWebApp.controllers as a dependency', function () {
                    expect(hasModule('myWebApp.controllers')).toBe(true);
                });
                it('should have myWebApp.services as a dependency', function () {
                    expect(hasModule('myWebApp.services')).toBe(true);
                });
            });
        });
    });
})();