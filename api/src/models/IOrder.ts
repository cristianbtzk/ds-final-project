import { IUser } from "./IUser";

export interface IOrder {
  _id: string;
  userId: string;
  user?: IUser;
  items: {
    title: string;
    price: number;
    amount: number;
    itemId: string;
  }[]
  createdAt: Date;
  updatedAt: Date;
}
