import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import morgan from 'morgan'


const app = express();
dotenv.config()

connectDB();




//  if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

 app.use(express.json())

 app.get('/', (req, res) => {
   res.send('API is running...')
 })


 app.use('/api/products', productRoutes)
 app.use('/api/users', userRoutes)

 app.use(notFound)
 app.use(errorHandler)

 const port = process.env.PORT || 3500;
 app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} at http://localhost:${port}`))

 