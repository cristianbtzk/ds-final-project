import { Router } from 'express'
import OrderController from '../controller/OrderController'

const router = Router()

const orderController = new OrderController()

export default router
  .get('/order/user/:id', orderController.getByUser)
  .get('/order/:id', orderController.getById)
  .post('/order', orderController.create)
  .delete('/order/:id', orderController.excluir)