import axios from "axios";
import { toast } from "react-toastify";
import {
  ISSUE_BOOK_REQUEST,
  ISSUE_BOOK_SUCCESS,
  ISSUE_BOOK_FAIL,
  GET_ISSUED_BOOKS_REQUEST,
  GET_ISSUED_BOOKS_SUCCESS,
  GET_ISSUED_BOOKS_FAILURE,
} from "../constants/issueBookConstants";

export const issueBook = (bookissue) => async (dispatch, getState) => {
  try {
    dispatch({ type: ISSUE_BOOK_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/bookissue",  bookissue , config);

    dispatch({ type: ISSUE_BOOK_SUCCESS, payload: data });
    toast.success("Book issued successfully");
  } catch (error) {
    dispatch({
      type: ISSUE_BOOK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getIssuedBooks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ISSUED_BOOKS_REQUEST });

    const { data } = await axios.get("/api/bookissue/issued");

    dispatch({
      type: GET_ISSUED_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ISSUED_BOOKS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
