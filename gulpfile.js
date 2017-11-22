var gulp = require("gulp");                 //var gulp = , watch = , postcss = ,
var watch = require("gulp-watch");          //autoprefixer = , you don't have to
var postcss = require("gulp-postcss");      //declare new var all the time
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");

gulp.task("default", function(){
  console.log("gulp is installed successfully, we are going to rule!");
});

gulp.task("html", function(){
  console.log("Something to do this with HTML");
});

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){

  watch ("./app/index.html", function(){
    gulp.start('html');
  });

  watch ("./app/assets/styles/**/*.css", function(){
      gulp.start("styles");
  });

});
