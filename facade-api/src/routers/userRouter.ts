import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

export default router
  .post('/user', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://ds-api-nginx:80/api/user', req.body)
    return res.json(data)
  })
  .post('/user/authenticate', async (req: Request, res: Response) => {
    const { data } = await axios.post('http://ds-api-nginx:80/api/user/authenticate', req.body)
    return res.json(data)
  })
  .delete('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { data } = await axios.delete(`http://ds-api-nginx:80/api/user/${id}`)

    return res.json(data)
  })