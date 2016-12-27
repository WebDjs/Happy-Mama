'use strict';

const port = process.env.PORT || 3333;

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/dbcollections',
        port: port
    },
    production: {
        db: 'mongodb://Admin:secretpassword@ds113958.mlab.com:13958/webdjs',
        port: port
    }
};
