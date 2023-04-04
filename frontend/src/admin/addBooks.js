import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import { Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(0);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, success, product } = productCreate || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("countInStock", countInStock);
    formData.append("coverImage", coverImage);
    formData.append("adminName", userInfo.name);
    dispatch(createProduct(formData));
  };

  return (
    <Row className=" d-flex align-items-center justify-content-center">
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <h2>ADD NEW BOOKS</h2>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="coverImage">
                <Form.Label>Cover Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter image url"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="countInStock">
                <Form.Label>Count In Stock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter count in stock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" className="mt-3" type="submit">
                Submit
              </Button>
            </>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default AddBookForm;
