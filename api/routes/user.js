const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', loginController.allUsers);
router.get('/:userId', loginController.getUserById);
router.post('/register', loginController.createUser);
router.post('/login', loginController.login);

module.exports = router;