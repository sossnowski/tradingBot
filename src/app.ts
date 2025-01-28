import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()

const {MONGO_URI} = process.env

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default app;
