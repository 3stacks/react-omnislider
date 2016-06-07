const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const paths = {
    src: './src/',
    build: './build/'
};

gulp.task('default', ['browserify', 'sass', 'migrate', 'html']);

gulp.task('browserify', function() {
    process.env.NODE_ENV = 'production';
    browserify(paths.src + 'js/index.js')
        .transform(babelify.configure({
            "presets": ["react", "es2015"],
            "plugins": ["transform-react-jsx", "transform-runtime", "transform-object-rest-spread"]
        }))
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.build + 'js/'))
});

gulp.task('sass', function() {
    gulp.src(paths.src + 'sass/style.scss')
        .pipe(sass({
        }))
        .pipe(gulp.dest(paths.build))
});

gulp.task('migrate', function() {
    gulp.src(paths.src + './img/**/*')
        .pipe(gulp.dest(paths.build + '/img/'))
});

gulp.task('html', function() {
    gulp.src(paths.src + 'html/index.html')
        .pipe(gulp.dest(paths.build))
});

gulp.task('publish', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('watch', ['browserify', 'html', 'sass', 'migrate'], function() {
    gulp.watch(
        paths.src + 'components/**/*',
        ['browserify']
    );
    gulp.watch(
        paths.src + 'js/**/*',
        ['browserify']
    );
    gulp.watch(
        paths.src + 'html/index.html',
        ['html']
    );
    gulp.watch(
        paths.src + 'sass/**/*.scss',
        ['sass']
    );
    gulp.watch(
        'img/**/*',
        ['migrate']
    );
});