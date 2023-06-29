import IItemPersistence from "../../persistence/item/IItemPersistence";

export default class DeleteItemService {
  private pacientePersistence: IItemPersistence;
  constructor(pacientePersistence: IItemPersistence) {
    this.pacientePersistence = pacientePersistence;
  }

  async execute(id: string) {
    const result = this.pacientePersistence.remove(id)
    return result
  }
}