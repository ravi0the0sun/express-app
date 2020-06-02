const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', loginController.allUsers);
router.get('/:userName', loginController.getUser);
router.post('/', loginController.createUser);
router.post('/login', loginController.login);

module.exports = router;