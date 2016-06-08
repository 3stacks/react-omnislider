const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const paths = {
    src: './src/',
    build: './build/'
};

gulp.task('default', ['browserify', 'html']);

gulp.task('browserify', function() {
    process.env.NODE_ENV = 'production';
    browserify(paths.src + 'js/index.js')
        .transform(babelify.configure({
            "presets": ["react", "es2015"],
            "plugins": ["transform-react-jsx", "transform-runtime"]
        }))
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.build + 'js/'))
});

gulp.task('html', function() {
    gulp.src(paths.src + 'html/index.html')
        .pipe(gulp.dest(paths.build))
});