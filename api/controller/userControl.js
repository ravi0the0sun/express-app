const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users: users.map(user => user._id) });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json({ result: user._id });
    } catch(err) {
        res.status(500).json(err);
    };
};
