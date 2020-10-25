import React from "react";

import { connect } from "react-redux";
import MovieItem from "./movieItem/MovieItem";
import classes from "./MovieList.module.scss";
const MovieList = ({ movies, error }) => {
  console.log("error:" + error, "movies: ", movies);
if (movies !== undefined && movies.length<1) {
    return <h3 className={classes.message}>Please enter movie title</h3>;
  }
   else if (movies !== undefined && error === "") {
    return (
      <div>
        <ul className={classes.movieList}>
          {movies.map((movie) => {
            if (movie.Poster !== "N/A") {
              return <MovieItem movie={movie} key={movie.imdbID} />;
            }
          })}{" "}
        </ul>
      </div>
    );
  }
   else if (movies === undefined) {
    return (
      <h3 className={classes.errorMsg}>No movie found. Enter correct title</h3>
    );
  } else if (error !== "") {
    return <h3 className={classes.errorMsg}>{error}</h3>;
  }
};
const mapStateToProps = (state) => {
  return {
    movies: state.fetchAllMoviesReducer.movies,
    error: state.fetchAllMoviesReducer.error,
  };
};

export default connect(mapStateToProps)(MovieList);
