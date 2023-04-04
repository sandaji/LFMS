import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import User from '../models/userModel.js'

 // @desc    Fetch all products
 // @route   GET /api/products
 // @access  Public
 const getProducts = asyncHandler(async (req, res) => {
   const products = await Product.find({})

   res.json(products)
 })

 // @desc    Fetch single product
 // @route   GET /api/products/:id
 // @access  Public
 const getProductById = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id)

   if (product) {
     res.json(product)
   } else {
     res.status(404)
     throw new Error('Product not found')
   }
 })

 // @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})


const createProduct = async (req, res) => {
  const { title, author, coverImage,category, description, countInStock, numReviews } = req.body;

  try {
    const product = await Product.create({
      title,
      author,
      coverImage,
      category,
      description,
      countInStock,numReviews
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// controllers/ProductController.js

const issueProduct = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Check if product exists and has enough countInStock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.countInStock < 1) {
      return res.status(400).json({ message: 'Product is out of stock' });
    }

    // Update product countInStock and save to database
    product.countInStock -= 1;
    await product.save();

    // Add product to user's list of issued products
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.issuedProducts.push(productId);
    await user.save();

    // Return updated product and user information
    res.json({ product, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};




 export { getProducts, getProductById,  createProductReview,createProduct,issueProduct}