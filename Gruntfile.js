/*
 * Default Gruntfile for Ionic Angular AppGyver Steroids
 * http://www.appgyver.com
 * http://www.appgyver.com/steroids
 * http://www.ionicframework.com
 *
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  //load tasks
  grunt.loadNpmTasks("grunt-steroids");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks('grunt-contrib-watch');

  // jade configuration
  // must include grunt watch in seperate terminal window
  //TO DO: Modify so that only one terminal is needed to watch for jade 
  grunt.initConfig({
    jade: {
      html: {
        files: [{
          expand: true,
          cwd: 'www/templates/jade',
          src: ['**/*.jade'],
          dest: 'www/templates',
          ext: '.html'
        }],
        options:{
          pretty: true
        }
      }
    },

    watch:{
      files: ['**/*.jade'],
      tasks: ['jade']
    }
  });

  grunt.registerTask("default", [
    "steroids-make", 
    "steroids-compile-sass"
    ]);
};
