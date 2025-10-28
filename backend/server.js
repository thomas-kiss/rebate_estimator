import express from 'express';
import cors from 'cors';
import rebateRoutes from './routes/rebateRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// calculator API route
app.use('/api/rebate', rebateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));