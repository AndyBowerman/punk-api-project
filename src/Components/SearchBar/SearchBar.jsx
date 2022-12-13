import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder, getSearchTerm, resetSearchCriteria }) => {
  return (
    <form className="search-bar" action="submit" onSubmit={getSearchTerm}>
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar__input"
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
      <button
        className="search-bar__button search-bar__button--red"
        onClick={resetSearchCriteria}
      >
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
