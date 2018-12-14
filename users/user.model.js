const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: {type: String, required: false},
    city: {type: String, required: false},
    state: {type: String, required: false},
    zip: {type: String, required: false},
    isAdmin:  {type: Boolean, required: false},
    loggedIn:  {type: Boolean, required: false},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);