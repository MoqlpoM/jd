let mode = process.argv[2]
switch (mode) {
    case 'start':
        require('./gulpfile-dev.js')
        break
    case 'build':
        require('./gulpfile-build.js')
        break
}