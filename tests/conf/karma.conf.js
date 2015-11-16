module.exports = function (config) {
    config.set({
        // Base path, that will be used to resolve files and exclude
        basePath: '../../',

        // Testing framework
        frameworks: ['jasmine'],

        // Files to load by tests
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-apimock/dist/angular-apimock.js',

            'scripts/hello-world.js',

            'tests/unit/**/*.js'
        ],

        // Web server port
        port: 8080,

        // Possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Colors default true
        colors: true,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-htmlfile-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['dots', 'coverage', 'html', 'junit'],

        htmlReporter: {
            outputFile: 'reports/index.html'
        },

        junitReporter: {
            outputFile: 'reports/test-results.xml'
        },

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'resources/scripts/**/*.js': ['coverage']
        },

        coverageReporter: {
            reporters:[
                {type: 'html', dir:'coverage/'},
                {type: 'cobertura', dir:'coverage/', file: 'coverage.xml'}
            ]
        },

        // If true, it capture browsers, run tests and exit
        singleRun: false
    });
};
