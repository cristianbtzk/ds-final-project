import IOrderPersistence from "../../persistence/Order/IOrderPersistence";

export default class GetOrderByIdService {
  private orderPersistence: IOrderPersistence;
  constructor(orderPersistence: IOrderPersistence) {
    this.orderPersistence = orderPersistence;
  }

  async execute(id: string) {
    const result = this.orderPersistence.getById(id)
    return result
  }
}