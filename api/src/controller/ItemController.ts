import { Request, Response } from "express";
import { IItem } from "../models/IItem";

import ItemMongoPersistence from "../persistence/Item/ItemMongoPersistence"
import CreateItemService from "../services/Item/CreateItemService";
import DeleteItemService from "../services/Item/DeleteItemService";
import GetAllItemsService from "../services/Item/GetAllItemsService";

const userMongoPersistence = new ItemMongoPersistence()

export default class ItemController {
  async create(request: Request, response: Response) {
    const createItemService = new CreateItemService(userMongoPersistence)

    const createdItem = await createItemService.execute(request.body)

    return response.json(createdItem)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteItemService = new DeleteItemService(userMongoPersistence)
    const result = await deleteItemService.execute(id)
    /* if(!result) {
      return response.status(400).send()
    } */
    return response.json()
  }

  async getAll(request: Request, response: Response) {
    const getAllItemsService = new GetAllItemsService(userMongoPersistence)
    const items = await getAllItemsService.execute()
    
    return response.json(items)
  }

  
}