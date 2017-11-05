import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Search extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="term">Search Term:</label>
          <input type="text" className="form-control" id="term" aria-describedby="emailHelp" placeholder="Search..." />
        </div>
        <div className="form-group">
          <label for="range">Number of Records to Retrieve:</label>
          <select id="range" className="form-control">
            <option>1</option>
            <option selected>5</option>
            <option>10</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="ion-search"></span> Submit
        </button>
      </form>
    );
  }
}

export default Search;
