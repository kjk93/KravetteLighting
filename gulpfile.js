var gulp = require('gulp');
var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var server = require('gulp-express');

var jsFiles = ['*.js', 'src/**/*.js'];
var scssFiles = ['*.scss', 'src/**/*.scss'];
var htmlFiles = ['*.html', 'src/**/*.html'];
var assetFiles = ['assets/**/*'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jsHint())
        .pipe(jsHint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./src/styles/*.css', './src/**/*.js'], {read: false});
    var injectOptions = {
        ignorePath: '/src/'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../public'
    };

    return gulp.src('./src/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src'));
});

gulp.task('sass', function(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('serve', ['style', 'inject', 'sass', 'toPublic'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: [jsFiles, scssFiles, htmlFiles]
    };

    return nodemon(options)
        .on('restart', function(ev){
            console.log('Restarting......');
        });
});

gulp.task('assetsToPublic', function(){
    return gulp.src('./assets/**/*')
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('toPublic', function(){
    return gulp.src('./src/**/*')
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function(){
    gulp.watch(jsFiles, ['toPublic', 'style', 'inject']);
    gulp.watch(scssFiles, ['toPublic', 'style', 'inject', 'sass']);
    gulp.watch(htmlFiles, ['toPublic', 'style', 'inject']);
});

gulp.task('server', ['assetsToPublic', 'toPublic', 'style', 'inject', 'sass'], function(){
    server.run(['app.js']);

    gulp.watch(jsFiles, function(event){
        gulp.watch(jsFiles, ['toPublic', 'style', 'inject']);
        server.notify(event);
    });

    gulp.watch(scssFiles, function(event){
        gulp.watch(scssFiles, ['toPublic', 'style', 'inject', 'sass']);
        server.notify(event);
    });

    gulp.watch(htmlFiles, function(event){
        gulp.watch(htmlFiles, ['toPublic', 'style', 'inject']);
        server.notify(event);
    });

    gulp.watch(assetFiles, function(event){
        gulp.watch(assetFiles, ['assetsToPublic']);
        server.notify(event);
    });
});
