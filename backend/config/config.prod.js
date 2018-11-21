'use strict';

module.exports = appInfo => {
    const config = exports = {};

    exports.security = {
        domainWhiteList: [ 'http://your.domain.com' ], 
    };

    return config;
};