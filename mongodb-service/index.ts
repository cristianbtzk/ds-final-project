import express from 'express'
import './src/config/mongo';
import cors from 'cors'

import userRouter from './src/routers/userRouter'
import itemRouter from './src/routers/itemRouter';
import orderRouter from './src/routers/orderRouter';
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use('/api', itemRouter)
app.use('/api', orderRouter)
app.use(function (err: any, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3334, () => 'server running on port 3334')
