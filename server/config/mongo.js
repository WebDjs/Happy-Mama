'use strict';

const mongojs = require('mongojs');

module.exports = function (dbPath) {
	return mongojs(dbPath);
};
