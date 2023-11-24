import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { UserRoutes } from './routes/user.route'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1/users', UserRoutes)
app.use('/api/v1/users', UserRoutes)
app.use('/api/v1/users', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send(a)
})

export default app