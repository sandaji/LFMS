import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { toast } from 'react-toastify'
import {Form,Button,Row,Col} from 'react-bootstrap' 


const Dashboard = () => {
      const [name, setName] = useState('')
      const [image, setImage] = useState()
      const [brand, setBrand] = useState('')
      const [category, setCategory] = useState('')
      const [description, setDescription] = useState("")
      const [rating, setRating] = useState(0)
      const [numReviews, setNumReviews] = useState(0)
      const [price, setPrice] = useState(0)
      const [countInStock, setCountInStock] = useState(0)
      const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const navigate = useNavigate();
   const { search } = useLocation();
   const redirectInUrl = new URLSearchParams(search).get('redirect');
   const redirect = redirectInUrl ? redirectInUrl : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault()

  }

      return (
        <FormContainer >
           <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
    <Form onSubmit={submitHandler}>
      <Row>
        <Col md={3}>
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
          <Form.Label>Isbn</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter isbn'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>
            </Col>
            <Col>
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
          <Form.Label>desc</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter ddescription'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
            </Col>
            <Col>
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
            </Col><Col>
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
            </Col>
            </Row>
    
            <Button >Add New Book</Button>
            </Form>
        </FormContainer> 
   
  )
}

export default Dashboard