const gulp = require("gulp");
const sass=require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const minifycss = require("gulp-minify-css");
const connect = require("gulp-connect");

gulp.task("watchall",async ()=>{
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi"));
    });

    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("E:\\phpStudy\\WWW\\xiangyi\\js"));
    })


//     gulp.watch(["js/index.js","js/goods.js"],async ()=>{
//         gulp.src(["js/index.js","js/goods.js"])
//         .pipe(concat("common.js"))
//         .pipe(gulp.dest("dist\\js"))
//         .pipe(uglify())
//         .pipe(rename("common.min.js"))
//         .pipe(gulp.dest("dist\\js"))
//     })
    
//     gulp.watch("css/index.css",async ()=>{
//         gulp.src("css/index.css")
//         .pipe(minifycss())
//         .pipe(gulp.dest("css\\load.css"));
//     });
// });

// gulp.task("server",async ()=>{
//     connect.server({
//         root:"css"
//     })
// });