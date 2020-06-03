const mongoose = require('mongoose');
const clientSchma = mongoose.Schema({
    clientName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    apponiments: {
        type: [String],
        require: false
    }
});
const Client = mongoose.model('Client', clientSchma);
module.exports = Client;