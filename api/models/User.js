const mongoose = require('mongoose');
const ROLES = require('./ROLES')
const userSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    password :{
        type: String,
        require: true
    }, 
    role: {
        type: String,
        default: ROLES.pending
    },
    appointment: [{type: mongoose.Schema.Types.ObjectId}],
    require: false
});
const User = mongoose.model('User', userSchema);
module.exports = User;