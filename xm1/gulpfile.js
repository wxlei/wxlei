var gulp = require('gulp');
	
var fs = require('fs');//文件操作模块
	
var connect = require('gulp-connect');//本地服务器模块

var respond = require('gulp-respond');//本地服务器编译响应

//压缩css
var	minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');   
//压缩js
var uglify = require("gulp-uglify");
//合并js
//解决压缩angular控制器js文件压缩问题
var ngAnnotate = require("gulp-ng-annotate");
var ngMin = require("gulp-ngmin");
var clean = require("gulp-clean");
//压缩图片
var imagemin = require("gulp-imagemin")

//事件监听
gulp.task("connect",function(){
	connect.server({
		root : ["./work","./bower_components"],
		port: 8001,
		livereload: true,
		middleware:function(){
			return [
				function (req, res, next) {
					console.log("开始操作");
					next();
				},
				function (req, res) {
					var path = req.url.split("?").shift();
					path = path == "/" ? "/home.html" : path;
					url = "work" + path;
					if (!fs.existsSync(url)) {
						url = "." + path;
					}
					gulp.src(url)
							.pipe(respond(res));
					}
				]
			}
	
		})
	})
gulp.task("clean", function () {
	return gulp.src(["./work/js/build/","./work/css/build"])
		.pipe(clean());
});

gulp.task('minifycss',['clean'], function() {
    return gulp.src('./work/css/*.css')      //压缩的文件
        .pipe(minifycss())   //执行压缩
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./work/build/'))   //输出文件夹
});


gulp.task("miniJs", ["clean"], function () {
	return gulp.src("./work/js/js/*.js")
		.pipe(ngAnnotate())
		.pipe(ngMin())
		.pipe(uglify())
		.pipe(concat("all.min.js"))
		.pipe(gulp.dest("./work/build/"));
});

// gulp.task('imagemin',function(){
// 	return gulp.src("./work/images/*.gif")
// 		.pipe(imagemin())
//         .pipe(gulp.dest("./work/images/"))
// })


gulp.task('watch',function(){
	return gulp.watch(["./work/css/*.css","./work/js/js/*.js"],['minifycss','miniJs'])
	console.log(111)
})
gulp.task('serve',['connect','minifycss','miniJs','watch'])
