// Karma configuration
// Generated on Tue Oct 29 2013 16:49:15 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    plugins: [
      'karma-qunit',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-ember-preprocessor',
      'karma-phantomjs-launcher',
      'karma-html2js-preprocessor'
    ],

    // frameworks to use
    frameworks: ['qunit'],

    // list of files / patterns to load in the browser
    files: [
      // Ember ENV for Testing
      'config/test_env.js',

      // Vendor
      '../../static/build/js/lib/vendor_deps.js',

      'config/ember_config.js',

      '../../static/build/js/app.js',

      // Stubs for Bluebottle API
      'config/test_stubs.js',

      // Precompiled Handlebar Templates
      'templates.js',

      // Test Deps
      '../../static/build/js/lib/test_deps.js',

      // Factories / Fixtures
      'factories/**/*_factory.js',
      'fixtures/*.js',

      // Test Config and Helpers
      'config/test_config.js',
      'helpers/*_helpers.js',

      // Unit Tests
      'unit/**/helpers.js',
      'unit/**/*_test.js',

      // Integration Tests
      'integration/**/helpers.js',
      'integration/**/*_test.js',

      // Handlebars Templates
      'templates.html'
    ],

    preprocessors: {
      'templates.html': ['html2js'],
      '../../apps/**/static/**/*.js': ['coverage'],
      '../../static/global/js/bluebottle/**/*.js': ['coverage']
    },

    // list of files to exclude
    exclude: [
      
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'coverage'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
