import React, { Component } from "react";

class Saved extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="ion-archive"></span> Saved Articles
        </div>
        <div className="card-body">
          <Saved />
        </div>
      </div>
    );
  }
}

export default Saved;
