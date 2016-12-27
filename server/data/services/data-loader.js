const mongoose = require("mongoose");

const fs = require("fs"),
    path = require("path");

mongoose.Promise = global.Promise;

module.exports = function(connectionString) {
    mongoose.connect(connectionString);

    let User = require("../models/user-model.js");
    let ForumPost = require("../models/forum-model");
    let ForumCategory = require("../models/forumCategory-model.js");
    // let Article = require("../models/article-model");

    let models = { User, ForumPost, ForumCategory };

    let data = {};

    fs.readdirSync(__dirname)
        .filter(file => file.includes("-data"))
        .forEach(file => {
            let modulePath = path.join(__dirname, file);
            let dataModule = require(modulePath)(models);
            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });
    return data;
};