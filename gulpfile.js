const gulp = require("gulp");
const sass=require("gulp-sass");
//const uglify = require("gulp-uglify");
//const concat = require("gulp-concat");
//const rename = require("gulp-rename");
//const minifycss = require("gulp-minify-css");
//const connect = require("gulp-connect");

gulp.task("watchall",async ()=>{
    gulp.watch("./**/*.html",async ()=>{
        gulp.src("./**/*.html")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi"));
    });

    gulp.watch("sass/**/*.scss",async ()=>{
    gulp.src("sass/**/*.scss")
     .pipe(sass())
	.pipe(minfyCSS())
    .pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi"));
})


    gulp.watch("*/js/*.js",async ()=>{
        gulp.src("*/js/*.js")
        .pipe(concat("*/js/*.js"))
        .pipe(uglify())
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi"))
    })
    
    gulp.watch("*/img/*",async ()=>{
        gulp.src("*/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi"));
    });
});

gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi"));
});