const express = require('express');
const router = express.Router();
const AuthorizationRequest = require('../models/AuthorizationRequest');


router.get('/', async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find().populate('patientId', 'name age');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


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

router.patch('/:id', async (req, res) => {
  try {
    const updatedRequest = await AuthorizationRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
