const express = require('express');
const router = express.Router();
const middlewear = require('../auth/middlewear');
const auth = require('../auth/auth');


router.get('/', (req, res) => {
    if (req.session.user) {
        return res.redirect('./dashboard');
    };
    return res.render('welcome', {
        title: 'Welcome'
    });
});

router.get('/dashboard', middlewear, auth.loginAuth, (req, res) => { 
    res.render('dashboard', {
        user: req.user,
        title: 'Dashboard'
    }); 
});

module.exports = router;