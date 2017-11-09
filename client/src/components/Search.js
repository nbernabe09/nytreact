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
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getSearch(this.state.term)
       .then(res => {
        this.setState({
          results: res.data.response.docs
        });
        console.log(this.state.results);
       });
  }

  handleClear = (event) => {
    this.setState({
      results: []
    });
  }

  handleSave = (article) => {
    API.saveArticle({
      headline: article.headline.main,
      articleId: article._id,
      author: article.byline.original,
      pubDate: article.pub_date,
      url: article.web_url
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
            <button onClick={this.handleClear} className="btn btn-sm btn-danger right">
              <span className="ion-trash-a"></span> Clear Results
            </button>
          </div>
          <Results
            results={this.state.results}
            handleSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

export default Search;
