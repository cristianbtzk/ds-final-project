import {IOrder} from '../../models/IOrder'

export default interface IIOrderPersistence {
  /* buscarId(id: string): Promise<IOrder | null>; */
  store(IOrder: IOrder): Promise<IOrder>;
  remove(id: string): Promise<boolean>;
  /* listar(): Promise<IOrder[]>;
  update(IOrder: IOrder): Promise<IOrder>;
  addMedicamento(idIOrder: string, idMedicamento: string): Promise<void>; */
}