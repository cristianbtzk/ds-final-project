import { IItem } from '../../models/IItem';
import { Item } from '../../models/Item';
import IIItemPersistence from './IItemPersistence';
import axios from 'axios'

export default class ItemMongoPersistence implements IIItemPersistence {
  async store(item: IItem): Promise<IItem> {
    const { data } = await axios.post('http://ds-mongoservice:3334/api/item', item)
    return data
  }

  async remove(id: string): Promise<boolean> {
    const { data } = await axios.delete(`http://ds-mongoservice:3334/api/item/${id}`)
    return data
  }

  async getAll(): Promise<IItem[]> {
    const { data } = await axios.get(`http://ds-mongoservice:3334/api/item`)
    return data
  }
}
