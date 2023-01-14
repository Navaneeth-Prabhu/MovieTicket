import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
  } from "../Constants/userConstants";
  import axios from "axios";
  
  export const registration = (datas) => async (dispatch) => {
      // console.log(datas)
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      let { data } = await axios.post("http://localhost:3001/signup", datas);
      console.log(data);
      
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };