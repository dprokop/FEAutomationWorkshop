Task 03 - Tasks definition
====================

1. In `Gruntfile.js` create a `less` task. This task should take the previously downloaded using bower `bootstrap.less` and compile it into `/dist/css/bootstrap.css` file.

    Grunt.js tasks are initialized in `grunt.initConfig()` method. The general task structure is as below:
    ```
    taskName :{
        taskTarget : {
            options: {
                task specific config, see task specific docs
            },
            src : "source file path",
            dest : "result file path"
        }
    }
    ```

2. Test your task running `grunt less:bootstrap` command

## Links
- [Grunt website] (http://gruntjs.com/)
- [grunt-contrib-less on github] (https://github.com/gruntjs/grunt-contrib-less)


