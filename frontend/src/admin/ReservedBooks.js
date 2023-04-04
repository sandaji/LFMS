import React, { useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { listBooksForApproval, approveReservedBook } from '../actions/adminActions';
import { Button, Table } from 'react-bootstrap';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ReservedBooksList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const adminReservedBooksList = useSelector((state) => state.adminReservedBooksList);
  const { reservedBooks } = adminReservedBooksList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listBooksForApproval());
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo, navigate]);

  const handleApproveBook = (bookId) => {
    dispatch(approveReservedBook(bookId));
  };

  return (
    <div>
      <h1>Reserved Books List</h1>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>COVER</th>
            <th>BORROW DAYS</th>
            <th>RETURN DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservedBooks &&
            reservedBooks.map((book) => (
              <tr key={book._id}>
                <td>{book._id}</td>
                <td>{book.user && book.user.name}</td>
                <td>{book.book.title}</td>
                <td>{book.book.author}</td>
                <td>
                  <img src={book.book.image} alt={book.book.title} height='50' />
                </td>
                <td>{book.borrowDays}</td>
                <td>{book.returnDate.substring(0, 10)}</td>
                <td>
                  {book.isApproved ? (
                    <FaCheckCircle className='text-success' />
                  ) : (
                    <FaExclamationTriangle className='text-warning' />
                  )}
                </td>
                <td>
                  {!book.isApproved && (
                    <Button variant='success' className='btn-sm' onClick={() => handleApproveBook(book._id)}>
                      Approve
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReservedBooksList;
