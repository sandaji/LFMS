import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import { initProductCreate } from '../actions/productActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [image, setImage] = useState()
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState(0)
  const [numReviews, setNumReviews] = useState(0)
  const [price, setPrice] = useState(0)
  const [countInStock, setCountInStock] = useState(0)
  const [message, setMessage] = useState(null)

    const productCreate = useSelector((state) => state.productCreate);
    const { loading, error, success, product } = productCreate;
  
    useEffect(() => {
      dispatch(initProductCreate());
    }, [dispatch]);
    
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct({ name, price, image, description, category,rating,price,countInStock}));
  };

  return (
    <Form onSubmit={submitHandler}>
      <h2>Create Product</h2>
      {<Loader />  && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {success && <p>Product created successfully!</p>}
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>


      <Form.Group controlId='image'>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          placeholder='Enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='name'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>

       
            <Form.Group controlId='name'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>


            <Form.Group controlId='name'>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter your rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='name'>
          <Form.Label>NumReviews</Form.Label>
          <Form.Control
            type='nnumberame'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setNumReviews(e.target.value)}
          ></Form.Control>
        </Form.Group>
            
            <Form.Group controlId='name'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='name'>
          <Form.Label>CountInStock</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter stock state'
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

      <Button variant='primary' type='submit'>
        Create Product
      </Button>
    </Form>
  );
};

export default AdminDashboard;
