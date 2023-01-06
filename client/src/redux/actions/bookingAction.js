import {
    GET_DATE_DETAILS_FAIL,
    GET_DATE_DETAILS_REQUEST,
    GET_DATE_DETAILS_SUCCESS
  } from "../Constants/bookingConstants";
  import axios from "axios";
  
  export const handleSelectDate = (date, day,id) => async(dispatch) => {
    try {
      dispatch({ type: GET_DATE_DETAILS_REQUEST });
      console.log(date, day);
      const {data} = await axios.get(`http://localhost:3001/theater/getScreenInfo/${date}/${day}/${id}`);
      console.log("date",data);
      dispatch({ type: GET_DATE_DETAILS_SUCCESS ,payload:data});
    } catch (error) {
      dispatch({
        type: GET_DATE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };