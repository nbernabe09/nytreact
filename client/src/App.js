import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Articles from "./components/Articles";
import Saved from "./components/Saved";

const App = () => 
  <div className="container-fluid">
    <div className="jumbotron text-center">
      <h1 className="display-3">
        <span className="ion-flag"></span> New York Times Search
      </h1>
    </div>
    <Search/>
    <Articles />
    <Saved />
  </div>;

export default App;
