Task 01 - bower intro
====================

1. Install bower using `npm install -g bower`
2. Create project directory and navigate to it using command line
3. Create `.bowerrc` file with `directory` field set to `lib`

   ```
    {
        "directory" : "lib"
    }
    ```
4. Create `bower.json` file with (`name`, `version`,`dependencies`) fields
    
    ```
    {
        "name" : "project name",
        "version" : "project version",
        "dependencies" : {
            "package-name" : "version"
        }
    }
    ```
5. Add `bootstrap 3.0.3` as project dependency into the `bower.json` file
6. Install dependencies using `bower install` command

## Links
- [Bower website] (http://bower.io/)

## Tip
`bower.json` file can be initialized using `bower init` command
