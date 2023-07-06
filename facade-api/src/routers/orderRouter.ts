import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

export default router
  .post('/order', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://ds-api-nginx:80/api/order', req.body)

    return res.json(data)
  })
  .delete('/order/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.delete(`http://ds-api-nginx:80/api/order/${id}`)

    return res.json(data)
  })
  .get('/order/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.get(`http://ds-api-nginx:80/api/order/${id}`)

    return res.json(data)
  })
  .get('/order/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.get(`http://ds-api-nginx:80/api/order/user/${id}`)

    return res.json(data)
  })