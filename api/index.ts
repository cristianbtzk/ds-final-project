import express from 'express'
import './src/config/mongo';

import userRouter from './src/routers/userRouter'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use(function(err: any, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3333, () => 'server running on port 3333')
