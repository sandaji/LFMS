import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Col, Image, Row, Form } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import { reserveProduct } from "../actions/cartActions";
import { toast } from "react-toastify";
import axios from "axios";

const CheckoutScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [loading, setLoading] = useState(false);

  const borrowDays = 3; // default value
  const penalty = 10; // KES

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + borrowDays);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const location = useLocation();
  const { _id, title, author, description, coverImage} =
    location.state;

  if (!userInfo) {
    navigate("/login");
  } else {
    // Show success page
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handleConfirmClick = async () => {
    setLoading(true);
    try {
      // Dispatch action to update the store with the reservation details
      dispatch(reserveProduct(cart));
      // Send POST request to server with reservation details and user information
      const requestBody = {
        cart,
        user: userInfo, // Include user information
      };
      const response = await axios.post("/api/reservations", requestBody);
      setLoading(false);
      toast.success("Reservation successful!");
      // Redirect to success page
      navigate("/success");
    } catch (error) {
      setLoading(false);
      toast.error("Reservation failed. Please try again later.");
      // Dispatch action to update the store with an error message
      dispatch({
        type: "RESERVATION_ERROR",
        payload: error.message,
      });
    }
  };

  return (
    <div className="checkout-screen">
      <Link to="/cart" className="btn btn-light bg-info my-3">
        <IoArrowBackOutline /> Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={coverImage} alt={title} className="checkout-image" />
        </Col>
        <Col md={6}>
          <h2>Title: {title}</h2>
          <h4>Author: {author}</h4>

          <h4>Description: {description}</h4>

          <h4>Summary</h4>
          <hr />
          <div>
            <strong>Number of Days:</strong> {borrowDays} <br />
            <strong>Return Date:</strong> {returnDate.toDateString()} <br />
            <p>
              Penalty of <strong>KES {penalty}/day </strong> is incurred if you
              do not bring this book in time
            </p>{" "}
            <br />
          </div>
          <Button
            type="button"
            className="btn-block btn-success"
            disabled={cartItems.length === 0}
            onClick={handleConfirmClick}
          >
            CONFIRM
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutScreen;
