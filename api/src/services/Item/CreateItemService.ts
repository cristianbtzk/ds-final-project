import { IItem } from '../../models/IItem';
import IItemPersistence from '../../persistence/Item/IItemPersistence';

export default class CreateItemService {
  private userPersistence: IItemPersistence;

  constructor(userPersistence: IItemPersistence) {
    this.userPersistence = userPersistence;
  }

  async execute(user: IItem) {
    return this.userPersistence.store(user)
  }
}