import classes from "./MovieDetails.module.scss";
import React from "react";
import { connect } from "react-redux";
import {motion} from 'framer-motion'
const MovieDetails = ({ movieDetails }) => {
  console.log(movieDetails);
  return (
    <div className={classes.movieDetails}>
      <motion.img className={classes.movieDetails__poster} src={movieDetails.Poster} alt="" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}/>
      <motion.div className={classes.movieDetails__info}  initial={{x:'100vh',opacity:0}} animate={{x:0,opacity:1}} transition={{type:"tween", duration:1}}>     
        <h3 className={classes.movieDetails__genre}>{movieDetails.Genre}</h3>
        <p>{movieDetails.Production}</p>

        <div className={classes.movieDetails__infoGrid} >
          <div>
            <p>Released: </p>
            <span>{movieDetails.Released}</span>
          </div>
          <div>
            <p>Runtime: </p>
            <span>{movieDetails.Runtime}</span>
          </div>
          <div>
            <p>imdbRating: </p>
            <span>{movieDetails.imdbRating}/10</span>
          </div>
          <div>
            <p>Language: </p>
            <span>{movieDetails.Language}</span>
          </div>
        </div>
        <div className={classes.movieDetails__actors}>
          <p>Cast:</p>
          <span> {movieDetails.Actors}</span>
        </div>
        <motion.div className={classes.movieDetails__plot}>
          <p> {movieDetails.Plot}</p>
        </motion.div>
       </motion.div>
     
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    movieDetails: state.fetchSingleMovieReducer.movieDetails,
  };
};
export default connect(mapStateToProps)(MovieDetails);
