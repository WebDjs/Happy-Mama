'use strict';

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    passport = require('passport');

const sessionParams = {
    secret: 'secret unicorns',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
};

module.exports = function (app) {
    //View engine
    app.set('views engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);

    //Body Parser MW
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //Passport init
    app.use(passport.initialize());
    app.use(passport.session());

    //Set static folder
    app.use(express.static(path.join(__dirname, '../../client')));
}
