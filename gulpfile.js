var gulp = require('gulp')
  , stylus = require('gulp-stylus')
var paths = {
  css: {
    src: './index.styl'
  , dest: './'
  }
}


gulp.task('css', function() {
  gulp.src(paths.css.src)
    .pipe(stylus())
    .pipe(gulp.dest(paths.css.dest))
})

gulp.task('watch', function() {
  gulp.watch(paths.css.src, ['css'])
})

gulp.task('default', ['watch'])