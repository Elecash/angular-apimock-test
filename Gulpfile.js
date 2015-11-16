var gulp = require('gulp');
var KarmaServer = require('karma').Server;

gulp.task('test', function (done) {
    new KarmaServer({
        configFile: __dirname + '/tests/conf/karma.conf.js',
        singleRun: false
    }, done).start();
});

