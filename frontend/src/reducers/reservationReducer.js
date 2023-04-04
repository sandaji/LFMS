import {
  RESERVATION_CREATE_REQUEST,
  RESERVATION_CREATE_SUCCESS,
  RESERVATION_CREATE_FAIL,
  RESERVATION_DETAILS_REQUEST,
  RESERVATION_DETAILS_SUCCESS,
  RESERVATION_DETAILS_FAIL,
  RESERVATION_PAY_REQUEST,
  RESERVATION_PAY_SUCCESS,
  RESERVATION_PAY_FAIL,
  MY_RESERVATION_LIST_REQUEST,
  MY_RESERVATION_LIST_SUCCESS,
  MY_RESERVATION_LIST_FAIL,
  RESERVATION_LIST_REQUEST,
  RESERVATION_LIST_SUCCESS,
  RESERVATION_LIST_FAIL,
  RESERVATION_DELETE_REQUEST,
  RESERVATION_DELETE_SUCCESS,
  RESERVATION_DELETE_FAIL,
} from "../constants/reservationConstants";

function reservationCreateReducer(state = {}, action) {
  switch (action.type) {
    case RESERVATION_CREATE_REQUEST:
      return { loading: true };
    case RESERVATION_CREATE_SUCCESS:
      return { loading: false, reservation: action.payload, success: true };
    case RESERVATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function reservationDetailsReducer(
  state = {
    reservation: {
      reservationItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) {
  switch (action.type) {
    case RESERVATION_DETAILS_REQUEST:
      return { loading: true };
    case RESERVATION_DETAILS_SUCCESS:
      return { loading: false, reservation: action.payload };
    case RESERVATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function myOrderListReducer(
  state = {
    reservations: [],
  },
  action
) {
  switch (action.type) {
    case MY_RESERVATION_LIST_REQUEST:
      return { loading: true };
    case MY_RESERVATION_LIST_SUCCESS:
      return { loading: false, reservations: action.payload };
    case MY_RESERVATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function reservationListReducer(
  state = {
    reservations: [],
  },
  action
) {
  switch (action.type) {
    case RESERVATION_LIST_REQUEST:
      return { loading: true };
    case RESERVATION_LIST_SUCCESS:
      return { loading: false, reservations: action.payload };
    case RESERVATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function reservationPayReducer(
  state = {
    reservation: {
      reservationItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) {
  switch (action.type) {
    case RESERVATION_PAY_REQUEST:
      return { loading: true };
    case RESERVATION_PAY_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_PAY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function reservationDeleteReducer(
  state = {
    reservation: {
      reservationItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) {
  switch (action.type) {
    case RESERVATION_DELETE_REQUEST:
      return { loading: true };
    case RESERVATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export {
  reservationCreateReducer,
  reservationDetailsReducer,
  reservationPayReducer,
  myOrderListReducer,
  reservationListReducer,
  reservationDeleteReducer,
};
