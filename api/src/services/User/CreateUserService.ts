import { IUser } from '../../models/IUser';
import IUserPersistence from '../../persistence/User/IUserPersistence';

export default class CreatePacienteService {
  private userPersistence: IUserPersistence;

  constructor(userPersistence: IUserPersistence) {
    this.userPersistence = userPersistence;
  }

  async execute(user: IUser) {
    return this.userPersistence.store(user)
  }
}