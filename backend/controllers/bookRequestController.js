import Book from "../models/bookRequestModel.js";

const postBook = async (req, res) => {
  const { title, author, category } = req.body;
  const user = req.user;

  try {
    const newBook = await Book.create({
      title,
      author,
      category,
      user: user._id,
    });

    res.status(201).json({
      status: "success",
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while processing your request.",
    });
  }
};

export { postBook };
