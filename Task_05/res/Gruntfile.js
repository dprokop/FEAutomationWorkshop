/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    less: {
      bootstrap: {
          options : { },
          src : "./lib/bootstrap/less/bootstrap.less",
          dest : "./dist/css/bootstrap.css"
      }
    },
    cssmin: {
      bootstrap: {
        options: {},
        src: "./dist/css/bootstrap.css",
        dest:"./dist/css/bootstrap.min.css"
      }
    },

    watch: {
      less:{
        options: {},
        files : "./lib/bootstrap/less/*.less",
        tasks: "less:bootstrap"
      }
    },
    concat : {
      options : {
          separator: ';'
      },
      js: {
        files : {
          './dist/js/production.js' : ['./lib/jquery/jquery.js', './lib/bootstrap/js/*.js']
        }
      }
    },
    uglify : {
      options : {
        banner : '/*! Created in Making Waves! */'
      },
      js : {
        src: './dist/js/production.js',
        dest: './dist/js/production.min.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask("compileAndMinify", ['less:bootstrap', 'cssmin:bootstrap', 'concat:js', 'uglify:js']);

};
