'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

module.exports = function (app) {
    //View engine
    app.set('views engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);

    //Set static folder
    app.use(express.static(path.join(__dirname, '../../client')));

    //Body Parser MW
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}
