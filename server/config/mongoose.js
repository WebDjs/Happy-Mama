/* globals require module Promise */

let mongoose = require("mongoose"),
    User = require("../data/models/User");

module.exports = function(env) {
    // (node:4960) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, 
    // plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
    // solution:
    mongoose.Promise = global.Promise;

    mongoose.connect(env.db);
    let db = mongoose.connection;

    db.on("error", function(err){
        console.log("Database error: " + err);
    });

    db.once("open", function(err) {
        if (err) {
            console.log("Database could not be opened: " + err);
            return;
        }

        console.log("Database up and running...")
    });

    User.init();
};