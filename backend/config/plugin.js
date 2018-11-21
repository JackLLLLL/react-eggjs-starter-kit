'use strict';

// had enabled by egg
// exports.static = true;

exports.validate = {
    enable: true,
    package: 'egg-validate',
  };

// exports.nedb = {
//     enable: true,
//     package: 'nedb',
// };

// MySQL database plugin
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

// JSON Web Token plugin
exports.jwt = {
    enable: true,
    package: "egg-jwt"
};

// CORS plugin
exports.cors = {
    enable: true,
    package: 'egg-cors',
};