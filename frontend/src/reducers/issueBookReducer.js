import {
  ISSUE_BOOK_REQUEST,
  ISSUE_BOOK_SUCCESS,
  ISSUE_BOOK_FAIL,
  GET_ISSUED_BOOKS_REQUEST,
  GET_ISSUED_BOOKS_SUCCESS,
  GET_ISSUED_BOOKS_FAILURE,
} from "../constants/issueBookConstants";

export const issueBookReducer = (state = {}, action) => {
  switch (action.type) {
    case ISSUE_BOOK_REQUEST:
      return { loading: true };
    case ISSUE_BOOK_SUCCESS:
      return { loading: false, success: true, bookIssue: action.payload };
    case ISSUE_BOOK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const issuedBooksReducer = (state = { issuedBooks: [] }, action) => {
  switch (action.type) {
    case GET_ISSUED_BOOKS_REQUEST:
      return { loading: true, issuedBooks: [] };
    case GET_ISSUED_BOOKS_SUCCESS:
      return { loading: false, issuedBooks: action.payload };
    case GET_ISSUED_BOOKS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
