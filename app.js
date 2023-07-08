import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import user from './routes/user.js';
import checkout from './routes/checkout.js';
import proceedWithPayment from './routes/proceedWithPayment.js'
import adminRoute from './routes/adminRoute.js'

app.use('/user', user);
app.use('/checkout', checkout);
app.use('/proceedwithpayment', proceedWithPayment);
app.use('/admin', adminRoute);

export default app;