import axios from "axios";
import {
  MESSAGE_CREATE_REQUEST,
  MESSAGE_CREATE_SUCCESS,
  MESSAGE_CREATE_FAIL,
} from "../constants/messageConstant";

export const createMessage = (message) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/messages",
      message, config);

    dispatch({ type: MESSAGE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MESSAGE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
