import { Router } from 'express'
import OrderController from '../controller/OrderController'

const router = Router()

const orderController = new OrderController()

export default router
/*   .get('/order', orderController.listar)
 */  .post('/order', orderController.create)
     .delete('/order/:id', orderController.remove)