import { IUser } from '../../models/IUser';
import IIUserPersistence from './IUserPersistence';
import axios from 'axios'

export default class UserMongoPersistence implements IIUserPersistence {
  async store(user: IUser): Promise<IUser> {
    const { data } = await axios.post('http://ds-mongoservice:4000/api/user', user)
    return data
  }

  async remove(id: string): Promise<boolean> {
    const { data } = await axios.delete(`http://ds-mongoservice:4000/api/user/${id}`)
    return data
  }

  async getByEmail(email: string): Promise<IUser | null> {
    const { data } = await axios.get(`http://ds-mongoservice:4000/api/user/email/${email}`)
    console.log('data')
    console.log(data)
    return data
  }
}
