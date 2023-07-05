import IItemPersistence from '../../persistence/Item/IItemPersistence';

export default class GetAllItemsService {
  private itemPersistence: IItemPersistence;

  constructor(itemPersistence: IItemPersistence) {
    this.itemPersistence = itemPersistence;
  }

  async execute() {
    return this.itemPersistence.getAll()
  }
}