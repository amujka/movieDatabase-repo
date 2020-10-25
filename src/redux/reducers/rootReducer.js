import { combineReducers } from "redux";
import fetchSingleMovieReducer from "./fetchSingleMovieReducer";
import fetchAllMoviesReducer from "./fetchAllMoviesReducer";
const rootReducer = combineReducers({
  fetchSingleMovieReducer,
  fetchAllMoviesReducer,
});
export default rootReducer;
