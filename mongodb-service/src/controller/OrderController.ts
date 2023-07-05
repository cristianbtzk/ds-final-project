import { Request, Response } from "express";

import OrderMongoPersistence from "../persistence/Order/OrderMongoPersistence"

const orderMongoPersistence = new OrderMongoPersistence() 

export default class OrderController {
  async create(request: Request, response: Response) {
    const user = await orderMongoPersistence.store(request.body)
    return response.json(user)
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const user = await orderMongoPersistence.remove(id)

    return response.json()
  }

  async getByUser(request: Request, response: Response) {
    const { id } = request.params
    const orders = await orderMongoPersistence.getByUser(id)

    return response.json(orders)
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params
    const order = await orderMongoPersistence.getById(id)

    return response.json(order)
  }
}