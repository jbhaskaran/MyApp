module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'app/js/datastructures/*.js',
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