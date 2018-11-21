'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_sample_1537812465564_2305';

    // add config here
    config.middleware = ['errorHandler'];
    config.domain = '127.0.0.1'; // server domain, used in cookie.set

    // mysql
    exports.mysql = {
        // configration
        client: {
            // host
            host: '127.0.0.1',
            // port
            port: '3306',
            // user name
            user: 'root',
            // password
            password: '123456',
            // database name
            database: 'db',
        },
        app: true,
        agent: false,
    };

    exports.jwt = {
        secret: "Your Json Website Token"
    };

    exports.security = {
        csrf: false,
        domainWhiteList: [ 'http://localhost:8080' ],
    };

    exports.cors = {
        credentials: true,
    }

    return config;
};
