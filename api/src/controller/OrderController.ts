import { Request, Response } from "express";

import OrderMongoPersistence from "../persistence/Order/OrderMongoPersistence"
import CreateOrderService from "../services/Order/CreateOrderService"
import DeleteOrderService from "../services/Order/DeleteOrderService";
import GetOrderByIdService from "../services/Order/GetOrderByIdService";
import GetUserOrdersService from "../services/Order/GetUserOrdersService";
/* import DeleteOrderService from "../services/Order/DeleteOrderService";
import ListOrdersService from "../services/Order/ListOrdersService"; */

const orderMongoPersistence = new OrderMongoPersistence()

export default class OrderController {
  async create(request: Request, response: Response) {
    const createOrderService = new CreateOrderService(orderMongoPersistence)

    const createdOrder = await createOrderService.execute(request.body)

    return response.json(createdOrder)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteOrderService = new DeleteOrderService(orderMongoPersistence)
    const result = await deleteOrderService.execute(id)
    console.log(result)
    /* if(!result) {
      return response.status(400).send()
    } */
    return response.json()
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params
    const getOrderByIdService = new GetOrderByIdService(orderMongoPersistence)
    const order = await getOrderByIdService.execute(id)
    return response.json(order)
  }

  async getByUser(request: Request, response: Response) {
    const { id } = request.params
    const getUserOrdersService = new GetUserOrdersService(orderMongoPersistence)
    const orders = await getUserOrdersService.execute(id)
    return response.json(orders)
  }
}