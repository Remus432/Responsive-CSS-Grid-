const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");


// Compile Sass
function style() {
    return gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
}

// Optimize Images
function optify() {
    return gulp.src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./img"))
}

// Watch & Serve
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    optify();
    gulp.watch("./src/sass/*/*.scss", style);
    gulp.watch("./*.html").on("change", browserSync.reload);
}


exports.watch = watch;