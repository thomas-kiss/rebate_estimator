import express from 'express';
import { calculateRebate } from '../services/rebateCalculator.js';

// Router object for endpoints
const router = express.Router();

// Enpoint POST /api/rebate/calculate
router.post('/calculate', (req, res) => {
    try {
        // req.body contains JSON data
        const results = calculateRebate(req.body);
        // Send result back as JSON
        res.json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Export router for uyse by server.js
export default router;