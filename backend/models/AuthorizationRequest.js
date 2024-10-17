const mongoose = require('mongoose');

const authorizationRequestSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  treatment: { type: String, required: true },
  doctorsNotes: { type: String },
  status: { type: String, default: 'pending' }, // status can be 'pending', 'approved', 'denied'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuthorizationRequest', authorizationRequestSchema);
