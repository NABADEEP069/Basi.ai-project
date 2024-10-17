const express = require('express');
const router = express.Router();

// Replace this with actual database or in-memory data handling
const patients = [
    { id: 1, name: 'Nilim Das', age: 17, condition: 'Flu' },
    { id: 2, name: 'Rahul Son Boro', age: 27, condition: 'Piles' },
    { id: 3, name: 'Prashant Sharma', age: 22, condition: 'Covid-19' },
    { id: 4, name: 'Gargi Baishya', age: 21, condition: 'Back pain' },
];

// Get all patients
router.get('/', (req, res) => {
  res.json(patients);
});

// Add a new patient
router.post('/', (req, res) => {
  const newPatient = req.body;
  patients.push(newPatient);
  res.status(201).json(newPatient);
});

module.exports = router;
