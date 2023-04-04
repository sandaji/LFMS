import {
  BOOK_REQUEST_CREATE_REQUEST,
  BOOK_REQUEST_CREATE_SUCCESS,
  BOOK_REQUEST_CREATE_FAIL,
} from "../constants/bookRequestConstants";

export const bookRequestCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_REQUEST_CREATE_REQUEST:
      return { loading: true };
    case BOOK_REQUEST_CREATE_SUCCESS:
      return { loading: false, success: true, bookRequest: action.payload };
    case BOOK_REQUEST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
