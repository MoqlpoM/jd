let { task, src, dest, watch, series, parallel } = require('gulp')
let load = require('gulp-load-plugins')()
let del = require('del')

task('delDist', async () => {
    await del('./dist')
})

task('html', async () => {
    src('./views/*.html')
        .pipe(dest('./dist'))
        .pipe(load.connect.reload())
})

task('style', async () => {
    src('./style/*.css')
        .pipe(dest('./dist/style'))
        .pipe(load.connect.reload())
})

task('sass', async () => {
    src('./style/*.scss')
        .pipe(load.sass().on('error', load.sass.logError))
        .pipe(dest('./dist/style'))
        .pipe(load.connect.reload())
})

task('script', async () => {
    src('./script/*.js')
        .pipe(dest('./dist/script'))
        .pipe(load.connect.reload())
})

task('image', async () => {
    src('./image/*.*')
        .pipe(dest('./dist/image'))
        .pipe(load.connect.reload())
})

task('data', async () => {
    src('./data/*.json')
        .pipe(dest('./dist/data'))
        .pipe(load.rev.manifest())
})

task('reload', async () => {
    load.connect.server({
        root: './dist',
        livereload: true
    })
})

task('watch', async () => {
    watch('./views/*.html', series('html'))
    watch('./style/*.scss', series('sass'))
    watch('./style/*.css' , series('style'))
    watch('./script/*.js', series('script'))
    watch('./image/*.*', series('image'))
})

task('dev', series('delDist', 'html', 'style', 'sass', 'script', 'image', 'data'))

task('start', series('dev', 'reload', 'watch'))