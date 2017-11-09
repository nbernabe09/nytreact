import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Results from "./Results";

class Saved extends Component {
  state = {
    saved: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  componentDidUpdate() {
    this.loadArticles();    
  }

  loadArticles = () => {
    API.getSaved()
       .then(res =>
        this.setState({
          saved: res.data
        })
       );
  }

  deleteArticle = (id) => {
    API.deleteArticle(id)
       .then(res => this.loadArticles())
       .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="ion-archive"></span> Saved Articles
        </div>
        {
          this.state.saved.map(article => {
            return (
              <div key={article.articleId} className="card-body">
                <h4 className="card-title">
                  {article.headline}
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  {article.author}
                </h6>
                <p className="card-text">
                  Published on: {article.pubDate}
                </p>
                <a href={article.url} target="_blank" className="btn btn-info">
                  Go to article
                </a>
                <button
                  className="btn btn-danger right"
                  onClick={() => this.deleteArticle(article._id)}
                >
                  <span className="ion-trash-a"></span> Delete
                </button>
              </div>
            )
          }) || "no results"
        }
      </div>
    );
  }
}

export default Saved;
