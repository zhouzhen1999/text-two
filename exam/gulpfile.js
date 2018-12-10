let gulp = require("gulp");
let sass = require("gulp-sass");
let server = require("gulp-webserver");


//编译sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});


gulp.task("watch", function() {
    return gulp.src("./src/scss/*.scss", gulp.series("sass"))
})

//起服务
gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(server({
            port: 6565,
            open: true,
            proxies: [{
                source: '/api/datas',
                target: 'http://localhost:3565/api/datas'
            }]
        }));
});