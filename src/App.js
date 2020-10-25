import React from "react";

import "./App.scss";
import MovieList from "./components/movieList/MovieList";

import Header from "./components/header/Header";
// import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/movieList/movieDetails/MovieDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
         {/* <Footer/> */}
      </div>{" "}
    
    </BrowserRouter>
  );
}

export default App;
