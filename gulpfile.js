const livereload = require("gulp-livereload");
const gulp = require("gulp");
// gulp plugin to minify HTML.
const htmlmin = require("gulp-htmlmin");
//gulp plugin to run malti function when i make chanjes in file
const { parallel } = require("gulp");

/* this function to minify html */
function minifyhtml() {
  return gulp
    .src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

function movecss() {
  console.log("its working");
  return gulp
    .src(["src/animation.css", "src/style.css"])
    .pipe(gulp.dest("build"));
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(["src/index.html"], parallel(minifyhtml, movecss));
};
