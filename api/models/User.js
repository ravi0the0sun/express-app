const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    password :{
        type: String,
        require: true
    }, 
    appointment: [],
    require: false
});
const User = mongoose.model('User', userSchema);
module.exports = User;