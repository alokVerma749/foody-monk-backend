import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()
app.options('/user/signup', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import user from './routes/user.js'
app.use('/user', user)

app.use(cors({
    origin: 'http://localhost:1234',
    allowedHeaders: ['Content-Type'] // Add 'Content-Type' to the allowed headers
}));

export default app;