// backend/models/authRequestModel.js
import mongoose from 'mongoose';

const authRequestSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    treatment: { type: String, required: true },
    doctorsNotes: { type: String },
    status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

const AuthRequest = mongoose.model('AuthRequest', authRequestSchema);
export default AuthRequest;
