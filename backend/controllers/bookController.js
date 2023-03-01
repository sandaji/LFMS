import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'
import Reservation from '../models/reservationModel.js'

const createProduct = async (req, res) => {
    const { title, author, coverImage, category, description, countInStock, numReviews } = req.body;
  
    try {
      const book = await Book.create({
        title,
        author,
        coverImage,
        category,
        description,
        countInStock,
        numReviews
      });
  
      const product = await Book.create({
        book: book._id
      });
  
      const reservation = await Reservation.create({
        book: book._id,
        student: req.user.id
      });
  
      res.status(201).json({ success: true, book, product, reservation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  export {createProduct,}