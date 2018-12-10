let gulp = require("gulp");
let sass = require("gulp-sass");


//编译sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});


gulp.task("watch", function() {
    return gulp.src("./src/scss/*.scss", gulp.series("sass"))
})