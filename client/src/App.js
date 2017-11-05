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
    <div className="card">
      <div className="card-header">
        <span className="ion-compose"></span> Search Parameters
      </div>
      <div className="card-body">
        <Search />
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <span className="ion-document-text"></span> Top Articles
        <button className="btn btn-sm btn-danger clr-res">
          <span className="ion-trash-a"></span> Clear Results
        </button>
      </div>
      <div className="card-body">
        <Articles />
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <span className="ion-archive"></span> Saved Articles
      </div>
      <div className="card-body">
        <Saved />
      </div>
    </div>
  </div>;

export default App;
