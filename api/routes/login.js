const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/register', loginController.createUser);
router.post('/login', loginController.login);
router.delete('/', loginController.deleteUser);
module.exports = router;