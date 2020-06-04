// CRUD function for appointment
const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');

exports.getAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({ appointment: appointments });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.findAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.appointmentId;
        const appointment = await Appointment.findById(appointmentId);
        res.status(200).json({ result: appointment });
    } catch(err) {
        res.status(500).json({ error: err})
    };
};

exports.addAppointment = async (req, res) => {
    try {
        const appointment = new Appointment({
            clientId: req.body.clientId,
            userId: req.body.user.userId,
            appointmentDate: req.body.appointmentDate
        });
        const newAppointment = await appointment.save();
        res.status(200).json({ result: newAppointment });
    } catch(err) {
        res.status(200).json({ error: err });
    };
};

exports.removeAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.appointmentId;
        const result = await Appointment.findByIdAndDelete(appointmentId);
        res.status(200).json({ result: result });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.updateApponitment = async (req, res) => {
    try {
        const appointmentId = req.params.appointmentId;
        const result = await Appointment.findByIdAndUpdate(appointmentId, req.body);
        res.status(200).json({ result: result });
    } catch(err) {
        res.status(200).json({ error: err });
    };
};