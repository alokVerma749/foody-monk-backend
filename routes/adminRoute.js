import express from 'express';
const router = express.Router();

import { getOrderDetails, deleteOrder } from '../controllers/proceedWithPayment.js';
import adminAuth from '../middlewares/adminAuth.js';

router.use(adminAuth);

router.get('/orders', getOrderDetails);
router.delete('/order/:id', deleteOrder);

export default router;