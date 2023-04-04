import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { fetchUsers } from '../actions/userActions';
import { issueProduct } from '../actions/productActions';

const IssueProduct = () => {
  const dispatch = useDispatch();

  const [productId, setProductId] = useState('');
  const [userId, setUserId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const userList = useSelector((state) => state.userList);
  const { users } = userList || {};

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(issueProduct(productId, userId, quantity));
  };

  return (
    <Container>
      <h1>Issue Product</h1>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Group controlId='productId'>
              <Form.Label>Product</Form.Label>
              <Form.Control
                as='select'
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              >
                <option value=''>Select Product</option>
                {products && products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='userId'>
              <Form.Label>User</Form.Label>
              <Form.Control
                as='select'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              >
                <option value=''>Select User</option>
                {users && users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId='quantity'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' variant='primary'>
          Issue Product
        </Button>
      </Form>
    </Container>
  );
};

export default IssueProduct;
