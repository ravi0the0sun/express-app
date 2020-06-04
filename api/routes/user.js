const express = require('express');
const router = express.Router();
const userControl = require('../controller/userControl');

router.get('/', userControl.allUsers);
router.get('/:userId', userControl.getUserById);

module.exports = router;