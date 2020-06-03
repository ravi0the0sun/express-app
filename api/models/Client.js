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
        type: [{ type: mongoose.Schema.Types.ObjectId }],
        require: false
    }
});
const Client = mongoose.model('Client', clientSchma);
module.exports = Client;