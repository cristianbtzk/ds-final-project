import { Request, Response } from "express";
import { IUser } from "../models/IUser";

import UserMongoPersistence from "../persistence/User/UserMongoPersistence"
import CreateUserService from "../services/User/CreateUserService"
import DeleteUserService from "../services/User/DeleteUserService";
/* import DeleteUserService from "../services/User/DeleteUserService";
import ListUsersService from "../services/User/ListUsersService"; */

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
    const result = await deleteUserService.execute(id)
    console.log(result)
    /* if(!result) {
      return response.status(400).send()
    } */
    return response.json()
  }

  /* async listar(request: Request, response: Response) {
    const listUsersService = new ListUsersService(userMongoPersistence)

    const users = await listUsersService.execute()
    return response.json(users)
  } */
}