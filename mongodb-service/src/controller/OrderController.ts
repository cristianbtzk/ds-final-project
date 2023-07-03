import { Request, Response } from "express";

import OrderMongoPersistence from "../persistence/Order/OrderMongoPersistence"

const userMongoPersistence = new OrderMongoPersistence() 

export default class OrderController {
  async create(request: Request, response: Response) {
    const user = await userMongoPersistence.store(request.body)
    return response.json(user)
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const user = await userMongoPersistence.remove(id)

    return response.json()
  }

  /* async listar(request: Request, response: Response) {
    const listOrdersService = new ListOrdersService(userMongoPersistence)

    const users = await listOrdersService.execute()
    return response.json(users)
  } */
}