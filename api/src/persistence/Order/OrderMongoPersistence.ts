import { IOrder } from '../../models/IOrder';
import IIOrderPersistence from './IOrderPersistence';
import axios from 'axios'

export default class OrderMongoPersistence implements IIOrderPersistence {
  async store(order: IOrder): Promise<IOrder> {
    const { data } = await axios.post('http://ds-mongoservice:3334/api/order', order)
    return data
  }

  async remove(id: string): Promise<boolean> {
    const { data } = await axios.delete(`http://ds-mongoservice:3334/api/order/${id}`)
    console.log('data')
    console.log(data)
    return data
  }
}
