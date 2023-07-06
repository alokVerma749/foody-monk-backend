import express from 'express';
const router = express.Router();

import { proceedwithPayment } from '../controllers/proceedWithPayment.js';
import auth from '../middlewares/auth.js';

router.use(auth);

router.post('/', proceedwithPayment);

export default router;