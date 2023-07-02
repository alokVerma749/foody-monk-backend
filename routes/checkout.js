import express from 'express';
const router = express.Router();

import { checkout } from '../controllers/checkout.js';
import auth from '../middlewares/auth.js';

router.use(auth);

router.get('/', checkout);

export default router;