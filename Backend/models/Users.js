const mongoose = require('mongoose');
const {Schema} =mongoose;
const UserSchema = new Schema({
    salary: {
        type: String,
        required: true
    },
    discord: {
        type: String,
        required: true,
        unique: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    telegram: {
        type: String,
        required: true
    },
    signal: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('user', UserSchema);



// salary,
// discord,
// whatsapp,
// telegram,
// signal,