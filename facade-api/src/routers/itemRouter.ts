import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

export default router
  .post('/item', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://ds-api-nginx:80/api/item', req.body)

    return res.json(data)
  })
  .delete('/item/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.delete(`http://ds-api-nginx:80/api/item/${id}`)

    return res.json(data)
  })
  .get('/item', async (req: Request, res: Response) => {
    const { data } = await axios.get(`http://ds-api-nginx:80/api/item`)

    return res.json(data)
  })