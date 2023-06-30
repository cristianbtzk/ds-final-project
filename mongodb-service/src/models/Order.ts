import { Schema, model } from 'mongoose';

import { IOrder } from './IOrder';

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: String, ref: 'users', required: true },
    items: {
      type: [{
        title: { type: String, required: true },
        price: { type: Number, required: true },
        amount: { type: Number, required: true },
        itemId: { type: String, ref: 'items', required: true },
      }], required: true
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<IOrder>(
  'orders',
  orderSchema,
);
