const User = require('../models/User')
// donot touch this login auth.
exports.loginAuth = async (req, res, next) => {
    if (res.user === undefined){
        return res.status(403).send('Not logged in!!!');
    };
    next();
};

