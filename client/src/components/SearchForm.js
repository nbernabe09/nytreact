import React from "react";

const SearchForm = props => 
  <form>
    <div className="form-group">
      <label htmlFor="term">Search Term:</label>
      <input 
        value={props.term}
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        id="term"
        placeholder="Search..."
      />
    </div>
    <button
      type="submit"
      onClick={props.handleFormSubmit}
      className="btn btn-primary"
    >
      <span className="ion-search"></span> Submit
    </button>
  </form>;

export default SearchForm;
