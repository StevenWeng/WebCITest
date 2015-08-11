var fs = require('fs');
var getPackageJson = function () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

var gulp = require('gulp'),
	karma = require('karma').server,
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sourceFiles = [
		'scripts/**/*.js'
	];

require('gulp-release-tasks')(gulp);

gulp.task('build', function() {
	gulp.src(sourceFiles)
		.pipe(concat('angular-spider.js'))
		.pipe(gulp.dest('./dist/js/'))
		.pipe(uglify())
		.pipe(rename('angular-spider.min.js'))
		.pipe(gulp.dest('./dist/js/'));
	gulp.src(cssFiles)
		.pipe(gulp.dest('./dist/css/'));
});



/**
 * Run test once and exit
 */
gulp.task('test-src', function (done) {
	karma.start({
		configFile: __dirname + '/karma-src.conf.js',
		singleRun: true
	}, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-concatenated', function (done) {
	karma.start({
		configFile: __dirname + '/karma-dist-concatenated.conf.js',
		singleRun: true
	}, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-minified', function (done) {
	karma.start({
		configFile: __dirname + '/karma-dist-minified.conf.js',
		singleRun: true
	}, done);
});

gulp.task('default', ['test-src']);