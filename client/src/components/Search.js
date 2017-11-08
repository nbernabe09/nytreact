import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Results from "./Results";

class Search extends Component {
  state = {
    term: "",
    results: []
  }

  handleInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
    console.log(this.state);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getArticle(this.state.term)
       .then(res => {
        this.setState({
          results: res.data.response.docs
        });
        console.log(this.state.results);
       });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <span className="ion-compose"></span> Search Parameters
          </div>
          <div className="card-body">
            <SearchForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <span className="ion-document-text"></span> Top Articles
            <button className="btn btn-sm btn-danger clr-res">
              <span className="ion-trash-a"></span> Clear Results
            </button>
          </div>
          <Results
            results={this.state.results}
          />
        </div>
      </div>
    );
  }
}

export default Search;
