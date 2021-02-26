let { task, src, dest, watch, series, parallel } = require('gulp')
let load = require('gulp-load-plugins')()//自动加载其他gulp插件
let del = require('del')//删除文件

task('delDist', async () => {
    await del('./dist')
})

task('style', async () => {
    src('./style/*.css')
        .pipe(load.rev())//给文件名添加哈希值
        .pipe(load.minifyCss())//压缩css
        .pipe(dest('./dist/style'))//写入到dist目录下
        .pipe(load.rev.manifest())//生成记录哈希值的json文件
        .pipe(dest('./rev/css'))//将记录哈希值的json文件保存rev目录
})

task('sass', async () => {
    src('./style/*.scss')
        .pipe(load.sass())//编译sass
        .pipe(load.rev())//给文件名添加哈希值
        .pipe(load.minifyCss())//压缩css
        .pipe(dest('./dist/style'))//写入到dist目录下
        .pipe(load.rev.manifest())//生成记录哈希值的json文件
        .pipe(dest('./rev/css'))//将记录哈希值的json文件保存rev目录
})


task('script', async () => {
    src('./script/*.js')
        .pipe(load.rev())
        /* .pipe(load.babel({
            presets: ['@babel/env']
        })) */
        .pipe(load.uglify())
        .pipe(dest('./dist/script'))
        .pipe(load.rev.manifest())
        .pipe(dest('./rev/js'))
})

task('image', async () => {
    src('./image/*.*')
        .pipe(dest('./dist/image'))
})

task('data', async () => {
    src('./data/*.json')
        .pipe(dest('./dist/data'))
        .pipe(load.rev.manifest())
})

task('html', async () => {
    setTimeout(() => {
        src(['./rev/**/*.json', './views/*.html'])
            .pipe(load.revCollector({ replaceReved: true }))//使用带哈希值的文件替换原文件
            .pipe(load.minifyHtml())
            .pipe(dest('./dist'))
    }, 2000)
})

task('build', series('delDist', 'sass', 'script', 'image', 'data', 'html'))
