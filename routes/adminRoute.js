import express from 'express';
const router = express.Router();

import adminAuth from '../middlewares/adminAuth.js';
import { getOrderDetails, deleteOrder, addCuisine, getContactForms, deleteContactMessages, getUsers, deleteUser } from '../controllers/admin.js';

router.use(adminAuth);

router.post('/cuisine/', addCuisine);
router.get('/orders', getOrderDetails);
router.delete('/order/:id', deleteOrder);
router.get('/contact', getContactForms);
router.delete('/contact/:id', deleteContactMessages);
router.get('/users', getUsers);
router.delete('/user/:id', deleteUser);

export default router;