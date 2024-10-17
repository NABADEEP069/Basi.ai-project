const express = require('express');
const router = express.Router();
const AuthorizationRequest = require('../models/AuthorizationRequest'); // Assuming this is the model you're using

// GET all authorization requests
router.get('/', async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find().populate('patientId', 'name age');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new authorization request
router.post('/', async (req, res) => {
  const { patientId, treatment, doctorsNotes } = req.body;

  const authorizationRequest = new AuthorizationRequest({
    patientId,
    treatment,
    doctorsNotes
  });

  try {
    const newRequest = await authorizationRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; // Make sure you're exporting the router
