import { IOrder } from '../../models/IOrder';
import IIOrderPersistence from './IOrderPersistence';
import axios from 'axios'

export default class OrderMongoPersistence implements IIOrderPersistence {
  async store(order: IOrder): Promise<IOrder> {
    const { data } = await axios.post('http://ds-mongoservice:4000/api/order', order)
    return data
  }

  async remove(id: string): Promise<boolean> {
    const { data } = await axios.delete(`http://ds-mongoservice:4000/api/order/${id}`)
    return data
  }

  async getById(id: string): Promise<IOrder | null> {
    const { data } = await axios.get(`http://ds-mongoservice:4000/api/order/${id}`)
    return data
  }

  async getByUser(id: string): Promise<IOrder[]> {
    const { data } = await axios.get(`http://ds-mongoservice:4000/api/order/user/${id}`)
    return data
  }
}
