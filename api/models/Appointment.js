const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
    createdDate: {
        type: Date,
        default: Date.now()
    },
    clientId: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    appointmentDate: {
        type: Date,
        require: true
    }
});
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;