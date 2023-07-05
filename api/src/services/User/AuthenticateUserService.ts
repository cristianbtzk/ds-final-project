import { IUser } from '../../models/IUser';
import IUserPersistence from '../../persistence/User/IUserPersistence';

export default class AuthenticateUserService {
  private userPersistence: IUserPersistence;

  constructor(userPersistence: IUserPersistence) {
    this.userPersistence = userPersistence;
  }

  async execute(email: string, password: string): Promise<{
    success: boolean,
    user: IUser | null,
  }> {
    const user = await this.userPersistence.getByEmail(email)

    if(!user || user.password !== password) {
      return {
        success: false,
        user: null
      }
    }

    return {
      success: true,
      user,
    }
  }
}