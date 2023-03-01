import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productReviewCreateReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

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
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartItemsRestrictionReducer, // Use the custom reducer to restrict cart items to one
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },

  cart: { cartItems: cartItemsFromStorage }, // set initial state for cart reducer
};

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
