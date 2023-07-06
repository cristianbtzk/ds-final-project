import { IOrder } from '../../models/IOrder'

export default interface IIOrderPersistence {
  store(IOrder: IOrder): Promise<IOrder>;
  remove(id: string): Promise<boolean>;
  getByUser(id: string): Promise<IOrder[]>;
  getById(id: string): Promise<IOrder | null>;
}