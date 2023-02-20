import express, { Router } from 'express'
import Product from '../models/productModel.js'
import {
  getProducts,
  getProductById,
  createProductReview,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'


 const router = express.Router()

 
 router.route('/').get(getProducts).post(protect)
 router.route('/:id/reviews').post(protect, createProductReview)
 router.route('/:id').get(getProductById).put(protect)

//Adding new products to mongodb
router.post('/add-product', async(req,res) => {
    const products = new Product(req.body)
    try{
        await products.save()
        res.status(201).json({
            status: 'Success',
            data : {
                products
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})
 

 

 export default router