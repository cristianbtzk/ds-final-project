import { Router } from 'express'
import ItemController from '../controller/ItemController'

const router = Router()

const itemController = new ItemController()

export default router
  .get('/item', itemController.getAll)
  .post('/item', itemController.create)
  .delete('/item/:id', itemController.excluir)