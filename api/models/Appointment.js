const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
    createdDate: {
        type: Date,
        default: Date.now()
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    appointmentDate: {
        type: Date,
        require: true
    }
});
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;