import mongoose, { model, Schema } from 'mongoose';

const orderSchema = new Schema({
  user: {
    type: String
  },
  totalPrice: {
    type: Number, required: true, default: 0.0
  },
  products: {
    type: Array<String>
  }


}, { timestamps: true });

export const Order = model('Order', orderSchema)
