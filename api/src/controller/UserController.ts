import { Request, Response } from "express";

import UserMongoPersistence from "../persistence/User/UserMongoPersistence"
import CreateUserService from "../services/User/CreateUserService"
import DeleteUserService from "../services/User/DeleteUserService";
import AuthenticateUserService from "../services/User/AuthenticateUserService";

const userMongoPersistence = new UserMongoPersistence()

export default class UserController {
  async create(request: Request, response: Response) {
    const createUserService = new CreateUserService(userMongoPersistence)

    const createdUser = await createUserService.execute(request.body)

    return response.json(createdUser)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteUserService = new DeleteUserService(userMongoPersistence)
    await deleteUserService.execute(id)
    
    return response.json()
  }

  async authenticate(request: Request, response: Response) {
    console.log(`Autenticando na api ${process.env.API}`)
    const { email, password } = request.body
    const authenticateUserService = new AuthenticateUserService(userMongoPersistence)
    const result = await authenticateUserService.execute(email, password)

    return response.json(result)
  }
}