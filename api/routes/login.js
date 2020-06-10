const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/register', loginController.createUser);
router.post('/login', loginController.login);
// router.get('/register', (req, res) => res.render('register', {
//     title: 'Register'
// }));
router.get('/register', (req, res) => {
    if (req.session.user) {
        return res.redirect('./dashboard');
    };
    return res.render('register', {
        title: 'Register'
    });
});

router.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('./dashboard');
    };
    return res.render('login', {
        title: 'Login'
    });
});

// router.get('/login', (req, res) => res.render('login', {
//     title: 'Login'
// }));
router.get('/logout', (req, res) => {
    // reseting the session 
    req.session.user = null;
    res.redirect('./login');
});

// router.delete('/delete', loginController.deleteUser);
module.exports = router;