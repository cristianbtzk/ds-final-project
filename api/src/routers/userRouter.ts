import { Router } from 'express'
import UserController from '../controller/UserController'

const router = Router()

const userController = new UserController()

export default router
  /*   .get('/user', userController.listar)*/
  .post('/user/authenticate', userController.authenticate)
  .post('/user', userController.create)
  .delete('/user/:id', userController.excluir)