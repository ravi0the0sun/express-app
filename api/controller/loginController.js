const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    const { email, password, name } = req.body;
    const test = await User.findOne({ email: email });
    if (email, password, name === undefined) {
        return res.status(400).send('Missing Credentials.');
    }
    if (test != null) {
        return res.status(400).send('Email already in use.');
    };
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const user = new User({
            email: email,
            password: hashPass,
            name: name
        });
        const newUser = await user.save();
        res.status(200).json({ user: newUser._id });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.body.userId);
        res.status(200).json({ result: result });
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

exports.login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email : email });
        if ( email, password == undefined) {
            return res.status(400).send('Missing Credentials.')
        };
        if (user == null) {
            return res.status(400).send('Wrong Email or Password');
        };
        if (await bcrypt.compare(password, user.password)) {
            res.status(200).send('Logedin');
        } else {
            res.status(400).send('Wrong Email or Password');
        };
    } catch(err) {
        res.status(500).json({ error: err });
    };
};
