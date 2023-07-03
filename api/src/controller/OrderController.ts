import { Request, Response } from "express";

import OrderMongoPersistence from "../persistence/Order/OrderMongoPersistence"
import CreateOrderService from "../services/Order/CreateOrderService"
import DeleteOrderService from "../services/Order/DeleteOrderService";
/* import DeleteOrderService from "../services/Order/DeleteOrderService";
import ListOrdersService from "../services/Order/ListOrdersService"; */

const userMongoPersistence = new OrderMongoPersistence()

export default class OrderController {
  async create(request: Request, response: Response) {
    const createOrderService = new CreateOrderService(userMongoPersistence)

    const createdOrder = await createOrderService.execute(request.body)

    return response.json(createdOrder)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteOrderService = new DeleteOrderService(userMongoPersistence)
    const result = await deleteOrderService.execute(id)
    console.log(result)
    /* if(!result) {
      return response.status(400).send()
    } */
    return response.json()
  }

  /* async listar(request: Request, response: Response) {
    const listOrdersService = new ListOrdersService(userMongoPersistence)

    const users = await listOrdersService.execute()
    return response.json(users)
  } */
}