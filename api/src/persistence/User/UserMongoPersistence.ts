import { IUser } from '../../models/IUser';
import { User } from '../../models/User';
import IIUserPersistence from './IUserPersistence';
import axios from 'axios'

export default class UserMongoPersistence implements IIUserPersistence {
  async store(user: IUser): Promise<IUser> {
    const { data } = await axios.post('http://ds-mongoservice-image:3334/api/item', user)
    console.log(data)
    return data
  }

  async remove(id: string): Promise<boolean> {
    const result = await User.deleteOne({ _id: id })
    return result.deletedCount === 1
  }
}
