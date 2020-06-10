// middlewear for creating user obj for authentication from a REST request
const User = require('../models/User')
module.exports = async (req, res, next) => {
    const userId = req.session.user;
    if (userId) {
        const test = await User.findById(userId);
        req.user = test;
    };
    return next();
};