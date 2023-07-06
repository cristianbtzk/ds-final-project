import { IOrder } from '../../models/IOrder';
import { Order } from '../../models/Order';
import IIOrderPersistence from './IOrderPersistence';

export default class OrderMongoPersistence implements IIOrderPersistence {
  async store(order: IOrder): Promise<IOrder> {
    const newOrder = await Order.create(order)

    return newOrder
  }

  async remove(id: string): Promise<boolean> {
    const result = await Order.deleteOne({ _id: id })
    return result.deletedCount === 1
  }

  async getByUser(id: string): Promise<IOrder[]> {
    const result = await Order.find({ userId: id })
    return result
  }

  async getById(id: string): Promise<IOrder | null> {
    const order = await Order.findById(id);
    return order;
  }
}
