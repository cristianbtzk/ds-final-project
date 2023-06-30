import { Schema, model } from 'mongoose';

import { IUser } from './IUser';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>(
  'users',
  userSchema,
);
