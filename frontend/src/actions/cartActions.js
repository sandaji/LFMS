import axios from "axios";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        _id: data._id,
        title: data.title,
        coverImage: data.coverImage,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const reserveProduct =
  (productId, borrowDays) => async (dispatch, getState) => {
    try {
      // Make API call to reserve the product
      const { product } = await axios.post("/api/reservations", {
        productId,
        borrowDays,
      });

      // Dispatch action to update cart item with reservation details
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: product._id,
          title: product.title,
          author: product.author,
          image: product.CoverImage,
          countInStock: product.countInStock,
          qty: borrowDays,
          returnDate: product.returnDate,
          penalty: product.penalty,
          isReserved: true,
        },
      });

      // Update local storage
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

