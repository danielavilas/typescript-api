const gulp = require('gulp')
const ts = require('gulp-typescript')
const JSON_FILES = ['src/*.json', 'src/**/*.json']
const tsProject = ts.createProject('tsconfig.json')

gulp.task('build', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject())
  return tsResult.js.pipe(gulp.dest('build'))
})

gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*.ts', ['scripts'])
})

gulp.task('assets', () => {
  return gulp.src(JSON_FILES)
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['watch', 'assets'])
