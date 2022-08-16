const config = require('flarum-webpack-config')();

config.entry = {
    admin: './admin.ts',
    backoffice: './backoffice.ts',
    forum: './forum.ts',
};

config.externals.push(function ({context, request}, callback) {
    let matches;
    if ((matches = /^(flamarkt\/[^/]+)\/([^/]+)\/(.+)$/.exec(request))) {
        return callback(null, 'root ((flarum.extensions[\'' + matches[1].replace('/', '-') + '\']||{})[\'' + matches[2] + '\']||{})[\'' + matches[3] + '\']');
    }
    callback();
});

module.exports = config;
