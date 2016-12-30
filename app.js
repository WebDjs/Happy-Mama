'use strict';

// MongoDB config
const mongojs = require('mongojs');
const connectionString = 'mongodb://Admin:secretpassword@ds113958.mlab.com:13958/webdjs';
const collections = ['users', 'babysitters', 'forum-posts', 'listings'];

const db = mongojs(connectionString, collections);

// EXPRESS config
const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

const app = express();

// view engine
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// set static folder
app.use('/', express.static(path.join(__dirname, 'src')));

// body-parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes User
app
	.get('/users', function (req, res, next) {
		db['users'].find(function (err, users) {
			if (err) {
				res.send(err);
			}
			res.json(users);
		})
	})
	.get('/users/:id', function (req, res, next) {
		db['users'].findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, user) {
			if (err) {
				res.send(err);
			}
			res.json(user);
		})
	})
	.post('/users', function (req, res, next) {
		let user = req.body;

		//validations
		if (!user.username || !user.password) {
			res.status(400);
			res.json({ "error": "Bad data!" });
		}
		else {
			db['users'].save(user, function (err, user) {
				if (err) {
					res.send(err);
				}
				res.json(user);
			})
		}
	});

// routes Babysitter
app
	.get('/babysitters', function (req, res, next) {
		db['babysitters'].find(function (err, babysitters) {
			if (err) {
				res.send(err);
			}
			res.json(babysitters);
		})
	})
	.get('/babysitters/:id', function (req, res, next) {
		db['babysitters'].findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, babysitter) {
			if (err) {
				res.send(err);
			}
			res.json(babysitters);
		})
	})
	.post('/babysitters', function (req, res, next) {
		let babysitter = req.body;

		//validations
		if (!babysitter.name || !babysitter.age) {
			res.status(400);
			res.json({ "error": "Bad babysitter!" });
		}
		else {
			db['babysitters'].save(babysitter, function (err, babysitter) {
				if (err) {
					res.send(err);
				}
				res.json(babysitter);
			})
		}
	})
	.put('/babysitters/:id', function (req, res, next) {
		let babysitter = req.body;
		let updatedTask = {};

		// validations
		db['babysitters'].update({ _id: mongojs.ObjectId(req.params.id) }, updatedTask, {}, function (err, babysitter) {
			if (err) {
				res.send(err);
			}
			res.json(babysitter);
		})
	});

// connection on port
const port = 3000;
app.listen(port);
console.log(`Server running on port:${port}`);

require('openurl').open(`http://localhost:${port}`);
