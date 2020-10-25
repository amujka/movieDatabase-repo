import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../../redux/actions/fetchAllMoviesAction";
import classes from "./SearchBar.module.scss";
import { withRouter } from "react-router-dom";
const SearchBar = ({ searchTitle, history }) => {
  //console.log(history);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchTitle(title);
    setTitle("");
    history.push("/");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="Movie title..."
            id="title"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchTitle: (title) => {
      dispatch(fetchMovie(title));
    },
  };
};
export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
