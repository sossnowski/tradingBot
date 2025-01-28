import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()
const MONGO_URI = process.env.MONGO_URI as string

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default app;
