import asyncHandler from "express-async-handler";
import Book from "../models/bookIssueModel.js";
import User from "../models/userModel.js";
import BookIssue from "../models/bookIssueModel.js";

// @desc    Issue a book
// @route   POST /api/bookissue
// @access  Private/Admin
const issueBook = asyncHandler(async (req, res) => {
  const { bookId, userId } = req.body.bookissue;

  const book = await Book.findById(bookId);
  const user = await User.findById(userId);

  if (!book) {hch
    res.status(400);
    throw new Error("Book not found");
  }

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (book.countInStock === 0) {
    res.status(400);
    throw new Error("Book is out of stock");
  }

  const bookIssue = new BookIssue({
    book: bookId,
    user: userId,
    issuedBy: req.user._id,
  });

  book.countInStock--;
  await book.save();
  await bookIssue.save();

  res.status(201).json(bookIssue);
});

// @desc    Get all issued books
// @route   GET /api/bookissue/issued
// @access  Private/Admin
const getIssuedBooks = asyncHandler(async (req, res) => {
  const bookIssues = await BookIssue.find({})
    .populate("book", "title")
    .populate("user", "name email");

  res.json(bookIssues);
});

export { issueBook, getIssuedBooks };
