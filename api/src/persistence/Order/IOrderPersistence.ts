import {IOrder} from '../../models/IOrder'

export default interface IIOrderPersistence {
  getByUser(userId: string): Promise<IOrder[]>;
  getById(id: string): Promise<IOrder | null>;
  store(IOrder: IOrder): Promise<IOrder>;
  remove(id: string): Promise<boolean>;
}