module.exports = function(grunt) {

  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
    clean: {
      css: {
        src: ['pub/css/*']
      },
      js:{
        src: ['pub/js/*']
      },
      js:{
        src: ['pub/article/*.html']
      }
    },
    concat : {
        build: {
          src: [
              'js/blog.js'
            ],
            dest: "pub/js/blog.js"
        },
        css : {
            src: [
              'css/blog.css'
            ],
          dest:'pub/css/blog.css'
        }
    },
    uglify: {
      options: {
        banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      bulid: {
        files: [
        {
          "pub/js/blog.min.js": ['pub/js/blog.js']
        },
        ],
      }
    },
    cssmin: {
      options: {
        banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
        beautify: {
          ascii_only: true
        }       
      },
      build: {
        files: [{
          "pub/css/blog.min.css": ['pub/css/blog.css']
        }]
      }
    },
    includereplace: {
        compile: {
          expand: true,
          src: 'article/*.html',
          dest: 'pub/'
      }
    },
    copy: {
        main: {
          files: [
            {expand: true, src: ['lib/*'], dest: 'pub/', filter: 'isFile'},
            {expand: true, src: ['images/*'], dest: 'pub/', filter: 'isFile'},
            {expand: true, src: ['article/*/*'], dest: 'pub/'}
          ]
        }
    },
    replace: {
        dist: {
          options: {
            patterns: [
              {
                match: 'timestamp',
                replacement: '<%= new Date().getTime() %>'
              },
              {
                match: 'fileAddress',
                replacement: ''
              }
            ]
          },
          files: [
            {expand: true, flatten: true,src: ['pub/*.html'], dest: 'pub/'}
          ]
        }
    },
    watch:{
      html:{
        files:['html_modules/*.html','article/**'],
        tasks:['clean','concat','uglify','cssmin','includereplace','replace','copy']
      }
    } 
});
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['clean','concat','uglify','cssmin','includereplace','replace','copy','watch']);

};
