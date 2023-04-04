import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Badge,
  ListGroup,
  Card,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import { addToCart } from "../actions/cartActions";

const ProductScreen = (props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  const { id } = useParams();
  useEffect(() => {
    if (successProductReview) {
      toast.success("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
  }, [dispatch, id, successProductReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error("Please enter your review and rating");
      return;
    }
    dispatch(
      createProductReview(id, {
        rating: rating,
        comment: comment,
        name: userInfo.name,
      })
    );
  };
  // const { search } = useLocation();
  const navigate = useNavigate();

  // const productId= id;

  const handleReserve = () => {
    dispatch(addToCart(product._id));
    navigate(`/cart/${product._id}`);
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        <BiArrowBack />
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product.coverImage} alt={product.title} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{product.category}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>{product.author}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <Badge bg="success">Available</Badge>
                        ) : (
                          <Badge bg="danger">Unavailable</Badge>
                        )}{" "}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button variant="primary" onClick={handleReserve}>
                          Reserve
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form className="form" onSubmit={submitHandler}>
                      <div>
                        <h2>Write your review</h2>
                      </div>
                      <FloatingLabel controlId="floatingSelect" label="Rating">
                        <Form.Select
                          id="rating"
                          value={rating}
                          style={{ height: "30px" }}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Rating</option>
                          <option value="1">1- Bad</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very good</option>
                          <option value="5">5- Excelent</option>
                        </Form.Select>
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="comment"
                        label="write your Comments"
                      >
                        <Form.Control
                          as="textarea"
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>

                      <div>
                        <label />
                        <Button className="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link>to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
