import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import SearchForm from "./SearchForm";

class Search extends Component {
  state = {
    term: ""
  }

  handleInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="ion-compose"></span> Search Parameters
        </div>
        <div className="card-body">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default Search;
