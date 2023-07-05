import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

export default router
  .post('/item', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://api:3333/api/item', req.body)

    return res.json(data)
  })
  .delete('/item/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.delete(`http://api:3333/api/item/${id}`)

    return res.json(data)
  })