import React from "react";
import SearchBar from "./searchbar/SearchBar";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <Link to={"/"}>
        <h1 className={classes.header__title}>Movie Database</h1>
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
