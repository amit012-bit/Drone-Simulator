const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import the cors middleware
const droneRoutes = require('./routes/droneRoutes');

const app = express();
connectDB();

// Use cors middleware to allow cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Define routes
app.use('/drones', droneRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
