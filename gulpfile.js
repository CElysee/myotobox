import gulp from 'gulp';
import inlineSource from 'gulp-inline-source';
import replace from 'gulp-replace';
import fs from 'fs';
import path from 'path';

gulp.task('inline-css', () => {
  return gulp.src('./dist/**/*.html')
    .pipe(replace(
      /<link rel="stylesheet" href="\/assets\/css\/main.*.css">/g,
      () => {
        const criticalCss = fs.readFileSync(path.join(__dirname, 'dist', 'critical-css', 'index.html.css'), 'utf8');
        return `<style>${criticalCss}</style>`;
      }
    ))
    .pipe(inlineSource())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('inline-css'));
