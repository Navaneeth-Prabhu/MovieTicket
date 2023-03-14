import {
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAIL,
    GET_MOVIE_INFO_MOVIEPAGE_SUCCESS,
    GET_MOVIE_INFO_MOVIEPAGE_FAIL,
    GET_THEATER_MOVIE_REQUEST,
    GET_THEATER_MOVIE_SUCCESS,
    GET_THEATER_MOVIE_FAIL,
    DELETE_MOVIE_SUCCESS,
    DELETE_MOVIE_FAIL,
  } from "../Constants/movieConstants";
  import axios from "axios";
  
  export const getMovies = () => async (dispatch) => {
    try {
      dispatch({ type: GET_MOVIE_REQUEST });
      let { data } = await axios.get("http://localhost:3001/movieInfo");
    
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
  

 export const moviedetails = (id) => async (dispatch) => {
    try {
   

      let { data } = await axios.get(`http://localhost:3001/moviedetails/${id}`);
   
      dispatch({type: GET_MOVIE_INFO_MOVIEPAGE_SUCCESS, payload: data});
 
      
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
 export const deleteMovie = (id) => async (dispatch) => {
    try {
   
      console.log("////////fds/////////",id)
      let { data } = await axios.post(`http://localhost:3001/admin/deleteMovie/${id}`);
   
      dispatch({type: DELETE_MOVIE_SUCCESS, payload: data});
      // console.log(data);
      
    } catch (error) {
       dispatch({
        type: DELETE_MOVIE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getTheaterMovies =() =>async(dispatch)=>{
    try {
      // dispatch({type:GET_THEATER_MOVIE_REQUEST})
      let { data } = await axios.get('http://localhost:3001/GetTheaterMovies');
  
      dispatch({type:GET_THEATER_MOVIE_SUCCESS,payload:data})
    } catch (error) {
      dispatch({
        type:GET_THEATER_MOVIE_FAIL,
        payload:
          error.response && error.response.data.message
          ? error.response.data.message
          :error.message,
      })
    }
  }
 