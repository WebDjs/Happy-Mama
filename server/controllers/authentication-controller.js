const passport = require('passport');

module.exports = {
    login: function (req, res, next) {
        let auth = passport.authenticate('local', function (err, user) {
            if (err) {
                res.status(400);
            }

            if (!user) {
                res.status(401);
                return;
            }
            
            req.logIn(user, function (err) {
                if (err) {
                    res.status(400);
                }
                res.status(200);
            })
        });

        auth(req, res, next);
    },
    logout: function (req, res, next) {
        req.logout();
    },
    isAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
        }
        else {
            next();
        }
    },
    isInRole: function (role) {
        return function (req, res, next) {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                next();
            }
            else {
                res.status(403);
                res.end();
            }
        }
    }
};