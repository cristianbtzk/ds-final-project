import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

export default router
  .post('/user', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://api:3333/api/user', req.body)
    console.log('aaa')
    return res.json(data)
  })
  .delete('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.delete(`http://api:3333/api/user/${id}`)

    return res.json(data)
  })