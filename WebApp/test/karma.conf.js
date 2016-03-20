module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/js/**/*.js',
            'test/midway/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,
        
        singleRun: false,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: ['karma-chrome-launcher', 'karma-jasmine'],

        junitReporter: {
            outputFile: 'testoutput/unittests.xml',
            suite: 'unit'
        }
    });
};