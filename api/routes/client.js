const express = require('express');
const router = express.Router();
const clientControl = require('../controller/clientControl');

router.get('/', clientControl.getClient);
router.get('/:clientId', clientControl.findClient);
router.post('/', clientControl.addClient);
router.delete('/:clientId', clientControl.deleteClient);
router.put('/:clientId', clientControl.updateClient);

module.exports = router;