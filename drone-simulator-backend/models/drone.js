const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
