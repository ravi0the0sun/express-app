// CRUD function for user
const mongoose = require('mongoose');
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

exports.getUser = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.find({ email: email });
        res.status(200).json({ result: user._id });
    } catch(err) {
        res.status(500).json(err);
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

exports.createUser = async (req, res) => {
    const { email, password} = req.body;
    const test = await User.findOne({ email: email });
    if (test != null) {
        return res.status(400).send('Email already in use.');
    };
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const user = new User({
            email: email,
            password: hashPass
        });
        const newUser = await user.save();
        res.status(200).json({ user: newUser._id });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email : req.body.email });
    if (user === null) {
        return res.status(400).send('Wrong Email or Password');
    }
    try {
        if (bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send('Logedin');
        } else {
            res.status(400).send('Wrong Email or Password');
        };
    } catch(err) {
        res.status(500).json({ error: err });
    };
};
