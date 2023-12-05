//Schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cincySchema = new Schema ({
    name: {
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
    },

    category: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Cincy', cincySchema);