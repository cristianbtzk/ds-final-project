import { IItem } from '../../models/IItem';
import { Item } from '../../models/Item';
import IIItemPersistence from './IItemPersistence';

export default class ItemMongoPersistence implements IIItemPersistence {
  async store(user: IItem): Promise<IItem> {
    const newItem = await Item.create(user)

    return newItem
  }

  async remove(id: string): Promise<boolean> {
    const result = await Item.deleteOne({ _id: id })
    console.log(result)
    return result.deletedCount === 1
  }
}
