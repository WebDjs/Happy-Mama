'use strict';

const express = require('express');

const mode = process.env.NODE_ENV || 'development'; // 'production'

const app = express();

require('./server/config/express')(app);

const environment = require('./server/config/environment')[mode];

const db = require('./server/config/mongo')(environment.db);
console.log("Database up and running...");

require('./server/config/router')(app, db);

const port = environment.port;

app.listen(port);
console.log(`Server running on port:${port}`);

if (mode === "development") {
	require("openurl").open(`http://localhost:${port}`);
}