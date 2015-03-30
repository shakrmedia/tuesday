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
        cwd: "less",
        src: ["petal.less"],
        ext: ".css",
        dest: "build"
      },
      docs: {
        expand: true,
        cwd: "docs/less",
        src: ["*.less"],
        ext: ".css",
        dest: "docs"
      }
    },

    // Autoprefixer
    autoprefixer: {
      options: {
        browser: ["last 3 versions", "ie 10"]
      },
      build: {
        expand: true,
        cwd: "build",
        src: ["petal.css"],
        dest: "build"
      }
    },

    // css minify
    cssmin: {
      minify: {
        src: "build/petal.css",
        dest: "build/petal.min.css"
      }
    },


    // watch
    watch: {
      less: {
        files: ['less/**/*', 'docs/contents/**/*', 'docs/less/*'],
        tasks: ['default']
      }
    }
  });
  
  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('dev', ['watch']);
  
}