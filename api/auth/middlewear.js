const User = require('../models/User')
module.exports = async (req, res, next) => {
    const userId = req.body.userId;
    if (userId) {
        req.user = await User.findById(userId);
    };
    next();
}