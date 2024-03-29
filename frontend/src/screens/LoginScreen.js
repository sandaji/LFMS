import React, { useState, useEffect } from 'react'
 import { Link,useLocation, useNavigate } from 'react-router-dom'
 import { Form, Button, Row, Col } from 'react-bootstrap'
 import { useDispatch, useSelector } from 'react-redux'
 import {Message, Loader} from '../components'
 import FormContainer from '../forms/FormContainer'
 import { login } from '../actions/userActions'

 const LoginScreen = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useDispatch()

   const userLogin = useSelector((state) => state.userLogin)
   const { loading, error, userInfo } = userLogin

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
     dispatch(login(email, password))
   }

   return (
     <FormContainer>
       <h1>Sign In</h1>
       {error && <Message variant='danger'>{error}</Message>}
       {loading && <Loader />}
       <Form onSubmit={submitHandler}>
         <Form.Group controlId='email'>
           <Form.Label>Email Address</Form.Label>
           <Form.Control
             type='email'
             placeholder='Enter email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Form.Group controlId='password'>
           <Form.Label>Password Address</Form.Label>
           <Form.Control
             type='password'
             placeholder='Enter password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Button type='submit' className="mt-3" variant='primary'>
           Sign In
         </Button>
       </Form>

       <Row className='py-3'>
         <Col>
           New Customer?{' '}
         <Link to={`/register?redirect=${redirect}`}>Create an Account</Link>
         </Col>
       </Row>
     </FormContainer>
   )
 }

 export default LoginScreen