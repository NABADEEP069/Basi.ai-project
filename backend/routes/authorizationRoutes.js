const express = require('express');
const router = express.Router();
const AuthorizationRequest = require('../models/AuthorizationRequest');

// GET all authorization requests with populated patient details
router.get('/', async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find().populate('patientId', 'name age');
    res.json(requests);
  } catch (err) {
    console.error('Error fetching requests:', err);
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
    console.error('Error saving request:', err);
    res.status(400).json({ message: err.message });
  }
});

// PATCH (update) the status of an authorization request
router.patch('/:id', async (req, res) => {
  try {
    const updatedRequest = await AuthorizationRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!updatedRequest) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(updatedRequest);
  } catch (err) {
    console.error('Error updating request:', err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
