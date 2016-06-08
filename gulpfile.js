const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const paths = {
    src: './',
    build: './'
};

gulp.task('default', ['browserify']);

gulp.task('browserify', function() {
    process.env.NODE_ENV = 'production';
    browserify(paths.src + 'index.jsx')
        .transform(babelify.configure({
            "presets": ["react", "es2015"],
            "plugins": ["transform-react-jsx", "transform-runtime", "transform-object-rest-spread"]
        }))
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest(paths.build))
});

gulp.task('migrate', function() {
    gulp.src(paths.src + './img/**/*')
        .pipe(gulp.dest(paths.build + '/img/'))
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