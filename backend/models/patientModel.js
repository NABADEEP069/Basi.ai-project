// backend/models/patientModel.js
import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    condition: { type: String, required: true },
});

const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

export default Patient;
