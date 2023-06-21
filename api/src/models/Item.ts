import { Schema, model } from 'mongoose';

import { IItem } from './IItem';

const itemSchema = new Schema<IItem>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Item = model<IItem>(
  'items',
  itemSchema,
);
