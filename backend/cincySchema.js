//Schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cincySchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    hours: {
        type: String,
        required: false
    },

    number: {
        type: Number,
        required: false
    },

    rating: {
        type: Number,
        required: true
    },

    pricing: {
        type: Number,
        required: false
    }
});


module.exports = mongoose.model('Cincy', cincySchema);