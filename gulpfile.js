
//http://analyticl.com/blog/frontend-templating-with-gulp-and-twig-js
//https://medium.com/@defrian.yarfi/frontend-development-with-gulp-twig-and-scss-65f4b40d3b8e

var gulp = require('gulp');

  twig = require('gulp-twig');
  plumber = require('gulp-plumber');
  data = require('gulp-data');
  path = require('path');
  fs = require('fs');


var options = {
    twigPages: {
        filesSrc:'./src/twigPages/*.twig',
        dataPath: './src/twigPages/data/'
    },
    paths : {
        build: './build/',
    }
}
plugins = {}
require('./gulp-tasks/twigPages')(gulp, plugins, options);