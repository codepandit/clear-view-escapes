var gulp = require("gulp");                 //var gulp = , watch = , postcss = ,
var watch = require("gulp-watch");          //autoprefixer = , you don't have to
var browserSync = require("browser-sync").create(); //declare new var all the time

gulp.task("watch", function(){

  browserSync.init({
    notify: false,      //remove the pop up notification of cssInject in browser
    server: {
      baseDir: "app"
    }
  });

  watch ("./app/index.html", function(){
    browserSync.reload();
  });

  watch ("./app/assets/styles/**/*.css", function(){
      gulp.start("cssInject");              //gulp.start("styles");
  });

});


gulp.task("cssInject", ["styles"], function(){  //[] means dependencies, cssInject will let styles complete it task before it runs itself
  return gulp.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});
