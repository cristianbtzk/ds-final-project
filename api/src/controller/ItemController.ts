import { Request, Response } from "express";
import { IItem } from "../models/IItem";

import ItemMongoPersistence from "../persistence/Item/ItemMongoPersistence"
import CreateItemService from "../services/Item/CreateItemService"
import DeleteItemService from "../services/Item/DeleteItemService";
/* import DeleteItemService from "../services/Item/DeleteItemService";
import ListItemsService from "../services/Item/ListItemsService"; */

const userMongoPersistence = new ItemMongoPersistence()

export default class ItemController {
  async create(request: Request, response: Response) {
    /* const {
      username,
      name,
      email,
      password,
    } = request.body */
    const createItemService = new CreateItemService(userMongoPersistence)

    const createdItem = await createItemService.execute(request.body)

    return response.json(createdItem)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteItemService = new DeleteItemService(userMongoPersistence)
    const result = await deleteItemService.execute(id)
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