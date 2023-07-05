import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

export default router
  .post('/order', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://api:3333/api/order', req.body)

    return res.json(data)
  })
  .delete('/order/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.delete(`http://api:3333/api/order/${id}`)

    return res.json(data)
  })