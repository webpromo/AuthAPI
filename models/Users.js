
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    email: {
            type: String,
            lowercase: true,
            trim: true,
            index: true,
            unique: true,
            required: true,
    },
    username: {
            type: String,
            lowercase: true,
            trim: true,
            index: true,
            unique: true,
            required: true,
    },
    password: {
            type: String,
            required: true,
            bcrypt: true,
    },
    name: {
            type: String,
            trim: true,
            required: true,
    },
    bio: {
            type: String,
            trim: true,
            default: '',
    },
    address: {
                street: {
                    type: String,
                    default: '',
                },
                city: {
                     type: String,
                    default: '',
                },
                state: {
                    type: String,
                    default: '',
                },
                zip: {
                    type: String,
                    default: '',
            }
    },
    active: {
            type: Boolean,
            default: true,
    },
    admin: {
            type: Boolean,
            default: false,
    },
    loggedIn: {
        type: Boolean,
        default: false,
    }
},
{ collection: 'users' },
);


module.exports = mongoose.model('Product', UserSchema);