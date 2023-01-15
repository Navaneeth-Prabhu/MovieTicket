import { combineReducers, createStore, applyMiddleware } from "redux";
import { userLoginReducer } from "./redux/reducers/userReducer";
import { getMoviesReducer, movieInfo,movieInfoById ,theaterMovies } from "./redux/reducers/movieReducer";
import thunk from "redux-thunk";
import { dateInfoReducer, dateInformation ,seatInfomation,selectDateInfo ,paymentSucess} from "./redux/reducers/bookingReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  getMovies: getMoviesReducer,
  movieInfo,
  dateData :dateInfoReducer ,
  dateInformationSelected:dateInformation,
  date:selectDateInfo,
  seats:seatInfomation,
  movie:movieInfoById,
  theaterMovies,
  payment:paymentSucess

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