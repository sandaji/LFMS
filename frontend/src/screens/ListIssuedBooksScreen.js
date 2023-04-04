import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIssuedBooks } from "../actions/issueBookActions";

const IssuedBooksList = ({ issuedBooks, getIssuedBooks }) => {
  useEffect(() => {
    getIssuedBooks();
  }, [getIssuedBooks]);

  return (
    <div>
      <h1>Issued Books</h1>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>User ID</th>
            <th>Issue Date</th>
          </tr>
        </thead>
        <tbody>
          {issuedBooks.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.userId}</td>
              <td>{book.issueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  issuedBooks: state.bookIssuance.issuedBooks,
});

export default connect(mapStateToProps, { getIssuedBooks })(IssuedBooksList);
