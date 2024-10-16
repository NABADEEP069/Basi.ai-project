// backend/routes/authRoutes.js
import express from 'express';
import AuthRequest from '../models/authRequestModel.js';

const router = express.Router();

// GET all authorization requests
router.get('/', async (req, res) => {
    try {
        const requests = await AuthRequest.find().populate('patientId');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new authorization request
router.post('/', async (req, res) => {
    const { patientId, treatment, doctorsNotes } = req.body;
    const authRequest = new AuthRequest({ patientId, treatment, doctorsNotes });

    try {
        const savedRequest = await authRequest.save();
        res.status(201).json(savedRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
