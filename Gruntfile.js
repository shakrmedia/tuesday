/*!
 * Tuesday - Gruntfile
 * http://shakrmedia.github.io/tuesday
 * Copyright 2015-2020 Shakr Media Co., Ltd.
 */

module.exports = function(grunt) {
  'use strict';
  
  require("load-grunt-tasks")(grunt, {
    pattern: ['grunt-*']
  });
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: ['/* ',
              ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> ',
              ' * <%= pkg.description %> ',
              ' * <%= pkg.homepage %> ',
              ' * ',
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; <%= pkg.license %> License ',
              ' */'].join('\n'),
      banner_compact: '/* <%= pkg.name %> v<%= pkg.version %> - (C)<%= grunt.template.today("yyyy") %> Shakr; <%= pkg.license %> License */',
      banner_legacy: ['/* ',
              ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> ',
              ' * (Legacy Compatible) ',
              ' * <%= pkg.description %> ',
              ' * <%= pkg.homepage %> ',
              ' * ',
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; <%= pkg.license %> License ',
              ' */'].join('\n'),
      banner_legacy_compact: '/* <%= pkg.name %> v<%= pkg.version %> (Legacy Compat) - (C)<%= grunt.template.today("yyyy") %> Shakr; <%= pkg.license %> License */',    
    },

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

    // Sass
    'dart-sass': {
        options: {
            sourceMap: false
        },
        main: {
          files: [{
            expand: true,
            flatten: true,
            src: ["sass/tuesday.scss"],
            ext: ".css",
            dest: "build-sass"
          }]
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

    // Banner
    usebanner: {
      options: {
        position: 'top',
        banner: '<%= meta.banner %>'
      },
      full: {
        options: {
          banner: '<%= meta.banner %>'
        },
        src: [
          "build/tuesday.css"
        ]
      },
      compact: {
        options: {
          banner: '<%= meta.banner_compact %>'
        },
        src: [
          "build/tuesday.min.css",
        ]
      },
      legacyfull: {
        options: {
          banner: '<%= meta.banner_legacy %>'
        },
        src: [
          "build/tuesday.legacy.css"
        ]
      },
      legacycompact: {
        options: {
          banner: '<%= meta.banner_legacy_compact %>'
        },
        src: [
          "build/tuesday.legacy.min.css",
        ]
      },
    },

    // watch
    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['default']
      }
    }
  });
  
  grunt.registerTask('default', [
    'build-all'
  ]);

  grunt.registerTask('build', [
    'less:main', 'postcss:autoprefixer', 'postcss:nano', 
    'usebanner:full', 'usebanner:compact'
  ]);
  grunt.registerTask('build-all', [
    'less:main', 'postcss:autoprefixer', 'postcss:autoprefixer-legacy', 'postcss:nano',
    'usebanner:full', 'usebanner:compact',
    'usebanner:legacyfull', 'usebanner:legacycompact', 
  ]);
  grunt.registerTask('build-sass', [
    'dart-sass', 
    'postcss:autoprefixer', 'postcss:nano'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
  
}
