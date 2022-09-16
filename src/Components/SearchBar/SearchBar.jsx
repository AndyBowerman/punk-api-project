import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder, className, getSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      onChange={getSearchTerm}
    />
  );
};

export default SearchBar;
