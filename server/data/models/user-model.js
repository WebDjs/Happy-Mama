let mongoose = require('mongoose'),
    encryption = require('../../utilities/encryption');

module.exports.init = function() {
    let userSchema = mongoose.Schema({
        firstname: { type: String },
        lastname: { type: String },
        username: { type: String, unique: true },
        salt: String,
        hashPass: String,
        email: { type: String },
        recommends: { type: String }
    });

    userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            } else {
                return false;
            }
        }
    });

    let User = mongoose.model('User', userSchema);
};