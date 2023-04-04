import axios from "axios";
import {
  RESERVATION_APPROVE_REQUEST,
  RESERVATION_APPROVE_SUCCESS,
  RESERVATION_APPROVE_FAIL,
  RESERVATION_CANCEL_REQUEST,
  RESERVATION_CANCEL_SUCCESS,
  RESERVATION_CANCEL_FAIL,
  RESERVATION_LIST_REQUEST,
  RESERVATION_LIST_SUCCESS,
  RESERVATION_LIST_FAIL,
} from "../constants/ReservationConstants";

// Action Creators
export const listReservations = () => async (dispatch) => {
  try {
    dispatch({ type: RESERVATION_LIST_REQUEST });

    const { data } = await axios.get("/api/reservations");

    dispatch({
      type: RESERVATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const cancelReservation = (reservationId) => async (dispatch) => {
  try {
    dispatch({ type: RESERVATION_CANCEL_REQUEST });

    const { data } = await axios.delete(`/api/reservations/${reservationId}`);

    dispatch({
      type: RESERVATION_CANCEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_CANCEL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveReservation = (reservation) => async (dispatch) => {
  try {
    dispatch({ type: RESERVATION_APPROVE_REQUEST });

    const { data } = await axios.post("/api/issuedProducts", reservation);

    dispatch({
      type: RESERVATION_APPROVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_APPROVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
