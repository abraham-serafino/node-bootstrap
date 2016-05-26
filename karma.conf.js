module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'browserify'],
    files: ['build/tests/client/**/*.js'],
    preprocessors: { 'build/tests/client/**/*.js': ['browserify'] },
    phantomjsLauncher: { exitOnResourceError: true },
    autoWatch: true,
  });
};
