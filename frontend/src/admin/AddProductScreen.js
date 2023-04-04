import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../actions/productActions';
import { useNavigate } from 'react-router-dom';

const AddProductScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [countInStock, setCountInStock] = useState(0);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, success, product } = productCreate || {};

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login');
    }
    if (success) {
      navigate('/admin/productlist');
    }
  }, [navigate, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct({ name, price, image,brand, description, countInStock }));
  };

  return (
    <>
      <h1>Add Product</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='image'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='image'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='countInStock'>
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter count in stock'
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Add Product
        </Button>
      </Form>
    </>
  );
};

export default AddProductScreen;
