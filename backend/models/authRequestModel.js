// backend/models/authRequestModel.js
import mongoose from 'mongoose';

const authRequestSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Patient' },
    requestDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Approved', 'Denied'], default: 'Pending' },
});

const AuthRequest = mongoose.models.AuthRequest || mongoose.model('AuthRequest', authRequestSchema);

export default AuthRequest;
