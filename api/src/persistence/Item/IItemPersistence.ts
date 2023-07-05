import {IItem} from '../../models/IItem'

export default interface IIItemPersistence {
  /* buscarId(id: string): Promise<IItem | null>; */
  store(IItem: IItem): Promise<IItem>;
  remove(id: string): Promise<boolean>;
  getAll(): Promise<IItem[]>;
}