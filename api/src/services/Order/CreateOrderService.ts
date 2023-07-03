import { IOrder } from '../../models/IOrder';
import IOrderPersistence from '../../persistence/Order/IOrderPersistence';

export default class CreatePacienteService {
  private orderPersistence: IOrderPersistence;

  constructor(orderPersistence: IOrderPersistence) {
    this.orderPersistence = orderPersistence;
  }

  async execute(order: IOrder) {
    return this.orderPersistence.store(order)
  }
}