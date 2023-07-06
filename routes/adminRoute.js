import express from 'express';
const router = express.Router();

import { getOrderDetails } from '../controllers/proceedWithPayment.js';
import adminAuth from '../middlewares/adminAuth.js';

router.use(adminAuth);

router.get('/orders', getOrderDetails);

export default router;