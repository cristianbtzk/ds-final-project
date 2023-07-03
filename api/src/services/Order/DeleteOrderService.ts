import IOrderPersistence from "../../persistence/Order/IOrderPersistence";

export default class DeleteOrderService {
  private orderPersistence: IOrderPersistence;
  constructor(orderPersistence: IOrderPersistence) {
    this.orderPersistence = orderPersistence;
  }

  async execute(id: string) {
    const result = this.orderPersistence.remove(id)
    return result
  }
}