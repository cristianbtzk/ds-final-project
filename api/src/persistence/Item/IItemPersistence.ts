import {IItem} from '../../models/IItem'

export default interface IIItemPersistence {
  /* buscarId(id: string): Promise<IItem | null>; */
  store(IItem: IItem): Promise<IItem>;
  remove(id: string): Promise<boolean>;
  /* listar(): Promise<IItem[]>;
  update(IItem: IItem): Promise<IItem>;
  addMedicamento(idIItem: string, idMedicamento: string): Promise<void>; */
}