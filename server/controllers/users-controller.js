let encryption = require('../utilities/encryption'),
    data = require('../data');

module.exports = {
    getRegister: function (req, res, next) {
    },
    postRegister: function (req, res, next) {
        let newUserData = req.body;

        if (newUserData.password != newUserData.confirmPassword) {
            req.session.error = 'Passwords do not match!';
            res.status(401);
        }
        else {
            newUserData.salt = encryption.generateSalt();
            newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);

            data.users.create(newUserData, function (err, user) {
                if (err) {
                    console.log('Failed to register new user: ' + err);
                    res.status(400);
                    return;
                }
                req.logIn(user, function (err) {
                    if (err) {
                        res.status(400);
                    }
                    else {
                        res.status(200);
                    }
                })
            });
        }
    },
    getLogin: function (req, res, next) {
    },
    getProfile: function (req, res, next) {
    }
};