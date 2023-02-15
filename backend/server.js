import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import seedRouter from './routes/seedRouter.js'

dotenv.config()

connectDB()



 const app = express()



 app.use(express.json())

 app.get('/', (req, res) => {
   res.send('API is running...')
 })
 app.get('/api/users', (req, res) => {
   res.send(data.userRoutes)
 })


 app.use('/api/products', productRoutes)
 app.use('/api/users', userRoutes)
 app.use('/api/seed', seedRouter)

 app.use(notFound)
 app.use(errorHandler)

 const port = process.env.PORT || 5000;
 app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} on http://127.0.0.1:${port} `))

 