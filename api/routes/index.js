const express = require('express');
const auth = require('../auth/auth');
const middelwear = require('../auth/middlewear')
const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));

router.get('/dashboard', middelwear, auth, (req, res) => { 
    res.render('dashboard', {
        user: req.user
    }); 
});

module.exports = router;