const mongoose = require('mongoose');
const clientSchma = mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    clientName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    number: {
        type: String,
        require: false
    },
    apponiments: {
        type: [{ type: mongoose.Schema.Types.ObjectId }],
        require: false
    }
});
const Client = mongoose.model('Client', clientSchma);
module.exports = Client;