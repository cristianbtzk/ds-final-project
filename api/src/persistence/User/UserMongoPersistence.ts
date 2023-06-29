import { IUser } from '../../models/IUser';
import { User } from '../../models/User';
import IIUserPersistence from './IUserPersistence';

export default class UserMongoPersistence implements IIUserPersistence {
  async store(user: IUser): Promise<IUser> {
    const newUser = await User.create(user)

    return newUser
  }

  async remove(id: string): Promise<boolean> {
    const result = await User.deleteOne({ _id: id })
    return result.deletedCount === 1
  }
}
