export interface IItem {
  _id: string;
  title: string;
  price: number;
  image?: string;
  inStock: number;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
