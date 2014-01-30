Task 05 - Running tasks sequences
====================

1. Create a complex `production` task, that will first compile the `bootstrap.less` file, and then minify it into `bootstrap.min.css` file
2. Develop this task to concatenate (`grunt-contrib-concat`) jQuery & bootstrap js files to `/dist/js/production.js` file. Use the Object version of input/output files mapping pattern
3. Develop this task to additionaly minify the `production.js` file (`grunt-contrib-uglify`). Add some fancy comment above the production code by specifying the `banner` option
 of `uglify` task

##Links
- [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
- [Files mapping in Grunt.js](http://gruntjs.com/configuring-tasks#files)
 

## Tip
- Use `grunt.registerTask()` method to create task sequence


