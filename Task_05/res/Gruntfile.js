/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
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
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask("compileAndMinify", ['less:bootstrap', 'cssmin:bootstrap']);

};
