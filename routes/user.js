import express from 'express';
const router = express.Router();

import { signup, login, contact } from '../controllers/user.js';

router.post('/signup', signup);
router.post('/login', login);
router.post('/contact', contact);

export default router;