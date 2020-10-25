import {
  FETCH_SINGLE_MOVIE_FAIL,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_REQUEST,
} from "../actions/actionTypes";
const initialState = {
  loading: false,
  movieDetails: {},
  error: "",
};
const fetchSingleMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_MOVIE_REQUEST:
      return { ...state, loading: true };
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_SINGLE_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        movieDetails: {},
      };
    default:
      return state;
  }
};
export default fetchSingleMovieReducer;
