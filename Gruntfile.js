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
        src: ["tuesday.less", "demo.less"],
        ext: ".css",
        dest: "build"
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
        src: ["tuesday.css"],
        dest: "build"
      }
    },

    // css minify
    cssmin: {
      minify: {
        src: "build/tuesday.css",
        dest: "build/tuesday.min.css"
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
  
  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('dev', ['watch']);
  
}