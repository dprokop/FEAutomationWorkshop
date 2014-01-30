/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json')

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');

};
