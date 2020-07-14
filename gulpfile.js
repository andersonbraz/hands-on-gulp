const gulp = require('gulp');

function dev(cb){
    gulp.task('dev', function(){
        console.log("Development mode ...");
    });
    cb();
}

function prod(cb){
    gulp.task('prod', function(){
        console.log("Production mode ...");
    });
    cb();
}

exports.default = gulp.series(dev, prod);

