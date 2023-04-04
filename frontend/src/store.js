import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  productReviewCreateReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
} from "./reducers/userReducers";
import { bookRequestCreateReducer } from "./reducers/bookRequestReducer";
import { messageCreateReducer } from "./reducers/messageReducers";
import { productIssueReducer } from "./reducers/productReducers";

// Reducer to restrict cart items to one
const cartItemsRestrictionReducer = (state, action) => {
  const newState = cartReducer(state, action);
  if (newState.cartItems.length > 1) {
    newState.cartItems = [newState.cartItems[0]];
  }
  return newState;
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  usersList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartItemsRestrictionReducer, // Use the custom reducer to restrict cart items to one
  bookRequestCreate: bookRequestCreateReducer,
  messageCreate: messageCreateReducer,
  productIssue: productIssueReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // Define the initial state for the issue book feature
  books: [], // An array of books that can be issued
  users: [], // An array of users who can borrow books
  issuedBooks: [], // An array of books that have been issued to users
  error: null, // An error message in case of an issue
  cart: { cartItems: cartItemsFromStorage }, // set initial state for cart reducer
  messageCreate: { success: false },
  bookRequestCreate: { success: false },
  issueBook: { success: false },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
