import React from "react";
import {motion} from 'framer-motion'
import classes from "./MovieItem.module.scss";
import { connect } from "react-redux";
import { fetchSingleMovie } from "../../../redux/actions/fetchSingleMovieAction";
import { Link } from "react-router-dom";
const MovieItem = ({ movie, fetchSingleMovie }) => {
  //const [movieId, setMovieId] = useState("");
  //console.log(movie);
  const handleClick = (id) => {
    //console.log(id);
    fetchSingleMovie(id);
  };
  return (
    <Link to={"/movie/" + movie.imdbID}>
      <motion.li initial={{opacity:0}} animate={{opacity:1}} 
        className={classes.movieItem}
        onClick={() => {
          handleClick(movie.imdbID);
        }}
      >
        <img className={classes.movieItem__poster} src={movie.Poster} alt="" />
        <div className={classes.movieItem__info}>
          <h4 className={classes.movieItem__title}>{movie.Title}</h4>
          <p>{movie.Year}</p>
        </div>
      </motion.li>
    </Link>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleMovie: (movieId) => {
      dispatch(fetchSingleMovie(movieId));
    },
  };
};
export default connect(null, mapDispatchToProps)(MovieItem);
