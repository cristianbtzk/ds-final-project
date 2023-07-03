import { Request, Response } from "express";

import UserMongoPersistence from "../persistence/User/UserMongoPersistence"

const userMongoPersistence = new UserMongoPersistence() 

export default class UserController {
  async create(request: Request, response: Response) {
    const user = await userMongoPersistence.store(request.body)
    return response.json(user)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const user = await userMongoPersistence.remove(id)

    return response.json()
  }

  /* async listar(request: Request, response: Response) {
    const listUsersService = new ListUsersService(userMongoPersistence)

    const users = await listUsersService.execute()
    return response.json(users)
  } */
}