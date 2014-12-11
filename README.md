ASIA (Appgyver Steroids, Ionic, Angular)
==========================

Froked from: ionic-angular-appgyver-seed
----------------------------------------

The perfect starting point for an Ionic + AppGyver project.

- [Ionic Tutorials](http://ionicframework.com/tutorials/)
- [AppGyver Tutorials](http://academy.appgyver.com/courses/steroids)

To run this with AppGyver steroids:
* [install steroids](http://academy.appgyver.com/courses/2/lessons/32)
* run `npm install`
* run `steroids connect`
* note: `steroids connect --watch` will break the jade watch task (i know, i'm working on it)

To create html files in your www/template directory with the Jade Template Engine:
* in a separate terminal window type `grunt watch`
* all jade files should be added to the www/templates/jade directory
* .html file output will go to www/templates
* one other thing you'll have to do is edit the `steroids-copy-www` task located in `node_modules/grunt-steroids/tasks` directory.  You have to exclude the .jade files from copying over to your dist (otherwise you'll run into an infinite loop).  Change that file so it looks like this:


  `module.exports = (grunt)->
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-extend-config"
  grunt.registerTask "steroids-copy-www", "Copy files from www/ to dist/ (except for .scss, .jade, and .coffee)", ->
    grunt.extendConfig
      copy:
        www:
          expand:true
          cwd: 'www/'
          src: ['**/*.*', '!**/*.coffee', '!**/*.scss', '!**/*.jade']
          dest: 'dist/'

    grunt.task.run "copy:www"`


A fix to knock this step out is on my TODO list.

