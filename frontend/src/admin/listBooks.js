import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, deleteProduct } from '../actions/productActions';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {Loader, Message} from "../components"

const ListBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 const productDelete = useSelector((state) => state.productDelete);
 const {success: successDelete} = productDelete || {};


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      <h1>Products</h1>
      <LinkContainer to='/admin/product/create'>
        <Button className='my-3'>
          <i className='fas fa-plus'></i> Create Product
        </Button>
      </LinkContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr className="bg-success" variant="success">
             
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>CATEGORY</th>
              <th>STOCK</th>
              <th>RATING</th>
              <th>RATING</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td className='text-capitalize fw-bold'>{product.title}</td>
                <td>{product.author}</td>
                <td>{product.category}</td>
                <td>{product.countInStock}</td>
                <td>{product.rating}</td>
                <td>{product.numReviews}</td>
                <td className="mx-auto d-flex gap-3">
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant='info' className='btn-sm'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <FaTrash />
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

export default ListBooks;
