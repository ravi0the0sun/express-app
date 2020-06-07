const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    const { email, password, name , password2 } = req.body;
    let error = [];
    if (!email || !password || !name || !password2) {
        error.push({ msg: 'Missing Credentials.' });
    };
    if (password != password2) {
        error.push({msg: 'Password Donot Match' });
    };
    if (password.length < 6) {
        error.push({ msg: 'Short Password'})
    };
    const test = await User.findOne({ email: email });
        if (test != null) {
            error.push({ msg: 'Email already in use.' });
        };
    if (error.length > 0) {
         return  res.render('register', {
            error,
            name,
            email,
            password,
            password2
        });
    };
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const user = new User({
            email: email,
            password: hashPass,
            name: name
        });
        const newUser = await user.save();
        console.log(newUser);
        res.status(200).redirect('./login');
    } catch(err) {
        res.status(500).render('register');
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
        let error = [];
        if ( !email || !password ) {
            error.push({ msg: 'Missing Credentials.' });
        };
        if (!user) {
            error.push({ msg: 'Wrong Email or Password' });
        };
        if (await bcrypt.compare(password, user.password)) {
            res.render('dashboard')
        } else {
            error.push({ msg: 'Wrong Email or Password' });
        };
        if (error.length > 0) {
            return res.render('login', {
                error,
                email
            });
        };
        res.status(200).render('dashboard', {
            user
        })
    } catch(err) {
        res.status(500).render('login');
    };
};
