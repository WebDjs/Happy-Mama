'use strict';

const express = require('express');

const mode = process.env.NODE_ENV || 'development'; // 'production';

const environment = require('./server/config/environment')[mode];

const app = express();

require('./server/config/express')(app);
require('./server/config/mongoose')(environment);
require('./server/config/passport')();
require('./server/config/router')(app);

const port = environment.port;

app.listen(port);
console.log(`Server running on port:${port}`);

if (mode) {
    require('openurl').open(`http://localhost:${port}`);
}