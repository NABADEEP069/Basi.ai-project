import express from 'express';
import bodyParser from 'body-parser'; // To handle JSON body
import patientRoutes from './routes/patientRoutes.js';
import connectDB from './db.js'; // Import the MongoDB connection function
import dotenv from 'dotenv'; // To load environment variables

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON

// Use the patient routes
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
