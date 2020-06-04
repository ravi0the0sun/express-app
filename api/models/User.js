const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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
    appointment: [{type: mongoose.Schema.Types.ObjectId}],
    require: false
});
const User = mongoose.model('User', userSchema);
module.exports = User;