import {IUser} from '../../models/IUser'

export default interface IIUserPersistence {
  /* buscarId(id: string): Promise<IUser | null>; */
  store(IUser: IUser): Promise<IUser>;
  remove(id: string): Promise<boolean>;
  /* listar(): Promise<IUser[]>;
  update(IUser: IUser): Promise<IUser>;
  addMedicamento(idIUser: string, idMedicamento: string): Promise<void>; */
}