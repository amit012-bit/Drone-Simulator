const Drone = require('../models/Drone');

exports.create = async (req, res) => {
    try {
        const dataPoints = req.body; // Get the array of data points from the request body
        if (!dataPoints || !Array.isArray(dataPoints) || dataPoints.length === 0) {
            return res.status(400).json({ message: 'Invalid data points.' });
        }
        // Iterate over the data points array and save each data point to the database
        const drones = await Promise.all(dataPoints.map(async (point) => {
            const { latitude, longitude, timestamp } = point;
            const newDrone = new Drone({ latitude, longitude, timestamp });
            return newDrone.save();
        }));
        res.status(201).json(drones); // Return the saved drones
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const drones = await Drone.find();
        res.json(drones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
