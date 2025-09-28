const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const fileInclude = require("gulp-file-include");
const htmlTask = () => {
  return src("app/index.html")
   .pipe(fileInclude({
      prefix: "@@",
      basepath: "@file"
    }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};
const scssTask = () => {
  return src("app/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
};
const jsTask = () => {
  return src("app/js/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
};
const imgTask = () => {
  return src("app/img/**/*")
    .pipe(imagemin())
    .pipe(dest("dist/imgs"))
    .pipe(browserSync.stream());
};
const serve = () => {
  browserSync.init({
    server: { baseDir: "dist" }
  });
  watch("app/index.html", htmlTask);
  watch("app/scss/*.scss", scssTask);
  watch("app/js/*.js", jsTask);
  watch("app/img/**/*", imgTask);
};
exports.default = series(
  parallel(htmlTask, scssTask, jsTask, imgTask),
  serve
);
