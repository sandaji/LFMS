import express, { Router } from 'express'
import {
  getProducts,
  getProductById,
  createProductReview,createProduct
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'


 const router = express.Router()

 
 router.route('/').get(getProducts).post(protect)
 router.route('/:id/reviews').post(protect, createProductReview)
router.route('/:id').get(getProductById).put(protect)


router.post('/', createProduct);

 export default router