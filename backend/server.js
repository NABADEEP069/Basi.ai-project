// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import patientRoutes from './routes/patientRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON

app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
