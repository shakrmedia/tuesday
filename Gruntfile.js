/*!
 * Tuesday - Gruntfile
 * http://shakrmedia.github.io/tuesday
 * Copyright 2015 Shakr Media Co., Ltd.
 */

module.exports = function(grunt) {
  'use strict';
  
  require("load-grunt-tasks")(grunt, {
    pattern: ['grunt-*']
  });
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // LESS
    less: {
      main: {
        expand: true,
        flatten: true,
        files: [
          { src: ["less/tuesday.less"], dest: "build/tuesday.css" },
          { src: ["less/demo.less"], dest: "build/demo.css" }
        ]
      }
    },

    // postcss
    postcss: {
      // autoprefixer
      autoprefixer: {
        options: {
          processors: [
            require('autoprefixer')()
          ]
        },
        files: [
          { src: 'build/tuesday.css', dest: 'build/tuesday.css' }
        ]
      },
      // autoprefixer with legacy browser support
      'autoprefixer-legacy': {
        options: {
          processors: [
            require('autoprefixer')({
              overrideBrowserslist: ["last 3 versions", "not dead", "IE 10"]
            })
          ]
        },
        files: [
          { src: 'build/tuesday.css', dest: 'build/tuesday.legacy.css' }
        ]
      },
      // cssnano
      nano: {
        options: {
          processors: [
            require('cssnano')({
              autoprefixer: false
            })
          ]
        },
        files: [
          {
            expand: true,
            cwd: 'build/',
            src: ['tuesday.css','tuesday.legacy.css'],
            dest: 'build/',
            ext: '.min.css',
            extDot: 'last'
          }
        ]
      }
    },

    // watch
    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['default']
      }
    }
  });
  
  grunt.registerTask('default', ['build', 'build-legacy']);

  grunt.registerTask('build', ['less:main', 'postcss:autoprefixer', 'postcss:nano']);
  grunt.registerTask('build-legacy', ['less:main', 'postcss:autoprefixer-legacy', 'postcss:nano']);
  grunt.registerTask('dev', ['watch']);
  
}