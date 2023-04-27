const mongoose = require('mongoose');

//creating user schema
const CustomerSchema = mongoose.Schema({
    customerfirstname: {
        type: String,
        require: true
    },
    customerlastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);