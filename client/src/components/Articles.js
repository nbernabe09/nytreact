import React, { Component } from "react";

class Articles extends Component {
  render() {
    return (
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
    );
  }
}

export default Articles;
