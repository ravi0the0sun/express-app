const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users: users });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.getUser = async (req, res) => {
    try {
        const userName = req.body.userName;
        const user = await User.find({ userName: userName });
        res.status(200).json({ result: user });
    } catch(err) {
        res.status(500).json(err);
    };
};

exports.createUser = async (req, res) => {
    const { userName, email, password} = req.body;
    const test = await User.findOne({ userName: userName });
    if (test != null) {
        return res.status(400).send('Username already in use.');
    };
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const user = new User({
            userName: userName,
            email: email,
            password: hashPass
        });
        const newUser = await user.save();
        res.status(200).json({ user: newUser });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.login = async (req, res) => {
    const user = await User.findOne({ userName : req.body.userName });
    if (user === null) {
        return res.status(400).send('wrong Username or Password');
    }
    try {
        if (bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send('Logedin');
        } else {
            res.status(400).send('wrong Username or Password');
        };
    } catch(err) {
        res.status(500).json({ error: err });
    };
};
