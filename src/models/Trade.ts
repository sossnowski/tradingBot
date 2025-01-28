import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
    price: Number,
    quantity: Number,
    timestamp: Date,
  });

export const Trade = mongoose.model('Trade', tradeSchema);
