import React, {  useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listProducts, approveProduct } from '../actions/productActions';

const AdminScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productApprove = useSelector((state) => state.productApprove);
  const { loading: loadingApprove, error: errorApprove, success: successApprove } = productApprove || {};

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate('/login');
    }
  }, [dispatch, history, userInfo, successApprove]);

  const approveHandler = (id) => {
    if (window.confirm('Are you sure you want to approve this product?')) {
      dispatch(approveProduct(id));
    }
  };

  return (
    <>
      <h1>Product List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>APPROVED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  {product.isApproved ? (
                    <FaTrash style={{ color: 'red' }} />
                  ) : (
                    <FaCheck style={{ color: 'green' }}></FaCheck>
                  )}
                </td>
                <td>
                  <Button
                    variant='light'
                    className='btn-sm'
                    onClick={() => approveHandler(product._id)}
                    disabled={product.isApproved}
                  >
                    Approve
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AdminScreen;
