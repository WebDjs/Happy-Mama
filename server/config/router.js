'use strict';

module.exports = function (app, db) {

	let dbService = {
		getAll: (collectionName) => {

		},
		getById: (collectionName, id) => {

		},
		post: (collectionName, obj) => {

		},
		update: (collectionName, id) => {

		}
	}

	app.use('/', function (req, res, next) {
		db.users.find(function (err, list) {
			if (err) {
				res.send(err);
			}
			res.json(list);
		});
	});
	//app.use('/api', collections);
}
