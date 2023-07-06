import {IUser} from '../../models/IUser'

export default interface IIUserPersistence {
  /* buscarId(id: string): Promise<IUser | null>; */
  getByEmail(email: string): Promise<IUser | null>;
  store(IUser: IUser): Promise<IUser>;
  remove(id: string): Promise<boolean>;
}