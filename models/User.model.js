const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        role: { type: String, required: true, enum: ['admin', 'user'], default: 'user'},
    },
    { timestramp: true }
);

const User = mongoose.model('Users', userSchema);
module.exports = User;