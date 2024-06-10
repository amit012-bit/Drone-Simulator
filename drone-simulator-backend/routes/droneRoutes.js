const express = require('express');
const router = express.Router();
const droneController = require('../controllers/droneController');

// Define routes with proper callback functions
router.post('/', droneController.create); // Use create function from droneController
router.get('/', droneController.getAll); // Use getAll function from droneController

module.exports = router;
