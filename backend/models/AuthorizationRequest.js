const mongoose = require('mongoose');

const authorizationRequestSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: [true, 'Patient ID is required'],
  },
  treatment: {
    type: String,
    required: [true, 'Treatment is required'],
  },
  doctorsNotes: {
    type: String,
    required: [true, 'Doctor\'s notes are required'],
  },
});

module.exports = mongoose.model('AuthorizationRequest', authorizationRequestSchema);
