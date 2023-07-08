import express from 'express';
const router = express.Router();

import adminAuth from '../middlewares/adminAuth.js';
import { getOrderDetails, deleteOrder, addCuisine } from '../controllers/admin.js';

router.use(adminAuth);

router.post('/cuisine/', addCuisine);
router.get('/orders', getOrderDetails);
router.delete('/order/:id', deleteOrder);

export default router;