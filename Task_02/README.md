Task 02 - grunt.js intro
====================
1. Install grunt-cli `npm install -g grunt-cli`
2. Prepare files `package.json` and `Gruntfile.js` in the project directory

    ```
    {
        "name" : "project-name",
        "version" : "project-version",
        "devDependencies" : {
            "grunt-plugin-name" : "grunt-plugin-version"
        }
    }
    ```

    ```
    module.export = function(grunt) {
        grunt.initConfig({
            'pkg' : grunt.file.readJSON('package.json'),
        });
    }
    ```

3. Add `grunt-contrib-less v.0.9.0`  dependency into the `package.json` file, and load it in grunt.js config file `Gruntfile.js` using `grunt.loadNpmTask()` method
4. Install added dependency using `npm install` command

## Links
- [Grunt website] (http://gruntjs.com/)

## Tip
- `package.json` file can be initialized using `npm init` command
-  Read more about [grunt-init](https://github.com/gruntjs/grunt-init)
