// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { userLoginReducer } from "./reducers/userReducer";
// import { getMoviesReducer, movieInfo } from "./reducers/movieReducer";
// import {
//   approveTheater,
//   fetchTheater,
//   theaterLogin,
//   theaterScreenAdd,
//   screenList,
// } from "./reducers/theaterReducer";
// import thunk from "redux-thunk";

// const reducer = combineReducers({
//   userLogin: userLoginReducer,
//   getMovies: getMoviesReducer,
//   theaterLogin,
//   getTheaters: fetchTheater,
//   approveTheater,
//   theaterScreenAdd,
//   screenList,
//   movieInfo,
// });

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

//   const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = createStore(reducer,initialState, applyMiddleware(...middleware));

// export default store;