import { IItem } from '../../models/IItem';
import { Item } from '../../models/Item';

export default class ItemMongoPersistence {
  async store(user: IItem): Promise<IItem> {
    const newItem = await Item.create(user)

    return newItem
  }

  async remove(id: string): Promise<boolean> {
    const result = await Item.deleteOne({ _id: id })
    console.log(result)
    return result.deletedCount === 1
  }

  async getAll(): Promise<IItem[]> {
    const result = await Item.find()
    return result
  }
}
