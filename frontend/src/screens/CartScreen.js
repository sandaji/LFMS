import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { addToCart } from '../actions/cartActions';
import { IoArrowBackOutline } from 'react-icons/io5';

const CartScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation()
  const { id } = useParams();

  const productId = id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 3;

  const product = useSelector((state) =>
    state.productList.products.find((p) => p._id === productId)
  );

  const [days, setDays] = useState(qty);
  const [deadline, setDeadline] = useState(null);

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const handleCalculateDeadline = () => {
    const now = new Date();
    const daysToAdd = parseInt(days);
    const deadlineDate = new Date(now.setDate(now.getDate() + daysToAdd));
    setDeadline(deadlineDate);
  };

  const checkoutHandler = () => {
    dispatch(addToCart(product._id, days, deadline));
    navigate('/checkout', {
      state: {
        _id:product._id,
        title: product.title,
        author: product.author,
        description: product.description,
        coverImage: product.coverImage,
        days,
        deadline: deadline ? deadline.toLocaleDateString() : null,
      },
    });
  };


  return (
    <Container>
      <Row className='py-3'>
        <Col md={4}>
          <Image src={product.coverImage} alt={product.title} fluid />
        </Col>
        <Col md={8}>
          <h1>{product.title}</h1>
          <p>by {product.author}</p>
          <p>{product.description}</p>
         
        </Col>
      </Row>
      <hr />
      <Row className='py-3'>
        <Col md={4}>
          <h3>Reserve for</h3>
        </Col>
        <Col md={8}>
          <Form>
            <Form.Group controlId='days'>
              <Form.Label>Number of Days</Form.Label>
              <div className='d-flex align-items-center'>
                <Button variant='outline-dark' onClick={() => setDays(Math.max(3, days - 1))}>
                  <FaMinusCircle />
                </Button>
                <Form.Control
                  type='number'
                  min='3'
                  max='5'
                  value={days}
                  onChange={handleDaysChange}
                  onBlur={handleCalculateDeadline}
                  className='mx-3 w-25 text-center'
                />
                <Button variant='outline-dark' onClick={() => setDays(Math.min(5, days + 1))}>
                  <FaPlusCircle />
                </Button>
              </div>
            </Form.Group>
            {deadline && (
  <Form.Group controlId='deadline'>
    <Form.Label>Return by</Form.Label>
    <p>{deadline.toLocaleDateString()}</p>
  </Form.Group>
)}

            <Button className='m-4'
              type='button'
              variant='primary'
              disabled={product.countInStock === 0 || days < 3 || days > 5}
              onClick={checkoutHandler}
            >
              Submit
            </Button>
            <Link className=' m-4 btn btn-info' to='/'>
            <IoArrowBackOutline /> Go Back
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default CartScreen;
