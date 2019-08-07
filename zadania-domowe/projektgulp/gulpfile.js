const gulp = require('gulp');
const sass = require('gulp-sass');


// metoda src - wyszukuje wszystkie pliki w folderze app/scss i wszystkie w nim katalogi i bierze wszystkie pliki z rozszerzeniem .scss
gulp.task('sass',()=>{
    return gulp.src('app/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('app/css'));
});

//pipe(sass) szuka plikow scss i zmienia css a nastepnie pipe gulp dest

//gulp.watch - nasłuch czyli na każdy ctr+s zapisuje zmiany 
gulp.task('watch',()=>{
    gulp.watch('app/scss/**/*.scss',gulp.series('sass'));
});