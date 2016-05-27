require('path');

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exorcise');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-jasmine-nodejs');

  grunt.initConfig({
    clean: ['build'],

    eslint: { app: ['src'] },

    copy: {
      app: { expand: true, cwd: 'src', src: '**', dest: 'build' },
    },

    browserify: {
      app: {
        options: {
          browserifyOptions: { debug: true },
          transform: [['babelify', { presets: ['es2015'] }]],
        },

        src: ['src/client/app.js'],
        dest: 'build/bundle.js',
      }
    },

    exorcise: {
      app : {
        files: { 'build/bundle.js.map': ['build/bundle.js'] },
      }
    },

    uglify: {
      app: {
        options: { sourceMap: true, sourceMapIn: 'build/bundle.js.map' },
        files: { 'build/client/app.min.js': ['build/bundle.js'] },
      }
    },

    karma: {
      app: {
        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'browserify'],
        options: { files: ['tests/karma/**/*.js'] },

        preprocessors: {
          'tests/karma/**/*.js': ['babel'],
          'tests/karma/**/*.es5.js': ['browserify'],
        },

        babelPreprocessor: {
          options: { presets: ['es2015'], sourceMap: 'inline' },

          filename: function (file) {
            return file.originalPath.replace(/\.js$/, '.es5.js');
          },

          sourceFileName: function (file) {
            return file.originalPath;
          },
        },

        phantomjsLauncher: { exitOnResourceError: true },
        singleRun: true,
        logLevel: 'ERROR',
        colors: true,
        reporters: ['spec'],
      },
    },

    jasmine_nodejs: {
      app: { specs: ['tests/node/**'] },
    },

    express: {
      app: {
        options: { port: 3000, hostname: 'localhost', bases: ['build/client'],
          livereload: true, open: true },
      },
    },

    watch: {
      ui: {
        options: { livereload: true },
        files: ['build/client/**'],
        tasks: [],
      },

      autobuild: { files: ['src/**/*'], tasks: ['build'] },
      autotest: { files: ['tests/**/*', 'src/**/*'], tasks: ['build', 'all_tests'] },
    },

    nodemon: {
      app: {
        script: 'build/server/server.js',
        options: { watch: ['buld/server'] },
      },
    },

    concurrent: {
      options: { logConcurrentOutput: true },
      run: ['nodemon', 'watch:autobuild', 'server'],
      test: ['nodemon', 'watch:autobuild', 'watch:autotest', 'server'],
      debug: ['nodemon', 'node-inspector', 'watch:autobuild', 'server'],
    },
  });

  grunt.registerTask('build', ['eslint', 'copy', 'browserify', 'exorcise', 'uglify']);
  grunt.registerTask('rebuildAll', ['clean', 'build']);
  grunt.registerTask('server', ['express', 'watch:ui']);
  grunt.registerTask('autobuild', ['watch:autobuild']);
  grunt.registerTask('run', ['rebuildAll', 'concurrent:run']);
  grunt.registerTask('default', ['run']);
  grunt.registerTask('all_test', ['jasmine_nodejs', 'karma']);
  grunt.registerTask('test', ['rebuildAll', 'concurrent:test']);
};
