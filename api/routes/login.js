const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/register', loginController.createUser);
router.post('/login', loginController.login);
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
})
// router.get('/', loginController.deleteUser);
module.exports = router;