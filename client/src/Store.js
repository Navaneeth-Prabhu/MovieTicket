import { combineReducers, createStore, applyMiddleware } from "redux";
// import { userLoginReducer } from "./redux/reducers/userReducer";
import { getMoviesReducer, movieInfo } from "./redux/reducers/movieReducer";
// import {
// //   approveTheater,
// //   fetchTheater,
// //   theaterLogin,
// //   theaterScreenAdd,
// //   screenList,
// } from "./reducers/theaterReducer";
import thunk from "redux-thunk";
import { dateInfoReducer, dateInformation } from "./redux/reducers/bookingReducer";

const reducer = combineReducers({
//   userLogin: userLoginReducer,
  getMovies: getMoviesReducer,
//   theaterLogin,
//   getTheaters: fetchTheater,
//   approveTheater,
//   theaterScreenAdd,
//   screenList,
  movieInfo,
  dateData:dateInfoReducer,
  dateInformationSelected:dateInformation,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer,initialState, applyMiddleware(...middleware));

export default store;