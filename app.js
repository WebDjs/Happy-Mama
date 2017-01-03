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
app.use('/', express.static(path.join(__dirname + '/src')));

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
        } else {
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
            res.json(babysitter);
        })
    })
    .post('/babysitters', function (req, res, next) {
        let babysitter = req.body;

        // validations

        db['babysitters'].save(babysitter, function (err, babysitter) {
            if (err) {
                res.send(err);
            }
            res.json(babysitter);
        })
    })
    .put('/babysitters/:id', function (req, res, next) {
        let babysitter = req.body;
        let updatedTask = {};

        // validations

        db['babysitters'].update({ _id: mongojs.ObjectId(req.params.id) }, updatedTask, {},
            function (err, babysitter) {
                if (err) {
                    res.send(err);
                }
                res.json(babysitter);
            })
    });

// routes Listings
app
    .get('/listings', function (req, res, next) {
        db['listings'].find({ isDeleted: false }, function (err, listings) {
            if (err) {
                res.send(err);
            }
            res.json(listings);
        })
    })
    .get('/listings/:id', function (req, res, next) {
        db['listings'].findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, listing) {
            if (err) {
                res.send(err);
            }
            res.json(listing);
        })
    })
    .post('/listings', function (req, res, next) {
        let listing = req.body;

        //validations

        db['listings'].save(listing, function (err, listing) {
            if (err) {
                res.send(err);
            }
            res.json(listing);
        })
    })
    .put('/listings/:id', function (req, res, next) {
        let listing = req.body;
        let updatedListing = {};

        // validations

        db['listings'].update({ _id: mongojs.ObjectId(req.params.id) }, updatedListing, {},
            function (err, listing) {
                if (err) {
                    res.send(err);
                }
                res.json(listing);
            })
    });

// routes forum-posts
app
    .get('/forumposts', function (req, res, next) {
        db['forum-posts'].find({ _isDeleted: false }, function (err, forumPosts) {
            if (err) {
                res.send(err);
            }
            res.json(forumPosts);
        });
    })
    .get('/forumposts/:id', function (req, res, next) {
        db['forum-posts'].findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, forumPost) {
            if (err) {
                res.send(err);
            }
            res.json(forumPost);
        })
    })
    .post('/forumposts', function (req, res, next) {
        let forumPost = req.body;

        //validations

        db['forum-posts'].save(forumPost, function (err, forumPost) {
            if (err) {
                res.send(err);
            }
            res.json(forumPost);
        })
    })
    .put('/forumposts/:id', function (req, res, next) {
        let forumPost = req.body;
        let updatedPost = { $set: { _isDeleted: true } };

        // validations

        db['forum-posts'].update({ _id: mongojs.ObjectId(req.params.id) }, updatedPost, {},
            function (err, forumPost) {
                if (err) {
                    res.send(err);
                }
                res.json(forumPost);
            })
    });

// connection on port
const port = process.env.PORT || 3003;
app.listen(port);
console.log(`Server running on port:${port}`);

// open in the browser
if (port === 3003) {
    require('openurl').open(`http://localhost:${port}`);
}
