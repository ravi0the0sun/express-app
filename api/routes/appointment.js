const express = require('express');
const router = express.Router();
const appointmentControl = require('../controller/appointmentContol');

router.get('/', appointmentControl.getAppointment);
router.get('/:appointmentId', appointmentControl.findAppointment);
router.post('/', appointmentControl.addAppointment);
router.delete('/:appointmentId', appointmentControl.removeAppointment);
router.put('/:appointmentId', appointmentControl.updateApponitment);

module.exports = router;
