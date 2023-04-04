import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBookRequest } from "../actions/bookRequestAction";
import { BOOK_REQUEST_CREATE_RESET } from "../constants/bookRequestConstants";
import { Form, Button, Container } from "react-bootstrap";
import { FaBook, FaUser, FaTh } from "react-icons/fa";
import { toast } from "react-toastify";

const BookRequestForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bookRequestCreate = useSelector((state) => state.bookRequestCreate);
  const success = bookRequestCreate.success || false;

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setAuthor("");
    setCategory("");
    dispatch(
      createBookRequest({ title, author, category, user: userInfo.name })
    );
    handleToast("success", "Book request submitted successfully!");
  };

  const resetHandler = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
    dispatch({ type: BOOK_REQUEST_CREATE_RESET });
  };

  const handleToast = (type, message) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Form onSubmit={submitHandler} onReset={resetHandler}>
        <h1 className="mb-3 text-center">Book Request Form</h1>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaBook />
            </span>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </Form.Group>

        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaUser />
            </span>
            <Form.Control
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaTh />
            </span>
            <Form.Control
              type="text"
              placeholder="Enter book category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2 my-2">
          Submit
        </Button>
        <Button variant="secondary" type="reset" className="my-2">
          Reset
        </Button>
      </Form>
    </Container>
  );
};
export default BookRequestForm;
