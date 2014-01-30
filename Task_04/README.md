Task 04 - Adding more plugins
====================

1. Install css minification `grunt-contrib-cssmin` and files watching `grunt-contrib-watch` plugins using command line

    ```
    npm install <package-name> --save-dev
    ```

2. Load the plugins into `Gruntfile.js` file
3. Configure the `cssmin` task to minify the `/dist/css/bootstrap.css` file
4. Configure the `watch` task to compile the `bootstrap.less` file every time ANY of the bootstrap's LESS source file is changed
5. Test defined tasks using `grunt` command

## Links
- [Grunt website] (http://gruntjs.com/)
- [grunt-contrib-cssmin on github] (https://github.com/gruntjs/grunt-contrib-cssmin)
- [grunt-contrib-watch on github] (https://github.com/gruntjs/grunt-contrib-watch)
- - [Files operations in Grunt.js](http://gruntjs.com/configuring-tasks#files)


