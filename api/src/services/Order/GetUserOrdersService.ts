import IOrderPersistence from "../../persistence/Order/IOrderPersistence";

export default class GetUserOrdersService {
  private orderPersistence: IOrderPersistence;
  constructor(orderPersistence: IOrderPersistence) {
    this.orderPersistence = orderPersistence;
  }

  async execute(id: string) {
    const result = this.orderPersistence.getByUser(id)
    return result
  }
}