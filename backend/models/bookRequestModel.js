import mongoose from "mongoose";

const bookRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const BookRequest = mongoose.model("BookRequest", bookRequestSchema);

export default BookRequest;
