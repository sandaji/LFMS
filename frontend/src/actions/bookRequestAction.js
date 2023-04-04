import axios from "axios";
import {
  BOOK_REQUEST_CREATE_REQUEST,
  BOOK_REQUEST_CREATE_SUCCESS,
  BOOK_REQUEST_CREATE_FAIL,
} from "../constants/bookRequestConstants";

export const createBookRequest =
  (bookRequest) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BOOK_REQUEST_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/bookrequests",
        bookRequest,
        config
      );

      dispatch({
        type: BOOK_REQUEST_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_REQUEST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
