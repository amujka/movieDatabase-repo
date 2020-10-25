import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
} from "../actions/actionTypes";
const initState = {
  loading: false,
  error: "",
  movies: [],
};

const fetchAllMoviesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: "",
      };

    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        movies: [],
      };
    default:
      return state;
  }
};
export default fetchAllMoviesReducer;
