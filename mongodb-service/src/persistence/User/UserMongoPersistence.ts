import { IUser } from '../../models/IUser';
import { User } from '../../models/User';

export default class UserMongoPersistence {
  async store(user: IUser): Promise<IUser> {
    const newUser = await User.create(user)

    return newUser
  }

  async getByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });
    return user;
  }

  async remove(id: string): Promise<boolean> {
    const result = await User.deleteOne({ _id: id })
    return result.deletedCount === 1
  }
}
