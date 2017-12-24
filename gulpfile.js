const config = require( './config.project.js' );
const wpConfig = require( './config.webpack.js' );
const gulp = require( 'gulp' );
const webpack = require( 'webpack' );
const gulpWebpack = require( 'gulp-webpack' );
const concat = require( 'gulp-concat' );
const sass = require( 'gulp-sass' );
const webserver = require( 'gulp-webserver' );

gulp.task( 'js', () => {
  return gulp.src( config.src.js )
    .pipe( gulpWebpack( wpConfig,  ) )
    .pipe( gulp.dest( config.dist.location ) );
} );

gulp.task( 'css', () => {
  return gulp.src( config.src.css )
    .pipe( sass() )
    .pipe( gulp.dest( config.dist.location ) );
} );

gulp.task( 'html', () => {
  return gulp.src( config.src.html )
    .pipe( gulp.dest( config.dist.html ) );
} );

gulp.task( 'webserver', () => {
  return gulp.src( config.dist.location )
  .pipe(webserver({
    open: true
  }));
} );

gulp.task( 'default', [ 'js', 'css', 'html' ] );
