import axios from 'axios'
 import {
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL,

   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
   PRODUCT_DETAILS_FAIL,

   PRODUCT_CREATE_REVIEW_REQUEST,
   PRODUCT_CREATE_REVIEW_SUCCESS,
   PRODUCT_CREATE_REVIEW_FAIL,

   PRODUCT_DELETE_REQUEST,
   PRODUCT_DELETE_FAIL,
   PRODUCT_DELETE_SUCCESS,

   PRODUCT_SAVE_REQUEST,
   PRODUCT_SAVE_SUCCESS,
   PRODUCT_SAVE_FAIL,

   PRODUCT_APPROVE_FAIL,
   PRODUCT_APPROVE_REQUEST,
   PRODUCT_APPROVE_SUCCESS,

   PRODUCT_CREATE_REQUEST,
   PRODUCT_CREATE_SUCCESS,
   PRODUCT_CREATE_FAIL,

    PRODUCT_ISSUE_REQUEST, PRODUCT_ISSUE_SUCCESS, PRODUCT_ISSUE_FAIL


 } from '../constants/productConstants'

 export const listProducts = () => async (dispatch) => {
   try {
     dispatch({ type: PRODUCT_LIST_REQUEST })

     const { data } = await axios.get('/api/products')

     dispatch({
       type: PRODUCT_LIST_SUCCESS,
       payload: data,
     })
   } catch (error) {
     dispatch({
       type: PRODUCT_LIST_FAIL,
       payload:
         error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
     })
   }
 }


 export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
} 


export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()


    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      '/api/products',
      product,
      config
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_APPROVE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/products/${id}/approve`, {}, config);

    dispatch({
      type: PRODUCT_APPROVE_SUCCESS,
      payload: data,
    });

    dispatch(listProducts());
  } catch (error) {
    dispatch({
      type: PRODUCT_APPROVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/products/${id}`, config)

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!product._id) {
      const { data } = await axios.post('/api/products', product, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        '/api/products/' + product._id,
        product,
        {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};


export const issueProduct = (productId, userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_ISSUE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.put(`/api/products/${productId}/issue`, { userId }, config);

    dispatch({
      type: PRODUCT_ISSUE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ISSUE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

