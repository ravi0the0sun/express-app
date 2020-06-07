const express = require('express');
const auth = require('../auth/auth');
const middelwear = require('../auth/middlewear')
const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));



module.exports = router;