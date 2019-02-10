/**
 * @file
 * Task: Twig.
 */
twig = require('gulp-twig');
plumber = require('gulp-plumber');
data = require('gulp-data');
path = require('path');
fs = require('fs');
glob = require('glob');

 module.exports = function (gulp, plugins, options) {
    'use strict';
      gulp.task('twigPages', function () {
        var pageList = [];
        var pageListFiles =  glob.sync(options.twigPages.filesSrc)
        pageListFiles.forEach(function(file){
            if(path.parse(file)['name'] == "index") {
                return;
            }
            pageList.push(path.parse(file)['name'] + '.html');
        });
        return gulp.src([options.twigPages.filesSrc])
        //Stay live and reload on error.
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        //Setting default data.
        .pipe(data(function(file){
            return {
                title:'Default Title',
                pageTitle: "Default Page Title",
                pageList: pageList
            }
        }))
        //Getting json data.
        .pipe(data(function(file){
            var jsonFilePath = options.twigPages.dataPath + path.parse(file.path)['name'] + '.json';
            //Verify exits.
            if(!fs.existsSync(jsonFilePath)){
                //No file, return empty object.
                return {};
            }
            //Return parsed file.
            return JSON.parse(fs.readFileSync(jsonFilePath));
        }))
        //Render via Twig plugin
        .pipe(twig())
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        //Save files.
        .pipe(gulp.dest(options.paths.build));
    });
  };