import {
  FETCH_SINGLE_MOVIE_FAIL,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_SINGLE_MOVIE_SUCCESS,
} from "./actionTypes";
import Axios from "axios";
const fetchSingleMovieRequest = () => {
  return {
    type: FETCH_SINGLE_MOVIE_REQUEST,
  };
};

const fetchSingleMovieSuccess = (movie) => {
  return {
    type: FETCH_SINGLE_MOVIE_SUCCESS,
    payload: movie,
  };
};

const fetchSingleMovieFail = (error) => {
  return {
    type: FETCH_SINGLE_MOVIE_FAIL,
    payload: error,
  };
};

export const fetchSingleMovie = (movieId) => {
  const url = `http://www.omdbapi.com/?i=${movieId}&apikey=5896e112&plot=full`;
  return (dispatch) => {
    dispatch(fetchSingleMovieRequest);
    Axios.get(url)
      .then((response) => {
        //console.log(response.data);
        const movie = response.data;
        dispatch(fetchSingleMovieSuccess(movie));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.message;
        dispatch(fetchSingleMovieFail(errorMsg));
      });
  };
};
