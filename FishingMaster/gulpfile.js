var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');

// 压缩混淆js
gulp.task('js-uglify',function(){
	return gulp.src('src/**/*.js')
			.pipe(uglify())

			.pipe(gulp.dest('dist'))
})

// 压缩html
gulp.task('html-minify',function(){
	return gulp.src('src/**/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist'))
})

gulp.task('image-min', function(){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});