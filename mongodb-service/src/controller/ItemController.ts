import { Request, Response } from "express";

import ItemMongoPersistence from "../persistence/Item/ItemMongoPersistence"

const itemMongoPersistence = new ItemMongoPersistence()

export default class ItemController {
  async create(request: Request, response: Response) {
    const createdItem = await itemMongoPersistence.store(request.body)

    return response.json(createdItem)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const result = await itemMongoPersistence.remove(id)
    if(!result) {
      return response.status(400).send()
    }
    return response.json()
  }

  /* async listar(request: Request, response: Response) {
    const listItemsService = new ListItemsService(userMongoPersistence)

    const users = await listItemsService.execute()
    return response.json(users)
  } */
}