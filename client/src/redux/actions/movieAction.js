import {
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAIL,
    GET_MOVIE_INFO_MOVIEPAGE_SUCCESS,
    GET_MOVIE_INFO_MOVIEPAGE_FAIL
  } from "../Constants/movieConstants.js";
  import axios from "axios";
  
  export const getMovies = () => async (dispatch) => {
    try {
      dispatch({ type: GET_MOVIE_REQUEST });
      let { data } = await axios.get("http://localhost:3001/movieInfo");
      // console.log(data);
      dispatch({ type: GET_MOVIE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const movieInfo = (movie) => async (dispatch) => {
    try {
      dispatch({ type: GET_MOVIE_INFO_MOVIEPAGE_SUCCESS, payload: movie });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_INFO_MOVIEPAGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };