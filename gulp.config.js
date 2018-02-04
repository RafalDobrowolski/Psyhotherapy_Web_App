module.exports = function() {
    var client = './src/client/';
    var temp = './.tmp/';
    var server = './src/server/';

    var config = {
        /**
         * Files paths
         */
        temp: temp,
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        sass: client + 'styles/styles.scss',
        watchSass: client + '**/*.scss',
        client: client,
        css: temp + 'styles.css',
        index: client + 'index.html',
        server: server,
        js: [
            client +  '**/*.js'   
        ],
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
         /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js',

        /**
         * browser sync
         */
        browserReloadDelay: 1000,
    };
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    return config;
};