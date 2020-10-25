import Axios from "axios";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
} from "./actionTypes";
const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};
const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

const fetchMoviesFail = (error) => {
  return {
    type: FETCH_MOVIES_FAIL,
    payload: error,
  };
};

export const fetchMovie = (title) => {
  const url = `http://www.omdbapi.com/?apikey=5896e112&s=${title}`;
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    Axios.get(url)
      .then((response) => {
        const movies = response.data.Search;

        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMoviesFail(errorMsg));
      });
  };
};
