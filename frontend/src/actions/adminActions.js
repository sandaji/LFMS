import axios from 'axios';
import { ADMIN_BOOK_APPROVE_REQUEST, ADMIN_BOOK_APPROVE_SUCCESS, ADMIN_BOOK_APPROVE_FAIL,ADMIN_BOOK_LIST_REQUEST,ADMIN_BOOK_LIST_SUCCESS,ADMIN_BOOK_LIST_FAIL, } from '../constants/adminConstants';


// Action to fetch the list of books awaiting approval
export const listBooksForApproval = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_BOOK_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/admin/books-for-approval', config);

    dispatch({
      type: ADMIN_BOOK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BOOK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action to approve a reserved book
export const approveReservedBook = (bookId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_BOOK_APPROVE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/books/${bookId}/approve`,
      {},
      config
    );

    dispatch({
      type: ADMIN_BOOK_APPROVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BOOK_APPROVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
