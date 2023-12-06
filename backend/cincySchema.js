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

    reservation: {
        type: String,
        required: false
    },

    address: {
        type: String,
        required: true
    },

    hours: {
        type: String,
        required: false
    },

    happy: {
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

    website: {
        type: String,
        required: false
    },

    seating: {
        type: String,
        required: false
    },

    events: {
        type: String,
        required: false
    },

    shop: {
        type: String,
        required: false
    },

    subscription: {
        type: String,
        required: false
    },

    serving: {
        type: String,
        required: false
    },

    kitchen:{
        type: String,
        required: false
    },

    giftCards: {
        type: Number,
        required: false
    },

    travelersChoice: {
        type: String,
        required: false
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