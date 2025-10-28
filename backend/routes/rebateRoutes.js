import express from 'express';
import { calculateRebate } from '../services/rebateCalculator.js';

const router = express.Router();

router.post('/calculate', (req, res) => {
    try {
        const results = calculateRebate(req.body);
        res.json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;