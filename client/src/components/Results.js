import React from "react";

const Results = (props) => {
  return (
    <div>
      {
        props.results.map(article => {
          return (
            <div key={article._id} className="card-body">
              <h4 className="card-title">
                {article.headline.main}
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">
                {article.byline.original}
              </h6>
              <p className="card-text">
                Published on: {article.pub_date}
              </p>
              <a href={article.web_url} target="_blank" className="btn btn-info">
                Go to article
              </a>
              <button
                className="btn btn-primary right"
                onClick={() => props.handleSave(article)}
              >
                Save
              </button>
            </div>
          )
        }) || "no results"
      }
    </div>
  );
}

export default Results;