// import gulp from 'gulp';
// import inlineSource from 'gulp-inline-source';
// import replace from 'gulp-replace';
// import fs from 'fs';
// import path from 'path';

// gulp.task('inline-css', () => {
//   return gulp.src('./dist/**/*.html')
//     .pipe(replace(
//       /<link rel="stylesheet" href="\/assets\/css\/main.*.css">/g,
//       () => {
//         const criticalCss = fs.readFileSync(path.join(__dirname, 'dist', 'critical-css', 'index.html.css'), 'utf8');
//         return `<style>${criticalCss}</style>`;
//       }
//     ))
//     .pipe(inlineSource())
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', gulp.series('inline-css'));

import gulp from 'gulp';
import inlineSource from 'gulp-inline-source';
import replace from 'gulp-replace';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

gulp.task('inline-css', () => {
  return gulp.src('./dist/**/*.html')
    .pipe(replace(
      /<link\s+rel="preload"\s+href="\/assets\/css\/main\.css"\s+as="style"\s+onload="this\.onload=null;this\.rel='stylesheet'"\s*\/>/g,
      () => {
        const criticalCssPath = path.join(__dirname, 'dist', 'critical-css', 'index.html.css');
        const criticalCss = fs.readFileSync(criticalCssPath, 'utf8');
        
        // Ensure the CSS content is correctly formatted and minified
        const inlinedCss = `<style>${criticalCss.replace(/<\/style>/g, '<\\/style>').replace(/\n/g, '')}</style>`;
        return inlinedCss;
      }
    ))
    .pipe(inlineSource())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('inline-css'));