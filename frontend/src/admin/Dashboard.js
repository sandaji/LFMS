import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {Button } from "react-bootstrap"

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo,loading, error, } = userLogin;

 

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login');
    } else {
      dispatch(getUserDetails());
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message  variant='danger'>{error}</Message>
      ) : (
        <>
          <h2>Welcome, {userInfo.name}!</h2>
          <p>Email: {userInfo.email}</p>
          <div>
            <Link to="/admin/add/product">
              <Button>Add Book</Button>
            </Link>
            <Link to="/admin/return-book">
              <Button>Return Book</Button>
            </Link>
            <Link to="/admin/products/edit">
              <Button>Update Book</Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
